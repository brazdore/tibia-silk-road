import ThemeToggle from "@/components/ThemeToggle";
import RashidBanner from "@/components/RashidBanner";
import TradeCalculator from "@/components/TradeCalculator";
import { getItems, getNpcs, getOffers } from "@/lib/api";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeaders";

import type { FlatOffer } from "@/lib/types";

export default async function Page() {
  let flatOffers: FlatOffer[] = [];

  try {
    const [items, npcs, offers] = await Promise.all([
      getItems(),
      getNpcs(),
      getOffers(),
    ]);

    const npcMap = new Map(npcs.map((n) => [n.id, n]));
    const itemMap = new Map(items.map((i) => [i.id, i]));

    flatOffers = offers.flatMap((offer) => {
      const item = itemMap.get(offer.item_id);
      const npc = npcMap.get(offer.npc_id);
      if (!item || !npc) return [];
      return [
        {
          offerId: offer.id,
          itemId: item.id,
          name: item.name,
          weight: parseFloat(item.weight),
          npcPrice: offer.price,
          npcId: npc.id,
          npcName: npc.name,
          npcCity: npc.locations[0]?.city ?? "",
          npcIconUrl: npc.icon_url,
          iconUrl: item.icon_url,
          taskDeliverable: item.task_deliverable,
        },
      ];
    });
  } catch {
    // API unreachable at build time — ISR revalidates once live
  }

  return (
    <main
      className="min-h-screen p-8"
      style={{ backgroundColor: "rgb(var(--bg))" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <ThemeToggle />
      </div>
      <PageHeader />
      <TradeCalculator flatOffers={flatOffers} />
      <RashidBanner />
      <Footer />
    </main>
  );
}
