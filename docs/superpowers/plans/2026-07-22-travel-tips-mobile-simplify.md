# Travel Tips Mobile Simplify Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the perceived density of Travel Tips on mobile while preserving the current information set.

**Architecture:** Modify only the `md:hidden` branch of `src/components/TravelTips.jsx`. Keep desktop intact. Simplify by reducing repeated support blocks, compressing card sequences, and improving grouping.

**Tech Stack:** React JSX, Framer Motion, Tailwind utility classes.

---

## File Structure

- Modify: `src/components/TravelTips.jsx`

### Task 1: Simplify Mobile Travel Tips Flow

**Files:**
- Modify: `src/components/TravelTips.jsx`

- [ ] **Step 1: Tighten the intro stack**

Reduce repeated intro-card heaviness where two stacked explanatory cards feel redundant.

- [ ] **Step 2: Simplify support-card sequence**

Reduce the number or visual weight of the luggage/taxi/help trio so the bottom of the page feels lighter.

- [ ] **Step 3: Keep one clear CTA path**

Preserve the taxi action and general help access, but avoid too many equally weighted support blocks.

Expected: mobile page feels shorter and easier to scan without losing major content.

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

- Spec coverage: mobile density reduced; desktop unchanged.
- Placeholder scan: No placeholders remain.
- Type consistency: content and translation keys unchanged.
