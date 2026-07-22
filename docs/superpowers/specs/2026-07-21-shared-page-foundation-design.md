# Shared Page Foundation Design

## Goal

Standardize every non-home content page on one background and a small set of shared presentation components, while fixing the concrete styling, localization, accessibility, and consistency defects found during the audit.

## Scope

The following pages are in scope:

- Quick Information
- Wi-Fi & Reception
- House Rules
- Resort Services
- Explore Phu Quoc
- Tours & Tickets
- Attractions
- Local Food
- Travel Tips

The Home page remains on its dedicated `sunset-home` background and is not visually refactored.

## Shared Background

All in-scope pages will render through a shared `PageShell` component. `PageShell` owns the common root classes:

```text
warm-page-bg min-h-screen pt-16 font-sans text-[#1d1b19]
```

The duplicate `.quick-info-bg` CSS alias will be removed. Quick Information will remove its inline `backgroundImage` override so it uses the same background image and overlays as every other content page.

The dark global body/app background remains as a fallback behind page content. The Home page continues to use `sunset-home` and its animated hero background.

## Shared Components

### PageShell

`PageShell` wraps every in-scope content page. It provides only the common page background, minimum height, header offset, font family, and default foreground color. It does not own mobile/desktop branching or page-specific spacing.

### PageHero

`PageHero` consolidates the duplicated responsive image hero used by Tours, Explore, and Attractions. It supports finite variants already required by the application:

- Bottom-aligned dark overlay for Tours and Explore.
- Center-aligned dark overlay for Attractions.

It receives image URL, translated image alt, optional translated kicker, translated title, translated description, and variant. It renders responsive sizing and typography without duplicating separate mobile and desktop hero trees.

House Rules keeps its current custom light-overlay hero because it is visually different enough that forcing it into `PageHero` would make the shared API overly generic.

### ContactCTA

The existing unused `ContactCTA` component will be revised into the single shared Reception CTA. It receives translated title, translated description, translated action label, optional icon, and a compact or wide presentation variant. The action always uses the central `RECEPTION_TEL` value.

It will be adopted where the pages currently render equivalent support blocks:

- Tours & Tickets
- Explore Phu Quoc
- Attractions
- House Rules

Resort Services keeps its specialized assistance/contact presentation because it includes a visible hotline and distinct service-specific content. Quick Information and Wi-Fi keep their current specialized contact controls.

Each page continues to expose no more than one primary Reception CTA in a given responsive layout.

### SectionHeading

The existing unused `SectionHeader` will be replaced or revised as `SectionHeading`. It supports a translated kicker, translated title, alignment, and semantic heading level. It defaults to `h2`, avoiding the current component's unconditional `h1` output.

It will be used for repeated section-heading patterns in Tours, Explore, and Attractions.

## Components Not Generalized

Tour cards, beach cards, attraction cards, House Rule cards, and Resort Service cards remain local to their pages. Their content structures differ enough that a generic card abstraction would add conditionals and styling props without creating a stable interface.

Mobile and desktop page trees remain local where their structure is genuinely different. No generic responsive wrapper will be introduced.

## Localization

Hard-coded recurring labels introduced during recent page work will move into `i18n.js`, including:

- Adventure Awaits
- Discover
- Discover Phu Quoc
- Thrill & Wonder
- The Soul of the Island
- Connected Stay
- Network Name
- Resort Services
- WhatsApp label
- Concierge Excellence
- Safety Policy
- Reception Hotline
- Guest Guide
- Arrival & Departure
- Timing

The Wi-Fi SSID value remains `wifi.ssid`; a separate translated label key will be added for Network Name.

Attraction travel times and operating hours will be migrated to translation keys where they are currently embedded English strings. Existing locale-specific hour values remain unchanged when already available.

The English-only image alt in Resort Services will be fixed by passing the active language into `ServiceImage`.

This refactor does not translate the Home page or redesign the entire translation system. Existing content-quality issues outside the touched shared patterns can be handled separately.

## Global Styling Fixes

The global `.material-symbols-outlined` rule will no longer set a fixed color. Icon color will come from local Tailwind utilities or inherited foreground color, allowing red, white, brown, green WhatsApp, and gold icons to render as authored.

Tailwind border radius configuration will restore `rounded-full` to `9999px`. Existing custom `DEFAULT`, `lg`, and `xl` radius values are left unchanged to minimize visual disruption.

## Error Handling And Safety

Shared components require explicit visible content rather than silently inventing fallback English. Optional kickers and descriptions render only when supplied.

External page data remains unchanged. The refactor does not alter navigation state, browser history behavior, service IDs, map URLs, contact numbers, or image URLs.

## Verification

Verification will include:

- `npm run build`
- `npm run lint`
- Static search confirming `.quick-info-bg` and Quick Information's inline background override are gone.
- Static search confirming all in-scope page roots use `PageShell`.
- Static search confirming targeted hard-coded labels are replaced with i18n keys.
- Static search confirming no missing literal translation keys in touched files.
- Manual code review that each responsive page has no more than one primary Reception CTA.

The workspace does not currently provide an automated UI test suite, so responsive visual behavior will be protected by build/lint plus focused source review. Browser visual inspection remains a recommended final follow-up.

## Out Of Scope

- Home page redesign or full Home localization.
- Browser history and Back-button behavior.
- Header menu accessibility redesign.
- Generic design-system extraction for all cards.
- Resort Services data-schema redesign.
- Rewriting all legacy pages beyond adopting `PageShell`.
- Changing page content, imagery, maps, or navigation ordering.
