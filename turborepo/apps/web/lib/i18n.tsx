'use client';

import {
    createContext, useContext, useEffect, useState,
    type ReactNode,
} from 'react';
import type en from '@/messages/en.json';

// Types

export type Locale = 'en' | 'pt-BR' | 'es' | 'pl';

export type MessageKey = keyof typeof en;

// Context

interface LocaleContextValue {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (key: MessageKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

// Loader

const STORAGE_KEY = 'tsr-locale';

async function loadMessages(locale: Locale): Promise<typeof en> {
    switch (locale) {
        case 'pt-BR': return (await import('@/messages/pt-BR.json')).default as typeof en;
        case 'es':    return (await import('@/messages/es.json')).default as typeof en;
        case 'pl':    return (await import('@/messages/pl.json')).default as typeof en;
        default:      return (await import('@/messages/en.json')).default;
    }
}

function getInitialLocale(): Locale {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && ['en', 'pt-BR', 'es', 'pl'].includes(saved)) return saved;
    const browser = navigator.language;
    if (browser.startsWith('pt')) return 'pt-BR';
    if (browser.startsWith('pl')) return 'pl';
    if (browser.startsWith('es')) return 'es';
    return 'en';
}

// Provider

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState]     = useState<Locale>('en');
    const [messages, setMessages]      = useState<typeof en | null>(null);

    // Hydrate from localStorage + browser language on mount
    useEffect(() => {
        const initial = getInitialLocale();
        setLocaleState(initial);
        loadMessages(initial).then(setMessages);
    }, []);

    function setLocale(next: Locale) {
        setLocaleState(next);
        window.localStorage.setItem(STORAGE_KEY, next);
        loadMessages(next).then(setMessages);
    }

    function t(key: MessageKey): string {
        return messages?.[key] ?? key;
    }

    return (
        <LocaleContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LocaleContext.Provider>
    );
}

// Hooks

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>');
    return { locale: ctx.locale, setLocale: ctx.setLocale };
}

export function useTranslation() {
    const ctx = useContext(LocaleContext);
    if (!ctx) throw new Error('useTranslation must be used inside <LocaleProvider>');
    return ctx.t;
}