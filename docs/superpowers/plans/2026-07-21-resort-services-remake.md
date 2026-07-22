# Resort Services Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake the Resort Services page across mobile and desktop with full service content and a desktop sidebar plus services grid layout.

**Architecture:** Replace the current dropdown-based `MotorbikeRental.jsx` UI with a static responsive services page. Reuse `RESORT_SERVICES`, existing i18n keys, images, and `RECEPTION_TEL`; update English i18n strings that need to match the provided copy.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes, existing i18n helper.

---

## File Structure

- Modify: `src/i18n.js`
- Responsibility: Store English service copy.
- Modify: `src/components/MotorbikeRental.jsx`
- Responsibility: Render Resort Services page.

### Task 1: Align English Service Copy

**Files:**
- Modify: `src/i18n.js:105-138`

- [ ] **Step 1: Update English strings that differ**

Set these English values:

```js
'services.laundryUnder2': { en: 'Under 2kg : 80.000 VNĐ', ... }
'services.laundryOver2': { en: 'Over 2kg : 40,000 VND per kilogram', ... }
'services.laundryNote': { en: 'Please note: Branded clothing and white garments are washed separately. Kindly sort these items before sending them for laundry. We cannot be held responsible for any damage or discoloration if clothes are not sorted in advance.', ... }
'services.airportCarType': { en: '(Resort → Airport) ( 4 seater cars )', ... }
```

Expected: English copy matches the user-provided content.

### Task 2: Replace Resort Services Layout

**Files:**
- Modify: `src/components/MotorbikeRental.jsx:1-250`

- [ ] **Step 1: Remove dropdown state UI**

Remove `useState`, `useEffect`, and `useRef` usage. Render all services at once in the order: motorbike, laundry, pool, airport, taxi, assistance.

Expected: mobile no longer uses service selector dropdown.

- [ ] **Step 2: Add reusable presentation helpers**

Create local helpers:

```jsx
function ServiceImage({ service }) { ... }
function DetailBlock({ label, children }) { ... }
function ContactButton({ children, variant }) { ... }
function ServiceCard({ service, lang, children, featured, dark }) { ... }
function AssistanceCard({ lang, desktop }) { ... }
```

Expected: component remains readable and avoids repeated card chrome.

- [ ] **Step 3: Render mobile stacked cards**

Use:

```jsx
<div className="md:hidden">
  <main className="mx-auto max-w-lg px-4 py-5">
```

Mobile content:
- title card `services.title`
- motorbike card with image, rental fee, models, reserve note
- laundry card with price, long note, collection note
- pool card with opening hours and safety policy
- airport card with fee, car type, payment, notify note
- taxi card with desc and recommend
- assistance card with hotline `0768150325` and wish message.

Expected: all requested service content appears on mobile.

- [ ] **Step 4: Render desktop sidebar plus grid**

Use:

```jsx
<div className="hidden md:block">
  <main className="grid min-h-[calc(100dvh-4rem)] grid-cols-12">
```

Desktop content:
- left sidebar hero with `Guest Services`, intro, hotline card
- right grid with service cards matching the HTML direction.

Expected: desktop resembles the provided layout without adding app header/footer.

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

- Spec coverage: Includes every requested service section and assistance content.
- Placeholder scan: No placeholders remain.
- Type consistency: Uses existing i18n keys and `RESORT_SERVICES` ids.
