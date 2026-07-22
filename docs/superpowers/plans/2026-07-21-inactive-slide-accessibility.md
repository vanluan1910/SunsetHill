# Inactive Slide Accessibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prevent off-screen slides from remaining tabbable/focusable while preserving the current slide system and swipe/navigation behavior.

**Architecture:** Modify only `src/App.jsx`. Keep all slides mounted, but mark non-active slide containers as inert/aria-hidden so keyboard users can only interact with the visible page.

**Tech Stack:** React JSX, Vite.

---

## File Structure

- Modify: `src/App.jsx`
- Responsibility: Render slide container and page shells.

### Task 1: Make Inactive Slides Non-Interactive

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add slide container helper props**

For each slide wrapper, compute whether it is active.

- [ ] **Step 2: Mark inactive slides hidden from assistive tech**

Apply:

```text
aria-hidden={slide !== index}
```

to each slide wrapper.

- [ ] **Step 3: Mark inactive slides inert**

Apply:

```text
inert={slide !== index ? '' : undefined}
```

or the React-safe equivalent supported by the runtime.

Expected: inactive slide descendants are no longer reachable by keyboard focus.

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

- Spec coverage: inactive slides remain mounted but are no longer interactive to assistive technology and keyboard users.
- Placeholder scan: No placeholders remain.
- Type consistency: Slide navigation behavior remains unchanged.
