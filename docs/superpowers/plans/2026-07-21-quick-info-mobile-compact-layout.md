# Quick Info Mobile Compact Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Quick Info mobile layout more compact and visually balanced so text blocks are not spaced too far apart.

**Architecture:** Keep the existing desktop layout unchanged. Modify only the mobile branch in `src/components/QuickInfo.jsx` by replacing viewport-height distribution with natural vertical flow, tighter cards, smaller gaps, and denser text styling.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/QuickInfo.jsx`
- Responsibility: Render the Quick Information page. The mobile branch is inside `<div className="md:hidden">`; desktop is inside `<div className="hidden md:block">` and must remain unchanged.

### Task 1: Compact Mobile Quick Info Layout

**Files:**
- Modify: `src/components/QuickInfo.jsx:17-91`

- [ ] **Step 1: Verify current build baseline**

Run: `npm run build`

Expected: build completes successfully before layout changes.

- [ ] **Step 2: Replace mobile height-distributed layout with compact flow**

In `src/components/QuickInfo.jsx`, update only the JSX inside `<div className="md:hidden">`.

Use these layout rules:

```jsx
<main className="min-h-[calc(100dvh-4rem)] px-4 pb-5 pt-3">
  <section className="mx-auto flex max-w-md flex-col gap-3">
```

This removes `h-[calc(100dvh-4rem)]`, `flex-1`, and `justify-between`, which are the source of excessive spacing on tall mobile screens.

- [ ] **Step 3: Tighten mobile cards and text rhythm**

Apply compact card classes in the mobile branch:

```jsx
className="rounded-2xl border border-white/45 bg-[#fdf8f4]/72 p-3.5 shadow-sm backdrop-blur-xl"
className="mt-1 font-serif text-[22px] font-semibold leading-[1.05] text-[#1d1b19]"
className="mt-1 text-[12px] leading-4 text-[#57423b]"
className="space-y-2"
className="grid grid-cols-2 gap-2"
className="rounded-2xl border border-[#dfc0b7]/25 bg-[#f8f3ef]/95 p-3 shadow-sm"
```

Expected: header, timing cards, breakfast card, late checkout list, and CTA sit closer together without overlapping.

- [ ] **Step 4: Make breakfast and late-checkout cards denser**

Use a shorter breakfast card height and denser late-checkout rows:

```jsx
className="relative flex min-h-[104px] shrink-0 items-center overflow-hidden rounded-[20px] p-3.5 shadow-md"
className="relative z-10 max-w-[76%] space-y-0.5"
className="text-xs leading-4 text-[#57423b]"
className="overflow-hidden rounded-[20px] border border-[#dfc0b7]/30 bg-[#fdf8f4]/74 shadow-sm backdrop-blur-xl divide-y divide-[#dfc0b7]/25"
className="flex items-center justify-between gap-3 px-3.5 py-2"
```

Expected: text spacing feels compact and readable on mobile.

- [ ] **Step 5: Verify build after changes**

Run: `npm run build`

Expected: build completes successfully.

- [ ] **Step 6: Manual mobile check**

Run: `npm run dev -- --host 127.0.0.1`

Open the local URL and inspect mobile width around 375px.

Expected: Quick Info mobile content is compact; text blocks no longer have large vertical gaps; desktop layout remains unchanged at `md` and above.

- [ ] **Step 7: Commit**

Not applicable in this workspace because `D:\SunsetHill` is not a git repository.

## Self-Review

- Spec coverage: Covers compact card direction, reduced text spacing, and mobile-only scope.
- Placeholder scan: No placeholders remain.
- Type consistency: JSX component and imports remain unchanged.
