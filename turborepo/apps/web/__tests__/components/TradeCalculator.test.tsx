import {fireEvent, render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import TradeCalculator from '@/components/TradeCalculator';
import type {FlatOffer} from '@/lib/types';
import {calcCapacity, calcProfit} from '@/lib/calc';

vi.mock('@/lib/i18n', () => ({
    useTranslation: () => (key: string) => key,
}));

vi.mock('@/lib/calc', () => ({
    calcProfit: vi.fn(),
    calcCapacity: vi.fn(),
    formatGp: (v: number) => `${v} gp`,
    formatWeight: (v: number) => `${v} oz`,
}));

const flatOffers: FlatOffer[] = [
    {
        offerId: 1,
        itemId: 101,
        name: 'Golden Armor',
        weight: 50,
        npcPrice: 1000,
        npcId: 10,
        npcName: 'Rashid',
        npcCity: 'Carlin',
        npcIconUrl: null,
        iconUrl: null,
    },
];

function selectGoldenArmor() {
    fireEvent.change(screen.getByPlaceholderText('searchPlaceholder'), {
        target: {value: 'gold'},
    });

    fireEvent.click(screen.getByText('Golden Armor'));
}

function fillMarketPrice(value: number) {
    fireEvent.change(screen.getByLabelText('marketBuyPrice'), {
        target: {value: String(value)},
    });
}

describe('TradeCalculator', () => {
    beforeEach(() => {
        vi.clearAllMocks();

        vi.mocked(calcProfit).mockReturnValue({
            totalOffer: 2000,
            marketFee: 100,
            totalCost: 2100,
            npcRevenue: 3000,
            netProfit: 900,
            breakEven: 1050,
        });

        vi.mocked(calcCapacity).mockReturnValue(1000);
    });

    it('renders search input', () => {
        render(<TradeCalculator flatOffers={flatOffers}/>);

        expect(screen.getByPlaceholderText('searchPlaceholder')).toBeInTheDocument();
    });

    it('filters and selects an item', () => {
        render(<TradeCalculator flatOffers={flatOffers}/>);

        fireEvent.change(screen.getByPlaceholderText('searchPlaceholder'), {
            target: {value: 'gold'},
        });

        expect(screen.getByText('Golden Armor')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Golden Armor'));

        expect(screen.getByText((content) => content.includes('sellsFor'))).toBeInTheDocument();
        expect(screen.getByText((content) => content.includes('weight'))).toBeInTheDocument();
        expect(screen.getAllByText('Golden Armor').length).toBeGreaterThan(0);
    });

    it('calculates result when item and market price are filled', () => {
        render(<TradeCalculator flatOffers={flatOffers}/>);

        selectGoldenArmor();

        fireEvent.change(screen.getByLabelText('quantity'), {
            target: {value: '2'},
        });

        fillMarketPrice(1000);

        expect(calcProfit).toHaveBeenCalledWith(1000, 1000, 2, false);
        expect(screen.getByText('900 gp')).toBeInTheDocument();
        expect(
            screen.getByText((content) => content.includes('1050 gp') && content.includes('perUnit'))
        ).toBeInTheDocument();
    });

    it('adds item to cart', () => {
        render(<TradeCalculator flatOffers={flatOffers}/>);

        selectGoldenArmor();
        fillMarketPrice(1000);

        fireEvent.click(screen.getByText('addToBulk'));

        expect(screen.getByText('bulkOperation')).toBeInTheDocument();
        expect(screen.getByText('capacityTravels')).toBeInTheDocument();
        expect(calcCapacity).toHaveBeenCalledWith(100, 'Knight/Monk');
    });

    it('clears cart', () => {
        render(<TradeCalculator flatOffers={flatOffers}/>);

        selectGoldenArmor();
        fillMarketPrice(1000);

        fireEvent.click(screen.getByText('addToBulk'));

        expect(screen.getByText('bulkOperation')).toBeInTheDocument();

        fireEvent.click(screen.getByText('clear'));

        expect(screen.queryByText('bulkOperation')).not.toBeInTheDocument();
        expect(screen.queryByText('capacityTravels')).not.toBeInTheDocument();
    });

    it('toggles standalone NPC filter', () => {
        render(<TradeCalculator flatOffers={flatOffers}/>);

        const rashidButtons = screen.getAllByRole('button', {name: 'Rashid'});
        expect(rashidButtons.length).toBeGreaterThan(0);

        const rashidButton = rashidButtons.at(0);
        expect(rashidButton).toBeDefined();

        fireEvent.click(rashidButton!);
        expect(screen.getByText('clearFilter')).toBeInTheDocument();

        fireEvent.click(rashidButton!);
        expect(screen.queryByText('clearFilter')).not.toBeInTheDocument();
    });

    it('shows empty result before a valid calculation', () => {
        render(<TradeCalculator flatOffers={flatOffers}/>);

        expect(screen.getByText('emptyResult')).toBeInTheDocument();
        expect(calcProfit).not.toHaveBeenCalled();
    });

    it('shows capacity calculation when cart exists', () => {
        render(<TradeCalculator flatOffers={flatOffers}/>);

        selectGoldenArmor();
        fillMarketPrice(1000);

        fireEvent.click(screen.getByText('addToBulk'));

        expect(screen.getByText('capacityTravels')).toBeInTheDocument();
        expect(screen.getByText('estimatedCapacity')).toBeInTheDocument();
        expect(screen.getByText('travelsItemOnly')).toBeInTheDocument();
        expect(calcCapacity).toHaveBeenCalled();
    });
});