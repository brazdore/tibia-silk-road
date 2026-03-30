'use client';

import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'tsr-theme';

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
    const [theme, setTheme]   = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

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

    function handleToggle(event: React.MouseEvent): void {
        const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        const root = document.documentElement;
        const rect = event.currentTarget.getBoundingClientRect();

        root.style.setProperty('--toggle-x', `${rect.left + rect.width / 2}px`);
        root.style.setProperty('--toggle-y', `${rect.top + rect.height / 2}px`);
        root.classList.add('theme-transition');

        const switchTheme = () => { flushSync(() => { setTheme(nextTheme); }); };

        if (!document.startViewTransition) {
            switchTheme();
            window.setTimeout(() => root.classList.remove('theme-transition'), 700);
            return;
        }

        document.startViewTransition(switchTheme).finished.finally(() => {
            root.classList.remove('theme-transition');
        });
    }

    const isDark = theme === 'dark';

    return (
        <button
            onClick={handleToggle}
            aria-label="Toggle theme"
            suppressHydrationWarning
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid rgb(var(--border))',
                background: 'rgb(var(--panel-strong))',
                color: 'rgb(var(--text))',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-body)',
                transition: 'border-color 0.2s ease',
            }}
        >
      <span style={{ fontSize: '1rem' }} suppressHydrationWarning>
        {mounted ? (isDark ? '🌙' : '☀️') : '🌙'}
      </span>
            <span suppressHydrationWarning>
        {mounted ? (isDark ? 'Night' : 'Day') : 'Night'}
      </span>
        </button>
    );
}