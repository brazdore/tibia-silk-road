# Tibia Silk Road

Full-stack trading assistant for Tibia, focused on NPC arbitrage optimization.

This project allows players to analyze market opportunities, calculate profit, and optimize logistics (capacity, backpacks, and travel routes) using real game data.

---

## Architecture

This project is built as a **monorepo using Turborepo**, containing:

- **Frontend (`apps/web`)** → Next.js application
- **Backend (`apps/api`)** → NestJS REST API
- **Shared packages (`packages/*`)** → configs and UI primitives

```
apps/
  ├── api   → Backend (NestJS + Prisma + PostgreSQL)
  └── web   → Frontend (Next.js + React)

packages/
  ├── eslint-config
  ├── typescript-config
  └── ui
```

---

## Stack Overview

### Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS variables + inline styles (Tailwind baseline)
- Vitest + React Testing Library

### Backend
- NestJS
- Prisma ORM (PostgreSQL)
- TypeScript
- Jest + Supertest + Testcontainers

### Tooling
- Turborepo
- pnpm workspaces
- ESLint (shared config)
- TypeScript (shared config)

---

## Features

### Trade Optimization
- Item search and filtering
- NPC-based trade routes
- Profit and break-even calculations

### Bulk Operations
- Cart system for multiple trades
- Aggregated profit, cost, and weight

### Capacity Simulation
- Character level and vocation
- Backpack simulation
- Travel estimation

### Rashid Tracker
- Real-time NPC rotation
- Timezone-aware (CET/CEST)
- Map integration

### UI Features
- Dark / Light theme
- Multilingual support (i18n)
- Responsive design

---

## Getting Started

### Requirements

- Node.js 20+
- pnpm 9+
- Docker (for backend E2E tests)
- PostgreSQL (local or remote)

---

## Installation

```bash
pnpm install
```

---

## Running the Project

### Run everything (recommended)

```bash
pnpm dev
```

---

### Run frontend only

```bash
pnpm --filter web dev
```

Frontend: http://localhost:3000

---

### Run backend only

```bash
pnpm --filter api dev
```

API: http://localhost:3001  
Swagger: http://localhost:3001/docs

---

## Environment Variables

### Backend (`apps/api/.env`)

```env
DATABASE_URL=postgresql://user:password@host:5432/silkroad
ALLOWED_ORIGIN=http://localhost:3000
```

---

### Frontend (`apps/web/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## Testing

### Frontend

```bash
pnpm --filter web test
```

- Vitest
- React Testing Library

---

### Backend

```bash
pnpm --filter api test
pnpm --filter api test:e2e
```

- Jest
- Supertest
- Testcontainers (Docker required)

---

## Database

```bash
pnpm --filter api prisma db push
pnpm --filter api prisma generate
pnpm --filter api prisma migrate deploy
```

---

## Project Structure

```
turborepo/
├── apps/
│   ├── api/        # NestJS backend
│   └── web/        # Next.js frontend
├── packages/
│   ├── eslint-config
│   ├── typescript-config
│   └── ui
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## Design Decisions

- Monorepo architecture for shared tooling and scalability
- Client-side calculations for instant feedback
- Backend focused on data retrieval and persistence
- Business logic extracted into pure functions for testability
- Custom i18n system for lightweight multilingual support
- CSS variables used for theming instead of heavy styling frameworks

---

## Notes

- Frontend and backend are fully decoupled via REST API
- TailwindCSS is included as a baseline but not used as the primary styling system
- Implementation evolved beyond the original plan (Vite → Next.js)

---

## Documentation

This project was developed as part of a university final project.
Some architectural decisions evolved during implementation and may differ from the initial proposal, reflecting practical improvements made during development.
This documentation was generated with the assistance of AI and reviewed by the author.