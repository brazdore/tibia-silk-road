DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type t
        JOIN pg_namespace n ON n.oid = t.typnamespace
        WHERE n.nspname = 'silkroad'
          AND t.typname = 'weekday'
    ) THEN
        CREATE TYPE silkroad.weekday AS ENUM (
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        );
    END IF;
END $$;

ALTER TABLE silkroad.npcs
    ADD COLUMN IF NOT EXISTS icon_url TEXT NULL;

ALTER TABLE silkroad.npc_locations
    ADD COLUMN IF NOT EXISTS weekday silkroad.weekday NULL;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'uq_silkroad_npcs_name'
          AND conrelid = 'silkroad.npcs'::regclass
    ) THEN
        ALTER TABLE silkroad.npcs
            ADD CONSTRAINT uq_silkroad_npcs_name UNIQUE (name);
    END IF;
END $$;