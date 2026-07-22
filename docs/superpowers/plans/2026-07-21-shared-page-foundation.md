# Shared Page Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize content-page backgrounds and adopt focused shared hero, heading, and Reception CTA components while fixing confirmed global styling and localization defects.

**Architecture:** Add three focused shared components and adopt them only where patterns already repeat. Use `PageShell` for all non-home page roots, `PageHero` for Tours/Explore/Attractions, `SectionHeading` for repeated travel section headers, and a revised `ContactCTA` for shared Reception actions.

**Tech Stack:** React JSX, Vite, Tailwind CSS, existing i18n helper.

---

## File Structure

- Create: `src/components/shared/PageShell.jsx` — common non-home page root.
- Create: `src/components/shared/PageHero.jsx` — responsive image hero with finite variants.
- Replace: `src/components/shared/SectionHeader.jsx` with `src/components/shared/SectionHeading.jsx` — semantic shared section heading.
- Modify: `src/components/shared/ContactCTA.jsx` — shared Reception CTA.
- Modify: `src/index.css` — one content background and icon color fix.
- Modify: `tailwind.config.js` — restore full pill/circle radius.
- Modify: `src/i18n.js` — shared labels and attraction metadata translations.
- Modify: all non-home page components — adopt `PageShell`.
- Modify: Tours/Explore/Attractions/HouseRules — adopt shared presentation components.
- Modify: Resort Services — localized alt text.

### Task 1: Shared Global Foundation

**Files:**
- Create: `src/components/shared/PageShell.jsx`
- Modify: `src/index.css`
- Modify: `tailwind.config.js`

- [ ] **Step 1: Create `PageShell`**

```jsx
function PageShell({ children, className = '' }) {
  return (
    <div className={`warm-page-bg min-h-screen pt-16 font-sans text-[#1d1b19] ${className}`}>
      {children}
    </div>
  );
}

export default PageShell;
```

- [ ] **Step 2: Remove `.quick-info-bg` alias**

Update all grouped selectors in `src/index.css` to target only `.warm-page-bg`.

- [ ] **Step 3: Remove global icon color**

Keep Material Symbols font settings but delete the fixed `color` declaration.

- [ ] **Step 4: Restore full radius**

Set Tailwind `borderRadius.full` to `9999px`.

- [ ] **Step 5: Verify foundation**

Run: `npm run build`

Expected: Vite build succeeds.

### Task 2: Shared Presentation Components

**Files:**
- Create: `src/components/shared/PageHero.jsx`
- Delete: `src/components/shared/SectionHeader.jsx`
- Create: `src/components/shared/SectionHeading.jsx`
- Modify: `src/components/shared/ContactCTA.jsx`

- [ ] **Step 1: Create `PageHero`**

Implement props `image`, `imageAlt`, `kicker`, `title`, `description`, and `variant`. Support `bottom` and `center` variants with responsive height and typography.

- [ ] **Step 2: Replace SectionHeader with SectionHeading**

Implement props `kicker`, `title`, `align = 'left'`, and `level = 2`. Render only heading levels 1, 2, or 3 and default to `h2`.

- [ ] **Step 3: Revise ContactCTA**

Implement translated `title`, `description`, `actionLabel`, optional `icon`, and `variant = 'light'`. Use `RECEPTION_TEL`; remove hard-coded WhatsApp fallback.

- [ ] **Step 4: Verify shared components**

Run: `npm run lint`

Expected: no lint findings.

### Task 3: Shared Localization Keys

**Files:**
- Modify: `src/i18n.js`

- [ ] **Step 1: Add common page-label keys**

Add translations for recurring labels: adventure awaits, discover, discover Phu Quoc, thrill and wonder, island soul, connected stay, concierge excellence, safety policy, reception hotline, guest guide, arrival and departure, timing, network name, resort services, and WhatsApp.

- [ ] **Step 2: Add attraction metadata keys**

Add translated keys for 10/30/35/40-minute travel labels and all distinct attraction opening-hour strings.

- [ ] **Step 3: Verify literal keys**

Search touched files for `t('...')` calls and confirm every literal key exists in `src/i18n.js`.

### Task 4: Adopt PageShell Everywhere

**Files:**
- Modify: `src/components/QuickInfo.jsx`
- Modify: `src/components/WifiReception.jsx`
- Modify: `src/components/HouseRules.jsx`
- Modify: `src/components/MotorbikeRental.jsx`
- Modify: `src/components/ExplorePhuQuoc.jsx`
- Modify: `src/components/ToursTickets.jsx`
- Modify: `src/components/Attractions.jsx`
- Modify: `src/components/LocalFood.jsx`
- Modify: `src/components/TravelTips.jsx`

- [ ] **Step 1: Wrap every page with PageShell**

Replace local root wrapper classes with `<PageShell>`.

- [ ] **Step 2: Normalize Quick Info**

Remove `WELCOME_HERO_IMAGE` import and inline `backgroundImage`; use shared background.

- [ ] **Step 3: Normalize Wi-Fi**

Replace `quick-info-bg` root with `PageShell`.

- [ ] **Step 4: Confirm root adoption**

Search all nine page components for `PageShell`; search source for `quick-info-bg` and expect zero matches.

### Task 5: Adopt Shared Hero And Heading

**Files:**
- Modify: `src/components/ToursTickets.jsx`
- Modify: `src/components/ExplorePhuQuoc.jsx`
- Modify: `src/components/Attractions.jsx`

- [ ] **Step 1: Replace Tours hero and headings**

Use `PageHero` and `SectionHeading`; replace hard-coded labels with i18n keys.

- [ ] **Step 2: Replace Explore hero and headings**

Use `PageHero` and `SectionHeading`; replace hard-coded labels with i18n keys.

- [ ] **Step 3: Replace Attractions hero and headings**

Use `PageHero` center variant and `SectionHeading`; replace hard-coded labels with i18n keys.

- [ ] **Step 4: Verify no targeted hard-coded labels remain**

Search touched files for the original English label strings and expect no matches outside `i18n.js`.

### Task 6: Adopt ContactCTA And Fix Action Consistency

**Files:**
- Modify: `src/components/ToursTickets.jsx`
- Modify: `src/components/ExplorePhuQuoc.jsx`
- Modify: `src/components/Attractions.jsx`
- Modify: `src/components/HouseRules.jsx`

- [ ] **Step 1: Replace Tours CTA**

Use `ContactCTA` once per responsive layout.

- [ ] **Step 2: Replace Explore support panel**

Use `ContactCTA` with an actual Reception action.

- [ ] **Step 3: Replace Attractions CTA**

Use `ContactCTA` once per responsive layout.

- [ ] **Step 4: Replace House Rules CTA**

Use `ContactCTA` while preserving page-specific outer section styling where needed.

- [ ] **Step 5: Review CTA counts**

Confirm each responsive page layout has at most one primary Reception CTA.

### Task 7: Fix Remaining Confirmed Page Defects

**Files:**
- Modify: `src/components/QuickInfo.jsx`
- Modify: `src/components/WifiReception.jsx`
- Modify: `src/components/MotorbikeRental.jsx`
- Modify: `src/components/Attractions.jsx`

- [ ] **Step 1: Replace Quick Info hard-coded labels**

Use new i18n keys for Guest Guide, Arrival & Departure, and Timing.

- [ ] **Step 2: Correct Wi-Fi SSID labeling**

Use a separate network-name label key; keep `wifi.ssid` as the SSID value. Replace other recurring hard-coded labels with i18n keys.

- [ ] **Step 3: Localize Resort Services labels**

Replace hard-coded kicker, intro, safety, and hotline labels; pass `lang` into `ServiceImage` for localized alt text.

- [ ] **Step 4: Localize attraction metadata**

Replace embedded English distance/hour strings with i18n keys and resolve them through `t`.

### Task 8: Final Verification

**Files:**
- No file changes.

- [ ] **Step 1: Run full build**

Run: `npm run build`

Expected: success.

- [ ] **Step 2: Run full lint**

Run: `npm run lint`

Expected: no findings.

- [ ] **Step 3: Static consistency checks**

Confirm:

```text
quick-info-bg: 0 source matches
PageShell: imported by all 9 content pages
Target hard-coded recurring labels: 0 page-component matches
Missing touched literal i18n keys: 0
```

- [ ] **Step 4: Review requirements**

Compare implementation against `docs/superpowers/specs/2026-07-21-shared-page-foundation-design.md` and record any gaps.

## Self-Review

- Spec coverage: Every in-scope background, component, localization, icon, radius, and verification requirement maps to a task.
- Placeholder scan: No placeholders remain.
- Type consistency: Shared component names and props are consistent across tasks.
