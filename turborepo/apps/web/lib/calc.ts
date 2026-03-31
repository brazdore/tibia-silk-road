export type Vocation = 'Knight/Monk' | 'Paladin' | 'Sorcerer/Druid' | 'Rookstayer';

export const MARKET_FEE_RATE = 0.02;
export const MARKET_FEE_MIN = 20;
export const MARKET_FEE_MAX = 1_000_000;

export function calcMarketFee(totalOffer: number): number {
    return Math.min(Math.max(totalOffer * MARKET_FEE_RATE, MARKET_FEE_MIN), MARKET_FEE_MAX);
}

export function calcProfit(
    npcPrice: number,
    marketPrice: number,
    quantity: number,
    includeMarketFee: boolean,
) {
    const totalOffer = marketPrice * quantity;
    const marketFee = includeMarketFee ? calcMarketFee(totalOffer) : 0;
    const totalCost = totalOffer + marketFee;
    const npcRevenue = npcPrice * quantity;
    const netProfit = npcRevenue - totalCost;
    const breakEven = Math.floor(
        (npcPrice * quantity - (includeMarketFee ? MARKET_FEE_MIN : 0)) /
        (quantity * (1 + (includeMarketFee ? MARKET_FEE_RATE : 0)))
    );
    return {totalOffer, marketFee, totalCost, npcRevenue, netProfit, breakEven};
}

export function calcCapacity(level: number, vocation: Vocation): number {
    if (level <= 0) return 0;
    switch (vocation) {
        case 'Knight/Monk':
            return 390 + (level - 8) * 25;
        case 'Paladin':
            return 300 + (level - 8) * 20;
        case 'Sorcerer/Druid':
            return 250 + (level - 8) * 15;
        case 'Rookstayer':
        default:
            return 140 + level * 5;
    }
}

export function formatGp(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value) + ' gp';
}

export function formatWeight(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value) + ' oz.';
}