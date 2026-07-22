# Wi-Fi Reception Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake the Wi-Fi & Reception page across mobile and desktop using the provided layout direction and exact requested content.

**Architecture:** Replace the current `WifiReception.jsx` layout with a desktop two-column canvas and mobile stacked card layout. Reuse existing i18n keys, contact constants, and service list data; add local display constants for phone formatting where needed.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes, existing project i18n helper.

---

## File Structure

- Modify: `src/components/WifiReception.jsx`
- Responsibility: Render the Wi-Fi and Reception page for mobile and desktop.
- Modify: `src/i18n.js`
- Responsibility: Update English Wi-Fi labels to match requested wording when existing strings differ.

### Task 1: Align Wi-Fi Text Labels

**Files:**
- Modify: `src/i18n.js:48-67`

- [ ] **Step 1: Update English title and password label**

Set these English strings:

```js
'wifi.title': { en: 'Complimentary Wi-Fi', ... }
'wifi.passwordLabel': { en: 'PassWord :', ... }
'wifi.hotlineLabel': { en: 'Reception Hotline:', ... }
```

Expected: page text matches the user-provided copy.

### Task 2: Rebuild Wi-Fi Reception Layout

**Files:**
- Modify: `src/components/WifiReception.jsx:1-183`

- [ ] **Step 1: Add service metadata and display constants**

Use existing i18n keys and contact links, plus display strings:

```jsx
const DISPLAY_PHONE = '0768150325';
const DISPLAY_WHATSAPP = '+84 768150325';
const SERVICES = [
  { key: 'wifi.serviceTourInfo', icon: 'info' },
  { key: 'wifi.serviceTaxi', icon: 'local_taxi' },
  { key: 'wifi.serviceAirport', icon: 'flight_takeoff' },
  { key: 'wifi.serviceMotorbike', icon: 'two_wheeler' },
  { key: 'wifi.serviceLaundry', icon: 'local_laundry_service' },
  { key: 'wifi.serviceTourBooking', icon: 'confirmation_number' },
  { key: 'wifi.serviceRequests', icon: 'support_agent' },
];
```

Expected: service order matches the requested content.

- [ ] **Step 2: Mobile stacked cards**

Render mobile with:

```jsx
<div className="md:hidden">
  <main className="mx-auto flex max-w-lg flex-col gap-4 px-4 py-5 text-[#2A160A]">
```

Mobile sections:
- header card for `wifi.title`
- dark Wi-Fi credential card showing `SUNSET HILL RESORT` and `PassWord : 88888888`
- Reception card showing assistance text, hotline, WhatsApp, and service list.

Expected: mobile is readable, stacked, and contains all requested content.

- [ ] **Step 3: Desktop two-column layout**

Render desktop with:

```jsx
<div className="hidden md:block">
  <main className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-7xl items-center px-10 py-12 text-[#2A160A]">
    <div className="grid w-full grid-cols-12 gap-8">
```

Left column:
- label `Connected Stay`
- large `wifi.title`
- description `wifi.receptionSub`
- Wi-Fi glass panel with SSID and password.

Right column:
- Reception panel with hotline and WhatsApp.
- Services grid based on `SERVICES`.

Expected: desktop follows the provided HTML direction without adding external top-nav/footer.

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

- Spec coverage: Includes requested Wi-Fi credentials, Reception contact details, and all seven service bullets.
- Placeholder scan: No placeholders remain.
- Type consistency: Uses existing `t`, `RECEPTION_TEL`, and `RECEPTION_WHATSAPP` APIs.
