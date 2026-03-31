import {act, fireEvent, render, screen} from '@testing-library/react';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import RashidBanner from '@/components/RashidBanner';
import {getRashidLocation, isGermanySummerTime} from '@/lib/rashid';

vi.mock('@/lib/i18n', () => ({
    useTranslation: () => (key: string) => key,
}));

vi.mock('@/lib/rashid', () => ({
    getRashidLocation: vi.fn(),
    isGermanySummerTime: vi.fn(),
}));

async function renderAndFlush() {
    render(<RashidBanner/>);
    await act(async () => {
        vi.runOnlyPendingTimers();
    });
}

describe('RashidBanner', () => {
    beforeEach(() => {
        vi.useFakeTimers();

        vi.mocked(isGermanySummerTime).mockReturnValue(false);
        vi.mocked(getRashidLocation).mockReturnValue({
            city: 'Carlin',
            location: 'Depot',
            mapUrl: 'https://example.com/map',
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
        vi.useRealTimers();
        vi.unstubAllEnvs();
    });

    it('renders Rashid info', async () => {
        await renderAndFlush();

        expect(screen.getByText('Carlin')).toBeInTheDocument();
        expect(screen.getByText('Depot')).toBeInTheDocument();
        expect(screen.getByText('rashidIn')).toBeInTheDocument();
    });

    it('renders countdown', async () => {
        await renderAndFlush();

        const countdown = screen.getByText(/\d{2}:\d{2}:\d{2}/);
        expect(countdown).toBeInTheDocument();
    });

    it('updates every second', async () => {
        render(<RashidBanner/>);

        await act(async () => {
            vi.advanceTimersByTime(1000);
        });

        expect(getRashidLocation).toHaveBeenCalledTimes(2);
    });

    it('opens map modal when clicking button', async () => {
        await renderAndFlush();

        const button = screen.getByText('viewOnMap');
        fireEvent.click(button);

        expect(screen.getByTitle(/Map — Carlin/)).toBeInTheDocument();
    });

    it('closes modal when clicking overlay', async () => {
        await renderAndFlush();

        fireEvent.click(screen.getByText('viewOnMap'));

        const iframe = screen.getByTitle(/Map — Carlin/);
        expect(iframe).toBeInTheDocument();

        // overlay = two levels up from iframe
        const overlay = iframe.parentElement?.parentElement;
        fireEvent.click(overlay!);

        expect(screen.queryByTitle(/Map — Carlin/)).not.toBeInTheDocument();
    });

    it('does not close modal when clicking inside modal', async () => {
        await renderAndFlush();

        fireEvent.click(screen.getByText('viewOnMap'));

        const iframe = screen.getByTitle(/Map — Carlin/);

        fireEvent.click(iframe);

        expect(screen.getByTitle(/Map — Carlin/)).toBeInTheDocument();
    });

    it('renders dev dropdown in development mode', async () => {
        vi.stubEnv('NODE_ENV', 'development');

        await renderAndFlush();

        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('changes mock date when selecting dev option', async () => {
        vi.stubEnv('NODE_ENV', 'development');

        await renderAndFlush();

        const select = screen.getByRole('combobox');

        fireEvent.change(select, {
            target: {value: '2026-03-29T12:00:00Z'},
        });

        expect(getRashidLocation).toHaveBeenCalled();
    });
});