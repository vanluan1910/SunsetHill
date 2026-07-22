# Home Header Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Localize WelcomePage and remove incorrect hard-coded accessibility/menu labels in Header and App without changing navigation behavior.

**Architecture:** Update `i18n.js` with missing home and accessibility strings, then wire `WelcomePage`, `Header`, and `App` to use them. Remove misleading `aria-haspopup="menu"` from language pickers until full menu semantics exist.

**Tech Stack:** React JSX, Vite, Tailwind CSS, existing i18n helper.

---

## File Structure

- Modify: `src/i18n.js`
- Responsibility: Add home page and accessibility labels.
- Modify: `src/components/WelcomePage.jsx`
- Responsibility: Localize home page content and remove fake footer links.
- Modify: `src/components/Header.jsx`
- Responsibility: Localize labels, correct flag alt behavior, and remove incorrect menu semantics.
- Modify: `src/App.jsx`
- Responsibility: Localize slide dot aria-labels.

### Task 1: Add Missing Translations

**Files:**
- Modify: `src/i18n.js`

- [ ] **Step 1: Add home text keys**

Add keys for:

```text
welcome.resortInformation
welcome.exploreServices
welcome.privacyPolicy
welcome.termsOfService
welcome.location
welcome.copyright
```

- [ ] **Step 2: Add accessibility/common labels**

Add keys for:

```text
common.changeLanguage
common.menu
common.closeMenu
common.goToSlide
```

Expected: no new hard-coded English labels remain in the touched files.

### Task 2: Localize WelcomePage

**Files:**
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Accept `lang` prop**

Change component signature to `function WelcomePage({ lang = 'en' })`.

- [ ] **Step 2: Replace hard-coded visible text with `t(...)`**

Use existing `welcome.*` and `quickInfo.resortInfo` keys plus the new home keys.

- [ ] **Step 3: Remove fake footer links**

Replace the three dead anchors with non-link text or simple spans.

Expected: Home page reacts to language switch and no longer exposes fake navigation targets.

### Task 3: Clean Up Header Accessibility Labels

**Files:**
- Modify: `src/components/Header.jsx`

- [ ] **Step 1: Localize button aria-labels**

Use `common.changeLanguage`, `common.menu`, and `common.closeMenu`.

- [ ] **Step 2: Remove `aria-haspopup="menu"` from language pickers**

Keep `aria-expanded`, but drop the incorrect menu declaration until proper menu semantics exist.

- [ ] **Step 3: Make flag images decorative**

Set flag `alt=""` because the language name is adjacent and already announced.

Expected: Header labels are localized and no longer claim inaccessible menu semantics.

### Task 4: Localize Slide Navigation Labels

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Replace hard-coded `Go to slide` aria-label**

Use `t('common.goToSlide', lang)` combined with the slide number.

Expected: bottom dot navigation is localized.

### Task 5: Verify

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: WelcomePage and Header/App cleanup only, with no navigation behavior changes.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing props and navigation callbacks remain unchanged.
