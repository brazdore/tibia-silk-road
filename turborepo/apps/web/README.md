# Tibia Silk Road — Web

Frontend application for the Tibia Silk Road project. Provides an interactive trading assistant for NPC arbitrage, including profit calculation, bulk operations, and capacity optimization.

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** CSS variables + inline styles (TailwindCSS used for global baseline only)
- **Package Manager:** pnpm
- **Testing:** Vitest + React Testing Library

---

## Requirements

- Node.js 20+
- pnpm 9+

---

## Running

### Development

```bash
# From repo root
pnpm --filter web dev

# Or from apps/web
pnpm dev
```

Open: http://localhost:3000

---

### Build

```bash
pnpm --filter web build
```

### Production

```bash
pnpm --filter web start
```

---

## Features

### Trade Calculator

- Search items by name
- Filter by NPC and faction
- Calculate profit (NPC ↔ Market)
- Break-even price calculation
- Profit per weight (oz)

### Bulk Operations

- Add multiple trades to cart
- Aggregate profit, cost, and weight
- Clear and manage entries

### Capacity & Travel Simulation

- Character level and vocation
- Capacity estimation
- Backpack simulation (slots + weight)
- Number of required travels

### Rashid Tracker

- Real-time NPC location tracking
- CET/CEST timezone handling
- Countdown to next location
- Map integration

### UI Features

- Dark / Light theme toggle
- Multilingual support (i18n)
- Responsive layout

---

## Architecture

The frontend follows a clear separation of concerns:

### Components (`/components`)
- UI and interaction logic
- Stateful React components
- Example: `TradeCalculator`, `RashidBanner`

### Business Logic (`/lib`)
- Pure, deterministic functions
- No React dependency
- Fully testable

Examples:
- `calc.ts` → profit and capacity calculations
- `rashid.ts` → NPC rotation logic
- `api.ts` → backend communication
- `i18n.tsx` → localization system

### Routing (`/app`)
- Next.js App Router
- Layout and page composition

---

## Styling Approach

The project uses a hybrid styling system:

- **CSS variables** for theming (light/dark)
- **Inline styles** for component-level control
- **TailwindCSS** only as a global baseline (reset/utilities)

Example:

```ts
style={{
  background: 'rgb(var(--panel))',
  border: '1px solid rgb(var(--border))'
}}
```

---

## Testing

### Unit Tests

```bash
pnpm --filter web test
```

Covers:
- UI behavior (React Testing Library)
- Business logic (`/lib`)
- Component interaction flows

### Tools

- Vitest
- jsdom
- @testing-library/react
- @testing-library/jest-dom

---

## Environment

Create a `.env.local` file if needed:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## Project Structure

```
turborepo/apps/web
├── app              # Next.js routing
├── components       # UI components
├── lib              # business logic
├── messages         # i18n files
├── public           # static assets
├── __tests__        # test suite
├── package.json
└── README.md
```

---

## Notes

- All trade calculations are performed client-side for instant feedback.
- Backend is used only for data retrieval (items, NPCs, offers).
- Styling prioritizes flexibility and theming over utility-class usage.

---

## Documentation

This project was developed as part of a university final project.  
Implementation evolved beyond the initial plan (Vite/Tailwind-first) into a Next.js-based architecture with a custom styling system.
This documentation was generated with the assistance of AI and reviewed by the author.