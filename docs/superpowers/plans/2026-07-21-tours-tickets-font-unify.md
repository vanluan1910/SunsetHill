# Tours Tickets Font Unify Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Tours & Tickets typography consistent by using sans-serif for card/body text and reserving serif for major headings.

**Architecture:** Modify only typography classes in `src/components/ToursTickets.jsx`. Keep layout, content, i18n, and CTA unchanged.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/ToursTickets.jsx`
- Responsibility: Render Tours & Tickets page.

### Task 1: Unify Tours Card Fonts

**Files:**
- Modify: `src/components/ToursTickets.jsx`

- [ ] **Step 1: Change tour card title font**

Change tour card title from:

```jsx
className="font-serif text-2xl font-semibold leading-tight text-[#1d1b19]"
```

to:

```jsx
className="font-sans text-xl font-bold leading-tight text-[#1d1b19]"
```

Expected: card title uses the same sans-serif family as card/body text.

- [ ] **Step 2: Verify major headings stay serif**

Keep `font-serif` on hero title, section heading, and CTA heading.

Expected: visual hierarchy remains consistent with other pages.

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

- Spec coverage: Card font unified, major headings preserved.
- Placeholder scan: No placeholders remain.
- Type consistency: No API changes.
