# Attractions Editorial Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake Attractions across mobile and desktop with an editorial hero, signature bento grid, culture cards, and one support CTA.

**Architecture:** Replace `src/components/Attractions.jsx` layout and remove Framer Motion dependency from this component. Keep `SIGNATURE`, `SIGHTSEEING`, translations, times, images, and map links.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/Attractions.jsx`
- Responsibility: Render Attractions & Sightseeing page.

### Task 1: Build Reusable Attraction Cards

**Files:**
- Modify: `src/components/Attractions.jsx`

- [ ] **Step 1: Remove Framer Motion usage**

Delete `motion`, `containerVariants`, and `cardVariants` from this component.

Expected: presentation uses CSS/Tailwind transitions only.

- [ ] **Step 2: Add helpers**

Create local helpers for signature, culture, and craft cards that render current data and `MapLink`.

Expected: mobile and desktop share card rendering.

### Task 2: Replace Mobile And Desktop Layouts

**Files:**
- Modify: `src/components/Attractions.jsx`

- [ ] **Step 1: Render mobile layout**

Use a compact image hero and stacked cards for all attractions.

Expected: images, descriptions, distance, hours, and map links remain visible.

- [ ] **Step 2: Render desktop hero**

Use a large editorial hero with `attr.title` and `attr.desc` overlay.

- [ ] **Step 3: Render desktop signature bento**

Use VinWonders `col-span-8`, Safari `col-span-4`, and Kiss Bridge `col-span-12`.

- [ ] **Step 4: Render culture and craft sections**

Render Pagoda, Prison, Sunset Town as full culture cards. Render Pepper Farm, Pearl Farm, and Fish Sauce as compact horizontal cards.

- [ ] **Step 5: Add one support CTA**

Use one transport/help CTA at the bottom without duplicate card-level CTA buttons.

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

- Spec coverage: All 9 attractions remain represented, with one CTA and consistent fonts.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing data fields and `MapLink` usage remain valid.
