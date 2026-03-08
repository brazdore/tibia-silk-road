--- Seed Inicial
INSERT INTO silkroad.cities (name) VALUES ('Ankrahmun'), ('Thais'), ('Venore'), ('Carlin');

INSERT INTO silkroad.quests (name) VALUES ('The Traveling Trader Quest');

INSERT INTO silkroad.npcs (name, needs_quest_to_unlock)
VALUES ('Rashid', TRUE),
       ('Esrik', FALSE);

INSERT INTO silkroad.npc_locations (npc_id, city_id, coord_x, coord_y, coord_z)
VALUES (1, 1, 32976, 32340, 7),  -- Rashid em Ankrahmun (Segunda-Feira)
       (1, 2, 32360, 32259, 7);  -- Rashid em Thais (Domingo)

INSERT INTO silkroad.items (name, weight, type, task_deliverable, icon_url)
VALUES
  ('Crusader Helmet', 52.00, 'Helmet', FALSE, 'https://your-bucket.s3.amazonaws.com/icons/crusader_helmet.gif'),
  ('Demon Helmet',    29.00, 'Helmet', FALSE, 'https://your-bucket.s3.amazonaws.com/icons/demon_helmet.gif'),
  ('Fire Sword',      23.00, 'Weapon', FALSE, 'https://your-bucket.s3.amazonaws.com/icons/fire_sword.gif');

INSERT INTO silkroad.offers (item_id, npc_id, price)
VALUES (1, 1, 5000),   -- Crusader Helmet/Rashid/5,000 gp
       (2, 1, 35000),  -- Demon Helmet/Rashid/35,000 gp
       (3, 1, 4000);   -- Fire Sword/Rashid/4,000 gp