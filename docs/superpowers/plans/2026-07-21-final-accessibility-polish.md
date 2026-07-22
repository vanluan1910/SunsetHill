# Final Accessibility Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve final accessibility by syncing the document language to the selected UI language and hiding remaining decorative icons from assistive technology.

**Architecture:** Modify `src/App.jsx` to update `document.documentElement.lang` whenever the selected language changes. Modify `TravelTips.jsx` and `LocalFood.jsx` to add `aria-hidden="true"` to decorative Material Symbols.

**Tech Stack:** React JSX, Vite.

---

## File Structure

- Modify: `src/App.jsx`
- Modify: `src/components/TravelTips.jsx`
- Modify: `src/components/LocalFood.jsx`

### Task 1: Sync Document Language

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add effect for document language**

Update `document.documentElement.lang` whenever `lang` changes.

Expected: screen readers and browser language-sensitive behavior track the selected language.

### Task 2: Mark Decorative Icons Hidden

**Files:**
- Modify: `src/components/TravelTips.jsx`
- Modify: `src/components/LocalFood.jsx`

- [ ] **Step 1: TravelTips decorative icons**

Add `aria-hidden="true"` to decorative Material Symbols where adjacent visible text already communicates the meaning.

- [ ] **Step 2: LocalFood decorative icons**

Add `aria-hidden="true"` to decorative Material Symbols where adjacent visible text already communicates the meaning.

Expected: screen readers stop announcing visual-only ligature names.

### Task 3: Verify

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: document language and decorative icon accessibility both addressed.
- Placeholder scan: No placeholders remain.
- Type consistency: no behavior changes beyond accessibility metadata.
