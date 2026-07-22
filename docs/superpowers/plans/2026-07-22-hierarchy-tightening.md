# Hierarchy Tightening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tighten typography, section rhythm, and text-color hierarchy across the recently refactored pages so the app feels more cohesive and polished.

**Architecture:** Avoid structural rewrites. Make focused edits to page headings, card-title styling, repeated body/meta text colors, and redundant section headers after heroes.

**Tech Stack:** React JSX, CSS, Tailwind utility classes.

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
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

### Task 1: Remove Remaining Redundant Section Intros

**Files:**
- Modify page components where a hero is immediately followed by another heading/kicker that feels repetitive.

- [ ] **Step 1: Review hero-following section titles**

Keep only section headers that add real information. Remove or simplify ones that merely repeat the hero message.

Expected: pages feel less stacked with repeated titles.

### Task 2: Align Card Title Hierarchy

**Files:**
- Modify cards in the content pages listed above.

- [ ] **Step 1: Use sans-bold for repeated card titles**

Repeated card titles should use `font-sans` and bold weight for scanability.

- [ ] **Step 2: Keep serif for page/section titles only**

Page-level and major section titles remain `font-serif`.

Expected: a cleaner editorial-vs-utility split.

### Task 3: Align Body and Meta Color Roles

**Files:**
- Modify repeated text classes across page components.

- [ ] **Step 1: Normalize body color**

Use one shared body-text tone where content serves the same role.

- [ ] **Step 2: Normalize meta/support text tone**

Use one lighter support/meta text role where content serves the same role.

Expected: pages no longer feel like each section has its own near-identical brown.

### Task 4: Align Older Pages With The Newer System

**Files:**
- Modify: `src/components/LocalFood.jsx`
- Modify: `src/components/TravelTips.jsx`
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

- [ ] **Step 1: LocalFood and TravelTips**

Bring headings and card/body hierarchy closer to the newer pages.

- [ ] **Step 2: Home supporting copy balance**

Keep Home distinct, but ensure the mobile/desktop copy hierarchy looks intentional alongside the rest of the site.

### Task 5: Verify

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: hierarchy is tightened without changing the core layouts again.
- Placeholder scan: No placeholders remain.
- Type consistency: shared components stay stable; only presentation classes change.
