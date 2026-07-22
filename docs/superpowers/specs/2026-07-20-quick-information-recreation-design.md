# Quick Information Recreation Design

Date: 2026-07-20

## Goal

Rebuild the `Quick Information` slide so it closely follows the provided premium reference layout while keeping the app's existing global header unchanged.

## Scope

- Rework `src/components/QuickInfo.jsx` into a cleaner, more structured slide layout.
- Keep the existing `Header.jsx` unchanged.
- Reuse existing translated copy from `src/i18n.js` instead of introducing new content.
- Reuse shared UI primitives where useful, especially `InfoCard` and `SectionHeader`.
- Preserve the current slide-based navigation and the `lang` prop behavior.

## Architecture

The slide should be implemented as a single focused React component that composes shared UI pieces:

- `SectionHeader` for the page title area.
- `InfoCard` for the major information blocks.
- A small local array for the late checkout rate rows.

No new routing, state store, or API layer is needed.

## Visual Structure

The rebuilt slide should use the current premium brand style from the app, but with a layout closer to the provided reference:

- Keep the existing top app header.
- Present a large page heading for `Quick Information` with a short subtitle.
- Desktop layout should be a two-column content grid:
  - Left column: check-in/check-out card and breakfast card.
  - Right column: late check-out policy card.
- Mobile layout should stack the same content vertically with comfortable spacing.
- Cards should feel refined and airy, using rounded corners, soft borders, subtle shadow, and the current warm palette.

## Content Rules

- Use only existing translation keys from `quickInfo.*`.
- Keep the current information hierarchy:
  - Check-in time
  - Check-out time
  - Late check-out policy with three pricing bands
  - Breakfast information
- Do not add the reference-only board status, reception button, or other new content unless it already exists in the translation data.

## Data Flow

- `QuickInfo` receives `lang` as it does today.
- The component reads all display copy through `t(key, lang)`.
- The late check-out bands remain an in-component array and are rendered by mapping over the existing translation keys.

## Error Handling

- There are no asynchronous requests or form actions.
- If any translation key is missing, the component should degrade gracefully by showing the translation function's fallback behavior or the current key-based text.
- The page should remain readable on narrow screens and in browsers without hover interaction.

## Testing

- Run `npm run build` to verify the component compiles.
- Manually check the Quick Information slide in desktop and mobile widths.
- Confirm the existing header still appears exactly as before.

## Out Of Scope

- Changing the global `Header` design or behavior.
- Adding new translations or new guest-service content.
- Rebuilding the other slides.
- Introducing new APIs, persisted state, or dynamic data loading.
