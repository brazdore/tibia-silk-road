BEGIN;

TRUNCATE TABLE
    silkroad.offers,
    silkroad.npc_locations,
    silkroad.npc_quests,
    silkroad.items,
    silkroad.npcs,
    silkroad.quests,
    silkroad.cities
RESTART IDENTITY CASCADE;

COMMIT;