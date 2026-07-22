# House Rules Bento Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake the House Rules page across mobile and desktop with a hero plus bento rule cards using the existing House Rules content.

**Architecture:** Replace the current `HouseRules.jsx` layout with reusable local rule-card components. Keep existing i18n keys, contact link, page image import, and content order.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes, existing i18n helper.

---

## File Structure

- Modify: `src/components/HouseRules.jsx`
- Responsibility: Render House Rules page for mobile and desktop.

### Task 1: Replace House Rules Layout With Hero And Bento Cards

**Files:**
- Modify: `src/components/HouseRules.jsx:1-121`

- [ ] **Step 1: Define rule metadata**

Use one rule list for both mobile and desktop:

```jsx
const RULES = [
  { icon: 'badge', titleKey: 'rules.idTitle', textKey: 'rules.idText' },
  { icon: 'volume_off', titleKey: 'rules.quietTitle', textKey: 'rules.quietText' },
  { icon: 'smoke_free', titleKey: 'rules.smokeTitle', textKey: 'rules.smokeText' },
  { icon: 'block', titleKey: 'rules.restrictedTitle', textKey: 'rules.restrictedText', highlight: true },
  { icon: 'group_add', titleKey: 'rules.visitorTitle', textKey: 'rules.visitorText' },
  { icon: 'pool', titleKey: 'rules.poolTitle', textKey: 'rules.poolText' },
  { icon: 'lock', titleKey: 'rules.valuablesTitle', textKey: 'rules.valuablesText' },
  { icon: 'key', titleKey: 'rules.checkoutTitle', textKey: 'rules.checkoutText', dark: true },
];
```

Expected: English content matches the user-provided bullet list through existing i18n keys.

- [ ] **Step 2: Render desktop hero**

Use `HOUSE_RULES_FOOTER_IMAGE` as a hero background with gradient overlay, title `rules.title`, and intro `rules.request`.

Expected: desktop follows the provided HTML direction without adding nav/footer.

- [ ] **Step 3: Render desktop bento grid**

Use a 4-column grid at desktop:

```jsx
<section className="mx-auto grid max-w-7xl grid-cols-4 gap-6 px-10 py-12">
```

Make the first two rules span two columns; make highlighted restricted item span two columns; make departure span two columns.

Expected: desktop resembles the provided bento layout.

- [ ] **Step 4: Render mobile compact hero and stacked cards**

Use a mobile hero card with image gradient and then stacked cards for all rules.

Expected: mobile keeps the same content and is easy to scan.

- [ ] **Step 5: Render CTA**

Render `rules.clarification`, `rules.clarificationDesc`, and a `RECEPTION_TEL` button after the rules.

Expected: contact path remains available.

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

- Spec coverage: Includes hero, bento grid, mobile cards, CTA, and all eight requested rules.
- Placeholder scan: No placeholders remain.
- Type consistency: Uses existing `t`, `RECEPTION_TEL`, and `HOUSE_RULES_FOOTER_IMAGE` APIs.
