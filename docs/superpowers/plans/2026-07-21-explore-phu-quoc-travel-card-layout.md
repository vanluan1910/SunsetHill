# Explore Phu Quoc Travel Card Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake Explore Phu Quoc with a Tours-style hero and card grid while preserving current beach content.

**Architecture:** Replace layout in `src/components/ExplorePhuQuoc.jsx`. Keep `BEACHES`, `HERO_IMG`, `MapLink`, and all existing i18n keys/content unchanged.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/ExplorePhuQuoc.jsx`
- Responsibility: Render Explore Phu Quoc page.

### Task 1: Replace Explore Layout

**Files:**
- Modify: `src/components/ExplorePhuQuoc.jsx:1-130`

- [ ] **Step 1: Add local BeachCard helper**

Create a `BeachCard` helper that renders image, title, distance, description, opening hours, and `MapLink`.

Expected: mobile and desktop share consistent card chrome.

- [ ] **Step 2: Render mobile hero and stacked cards**

Use:

```jsx
<main className="mx-auto max-w-lg px-4 py-5">
```

Mobile hero: image card with overlay title/description.

Expected: mobile follows the travel/tickets visual style while keeping Explore content.

- [ ] **Step 3: Render desktop hero and card grid**

Use:

```jsx
<main className="mx-auto max-w-7xl px-10 py-12">
```

Desktop hero: large image with overlay title/description.
Grid: three beach cards in `lg:grid-cols-3`.

Expected: desktop resembles the provided Tours layout but shows current beaches.

- [ ] **Step 4: Add one CTA section**

Add a final assistance-style section without extra nav/footer, using existing map/reception language if possible.

Expected: one clear support section at bottom, matching the other remade pages.

### Task 2: Verify

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: Preserves beaches and maps while applying Tours-style layout.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing props and imports remain valid.
