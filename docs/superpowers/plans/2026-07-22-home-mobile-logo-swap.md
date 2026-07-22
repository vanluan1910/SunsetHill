# Home Mobile Logo Swap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Home mobile logo image with the newly provided logo and tune the styling to suit the new built-in glow.

**Architecture:** Overwrite the existing Home logo asset and lightly adjust the CSS effect on the mobile logo image. No layout changes.

**Tech Stack:** React JSX, CSS, Vite static assets.

---

## File Structure

- Modify: `src/assets/sunsethill-logo.png`
- Modify: `src/styles-home.css`

### Task 1: Swap Logo Asset And Tweak Styling

**Files:**
- Modify: `src/assets/sunsethill-logo.png`
- Modify: `src/styles-home.css`

- [ ] **Step 1: Replace existing logo asset**

Overwrite `src/assets/sunsethill-logo.png` with the newly approved file.

- [ ] **Step 2: Reduce extra shadow styling**

Adjust `sh-mobile-logo-image` so the new logo's own glow is not over-processed.

Expected: the new logo looks cleaner and more natural on Home mobile.

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

- Spec coverage: logo asset swapped and visual treatment tuned.
- Placeholder scan: No placeholders remain.
- Type consistency: Home markup remains unchanged.
