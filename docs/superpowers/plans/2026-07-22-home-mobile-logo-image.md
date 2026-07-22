# Home Mobile Logo Image Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the temporary mobile text brand line on the Home page with the provided SunsetHill logo image.

**Architecture:** Copy the provided PNG logo into the workspace and render it only on Home mobile. Keep desktop unchanged.

**Tech Stack:** React JSX, CSS, Vite static asset handling.

---

## File Structure

- Create: `src/assets/sunsethill-logo.png`
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

### Task 1: Add Mobile Logo Asset

**Files:**
- Create: `src/assets/sunsethill-logo.png`

- [ ] **Step 1: Copy the approved logo image into the app**

Expected: the logo is available as a stable in-repo asset rather than referencing Downloads.

### Task 2: Replace Text Brand Line

**Files:**
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

- [ ] **Step 1: Replace `sh-mobile-brand-line` text with an image**

Render the imported logo image instead of the current plain text brand line.

- [ ] **Step 2: Style it for mobile only**

Give the logo a modest width and center alignment; keep it hidden on desktop.

Expected: Home mobile feels fuller and more branded without restoring a large redundant title.

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

- Spec coverage: mobile text brand line replaced by the provided logo image.
- Placeholder scan: No placeholders remain.
- Type consistency: desktop home remains unchanged.
