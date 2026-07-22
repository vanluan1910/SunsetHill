# Quick Information Recreation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `Quick Information` slide to match the premium reference layout while keeping the existing global header unchanged and reusing the app's current translated content.

**Architecture:** Update only the `QuickInfo` slide component so it becomes a structured composition of the existing `SectionHeader` and `InfoCard` shared components. Keep the slide data local and translation-driven through `t('quickInfo.*', lang)`, and preserve the current `Header.jsx` and slide navigation behavior untouched.

**Tech Stack:** React 19, Vite, Tailwind CSS, existing `i18n.js`, existing shared UI components.

---

### Task 1: Rebuild `QuickInfo` around shared layout primitives

**Files:**
- Modify: `src/components/QuickInfo.jsx`

- [ ] **Step 1: Replace the current hard-coded mobile/desktop markup with a single data-driven slide structure**

Use the existing `lang` prop and `t()` helper for all copy. Import `SectionHeader` and `InfoCard` from `./shared`, keep `LATE_CHECKOUT_RULES` local, and render the slide as:

```jsx
<div className="min-h-screen bg-background text-on-background pt-16">
  <main className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
    <SectionHeader
      align="left"
      icon="content_paste"
      kicker={t('quickInfo.title', lang)}
      title={t('quickInfo.title', lang)}
      subtitle={t('quickInfo.subtitle', lang)}
    />

    <div className="mt-8 grid gap-6 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-7">
        <InfoCard icon="login" title={t('quickInfo.checkin', lang)}>
          ...check-in and check-out rows...
        </InfoCard>

        <InfoCard icon="restaurant" title={t('quickInfo.breakfast', lang)}>
          ...breakfast description and hours block...
        </InfoCard>
      </div>

      <div className="lg:col-span-5">
        <InfoCard icon="more_time" title={t('quickInfo.lateCheckout', lang)} className="h-full">
          ...late checkout explanation and rate rows...
        </InfoCard>
      </div>
    </div>
  </main>
</div>
```

Keep the existing header outside this component untouched. The result should feel closer to the supplied reference, but remain consistent with the app's current warm palette and typography.

- [ ] **Step 2: Preserve the current content hierarchy and translation keys**

Keep these translation keys in use and do not add new copy:

```js
t('quickInfo.checkin', lang)
t('quickInfo.checkinTime', lang)
t('quickInfo.checkout', lang)
t('quickInfo.checkoutTime', lang)
t('quickInfo.lateCheckout', lang)
t('quickInfo.lateCheckoutDesc', lang)
t('quickInfo.until3', lang)
t('quickInfo.until3rate', lang)
t('quickInfo.until6', lang)
t('quickInfo.until6rate', lang)
t('quickInfo.after6', lang)
t('quickInfo.after6rate', lang)
t('quickInfo.lateCheckoutNote', lang)
t('quickInfo.breakfast', lang)
t('quickInfo.breakfastDesc', lang)
t('quickInfo.breakfastHours', lang)
t('quickInfo.breakfastTime', lang)
t('quickInfo.breakfastRecommend', lang)
```

Render the check-in/check-out pair as a compact grid inside the first card on desktop and a stacked layout on mobile. Render late checkout rows by mapping over `LATE_CHECKOUT_RULES` so the three pricing bands stay consistent.

- [ ] **Step 3: Tighten the responsive polish**

Make the slide look balanced on both desktop and mobile:

```jsx
<div className="grid gap-6 lg:grid-cols-12">
  <div className="space-y-6 lg:col-span-7">
    ...
  </div>
  <div className="lg:col-span-5">
    ...
  </div>
</div>
```

Use `gap-6`, rounded cards, soft borders, and subtle shadows. On small screens, keep the cards full-width, reduce excess spacing, and avoid any layout that depends on hover to stay readable.

### Task 2: Verify the slide compiles and the header remains unchanged

**Files:**
- Modify: `src/components/QuickInfo.jsx`
- Test: none new; use existing app build

- [ ] **Step 1: Run a production build**

Run: `npm run build`

Expected: Vite builds successfully with no JSX or import errors.

- [ ] **Step 2: Smoke-check the slide in the browser**

Run: `npm run dev`

Expected: the `Quick Information` slide shows the rebuilt two-column desktop layout, the same global header still renders above the slide, and the content stacks cleanly on mobile widths.

- [ ] **Step 3: Keep the change focused**

If any regression appears in the header, navigation, or other slides, fix only the affected `QuickInfo` markup and do not expand the scope into unrelated components.
