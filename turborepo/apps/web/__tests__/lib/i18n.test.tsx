// __tests__/lib/i18n.test.tsx
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {act, renderHook, waitFor} from '@testing-library/react';
import type {ReactNode} from 'react';
import {LocaleProvider, useLocale, useTranslation} from '@/lib/i18n';

// Mock dynamic imports
vi.mock('@/messages/en.json', () => ({
    default: {result: 'Result'},
}));
vi.mock('@/messages/pt-BR.json', () => ({
    default: {result: 'Resultado'},
}));
vi.mock('@/messages/es.json', () => ({
    default: {result: 'Resultado ES'},
}));
vi.mock('@/messages/pl.json', () => ({
    default: {result: 'Wynik'},
}));

// Mock localStorage
const mockLocalStorageGet = vi.fn<(key: string) => string | null>();
const mockLocalStorageSet = vi.fn<(key: string, value: string) => void>();

Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: mockLocalStorageGet,
        setItem: mockLocalStorageSet,
    },
    writable: true,
});

function wrapper({children}: { children: ReactNode }) {
    return <LocaleProvider>{children}</LocaleProvider>;
}

describe('i18n', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        mockLocalStorageGet.mockImplementation((key: string) => {
            if (key === 'tsr-locale') return null;
            return null;
        });

        Object.defineProperty(navigator, 'language', {
            value: 'en-US',
            configurable: true,
        });
    });

    it('initializes with "en" when no localStorage and browser is en-US', async () => {
        const {result} = renderHook(() => useLocale(), {wrapper});

        await waitFor(() => {
            expect(result.current.locale).toBe('en');
        });
    });

    it('detects pt-BR from browser language pt-BR', async () => {
        Object.defineProperty(navigator, 'language', {
            value: 'pt-BR',
            configurable: true,
        });

        const {result} = renderHook(() => useLocale(), {wrapper});

        await waitFor(() => {
            expect(result.current.locale).toBe('pt-BR');
        });
    });

    it('detects pl from browser language pl-PL', async () => {
        Object.defineProperty(navigator, 'language', {
            value: 'pl-PL',
            configurable: true,
        });

        const {result} = renderHook(() => useLocale(), {wrapper});

        await waitFor(() => {
            expect(result.current.locale).toBe('pl');
        });
    });

    it('uses saved locale from localStorage', async () => {
        mockLocalStorageGet.mockReturnValue('es');

        const {result} = renderHook(() => useLocale(), {wrapper});

        await waitFor(() => {
            expect(result.current.locale).toBe('es');
        });
    });

    it('ignores invalid localStorage value and falls back to en', async () => {
        mockLocalStorageGet.mockReturnValue('invalid');

        const {result} = renderHook(() => useLocale(), {wrapper});

        await waitFor(() => {
            expect(result.current.locale).toBe('en');
        });
    });

    it('setLocale changes locale and persists to localStorage', async () => {
        const {result} = renderHook(() => useLocale(), {wrapper});

        await waitFor(() => {
            expect(result.current.locale).toBe('en');
        });

        act(() => {
            result.current.setLocale('pt-BR');
        });

        await waitFor(() => {
            expect(result.current.locale).toBe('pt-BR');
        });

        expect(mockLocalStorageSet).toHaveBeenCalledWith('tsr-locale', 'pt-BR');
    });

    it('useTranslation returns correct translation for current locale', async () => {
        const {result} = renderHook(() => useTranslation(), {wrapper});

        await waitFor(() => {
            expect(result.current('result')).toBe('Result');
        });
    });

    it('useTranslation changes with setLocale', async () => {
        const {result} = renderHook(
            () => ({
                t: useTranslation(),
                locale: useLocale(),
            }),
            {wrapper}
        );

        await waitFor(() => {
            expect(result.current.t('result')).toBe('Result');
        });

        act(() => {
            result.current.locale.setLocale('pt-BR');
        });

        await waitFor(() => {
            expect(result.current.t('result')).toBe('Resultado');
        });
    });

    it('useTranslation falls back to key when missing', async () => {
        const {result} = renderHook(() => useTranslation(), {wrapper});

        await waitFor(() => {
            expect(result.current('siteTagline')).toBe('siteTagline');
        });
    });

    it('useLocale throws when outside LocaleProvider', () => {
        expect(() => renderHook(() => useLocale())).toThrow(
            'useLocale must be used inside <LocaleProvider>'
        );
    });

    it('useTranslation throws when outside LocaleProvider', () => {
        expect(() => renderHook(() => useTranslation())).toThrow(
            'useTranslation must be used inside <LocaleProvider>'
        );
    });
});