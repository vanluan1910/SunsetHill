# Travel Tips Taxi Action Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a real Reception contact action to the Travel Tips taxi-help block.

**Architecture:** Modify only `src/components/TravelTips.jsx`. Keep the existing content and layout, but add a clear clickable action using `RECEPTION_TEL` where the page currently implies taxi booking help.

**Tech Stack:** React JSX, Framer Motion, existing contact constants.

---

## File Structure

- Modify: `src/components/TravelTips.jsx`
- Responsibility: Render Travel Tips content.

### Task 1: Add Taxi Contact Action

**Files:**
- Modify: `src/components/TravelTips.jsx`

- [ ] **Step 1: Mobile taxi block**

Add a `tel:` CTA button or link inside the mobile taxi-help block.

- [ ] **Step 2: Desktop taxi block**

Add the same Reception action inside the desktop taxi-help block.

Expected: the Taxi section offers a concrete action instead of only descriptive text.

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

- Spec coverage: both mobile and desktop taxi-help blocks gain a real action.
- Placeholder scan: No placeholders remain.
- Type consistency: uses the existing `RECEPTION_TEL` constant.
