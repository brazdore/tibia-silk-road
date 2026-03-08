-- ENUM
CREATE TYPE silkroad.item_type AS ENUM (
  'Weapon', 'Armor', 'Ammunition', 'Wand', 'Rod',
  'Shield', 'Helmet', 'Legs', 'Boots', 'Amulet',
  'Ring', 'Creature Product', 'Food', 'Other'
);

-- CITIES
CREATE TABLE silkroad.cities (
  id   SERIAL       PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

-- QUESTS
CREATE TABLE silkroad.quests (
  id   SERIAL       PRIMARY KEY,
  name VARCHAR(200) NOT NULL UNIQUE
);

-- NPCS
CREATE TABLE silkroad.npcs (
  id                    SERIAL       PRIMARY KEY,
  name                  VARCHAR(100) NOT NULL,
  needs_quest_to_unlock BOOLEAN      NOT NULL DEFAULT FALSE
);

-- NPC_QUESTS (Junction de NPCS:QUESTS)
CREATE TABLE silkroad.npc_quests (
  npc_id   INT NOT NULL REFERENCES silkroad.npcs(id)   ON DELETE CASCADE,
  quest_id INT NOT NULL REFERENCES silkroad.quests(id) ON DELETE CASCADE,
  PRIMARY KEY (npc_id, quest_id)
);

-- LOCATIONS (Junction de NPCS:CITIES com coordenadas XYZ)
CREATE TABLE silkroad.npc_locations (
  id      SERIAL PRIMARY KEY,
  npc_id  INT    NOT NULL REFERENCES silkroad.npcs(id)    ON DELETE CASCADE,
  city_id INT    NOT NULL REFERENCES silkroad.cities(id)  ON DELETE RESTRICT,
  coord_x INT    NOT NULL,
  coord_y INT    NOT NULL,
  coord_z INT    NOT NULL DEFAULT 7
);

-- ITEMS
CREATE TABLE silkroad.items (
  id               SERIAL              PRIMARY KEY,
  name             VARCHAR(200)        NOT NULL UNIQUE,
  weight           NUMERIC(8,2)        NOT NULL,
  type             silkroad.item_type  NOT NULL,
  task_deliverable BOOLEAN             NOT NULL DEFAULT FALSE,
  icon_url         TEXT                NULL
);

-- OFFERS (Juncion de ITEMS:NPCS, com preço)
CREATE TABLE silkroad.offers (
  id      SERIAL PRIMARY KEY,
  item_id INT    NOT NULL REFERENCES silkroad.items(id) ON DELETE CASCADE,
  npc_id  INT    NOT NULL REFERENCES silkroad.npcs(id)  ON DELETE CASCADE,
  price   INT    NOT NULL CHECK (price > 0),
  UNIQUE (item_id, npc_id)
);