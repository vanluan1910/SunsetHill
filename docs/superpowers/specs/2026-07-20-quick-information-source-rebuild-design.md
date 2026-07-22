# Quick Information Source Rebuild Design

Date: 2026-07-20

## Goal

Rebuild the body of the `Quick Information` slide using the latest supplied LuxeConcierge source layout while keeping the existing application header unchanged.

## Scope

- Modify only the `QuickInfo` slide body and related translation copy if needed.
- Keep `Header.jsx`, slide navigation, language switching, and the app shell unchanged.
- Use the source layout direction: left editorial hero text, right bento information cards, glass panels, warm resort image background.
- Keep content translation-driven through `t('quickInfo.*', lang)` where possible.

## Layout

The slide should use a full-height canvas below the existing fixed header:

- Left column on desktop:
  - small uppercase eyebrow with a horizontal line
  - large `Quick Information` title
  - subtitle explaining the purpose of the page
  - a pill-style reception/contact visual CTA if it can be done without wiring new behavior
- Right column on desktop:
  - bento-style glass cards
  - timing card for check-in and check-out
  - breakfast card spanning two rows when space allows
  - late stay card with late checkout rates
- Mobile:
  - stack hero content first, then cards
  - avoid fixed body height that would cut off content in the existing slide scroller

## Visual Direction

- Use the current app's warm colors and existing background image assets.
- Avoid copying the source top navigation or footer because the app already supplies navigation.
- Use translucent cards, blur, soft borders, rounded corners, and subtle shadows.
- Keep typography consistent with the app: existing sans body text and serif headline accents.

## Data And Translation

- Continue using existing keys for check-in, checkout, breakfast, late checkout, rates, and note.
- Use existing `quickInfo.subtitle` and `quickInfo.resortInfo` keys added during the previous pass.
- Do not introduce hard-coded English labels for guest-facing content unless the label is purely decorative and non-critical.

## Error Handling

- No API or form logic is needed.
- If background images fail, the slide should remain readable on the warm background color.
- The CTA should not cause errors if no contact action is attached.

## Testing

- Run `npm run build`.
- Confirm the existing app header still appears and works.
- Confirm desktop layout resembles the supplied source: left hero, right bento grid.
- Confirm mobile layout scrolls normally inside the existing slide container.

## Out Of Scope

- Replacing the app header with the source navigation bar.
- Adding footer links from the source.
- Adding mouse-tracking JavaScript effects.
- Changing other slides.
