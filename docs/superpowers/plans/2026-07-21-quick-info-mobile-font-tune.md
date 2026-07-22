# Quick Info Mobile Font Tune Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Increase Quick Info mobile font sizes slightly for better readability while preserving the current compact layout.

**Architecture:** Modify only mobile Tailwind font-size classes in `src/components/QuickInfo.jsx`. Keep text, data keys, block order, images, desktop JSX, and spacing architecture unchanged.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/QuickInfo.jsx`
- Responsibility: Render the Quick Info page. Only mobile typography classes inside `<div className="md:hidden">` are in scope.

### Task 1: Increase Mobile Typography

**Files:**
- Modify: `src/components/QuickInfo.jsx:17-91`

- [ ] **Step 1: Update approved font-size classes**

Change these mobile-only classes:

```jsx
text-[22px] -> text-2xl
text-[13px] font-bold -> text-[15px] font-bold
text-[12px] font-semibold -> text-[13px] font-semibold
text-[17px] -> text-lg
text-xs leading-4 -> text-[13px] leading-[1.35]
text-[13px] leading-tight -> text-sm leading-tight
text-right text-[13px] -> text-right text-sm
```

Expected: typography is more readable without changing content or layout structure.

- [ ] **Step 2: Verify build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 3: Verify lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: Only typography sizes are changed.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing component API and translation keys remain unchanged.
