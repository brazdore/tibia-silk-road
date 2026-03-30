import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import RashidBanner from '@/components/RashidBanner';
import TradeCalculator from '@/components/TradeCalculator';
import { getItems, getNpcs, getOffers } from '@/lib/api';
import type { FlatOffer } from '@/lib/types';

export default async function Page() {
    let flatOffers: FlatOffer[] = [];

    try {
        const [items, npcs, offers] = await Promise.all([
            getItems(),
            getNpcs(),
            getOffers(),
        ]);

        const npcMap  = new Map(npcs.map(n => [n.id, n]));
        const itemMap = new Map(items.map(i => [i.id, i]));

        flatOffers = offers.flatMap(offer => {
            const item = itemMap.get(offer.item_id);
            const npc  = npcMap.get(offer.npc_id);
            if (!item || !npc) return [];
            return [{
                offerId:  offer.id,
                itemId:   item.id,
                name:     item.name,
                weight:   parseFloat(item.weight),
                npcPrice: offer.price,
                npcName:  npc.name,
                npcCity:  npc.locations[0]?.city ?? '',
                iconUrl:  item.icon_url,
            }];
        });
    } catch {
        // API unreachable at build time — ISR revalidates after 3600s when API is up.
    }

    return (
        <main className="min-h-screen p-8" style={{ backgroundColor: 'rgb(var(--bg))' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <ThemeToggle />
            </div>
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Image
                    src="/android-chrome-192x192.png"
                    alt="Tibia Silk Road logo"
                    width={52} height={52} priority
                    style={{ margin: '0 auto 0.5rem' }}
                />
                <h1 style={{ color: 'rgb(var(--accent-gold))' }} className="text-3xl font-black">
                    Tibia Silk Road
                </h1>
                <p style={{ color: 'rgb(var(--muted))' }} className="mt-1 text-xs">
                    Merchant Market NPC Profit Tracker
                </p>
            </header>
            <TradeCalculator flatOffers={flatOffers} />
            <RashidBanner />
        </main>
    );
}