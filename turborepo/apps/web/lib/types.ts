export interface Item {
    id: number;
    name: string;
    weight: number;
    type: string;
    task_deliverable: boolean;
    icon_url: string | null;
}

export interface Npc {
    id: number;
    name: string;
    needs_quest_to_unlock: boolean;
    icon_url: string | null;
    weekday: string | null;
    location: string | null;
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