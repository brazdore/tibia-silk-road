import {describe, expect, it} from 'vitest';
import {
    calcCapacity,
    calcMarketFee,
    calcProfit,
    formatGp,
    formatWeight,
    MARKET_FEE_MAX,
    MARKET_FEE_MIN,
} from '@/lib/calc';

describe('calcMarketFee', () => {
    it('returns the minimum fee when 2% falls below 20 gp', () => {
        // 500 * 0.02 = 10 → clamped to 20
        expect(calcMarketFee(500)).toBe(MARKET_FEE_MIN);
    });

    it('returns exactly the minimum fee at the boundary (1000 gp offer)', () => {
        // 1000 * 0.02 = 20 → exactly at floor
        expect(calcMarketFee(1000)).toBe(20);
    });

    it('returns 2% for a normal offer', () => {
        // 10_000 * 0.02 = 200
        expect(calcMarketFee(10_000)).toBe(200);
    });

    it('returns the maximum fee when 2% exceeds 1_000_000 gp', () => {
        // 60_000_000 * 0.02 = 1_200_000 → clamped to 1_000_000
        expect(calcMarketFee(60_000_000)).toBe(MARKET_FEE_MAX);
    });

    it('returns exactly the maximum fee at the boundary (50_000_000 gp offer)', () => {
        // 50_000_000 * 0.02 = 1_000_000 → exactly at ceiling
        expect(calcMarketFee(50_000_000)).toBe(1_000_000);
    });
});

describe('calcProfit', () => {
    it('calculates correctly without market fee', () => {
        // npc=1000, market=800, qty=10, no fee
        const result = calcProfit(1000, 800, 10, false);
        expect(result.totalOffer).toBe(8_000);
        expect(result.marketFee).toBe(0);
        expect(result.totalCost).toBe(8_000);
        expect(result.npcRevenue).toBe(10_000);
        expect(result.netProfit).toBe(2_000);
        // breakEven = floor(10000 / 10) = 1000
        expect(result.breakEven).toBe(1_000);
    });

    it('calculates correctly with market fee', () => {
        // npc=1000, market=800, qty=10, with fee
        // totalOffer=8000, fee=160, totalCost=8160
        // npcRevenue=10000, netProfit=1840
        // breakEven = floor((10000 - 20) / (10 * 1.02)) = floor(9980 / 10.2) = 978
        const result = calcProfit(1000, 800, 10, true);
        expect(result.totalOffer).toBe(8_000);
        expect(result.marketFee).toBe(160);
        expect(result.totalCost).toBe(8_160);
        expect(result.npcRevenue).toBe(10_000);
        expect(result.netProfit).toBe(1_840);
        expect(result.breakEven).toBe(978);
    });

    it('returns negative netProfit when market price exceeds NPC price', () => {
        const result = calcProfit(500, 600, 5, false);
        expect(result.netProfit).toBeLessThan(0);
    });

    it('applies minimum fee when offer is very small', () => {
        // qty=1, market=100 → totalOffer=100, 2%=2 < 20 → fee clamped to 20
        const result = calcProfit(200, 100, 1, true);
        expect(result.marketFee).toBe(MARKET_FEE_MIN);
    });

    it('applies maximum fee on very large offer', () => {
        // qty=1, market=60_000_000 → fee clamped to 1_000_000
        const result = calcProfit(70_000_000, 60_000_000, 1, true);
        expect(result.marketFee).toBe(MARKET_FEE_MAX);
    });

    it('breakEven without fee equals floor(npcPrice * qty / qty) = npcPrice', () => {
        const result = calcProfit(1500, 1000, 5, false);
        expect(result.breakEven).toBe(1500);
    });

    it('qty=1 edge case without fee', () => {
        const result = calcProfit(3000, 2000, 1, false);
        expect(result.totalOffer).toBe(2_000);
        expect(result.npcRevenue).toBe(3_000);
        expect(result.netProfit).toBe(1_000);
    });
});

describe('calcCapacity', () => {
    it('returns 0 for level 0', () => {
        expect(calcCapacity(0, 'Knight/Monk')).toBe(0);
    });

    it('returns 0 for negative level', () => {
        expect(calcCapacity(-5, 'Paladin')).toBe(0);
    });

    it('Knight level 8 (base level) returns 390', () => {
        expect(calcCapacity(8, 'Knight/Monk')).toBe(390);
    });

    it('Knight level 100 returns correct cap', () => {
        // 390 + (100 - 8) * 25 = 390 + 2300 = 2690
        expect(calcCapacity(100, 'Knight/Monk')).toBe(2_690);
    });

    it('Paladin level 8 (base level) returns 300', () => {
        expect(calcCapacity(8, 'Paladin')).toBe(300);
    });

    it('Paladin level 50 returns correct cap', () => {
        // 300 + (50 - 8) * 20 = 300 + 840 = 1140
        expect(calcCapacity(50, 'Paladin')).toBe(1_140);
    });

    it('Sorcerer/Druid level 8 (base level) returns 250', () => {
        expect(calcCapacity(8, 'Sorcerer/Druid')).toBe(250);
    });

    it('Sorcerer/Druid level 20 returns correct cap', () => {
        // 250 + (20 - 8) * 15 = 250 + 180 = 430
        expect(calcCapacity(20, 'Sorcerer/Druid')).toBe(430);
    });

    it('Rookstayer level 1 returns correct cap', () => {
        // 140 + 1 * 5 = 145
        expect(calcCapacity(1, 'Rookstayer')).toBe(145);
    });

    it('Rookstayer level 10 returns correct cap', () => {
        // 140 + 10 * 5 = 190
        expect(calcCapacity(10, 'Rookstayer')).toBe(190);
    });
});

describe('formatGp', () => {
    it('formats zero', () => {
        expect(formatGp(0)).toBe('0 gp');
    });

    it('formats thousands with pt-BR dot separator', () => {
        expect(formatGp(1000)).toBe('1.000 gp');
    });

    it('formats decimal values with pt-BR comma', () => {
        expect(formatGp(1234.56)).toBe('1.234,56 gp');
    });

    it('appends gp suffix', () => {
        expect(formatGp(500)).toMatch(/gp$/);
    });
});

describe('formatWeight', () => {
    it('formats zero', () => {
        expect(formatWeight(0)).toBe('0 oz.');
    });

    it('formats thousands with pt-BR dot separator', () => {
        expect(formatWeight(1000)).toBe('1.000 oz.');
    });

    it('formats decimal values with pt-BR comma', () => {
        expect(formatWeight(84.5)).toBe('84,5 oz.');
    });

    it('appends oz. suffix', () => {
        expect(formatWeight(55)).toMatch(/oz\.$/);
    });
});