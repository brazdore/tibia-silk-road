export interface RashidInfo {
    city: string;
    location: string;
    mapUrl: string;
}

function toMapUrl(x: number, y: number, z: number): string {
    return `https://tibiamaps.io/map#${x},${y},${z}:2`;
}

const SCHEDULE: RashidInfo[] = [
    { city: 'Svargrond',   location: "Dankwart's Tavern, south of temple",   mapUrl: toMapUrl(32000, 31000, 7) }, // TODO
    { city: 'Liberty Bay', location: "Lyonel's Tavern, west of depot",        mapUrl: toMapUrl(32000, 31000, 7) }, // TODO
    { city: 'Port Hope',   location: "Clyde's Tavern, west of depot",         mapUrl: toMapUrl(32000, 31000, 7) }, // TODO
    { city: 'Ankrahmun',   location: "Arito's Tavern, above the post office", mapUrl: toMapUrl(32000, 31000, 6) }, // TODO
    { city: 'Darashia',    location: "Miraia's Tavern, south of guildhalls",  mapUrl: toMapUrl(32000, 31000, 7) }, // TODO
    { city: 'Edron',       location: "Mirabell's Tavern, above the depot",    mapUrl: toMapUrl(32000, 31000, 6) }, // TODO
    { city: 'Carlin',      location: 'Depot, one floor above',                mapUrl: toMapUrl(32327, 31782, 6) }, // ✅
];

export function isGermanySummerTime(date: Date): boolean {
    const year = date.getUTCFullYear();
    const cestStart = Date.UTC(year, 2, getLastSunday(year, 2), 1, 0, 0);
    const cestEnd   = Date.UTC(year, 9, getLastSunday(year, 9), 1, 0, 0);
    return date.getTime() >= cestStart && date.getTime() < cestEnd;
}

function getLastSunday(year: number, month: number): number {
    const lastDay = new Date(Date.UTC(year, month + 1, 0));
    return lastDay.getUTCDate() - lastDay.getUTCDay();
}

export function getRashidLocation(now: Date = new Date()): RashidInfo {
    const utcOffset         = isGermanySummerTime(now) ? 2 : 1;
    const serverSaveUtcHour = 10 - utcOffset;
    const utcDay            = now.getUTCDay();
    const isBeforeSave      = now.getUTCHours() < serverSaveUtcHour ||
        (now.getUTCHours() === serverSaveUtcHour && now.getUTCMinutes() === 0);
    const effectiveDay      = isBeforeSave ? (utcDay + 6) % 7 : utcDay;
    const scheduleIndex     = effectiveDay === 0 ? 6 : effectiveDay - 1;
    return SCHEDULE[scheduleIndex]!;
}