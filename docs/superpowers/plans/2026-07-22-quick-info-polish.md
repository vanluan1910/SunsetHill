# Quick Info Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply a final light visual polish to Quick Information without changing its content or structure.

**Architecture:** Modify only `src/components/QuickInfo.jsx`. Adjust spacing, hierarchy, and emphasis slightly for a cleaner, more balanced presentation.

**Tech Stack:** React JSX, Tailwind utility classes.

---

## File Structure

- Modify: `src/components/QuickInfo.jsx`

### Task 1: Refine Quick Info Visual Rhythm

**Files:**
- Modify: `src/components/QuickInfo.jsx`

- [ ] **Step 1: Mobile spacing and density**

Refine the spacing between header, sections, and CTA for a more even mobile rhythm.

- [ ] **Step 2: Card emphasis**

Slightly rebalance title/body emphasis where cards feel too tight or visually uneven.

- [ ] **Step 3: Desktop spacing polish**

Adjust hero-to-card spacing and card internal spacing if needed, without changing layout.

Expected: Quick Info feels more polished and balanced while retaining the same structure and content.

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

- Spec coverage: visual polish only.
- Placeholder scan: No placeholders remain.
- Type consistency: no content or structural changes.
