# Performance Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce initial JavaScript and make image/service data easier to maintain while preserving the existing slide UX.

**Architecture:** Keep `App.jsx` as the slide coordinator. Lazy-load lower-priority slides with React `lazy`/`Suspense`, then centralize low-risk data and reduce duplication in `MotorbikeRental.jsx`.

**Tech Stack:** React 19, Vite, TailwindCSS, Framer Motion.

---

### Task 1: Slide Code-Splitting

**Files:**
- Modify: `src/App.jsx`

- [ ] Import `Suspense` and `lazy` from React.
- [ ] Keep first slides eager for fast first paint.
- [ ] Lazy-load lower-priority slides.
- [ ] Add a lightweight slide fallback.
- [ ] Run `npm run build` and inspect generated chunks.

### Task 2: Low-Risk Data Cleanup

**Files:**
- Modify only files already using simple constants.

- [ ] Centralize image URLs only where it reduces duplication without changing markup.
- [ ] Avoid broad changes to page visuals.
- [ ] Run `npm run build`.

### Task 3: Motorbike Rental Cleanup

**Files:**
- Modify: `src/components/MotorbikeRental.jsx`

- [ ] Reuse service image data consistently.
- [ ] Keep mobile dropdown behavior unchanged.
- [ ] Avoid changing displayed service text or prices.
- [ ] Run `npm run lint` and `npm run build`.
