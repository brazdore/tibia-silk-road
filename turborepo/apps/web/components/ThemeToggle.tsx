'use client';

import {useEffect, useRef, useState} from 'react';
import {flushSync} from 'react-dom';
import {SiGithub} from 'react-icons/si';
import type {FlagComponent} from 'country-flag-icons/react/3x2';
import {BR, ES, PL, US} from 'country-flag-icons/react/3x2';
import {useLocale, useTranslation} from '@/lib/i18n';

type Theme = 'light' | 'dark';
type Locale = 'pt-BR' | 'en' | 'pl' | 'es';

const STORAGE_KEY = 'tsr-theme';

const LOCALES: { code: Locale; Flag: FlagComponent; label: string }[] = [
    {code: 'pt-BR', Flag: BR, label: 'Português (BR)'},
    {code: 'en', Flag: US, label: 'English'},
    {code: 'pl', Flag: PL, label: 'Polski'},
    {code: 'es', Flag: ES, label: 'Español'},
];

function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // i18n
    const {locale, setLocale} = useLocale();
    const t = useTranslation();

    useEffect(() => {
        const initial = getInitialTheme();
        setTheme(initial);
        applyTheme(initial);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        applyTheme(theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme, mounted]);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function handleToggle(event: React.MouseEvent): void {
        const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        const root = document.documentElement;
        const rect = event.currentTarget.getBoundingClientRect();

        root.style.setProperty('--toggle-x', `${rect.left + rect.width / 2}px`);
        root.style.setProperty('--toggle-y', `${rect.top + rect.height / 2}px`);
        root.classList.add('theme-transition');

        const switchTheme = () => {
            flushSync(() => {
                setTheme(nextTheme);
            });
        };

        if (!document.startViewTransition) {
            switchTheme();
            window.setTimeout(() => root.classList.remove('theme-transition'), 700);
            return;
        }

        document.startViewTransition(switchTheme).finished.finally(() => {
            root.classList.remove('theme-transition');
        });
    }

    const activeLocale = LOCALES.find(l => l.code === locale)!;
    const isDark = theme === 'dark';

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>

            {/* GitHub link */}
            <a
                href="https://github.com/brazdore/tibia-silk-road/"
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 32, height: 32, borderRadius: '50%',
                    color: 'rgb(var(--text))',
                    background: 'rgb(var(--panel))',
                    border: '1px solid rgb(var(--border))',
                    transition: 'opacity 0.15s ease',
                    textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
                <SiGithub size={17}/>
            </a>

            {/* Language dropdown */}
            <div ref={dropdownRef} style={{position: 'relative'}}>
                <button
                    onClick={() => setDropdownOpen(o => !o)}
                    title={activeLocale?.label}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.35rem',
                        padding: '0.2rem 0.5rem 0.2rem 0.3rem',
                        borderRadius: '2rem',
                        border: '1px solid rgb(var(--border))',
                        background: 'rgb(var(--panel))',
                        color: 'rgb(var(--text))',
                        cursor: 'pointer',
                        transition: 'border-color 0.15s ease',
                    }}
                >
                    {activeLocale && <activeLocale.Flag style={{width: 20, borderRadius: '2px'}}/>}
                    {dropdownOpen ? '▲' : '▼'}
                </button>

                {dropdownOpen && (
                    <div style={{
                        position: 'absolute', top: 'calc(100% + 0.4rem)', right: 0, zIndex: 50,
                        background: 'rgb(var(--panel-strong))',
                        border: '1px solid rgb(var(--border))',
                        borderRadius: '0.6rem',
                        padding: '0.3rem',
                        minWidth: '160px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                    }}>
                        {LOCALES.map(({code, Flag, label}) => (
                            <button
                                key={code}
                                onClick={() => {
                                    setLocale(code);
                                    setDropdownOpen(false);
                                }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                                    padding: '0.4rem 0.6rem',
                                    borderRadius: '0.4rem',
                                    border: 'none',
                                    background: locale === code ? 'rgba(var(--accent), 0.12)' : 'transparent',
                                    color: locale === code ? 'rgb(var(--accent))' : 'rgb(var(--text))',
                                    cursor: 'pointer', fontSize: '0.85rem',
                                    fontWeight: locale === code ? 600 : 400,
                                    width: '100%', textAlign: 'left',
                                    transition: 'background 0.12s ease',
                                }}
                                onMouseEnter={e => {
                                    if (locale !== code)
                                        (e.currentTarget as HTMLButtonElement).style.background = 'rgb(var(--panel-strong))';
                                }}
                                onMouseLeave={e => {
                                    if (locale !== code)
                                        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                                }}
                            >
                                <Flag style={{width: 20, borderRadius: '2px', flexShrink: 0}}/>
                                {label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Theme toggle */}
            <button
                onClick={handleToggle}
                style={{
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    padding: '0.2rem 0.75rem',
                    borderRadius: '2rem',
                    border: '1px solid rgb(var(--border))',
                    background: 'rgb(var(--panel))',
                    color: 'rgb(var(--text))',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    transition: 'border-color 0.15s ease',
                    fontFamily: 'var(--font-body)',
                }}
            >
                {mounted ? (isDark ? '🌙' : '☀️') : '🌙'}
                {mounted ? (isDark ? t('night') : t('day')) : t('night')}
            </button>
        </div>
    );
}