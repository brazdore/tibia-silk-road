BEGIN;

UPDATE silkroad.items
SET task_deliverable = FALSE;

UPDATE silkroad.items i
SET task_deliverable = TRUE
FROM silkroad.task_delivery_items d
WHERE LOWER(TRIM(i.name)) = LOWER(TRIM(d.item_name));

COMMIT;