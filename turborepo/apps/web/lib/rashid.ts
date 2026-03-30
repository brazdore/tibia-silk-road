export interface RashidInfo {
    city: string;
    location: string;
    mapUrl: string;
}

function toMapUrl(x: number, y: number, z: number): string {
    return `https://tibiamaps.io/map#${x},${y},${z}:2`;
}

const SCHEDULE: RashidInfo[] = [
    { city: 'Svargrond',   location: "Dankwart's Tavern, south of temple",   mapUrl: toMapUrl(32210, 31157, 7) },
    { city: 'Liberty Bay', location: "Lyonel's Tavern, west of depot",        mapUrl: toMapUrl(32303, 32834, 7) },
    { city: 'Port Hope',   location: "Clyde's Tavern, west of depot",         mapUrl: toMapUrl(32577, 32752, 7) },
    { city: 'Ankrahmun',   location: "Arito's Tavern, above the post office", mapUrl: toMapUrl(33069, 32885, 6) },
    { city: 'Darashia',    location: "Miraia's Tavern, south of guildhalls",  mapUrl: toMapUrl(33238, 32482, 7) },
    { city: 'Edron',       location: "Mirabell's Tavern, above the depot",    mapUrl: toMapUrl(33175, 31800, 6) },
    { city: 'Carlin',      location: 'Depot, one floor above',                mapUrl: toMapUrl(32327, 31782, 6) },
];

function isGermanySummerTime(date: Date): boolean {
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