# Quick Info Mobile Layout Only Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adjust only the Quick Info mobile layout so the existing content fits more like the provided reference screen.

**Architecture:** Modify only the mobile branch in `src/components/QuickInfo.jsx`. Keep all existing translated text, image usage, data keys, imports, and desktop JSX unchanged; only move existing mobile blocks and change Tailwind layout classes.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/QuickInfo.jsx`
- Responsibility: Render Quick Info page. Only the `<div className="md:hidden">` branch is in scope.

### Task 1: Layout-Only Mobile Reflow

**Files:**
- Modify: `src/components/QuickInfo.jsx:17-91`

- [ ] **Step 1: Preserve content contract**

Do not change these references:

```jsx
t('quickInfo.title', lang)
t('quickInfo.subtitle', lang)
t('quickInfo.checkin', lang)
t('quickInfo.checkinTime', lang)
t('quickInfo.checkout', lang)
t('quickInfo.checkoutTime', lang)
t('quickInfo.breakfast', lang)
t('quickInfo.breakfastTime', lang)
t('quickInfo.breakfastDesc', lang)
t('quickInfo.lateCheckout', lang)
LATE_CHECKOUT_RULES.map(...)
t('rules.contactReception', lang)
t('services.help247', lang)
TRAVEL_TIPS_IMAGES.service
RECEPTION_TEL
```

- [ ] **Step 2: Reflow mobile into dense stacked cards**

Use natural stacking instead of height distribution:

```jsx
<main className="min-h-[calc(100dvh-4rem)] px-4 pb-4 pt-3">
  <section className="mx-auto flex max-w-md flex-col gap-2.5">
```

Expected: cards stay close together and can fit one mobile screen better.

- [ ] **Step 3: Change check-in/check-out cards to vertical list cards**

Use one-column card list like the reference instead of a two-column grid:

```jsx
<div className="space-y-2">
  <div className="flex items-center gap-3 rounded-2xl border border-[#dfc0b7]/25 bg-[#f8f3ef]/95 p-3 shadow-sm">
```

Expected: each timing card reads like one horizontal row with compact title and time.

- [ ] **Step 4: Keep existing breakfast image but make it a compact card**

Do not remove `TRAVEL_TIPS_IMAGES.service`; reduce the breakfast card footprint with layout classes only:

```jsx
className="relative flex min-h-[96px] shrink-0 items-center overflow-hidden rounded-[20px] p-3 shadow-md"
className="relative z-10 max-w-[78%] space-y-0.5"
```

Expected: breakfast remains visually present but no longer consumes excessive height.

- [ ] **Step 5: Keep late checkout rows dense**

Use compact row spacing:

```jsx
className="flex items-center justify-between gap-3 px-3.5 py-1.5"
```

Expected: all three late checkout rows remain visible with less vertical space.

- [ ] **Step 6: Verify**

Run: `npm run build`

Expected: Vite build succeeds.

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: Layout-only user constraint is explicit.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing component API and imports remain unchanged.
