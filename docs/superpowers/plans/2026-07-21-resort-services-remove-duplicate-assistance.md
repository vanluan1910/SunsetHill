# Resort Services Remove Duplicate Assistance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the duplicate desktop `Need Assistance?` section from Resort Services and rebalance the desktop grid.

**Architecture:** Modify only the desktop bento grid in `src/components/MotorbikeRental.jsx`. Keep the hero assistance card, mobile assistance card, and all content unchanged.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/MotorbikeRental.jsx`
- Responsibility: Render Resort Services page.

### Task 1: Remove Duplicate Desktop Assistance Card

**Files:**
- Modify: `src/components/MotorbikeRental.jsx:240-246`

- [ ] **Step 1: Remove desktop grid assistance card**

Delete this block from the desktop grid:

```jsx
<div className="col-span-3">
  <AssistanceCard lang={lang} desktop />
</div>
```

Expected: desktop has only one `Need Assistance?` card, in the hero section.

- [ ] **Step 2: Widen taxi card wrapper**

Change taxi wrapper from:

```jsx
<div className="col-span-5">
```

to:

```jsx
<div className="col-span-8">
```

Expected: grid remains balanced after removing the duplicate assistance card.

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

- Spec coverage: Removes duplicate desktop assistance only.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing components remain unchanged.
