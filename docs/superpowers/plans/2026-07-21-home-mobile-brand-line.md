# Home Mobile Brand Line Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a small mobile-only SunSet Hill brand line to the Home hero so the screen feels more complete without reintroducing a large extra title.

**Architecture:** Modify `src/components/WelcomePage.jsx` and `src/styles-home.css`. Add one mobile-only brand line element near the top of the hero copy and style it subtly.

**Tech Stack:** React JSX, CSS.

---

## File Structure

- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

### Task 1: Add Mobile Brand Line

**Files:**
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

- [ ] **Step 1: Add brand line markup**

Insert a small `SunSet Hill` line before the visible copy block.

- [ ] **Step 2: Style mobile-only presentation**

Use CSS so it is visible on mobile, understated, and hidden or deemphasized on larger screens.

Expected: Home mobile feels fuller without restoring a large redundant heading.

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

- Spec coverage: adds only a small mobile brand line.
- Placeholder scan: No placeholders remain.
- Type consistency: Home structure remains otherwise unchanged.
