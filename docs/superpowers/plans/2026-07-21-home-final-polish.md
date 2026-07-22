# Home Final Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Home readability with slightly larger hero copy and remove remaining obvious hard-coded English in older pages.

**Architecture:** Adjust Home typography in `styles-home.css` and `WelcomePage.jsx`, and localize remaining repeated English labels in `TravelTips.jsx` and `LocalFood.jsx` using `i18n.js`.

**Tech Stack:** React JSX, CSS, Vite, existing i18n helper.

---

## File Structure

- Modify: `src/styles-home.css`
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/components/TravelTips.jsx`
- Modify: `src/components/LocalFood.jsx`
- Modify: `src/i18n.js`

### Task 1: Home Typography Polish

**Files:**
- Modify: `src/styles-home.css`
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Increase hero lead size slightly**

Increase `sh-hero-lead` font size and line-height modestly.

- [ ] **Step 2: Increase supporting copy slightly**

Increase `sh-hero-support` font size and line-height modestly.

- [ ] **Step 3: Preserve simplified heading structure**

Keep the visual hero free of extra title lines and retain only the lower welcome copy.

### Task 2: Localize Remaining Old-Page Labels

**Files:**
- Modify: `src/i18n.js`
- Modify: `src/components/TravelTips.jsx`
- Modify: `src/components/LocalFood.jsx`

- [ ] **Step 1: Add any missing repeated label keys**

Add keys only for strings still hard-coded in these two pages.

- [ ] **Step 2: Replace hard-coded labels in TravelTips**

Swap repeated visible English labels for `t(...)` calls.

- [ ] **Step 3: Replace hard-coded labels in LocalFood**

Swap repeated visible English labels for `t(...)` calls.

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

- Spec coverage: Home text is larger and the remaining obvious hard-coded English in old pages is reduced.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing page structures remain unchanged.
