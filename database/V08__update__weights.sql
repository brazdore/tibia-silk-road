BEGIN;

UPDATE silkroad.items i
SET weight = w.item_weight::numeric(8,2)
FROM items_with_weight w
WHERE LOWER(TRIM(i.name)) = LOWER(TRIM(w.item_name));

COMMIT;