# Tours Tickets Card Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake Tours & Tickets with a large hero, travel card grid, and one Reception CTA using existing tour content.

**Architecture:** Replace `src/components/ToursTickets.jsx` layout. Keep `TOURS`, `RECEPTION_TEL`, and i18n keys; update English `tours.desc` to match the provided reference copy.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/i18n.js`
- Responsibility: Store English Tours description.
- Modify: `src/components/ToursTickets.jsx`
- Responsibility: Render Tours & Tickets page.

### Task 1: Update Tours Description

**Files:**
- Modify: `src/i18n.js:141-144`

- [ ] **Step 1: Update English description**

Set:

```js
'tours.desc': { en: 'Explore the vibrant culture and natural wonders of Phu Quoc Island. Let us handle the details while you make the memories.', ... }
```

Expected: hero subtitle matches the provided HTML reference.

### Task 2: Replace Tours Layout

**Files:**
- Modify: `src/components/ToursTickets.jsx:1-98`

- [ ] **Step 1: Remove `SectionHeader` usage**

Delete the `SectionHeader` import and render a custom hero/section title instead.

Expected: layout no longer uses the old header/list design.

- [ ] **Step 2: Add `TourCard` helper**

Create a reusable card that renders image, title, sub label, and no per-card CTA button.

Expected: avoids repeated Reception buttons; only one CTA at bottom.

- [ ] **Step 3: Render mobile layout**

Use mobile hero image card, section heading, stacked tour cards, and one bottom CTA.

Expected: mobile follows reference while staying readable.

- [ ] **Step 4: Render desktop layout**

Use desktop hero image, centered `Discover Phu Quoc` heading, and grid:

```jsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
```

Expected: desktop matches the card grid direction from the provided HTML.

### Task 3: Verify

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: Hero, 8 tour cards, one CTA, updated English subtitle.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing `TOURS` item structure remains valid.
