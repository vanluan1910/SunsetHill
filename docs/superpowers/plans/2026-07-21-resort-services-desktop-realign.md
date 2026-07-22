# Resort Services Desktop Realign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Realign Resort Services desktop layout with the recently remade Quick Info, Wi-Fi, and House Rules pages.

**Architecture:** Keep mobile unchanged. Replace only the desktop branch in `src/components/MotorbikeRental.jsx` with a max-width hero plus bento card grid, reusing the current service card components and content.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/MotorbikeRental.jsx`
- Responsibility: Render Resort Services page; only desktop branch and desktop presentation classes are in scope.

### Task 1: Desktop Hero And Bento Grid

**Files:**
- Modify: `src/components/MotorbikeRental.jsx:197-225`

- [ ] **Step 1: Replace desktop sidebar layout**

Replace the `grid min-h-[calc(100dvh-4rem)] grid-cols-12` desktop layout with:

```jsx
<main className="mx-auto w-full max-w-7xl px-10 py-12">
```

Expected: desktop no longer looks like a split dashboard/sidebar.

- [ ] **Step 2: Add top hero row**

Render a top hero section with:

```jsx
<section className="mb-10 grid grid-cols-12 items-end gap-8">
```

Left side: label, `services.title`, intro.
Right side: assistance hotline card.

Expected: hero aligns with Quick Info/Wi-Fi desktop language.

- [ ] **Step 3: Add bento services grid**

Render:

```jsx
<section className="grid grid-cols-12 gap-5">
```

Use spans:
- Motorbike: `col-span-5 row-span-2`
- Laundry: `col-span-4`
- Pool: `col-span-3`
- Airport: `col-span-4`
- Taxi: `col-span-5`
- Assistance: `col-span-3`

Expected: desktop visually matches the bento/grid language of House Rules and card language of Quick Info.

- [ ] **Step 4: Keep content and mobile unchanged**

Do not change mobile JSX or i18n content.

Expected: only desktop visual arrangement changes.

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

- Spec coverage: Desktop-only realignment with existing content preserved.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing component names and service variables remain unchanged.
