# Tibia Silk Road — API

REST API for the Tibia Silk Road project. Provides item, NPC, and offer data used by the Silk Road trading assistant.

---

## Stack

- **Runtime:** Node.js
- **Framework:** NestJS
- **ORM:** Prisma 7 (driver adapter mode via `@prisma/adapter-pg`)
- **Database:** PostgreSQL (AWS RDS in production)
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Testing:** Jest + Supertest + Testcontainers

---

## Requirements

- Node.js 20+
- pnpm 9+
- Docker (for E2E tests)
- PostgreSQL (for local development)

---

## Environment Variables

Create a `.env` file in `apps/api`:

```env
DATABASE_URL=postgresql://user:password@host:5432/silkroad
ALLOWED_ORIGIN=http://localhost:3000
```

In production:

```env
DATABASE_URL=postgresql://user:password@rds-host:5432/silkroad?sslmode=require
ALLOWED_ORIGIN=https://yourdomain.com
```

---

## Running

### Development

```bash
# From repo root
pnpm --filter api dev

# Or from apps/api
pnpm dev
```

### Build

```bash
pnpm --filter api build
```

### Production

```bash
pnpm --filter api start:prod
```

---

## Testing

### Unit tests

```bash
pnpm --filter api test
```

### E2E tests (requires Docker)

```bash
pnpm --filter api test:e2e
```

E2E tests spin up a real PostgreSQL container via Testcontainers. The container is managed automatically by the Ryuk reaper — no manual cleanup required.

---

## Database

### Push schema (development)

```bash
pnpm prisma db push
```

### Generate Prisma client

```bash
pnpm prisma generate
```

### Run migrations (production)

```bash
pnpm prisma migrate deploy
```

---

## API Reference

Base URL: `http://localhost:3001`

Interactive docs (Swagger): `http://localhost:3001/docs`

---

### Items

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/items` | Returns all items ordered by id |
| GET | `/items/:id` | Returns a single item by id |
| GET | `/items/name/:name` | Returns items matching name (case-insensitive) |

#### `GET /items`

```http
GET /items
```

**Response `200`**
```json
[
  {
    "id": 1,
    "name": "Broadsword",
    "weight": "52.5",
    "type": "Weapon",
    "task_deliverable": true,
    "icon_url": "https://..."
  }
]
```

#### `GET /items/:id`

```http
GET /items/23
```

**Response `200`** — single item object  
**Response `404`** — item not found

#### `GET /items/name/:name`

```http
GET /items/name/sword
```

**Response `200`** — array of matching items

---

### NPCs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/npcs` | Returns all NPCs |
| GET | `/npcs/:id` | Returns a single NPC by id |
| GET | `/npcs/name/:name` | Returns NPC matching name |

#### `GET /npcs`

```http
GET /npcs
```

**Response `200`**
```json
[
  {
    "id": 1,
    "name": "Rashid",
    "needs_quest_to_unlock": true,
    "icon_url": "https://..."
  }
]
```

#### `GET /npcs/:id`

**Response `200`** — single NPC object  
**Response `404`** — NPC not found

#### `GET /npcs/name/:name`

**Response `200`** — single NPC object

---

### Offers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/offers` | Returns all offers, optionally filtered |
| GET | `/offers?item_id=` | Returns offers for a specific item |
| GET | `/offers?npc_id=` | Returns offers for a specific NPC |
| GET | `/offers?item_id=&npc_id=` | Returns a specific item/NPC offer |

#### `GET /offers`

```http
GET /offers?item_id=23&npc_id=1
```

**Query params:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `item_id` | number | No | Filter by item |
| `npc_id` | number | No | Filter by NPC |

**Response `200`**
```json
[
  {
    "id": 1,
    "item_id": 23,
    "npc_id": 1,
    "price": 8000
  }
]
```

---

## Security

### CORS

Only the origin defined in `ALLOWED_ORIGIN` is permitted. All other origins are blocked at the browser level.

### Rate Limiting

Requests are limited to **100 per minute per IP**. Exceeding this returns:

```json
{
  "statusCode": 429,
  "message": "ThrottlerException: Too Many Requests"
}
```

---

## Project Structure

````
tibia-silk-road\turborepo\apps\api
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── prisma
|  └── schema.prisma
├── prisma.config.d.ts
├── prisma.config.js
├── prisma.config.js.map
├── prisma.config.ts
├── README.md
├── src
|  ├── app.controller.ts
|  ├── app.module.ts
|  ├── app.service.ts
|  ├── database
|  |  ├── prisma.module.ts
|  |  └── prisma.service.ts
|  ├── items
|  |  ├── dto
|  |  |  └── item.dto.ts
|  |  ├── items.controller.ts
|  |  ├── items.module.ts
|  |  ├── items.service.spec.ts
|  |  └── items.service.ts
|  ├── main.ts
|  ├── npcs
|  |  ├── dto
|  |  |  └── npc.dto.ts
|  |  ├── npcs.controller.ts
|  |  ├── npcs.module.ts
|  |  └── npcs.service.ts
|  └── offers
|     ├── dto
|     |  └── offer.dto.ts
|     ├── offers.controller.ts
|     ├── offers.module.ts
|     └── offers.service.ts
├── test
|  ├── items.e2e-spec.ts
|  ├── jest-e2e.json
|  ├── npcs.e2e-spec.ts
|  ├── offers.e2e-spec.ts
|  └── setup.ts
├── tsconfig.build.json
└── tsconfig.json
````

## Documentation
This documentation was generated with the assistance of AI and reviewed by the author.