# Header Accessibility Focus Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Header accessibility by adding focus management, Escape-key closing, and focus restoration for the mobile drawer and language dropdowns.

**Architecture:** Modify only `src/components/Header.jsx`. Add refs and effects for focus entry/exit and keyboard handling. Keep layout and navigation behavior unchanged.

**Tech Stack:** React JSX, Framer Motion, existing i18n helper.

---

## File Structure

- Modify: `src/components/Header.jsx`
- Responsibility: Render site navigation and language controls.

### Task 1: Add Focus Management And Escape Handling

**Files:**
- Modify: `src/components/Header.jsx`

- [ ] **Step 1: Add refs for trigger restoration**

Create refs for:

```text
desktop language button
mobile language button
mobile menu button
first focusable element in drawer/dropdown
```

- [ ] **Step 2: Focus first item when opening**

When the mobile drawer opens, focus its close button or first nav item.

When a language list opens, focus its first option.

- [ ] **Step 3: Restore focus when closing**

When a language list closes, focus its trigger button.

When the mobile drawer closes, focus the hamburger button.

- [ ] **Step 4: Add Escape-key close behavior**

While drawer or language list is open, pressing `Escape` closes the relevant UI.

Expected: keyboard users can open, interact with, and close the controls predictably.

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

- Spec coverage: Focus entry, Escape close, and focus restoration are all implemented.
- Placeholder scan: No placeholders remain.
- Type consistency: Header props and navigation callbacks remain unchanged.
