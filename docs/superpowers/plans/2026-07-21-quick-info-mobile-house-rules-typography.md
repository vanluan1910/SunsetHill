# Quick Info Mobile House Rules Typography Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Quick Info mobile typography feel closer to House Rules while keeping the compact layout and current content.

**Architecture:** Modify only mobile Tailwind typography/icon classes in `src/components/QuickInfo.jsx`. Do not change copy, translation keys, desktop JSX, data imports, or section order.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/QuickInfo.jsx`
- Responsibility: Render Quick Info; only the `<div className="md:hidden">` typography classes are in scope.

### Task 1: Tune Quick Info Mobile Typography Toward House Rules

**Files:**
- Modify: `src/components/QuickInfo.jsx:17-98`

- [ ] **Step 1: Update main title and subtitle**

Use:

```jsx
className="mt-1 font-serif text-3xl font-bold leading-[1.05] text-[#1d1b19]"
className="mt-1.5 text-sm leading-5 text-[#57423b]"
```

Expected: header feels closer to House Rules `text-3xl` and readable mobile intro.

- [ ] **Step 2: Update timing card typography and icons**

Use:

```jsx
className="material-symbols-outlined flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#922f05]/10 text-[24px] text-[#922f05]"
className="text-lg font-bold leading-tight text-[#1d1b19]"
className="mt-0.5 text-base font-semibold leading-tight text-[#922f05]"
```

Expected: timing cards align with House Rules card title scale.

- [ ] **Step 3: Update policy and breakfast typography**

Use:

```jsx
className="flex items-center gap-1.5 font-serif text-lg font-semibold text-[#57423b]"
className="text-sm leading-normal text-[#57423b]"
className="text-base leading-tight text-[#1d1b19]"
className="text-right text-base font-bold leading-tight text-[#922f05]"
className="font-serif text-xl font-semibold leading-tight text-[#922f05]"
className="text-sm leading-normal text-[#57423b]"
```

Expected: section titles and body copy are larger but still compact.

- [ ] **Step 4: Verify build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 5: Verify lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: Mobile Quick Info typography moves toward House Rules scale.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing component API and i18n keys remain unchanged.
