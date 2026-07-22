# Home Mobile Logo Cloudinary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the bundled Home mobile logo image with the provided Cloudinary logo URL.

**Architecture:** Modify only `src/components/WelcomePage.jsx` to remove the local asset import and use the supplied Cloudinary URL directly.

**Tech Stack:** React JSX, Vite.

---

## File Structure

- Modify: `src/components/WelcomePage.jsx`

### Task 1: Swap Logo Source

**Files:**
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Remove local logo import**

Delete the `sunsethill-logo.png` import.

- [ ] **Step 2: Use the provided Cloudinary URL in the image element**

Expected: Home mobile shows the new logo from the hosted URL.

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

- Spec coverage: Home logo source switched to Cloudinary only.
- Placeholder scan: No placeholders remain.
- Type consistency: mobile Home markup otherwise unchanged.
