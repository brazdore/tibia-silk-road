import {describe, it, expect} from 'vitest';
import {getRashidLocation, isGermanySummerTime} from '@/lib/rashid';

// ─── isGermanySummerTime ──────────────────────────────────────────────────────

describe('isGermanySummerTime', () => {
    // 2026: CEST starts last Sunday of March = March 29 @ 01:00 UTC
    //        CEST ends   last Sunday of Oct   = Oct  25 @ 01:00 UTC

    it('returns false in January (winter)', () => {
        expect(isGermanySummerTime(new Date('2026-01-15T12:00:00Z'))).toBe(false);
    });

    it('returns true in July (summer)', () => {
        expect(isGermanySummerTime(new Date('2026-07-15T12:00:00Z'))).toBe(true);
    });

    it('returns false one second before CEST starts', () => {
        expect(isGermanySummerTime(new Date('2026-03-29T00:59:59Z'))).toBe(false);
    });

    it('returns true exactly at CEST start (Mar 29 01:00 UTC)', () => {
        expect(isGermanySummerTime(new Date('2026-03-29T01:00:00Z'))).toBe(true);
    });

    it('returns true one second before CEST ends', () => {
        expect(isGermanySummerTime(new Date('2026-10-25T00:59:59Z'))).toBe(true);
    });

    it('returns false exactly at CEST end (Oct 25 01:00 UTC)', () => {
        expect(isGermanySummerTime(new Date('2026-10-25T01:00:00Z'))).toBe(false);
    });

    it('returns false in December (winter)', () => {
        expect(isGermanySummerTime(new Date('2026-12-01T12:00:00Z'))).toBe(false);
    });
});

// ─── getRashidLocation — after server save (CEST, save @ 08:00 UTC) ──────────
// All dates below are in CEST period, well after save time

describe('getRashidLocation — correct city after server save (CEST)', () => {
    it('Monday → Svargrond', () => {
        // 2026-03-30 is a Monday
        const result = getRashidLocation(new Date('2026-03-30T12:00:00Z'));
        expect(result.city).toBe('Svargrond');
    });

    it('Tuesday → Liberty Bay', () => {
        const result = getRashidLocation(new Date('2026-03-31T12:00:00Z'));
        expect(result.city).toBe('Liberty Bay');
    });

    it('Wednesday → Port Hope', () => {
        const result = getRashidLocation(new Date('2026-04-01T12:00:00Z'));
        expect(result.city).toBe('Port Hope');
    });

    it('Thursday → Ankrahmun', () => {
        const result = getRashidLocation(new Date('2026-04-02T12:00:00Z'));
        expect(result.city).toBe('Ankrahmun');
    });

    it('Friday → Darashia', () => {
        const result = getRashidLocation(new Date('2026-04-03T12:00:00Z'));
        expect(result.city).toBe('Darashia');
    });

    it('Saturday → Edron', () => {
        const result = getRashidLocation(new Date('2026-04-04T12:00:00Z'));
        expect(result.city).toBe('Edron');
    });

    it('Sunday → Carlin', () => {
        const result = getRashidLocation(new Date('2026-04-05T12:00:00Z'));
        expect(result.city).toBe('Carlin');
    });
});

// ─── getRashidLocation — before server save (still previous day's city) ───────

describe('getRashidLocation — still previous city before server save', () => {
    // CEST save = 08:00 UTC. 07:00 UTC is before save.

    it('Monday before save → Sunday city (Carlin)', () => {
        const result = getRashidLocation(new Date('2026-03-30T07:00:00Z'));
        expect(result.city).toBe('Carlin');
    });

    it('Tuesday before save → Monday city (Svargrond)', () => {
        const result = getRashidLocation(new Date('2026-03-31T07:00:00Z'));
        expect(result.city).toBe('Svargrond');
    });

    it('Sunday before save → Saturday city (Edron)', () => {
        const result = getRashidLocation(new Date('2026-04-05T07:00:00Z'));
        expect(result.city).toBe('Edron');
    });
});

// ─── getRashidLocation — server save boundary ─────────────────────────────────

describe('getRashidLocation — save boundary (CEST, 08:00 UTC)', () => {
    it('exactly at save time (08:00:00) → still previous city', () => {
        // isBeforeSave checks minutes === 0 at the save hour → true
        const result = getRashidLocation(new Date('2026-03-30T08:00:00Z'));
        expect(result.city).toBe('Carlin');
    });

    it('one minute after save (08:01) → new city', () => {
        const result = getRashidLocation(new Date('2026-03-30T08:01:00Z'));
        expect(result.city).toBe('Svargrond');
    });
});

// ─── getRashidLocation — CET period (save @ 09:00 UTC) ───────────────────────

describe('getRashidLocation — correct city after server save (CET)', () => {
    // CET period: January. Save at 09:00 UTC.
    // 2026-01-05 is a Monday

    it('Monday in CET after 09:00 → Svargrond', () => {
        const result = getRashidLocation(new Date('2026-01-05T12:00:00Z'));
        expect(result.city).toBe('Svargrond');
    });

    it('Monday in CET before 09:00 → Carlin', () => {
        const result = getRashidLocation(new Date('2026-01-05T08:00:00Z'));
        expect(result.city).toBe('Carlin');
    });
});

// ─── getRashidLocation — return shape ─────────────────────────────────────────

describe('getRashidLocation — return shape', () => {
    it('returns city, location, and mapUrl fields', () => {
        const result = getRashidLocation(new Date('2026-03-30T12:00:00Z'));
        expect(result).toHaveProperty('city');
        expect(result).toHaveProperty('location');
        expect(result).toHaveProperty('mapUrl');
    });

    it('mapUrl points to tibiamaps.io', () => {
        const result = getRashidLocation(new Date('2026-03-30T12:00:00Z'));
        expect(result.mapUrl).toMatch(/^https:\/\/tibiamaps\.io\/map#/);
    });
});