# House Rules Color Align Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align House Rules text colors to the shared content-page palette while preserving its special highlight and dark card treatments.

**Architecture:** Modify only `src/components/HouseRules.jsx`. Normalize heading/body tones on the regular and dark cards, while leaving the alert/highlight card visually special.

**Tech Stack:** React JSX, Tailwind utility classes.

---

## File Structure

- Modify: `src/components/HouseRules.jsx`

### Task 1: Align House Rules Text Colors

**Files:**
- Modify: `src/components/HouseRules.jsx`

- [ ] **Step 1: Regular rule cards**

Use the shared accent/body colors for regular rule titles and copy.

- [ ] **Step 2: Dark card and icon accents**

Reduce the reddish-brown drift where it deviates from the shared accent role, while keeping contrast intact.

- [ ] **Step 3: Hero/support copy tones**

Ensure hero description and support CTA copy match the shared body/meta palette.

Expected: House Rules feels visually aligned with the rest of the content pages without losing its distinct featured card.

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

- Spec coverage: House Rules color-only alignment completed.
- Placeholder scan: No placeholders remain.
- Type consistency: layout and content remain unchanged.
