# Home Hero Simplify Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove extra Home hero headings so the welcome message appears only in the supporting copy below.

**Architecture:** Modify only `src/components/WelcomePage.jsx`. Keep the home layout and styling intact while simplifying the visible hero text hierarchy.

**Tech Stack:** React JSX, Vite, existing i18n helper.

---

## File Structure

- Modify: `src/components/WelcomePage.jsx`
- Responsibility: Render home hero and footer.

### Task 1: Simplify Home Hero Headings

**Files:**
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Remove extra visible headings**

Delete the eyebrow text node and the `h1`/`h2` pair so the hero no longer shows extra title lines above the body copy.

- [ ] **Step 2: Keep welcome message only in body copy**

Render the main welcome text in the supporting paragraph area using existing `welcome.*` keys.

Expected: Home hero keeps the same composition, but the welcome appears only in the lower descriptive copy.

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

- Spec coverage: Removes the extra home title and keeps welcome only in lower copy.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing translation keys and CTA links remain unchanged.
