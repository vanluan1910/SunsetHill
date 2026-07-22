# Quick Information Source Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `QuickInfo` slide body to match the supplied LuxeConcierge source layout while keeping the existing app header and slide shell unchanged.

**Architecture:** Replace the current `QuickInfo.jsx` body with one responsive React layout: a left editorial hero column and a right bento card grid. Keep content driven by `t('quickInfo.*', lang)`, reuse the existing background image asset, and avoid adding new app shell behavior.

**Tech Stack:** React 19, Vite, Tailwind CSS, existing `i18n.js`, existing app header/navigation.

---

### Task 1: Rebuild `QuickInfo` Body From Source Layout

**Files:**
- Modify: `src/components/QuickInfo.jsx`

- [ ] **Step 1: Replace the current card composition with a source-style canvas**

Update `QuickInfo` so the outer container keeps `pt-16`, `quick-info-bg`, and the existing image background, then render a `main` with a desktop two-column layout:

```jsx
<main className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-7xl items-center px-4 py-8 md:px-10 md:py-12">
  <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
    <section className="flex flex-col justify-center lg:col-span-5">
      ...left hero...
    </section>
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
      ...bento cards...
    </section>
  </div>
</main>
```

Do not edit `Header.jsx` or add source footer/navigation.

- [ ] **Step 2: Build the left hero column**

Use the existing translations and source visual rhythm:

```jsx
<div className="mb-4 flex items-center gap-2">
  <span className="h-px w-12 bg-[#922f05]" />
  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#922f05]">
    {t('quickInfo.resortInfo', lang)}
  </span>
</div>
<h1 className="font-serif text-5xl font-bold leading-tight text-[#922f05] md:text-6xl lg:text-7xl">
  {t('quickInfo.title', lang)}
</h1>
<p className="mt-6 max-w-md text-base leading-7 text-[#57423b] md:text-lg">
  {t('quickInfo.subtitle', lang)}
</p>
<div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#922f05] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-xl shadow-[#922f05]/20">
  <span>{t('wifi.reception', lang)}</span>
  <span className="material-symbols-outlined text-sm" aria-hidden="true">chevron_right</span>
</div>
```

The CTA is visual only; no new click behavior is required.

- [ ] **Step 3: Build the timing bento card**

Create a glass-panel style card in the right grid for check-in/check-out:

```jsx
<article className="rounded-[28px] border border-white/45 bg-[#FDF8F4]/72 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#922f05]/20 md:p-7">
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#922f05]/10">
    <span className="material-symbols-outlined text-[#922f05]" aria-hidden="true">schedule</span>
  </div>
  <h2 className="mt-5 font-serif text-3xl font-semibold text-[#8a501a]">Timing</h2>
  <div className="mt-5 space-y-4">
    ...check-in row...
    ...check-out row...
  </div>
</article>
```

Use `t('quickInfo.checkin', lang)`, `t('quickInfo.checkinTime', lang)`, `t('quickInfo.checkout', lang)`, and `t('quickInfo.checkoutTime', lang)`.

- [ ] **Step 4: Build the breakfast bento card**

Create a taller card that spans two rows on desktop using `md:row-span-2`. Include the breakfast description, time block, and recommendation:

```jsx
<article className="rounded-[28px] border border-white/45 bg-[#FDF8F4]/72 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#922f05]/20 md:row-span-2 md:p-7">
  ...restaurant icon...
  <h2>...</h2>
  <p>{t('quickInfo.breakfastDesc', lang)}</p>
  <div>{t('quickInfo.breakfastTime', lang)}</div>
  <div>{t('quickInfo.breakfastRecommend', lang)}</div>
</article>
```

Use translated `quickInfo.breakfast`, `quickInfo.breakfastDesc`, `quickInfo.breakfastTime`, and `quickInfo.breakfastRecommend`.

- [ ] **Step 5: Build the late stay bento card**

Render the late checkout card with the same source-style compact rate boxes:

```jsx
<article className="rounded-[28px] border border-white/45 bg-[#FDF8F4]/72 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#922f05]/20 md:p-7">
  ...more_time icon...
  <h2>{t('quickInfo.lateCheckout', lang)}</h2>
  <p>{t('quickInfo.lateCheckoutDesc', lang)}</p>
  <div className="grid grid-cols-2 gap-3">
    ...first two rates...
  </div>
  <p>{t('quickInfo.after6', lang)}: {t('quickInfo.after6rate', lang)}</p>
</article>
```

Keep `LATE_CHECKOUT_RULES` if useful, but the final design should match the source rhythm: first two rates in boxes, final rate as a separated line.

### Task 2: Verify Source-Style Rebuild

**Files:**
- Modify: `src/components/QuickInfo.jsx`

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: Vite build succeeds without import, JSX, or Tailwind class issues.

- [ ] **Step 2: Manual smoke check**

Open the Quick Information slide and verify:

- The existing app header remains unchanged.
- Desktop body resembles the provided source: left hero, right bento cards.
- Mobile stacks hero then cards and can scroll inside the existing slide container.
- Guest-facing text still follows the selected language.
