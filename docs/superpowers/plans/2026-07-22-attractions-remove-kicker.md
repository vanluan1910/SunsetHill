# Attractions Remove Kicker Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the `Thrill & Wonder` text from Attractions while leaving the rest of the page intact.

**Architecture:** Modify only `src/components/Attractions.jsx`. Remove the kicker usage where it currently feeds the hero/section heading.

**Tech Stack:** React JSX, Vite.

---

## File Structure

- Modify: `src/components/Attractions.jsx`

### Task 1: Remove Kicker Text

**Files:**
- Modify: `src/components/Attractions.jsx`

- [ ] **Step 1: Remove mobile kicker**

Remove the mobile hero/section kicker value for `Thrill & Wonder`.

- [ ] **Step 2: Remove desktop kicker**

Remove the desktop hero/section kicker value for `Thrill & Wonder`.

Expected: the page no longer shows `Thrill & Wonder`, while titles and cards remain unchanged.

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

- Spec coverage: only the `Thrill & Wonder` label is removed.
- Placeholder scan: No placeholders remain.
- Type consistency: all existing data and cards remain unchanged.
