export interface NpcLocation {
    city: string;
    weekday: string | null;
    coord_x: number;
    coord_y: number;
    coord_z: number;
}

export interface NpcQuest {
    id: number;
    name: string;
}

export interface Item {
    id: number;
    name: string;
    weight: string;
    type: string;
    task_deliverable: boolean;
    icon_url: string | null;
}

export interface Npc {
    id: number;
    name: string;
    needs_quest_to_unlock: boolean;
    icon_url: string | null;
    locations: NpcLocation[];
    quests: NpcQuest[];
}

export interface Offer {
    id: number;
    item_id: number;
    npc_id: number;
    price: number;
}

export interface OfferWithRelations extends Offer {
    item: Item;
    npc: Npc;
}

export interface FlatOffer {
  offerId: number;
  itemId: number;
  name: string;
  weight: number;
  npcPrice: number;
  npcId: number;
  npcName: string;
  npcCity: string;
  npcIconUrl: string | null;
  iconUrl: string | null;
  taskDeliverable: boolean;
}