# Content Text Colors Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize text colors across all non-home content pages using one shared four-role palette.

**Architecture:** Modify presentation classes only. Keep page layouts, shared component APIs, and content unchanged.

**Tech Stack:** React JSX, Tailwind utility classes.

---

## File Structure

- Modify: `src/components/QuickInfo.jsx`
- Modify: `src/components/WifiReception.jsx`
- Modify: `src/components/HouseRules.jsx`
- Modify: `src/components/MotorbikeRental.jsx`
- Modify: `src/components/ToursTickets.jsx`
- Modify: `src/components/ExplorePhuQuoc.jsx`
- Modify: `src/components/Attractions.jsx`
- Modify: `src/components/LocalFood.jsx`
- Modify: `src/components/TravelTips.jsx`

### Task 1: Apply Shared Text-Color Roles

**Files:**
- Modify all files listed above.

- [ ] **Step 1: Primary title role**

Use `#1d1b19` for primary title text.

- [ ] **Step 2: Accent heading role**

Use `#8a501a` for accent serif headings/secondary visual titles.

- [ ] **Step 3: Body role**

Use `#57423b` for main body copy.

- [ ] **Step 4: Meta/support role**

Use `#8b7169` for notes, helper text, and lighter support copy.

Expected: pages read as one family instead of mixing multiple near-identical browns.

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

- Spec coverage: text colors standardized across all non-home content pages only.
- Placeholder scan: No placeholders remain.
- Type consistency: shared components and layouts unchanged.
