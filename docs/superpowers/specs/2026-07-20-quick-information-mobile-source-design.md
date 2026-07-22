# Quick Information Mobile Source Design

Date: 2026-07-20

## Goal

Rebuild only the mobile version of the `QuickInfo` slide using the latest supplied mobile source layout.

## Scope

- Modify the mobile branch of `src/components/QuickInfo.jsx`.
- Keep the current desktop QuickInfo layout unchanged.
- Keep the existing app header, hamburger menu, language dropdown, slide navigation, and app shell unchanged.
- Keep guest-facing content translation-driven through the existing `t(...)` helper.

## Layout

Mobile should use a compact stacked layout:

- Small header block with `Quick Information`.
- Arrival & Departure section with two equal cards for check-in and check-out.
- Breakfast image card with a gradient overlay and translated breakfast time/description.
- Late Check-out Policy section with three divided rows.
- Bottom contact reception action within the mobile page content.

## Visual Direction

- Follow the supplied source's mobile design: clean surface background, compact cards, Playfair-style headings, warm primary accents, and soft borders.
- Do not add the source's separate top header/back button or bottom navigation because the app already owns these controls.

## Testing

- Run `npm run build`.
- Confirm mobile QuickInfo changed while desktop remains unchanged.
