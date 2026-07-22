# Wi-Fi Mobile Bento Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adjust only the Wi-Fi mobile page to follow the provided mobile card/bento reference while preserving the requested content.

**Architecture:** Modify only the `md:hidden` branch in `src/components/WifiReception.jsx`. Keep desktop layout, i18n keys, contact constants, and content unchanged.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/WifiReception.jsx`
- Responsibility: Render Wi-Fi & Reception page; only mobile JSX is in scope.

### Task 1: Rework Mobile Wi-Fi Layout

**Files:**
- Modify: `src/components/WifiReception.jsx:94-121`

- [ ] **Step 1: Replace mobile branch with stacked reference-style sections**

Use a mobile main wrapper:

```jsx
<main className="mx-auto flex max-w-lg flex-col gap-6 px-5 py-6">
```

Expected: mobile has clear vertical rhythm like the provided reference.

- [ ] **Step 2: Render light Wi-Fi connectivity card**

Use a light card instead of the dark credentials component on mobile:

```jsx
<section className="rounded-2xl border border-[#dfc0b7]/25 bg-[#ece7e3]/80 p-5 shadow-sm">
```

Content order:
- `wifi.title`
- `wifi.ssid`
- `wifi.passwordLabel` + `wifi.passwordValue`

Expected: mobile matches the requested visible text.

- [ ] **Step 3: Render mobile bento services grid**

Use a 2-column services grid based on `SERVICES`:

```jsx
<div className="grid grid-cols-2 gap-3">
```

Make `Airport transfer`, `Tour and ticket booking`, and `Any other requests during your stay` span two columns for readability.

Expected: all seven services are present and readable.

- [ ] **Step 4: Render Reception assistance card**

Place Reception contact details below services:

```jsx
<section className="rounded-3xl border border-[#806256]/20 bg-[#806256]/10 p-5">
```

Content order:
- `wifi.reception`
- `wifi.receptionSub`
- `wifi.hotlineLabel`
- `DISPLAY_PHONE`
- `Whatsapp:`
- `DISPLAY_WHATSAPP`

Expected: contact information matches the requested content and links remain clickable.

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

- Spec coverage: Mobile-only change, exact requested content, desktop untouched.
- Placeholder scan: No placeholders remain.
- Type consistency: Existing constants and i18n keys remain unchanged.
