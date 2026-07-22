# Header Accessibility Trap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Header keyboard accessibility by trapping focus inside the mobile drawer and open language lists, and by adding clearer drawer semantics.

**Architecture:** Modify only `src/components/Header.jsx`. Reuse the existing open-state model and focus refs, and add one small focusable-elements helper inside the component.

**Tech Stack:** React JSX, Framer Motion, existing i18n helper.

---

## File Structure

- Modify: `src/components/Header.jsx`
- Responsibility: Render site navigation and language controls.

### Task 1: Trap Focus In Active Overlays

**Files:**
- Modify: `src/components/Header.jsx`

- [ ] **Step 1: Add refs for overlay containers**

Create refs for the mobile drawer container and both language dropdown panels.

- [ ] **Step 2: Add focusable-elements helper**

Inside the component, define a helper that returns focusable elements within a container.

- [ ] **Step 3: Trap focus in mobile drawer**

When drawer is open and `Tab` or `Shift+Tab` is pressed, cycle focus inside the drawer.

- [ ] **Step 4: Trap focus in language dropdowns**

When a language dropdown is open, cycle focus inside the list.

Expected: keyboard focus never escapes the active overlay until it closes.

### Task 2: Add Clearer Drawer Semantics

**Files:**
- Modify: `src/components/Header.jsx`

- [ ] **Step 1: Add dialog semantics**

Set on the mobile drawer panel:

```text
role="dialog"
aria-modal="true"
```

- [ ] **Step 2: Add visible title association**

Connect the drawer title text to the dialog with `aria-labelledby`.

Expected: assistive technologies can understand the drawer as a modal navigation surface.

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

- Spec coverage: Focus trap, dialog semantics, and keyboard behavior are all included.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing Header props and event behavior remain intact.
