# Quick Info Content Match Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Quick Info English content and mobile display match the user-provided copy exactly.

**Architecture:** Update English i18n strings in `src/i18n.js` where existing values differ. Update the mobile branch of `src/components/QuickInfo.jsx` to render existing description/note/opening-hours/recommendation keys that are currently omitted on mobile.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes, existing project i18n helper.

---

## File Structure

- Modify: `src/i18n.js`
- Responsibility: Stores translated text for Quick Info.
- Modify: `src/components/QuickInfo.jsx`
- Responsibility: Renders Quick Info page; only mobile Quick Info content rendering is changed.

### Task 1: Update English Quick Info Copy

**Files:**
- Modify: `src/i18n.js:25-45`

- [ ] **Step 1: Update English strings**

Set these English values:

```js
'quickInfo.checkinTime': { en: 'From 02:00 PM', ... }
'quickInfo.checkoutTime': { en: 'Before 12:00 PM (Noon)', ... }
'quickInfo.lateCheckoutDesc': { en: 'Late check-out is subject to room availability and additional charges:', ... }
'quickInfo.lateCheckoutNote': { en: 'Please contact Reception in advance if you would like to request a late check-out.', ... }
'quickInfo.breakfastDesc': { en: 'Breakfast is served daily at the restaurant.', ... }
'quickInfo.breakfastHours': { en: 'Opening Hours:', ... }
'quickInfo.breakfastTime': { en: '07:30 AM – 09:30 AM', ... }
'quickInfo.breakfastRecommend': { en: 'We recommend arriving early to enjoy the full selection of dishes.', ... }
```

Expected: English copy matches the user-provided text.

### Task 2: Render Missing Mobile Description Lines

**Files:**
- Modify: `src/components/QuickInfo.jsx:17-91`

- [ ] **Step 1: Add late checkout description above rules**

Inside the mobile late checkout section, render:

```jsx
<p className="text-[13px] leading-[1.35] text-[#57423b]">{t('quickInfo.lateCheckoutDesc', lang)}</p>
```

Expected: mobile shows the late checkout policy description.

- [ ] **Step 2: Add late checkout note below rules**

Inside the mobile late checkout section, below the rules card, render:

```jsx
<p className="rounded-2xl bg-[#f8f3ef]/90 px-3 py-2 text-[12px] italic leading-[1.35] text-[#57423b]">
  {t('quickInfo.lateCheckoutNote', lang)}
</p>
```

Expected: mobile shows the Reception note.

- [ ] **Step 3: Add breakfast opening-hours label and recommendation**

Inside the mobile breakfast card content, render:

```jsx
<p className="text-[11px] font-bold uppercase tracking-wide text-[#57423b]">{t('quickInfo.breakfastHours', lang)}</p>
<p className="text-[12px] leading-[1.35] text-[#57423b]">{t('quickInfo.breakfastRecommend', lang)}</p>
```

Expected: mobile shows Breakfast description, Opening Hours, time, and recommendation.

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

- Spec coverage: Includes every line from the user-provided Quick Information and Breakfast copy.
- Placeholder scan: No placeholders remain.
- Type consistency: Uses existing i18n keys and existing component props.
