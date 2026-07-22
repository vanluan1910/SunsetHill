# Shared Components Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract repeated UI and constants into shared components/data so the app is easier to maintain without changing the overall slide experience.

**Architecture:** Keep `App.jsx` as the slide coordinator. Add shared UI primitives under `src/components/shared/` and shared data under `src/data/`. Refactor duplicated contact/map/header/card patterns incrementally.

**Tech Stack:** React 19, Vite, TailwindCSS, Framer Motion, custom `i18n.js`.

---

### Task 1: Shared Data And UI Primitives

**Files:**
- Create: `src/data/contact.js`
- Create: `src/components/shared/SectionHeader.jsx`
- Create: `src/components/shared/InfoCard.jsx`
- Create: `src/components/shared/ContactCTA.jsx`
- Create: `src/components/shared/MapLink.jsx`

- [ ] Add reception contact constants.
- [ ] Add shared title/header/card/contact/map components.
- [ ] Verify with `npm run build`.

### Task 2: Replace Repeated Contact And Map Markup

**Files:**
- Modify: `src/components/WifiReception.jsx`
- Modify: `src/components/HouseRules.jsx`
- Modify: `src/components/MotorbikeRental.jsx`
- Modify: `src/components/ToursTickets.jsx`
- Modify: `src/components/ExplorePhuQuoc.jsx`
- Modify: `src/components/LocalFood.jsx`
- Modify: `src/components/Attractions.jsx`
- Modify: `src/i18n.js`

- [ ] Replace hard-coded reception phone/WhatsApp with shared contact constants or `ContactCTA`.
- [ ] Replace Google Maps link text with `MapLink`.
- [ ] Add common i18n keys for map/opening-hours text.
- [ ] Verify with `npm run lint` and `npm run build`.

### Task 3: Reduce Duplication In Low-Risk Pages

**Files:**
- Modify: `src/components/QuickInfo.jsx`
- Modify: `src/components/HouseRules.jsx`
- Modify: `src/components/ToursTickets.jsx`
- Modify: `src/components/ExplorePhuQuoc.jsx`
- Modify: `src/components/LocalFood.jsx`

- [ ] Use `SectionHeader` and `InfoCard` where markup is repeated.
- [ ] Remove misleading `cursor-pointer` from non-clickable cards.
- [ ] Keep visual output close to existing design.
- [ ] Verify with `npm run build`.

### Task 4: Accessibility Pass

**Files:**
- Modify: `src/components/Header.jsx`
- Modify: `src/components/TravelTips.jsx`

- [ ] Add `aria-hidden` to decorative Material Symbols where practical.
- [ ] Add `aria-expanded` and stable answer ids to FAQ buttons.
- [ ] Add `aria-expanded` to menu/dropdown triggers.
- [ ] Verify with `npm run lint` and `npm run build`.

### Task 5: Final Verification

**Files:**
- No intended code changes.

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Manually smoke-check slide navigation and language switching.
