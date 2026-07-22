# Resort Services Remove Intro Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the `services.intro` line from Resort Services on both mobile and desktop.

**Architecture:** Modify only `src/components/MotorbikeRental.jsx` by deleting the intro paragraphs in the mobile header block and desktop hero block.

**Tech Stack:** React JSX, Vite.

---

## File Structure

- Modify: `src/components/MotorbikeRental.jsx`

### Task 1: Remove Intro Copy

**Files:**
- Modify: `src/components/MotorbikeRental.jsx`

- [ ] **Step 1: Remove mobile intro paragraph**

Delete the paragraph below the mobile `services.title`.

- [ ] **Step 2: Remove desktop intro paragraph**

Delete the paragraph below the desktop `services.title`.

Expected: Resort Services keeps the title and cards only, without the extra intro line.

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

- Spec coverage: intro removed on both breakpoints only.
- Placeholder scan: No placeholders remain.
- Type consistency: page structure otherwise unchanged.
