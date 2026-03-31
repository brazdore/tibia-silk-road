// __tests__/lib/i18n.test.tsx
import {describe, it, expect, vi, beforeEach} from 'vitest';
import {renderHook, act} from '@testing-library/react';
import {LocaleProvider, useLocale, useTranslation} from '@/lib/i18n';

// Mock dynamic imports
vi.mock('@/messages/en.json', () => ({
    default: { test: 'English test' } as any,
}));
vi.mock('@/messages/pt-BR.json', () => ({
    default: { test: 'Teste português' } as any,
}));
vi.mock('@/messages/es.json', () => ({
    default: { test: 'Prueba español' } as any,
}));
vi.mock('@/messages/pl.json', () => ({
    default: { test: 'Test polski' } as any,
}));

// Mock localStorage
const mockLocalStorageGet = vi.fn();
const mockLocalStorageSet = vi.fn();
Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: mockLocalStorageGet,
        setItem: mockLocalStorageSet,
    },
    writable: true,
});

describe('i18n', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockLocalStorageGet.mockImplementation((key) => {
            if (key === 'tsr-locale') return null;
            return null;
        });
        // Mock navigator.language
        Object.defineProperty(navigator, 'language', {
            value: 'en-US',
            configurable: true,
        });
    });

    // ─── LocaleProvider ─────────────────────────────────────────────────────────

    it('initializes with "en" when no localStorage and browser is en-US', async () => {
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result} = renderHook(() => useLocale(), {wrapper});

        await vi.waitFor(() => {
            expect(result.current.locale).toBe('en');
        });
    });

    it('detects pt-BR from browser language pt-BR', async () => {
        Object.defineProperty(navigator, 'language', {value: 'pt-BR'});
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result} = renderHook(() => useLocale(), {wrapper});

        await vi.waitFor(() => {
            expect(result.current.locale).toBe('pt-BR');
        });
    });

    it('detects pl from browser language pl-PL', async () => {
        Object.defineProperty(navigator, 'language', {value: 'pl-PL'});
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result} = renderHook(() => useLocale(), {wrapper});

        await vi.waitFor(() => {
            expect(result.current.locale).toBe('pl');
        });
    });

    it('uses saved locale from localStorage', async () => {
        mockLocalStorageGet.mockReturnValue('es');
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result} = renderHook(() => useLocale(), {wrapper});

        await vi.waitFor(() => {
            expect(result.current.locale).toBe('es');
        });
    });

    it('ignores invalid localStorage value and falls back to en', async () => {
        mockLocalStorageGet.mockReturnValue('invalid' as any);
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result} = renderHook(() => useLocale(), {wrapper});

        await vi.waitFor(() => {
            expect(result.current.locale).toBe('en');
        });
    });

    it('setLocale changes locale and persists to localStorage', async () => {
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result} = renderHook(() => useLocale(), {wrapper});

        await vi.waitFor(() => result.current.locale === 'en');
        act(() => {
            result.current.setLocale('pt-BR');
        });

        await vi.waitFor(() => {
            expect(result.current.locale).toBe('pt-BR');
        });
        expect(mockLocalStorageSet).toHaveBeenCalledWith('tsr-locale', 'pt-BR');
    });

    // ─── useTranslation ────────────────────────────────────────────────────────

    it('useTranslation returns correct translation for current locale', async () => {
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result} = renderHook(() => useTranslation(), {wrapper});

        await vi.waitFor(() => {
            expect(result.current('test')).toBe('English test');
        });
    });

    it('useTranslation changes with setLocale', async () => {
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result: tResult} = renderHook(() => useTranslation(), {wrapper});
        const {result: localeResult} = renderHook(() => useLocale(), {wrapper});

        await vi.waitFor(() => tResult.current('test') === 'English test');
        act(() => {
            localeResult.current.setLocale('pt-BR');
        });

        await vi.waitFor(() => {
            expect(tResult.current('test')).toBe('Teste português');
        });
    });

    it('useTranslation falls back to key when missing', async () => {
        const wrapper = ({children}: any) => <LocaleProvider>{children}</LocaleProvider>;
        const {result} = renderHook(() => useTranslation(), {wrapper});

        await vi.waitFor(() => {
            expect(result.current('missingKey' as any)).toBe('missingKey');
        });
    });

    // ─── useLocale context error ───────────────────────────────────────────────

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