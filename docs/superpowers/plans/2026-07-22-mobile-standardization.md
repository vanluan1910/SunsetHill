# Mobile Standardization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make all non-home content pages feel like one mobile system through a shared layout skeleton and a limited 3-role text palette.

**Architecture:** Standardize only the `md:hidden` branches of the content pages. Reuse current shared components and current page-specific cards, but align hero spacing, content stack rhythm, CTA placement, and text-color roles.

**Tech Stack:** React JSX, Tailwind utility classes, existing shared components.

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

### Task 1: Standardize Mobile Skeleton

**Files:**
- Modify all files listed above

- [ ] **Step 1: Hero/header block spacing**

Normalize the mobile top block rhythm so each page has a clear intro/hero area with consistent top and bottom spacing.

- [ ] **Step 2: Main content stack rhythm**

Normalize vertical spacing between the content cards/sections on each page.

- [ ] **Step 3: Bottom CTA rhythm**

Ensure each page ends with one support/action block that sits at a consistent distance below the main content.

Expected: mobile pages feel like one system rather than nine independent layouts.

### Task 2: Standardize Mobile Text Colors

**Files:**
- Modify all files listed above

- [ ] **Step 1: Primary title role**

Use `#1d1b19` for primary page/card titles.

- [ ] **Step 2: Accent/section role**

Use `#8a501a` for section-level accents and emphasized heading text.

- [ ] **Step 3: Body/meta roles**

Use `#57423b` for body copy and `#8b7169` for meta/support copy.

Expected: mobile no longer mixes too many near-identical browns.

### Task 3: Preserve Page Personality

**Files:**
- Modify pages only where needed.

- [ ] **Step 1: Keep unique content structures**

Do not flatten special pages like Attractions or House Rules into generic lists if their existing cards already work.

- [ ] **Step 2: Limit changes to rhythm and roles**

Do not introduce new data structures or broad abstractions.

### Task 4: Verify

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: mobile-only standardization with shared skeleton and 3-role palette.
- Placeholder scan: No placeholders remain.
- Type consistency: desktop and shared component APIs remain unchanged.
