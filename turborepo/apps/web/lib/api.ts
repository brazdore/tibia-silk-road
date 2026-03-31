import type { Item, Npc, Offer } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

async function apiFetch<T>(path: string): Promise<T> {
    const res = await fetch(`${API_URL}${path}`, {
        next: { revalidate: 86400 }, // 24h cache
    });
    if (!res.ok) throw new Error(`API error: ${res.status} ${path}`);
    return res.json() as Promise<T>;
}

export const getItems  = () => apiFetch<Item[]>('/items');
export const getNpcs   = () => apiFetch<Npc[]>('/npcs');
export const getOffers = () => apiFetch<Offer[]>('/offers');