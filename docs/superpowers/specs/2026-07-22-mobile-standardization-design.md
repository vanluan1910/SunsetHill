# Mobile Standardization Design

## Goal

Standardize the mobile experience across all non-home content pages so they share one clear layout skeleton and a compact 3-role text-color system.

## Scope

In scope:

- Quick Information
- Wi-Fi & Reception
- House Rules
- Resort Services
- Tours & Tickets
- Explore Phu Quoc
- Attractions
- Local Food
- Travel Tips

Out of scope:

- Desktop layout rewrites
- Home page layout changes beyond existing refinements
- Navigation behavior changes
- New data models or broad component refactors

## Mobile Layout Standard

Every non-home content page should read like part of the same mobile system:

1. A small hero/header block at the top
2. One main content stack of cards or sections
3. A single support/CTA block at the bottom

The pages do not need to share identical content blocks, but they should share the same structure rhythm, spacing logic, and visual density.

## Shared Mobile Patterns

### Hero Block

Mobile hero blocks should use the same overall language across pages:

- compact rounded container
- one title
- one supporting line or kicker
- limited decorative treatment

The current mobile pages already use pieces of this pattern; the work here is to make them feel like a common system rather than separate one-off layouts.

### Content Stack

The card/section stack below the hero should follow a consistent rhythm:

- similar top margins after hero
- similar spacing between stacked blocks
- similar corner radius and internal padding
- no repeated section titles unless they add real information

### CTA Block

Each page should end with one primary support/action block, not several competing buttons. Pages that already have a clear bottom CTA keep that pattern, but it should follow the same visual treatment.

## Typography Rules

Mobile typography should use only three text roles for content pages:

### 1. Primary Title

Used for the main hero/page title.

- Typeface: serif
- Color: `#1d1b19`
- Weight: bold/semi-bold

### 2. Accent / Section Title

Used for section headings and highlighted labels.

- Typeface: serif for major headings or sans if the component is a small card title already standardized that way
- Color: `#8a501a`
- Keep it visually distinct from the body text

### 3. Body / Meta Text

Used for descriptions, notes, labels, and helper text.

- Color: `#57423b` for main body text
- Color: `#8b7169` for muted/meta/support text

The goal is to reduce the current mix of many near-identical brown tones and give each page a cleaner visual hierarchy.

## Pages And Application Rules

### Quick Information

- Keep the current mobile structure.
- Tighten hero-to-content spacing.
- Use the shared 3-role text palette consistently across title, labels, and notes.

### Wi-Fi & Reception

- Keep the current hero, credentials card, and reception/contact stack.
- Normalize spacing and text roles to match Quick Information.

### House Rules

- Keep the hero image and rules cards.
- Preserve the distinct highlighted rule card, but align text colors to the shared palette.

### Resort Services

- Keep the mobile stacked service cards.
- Standardize title/body/meta colors and spacing with the other content pages.

### Tours & Tickets, Explore Phu Quoc, Attractions

- Keep the hero plus card-grid/stack composition.
- Remove redundant section labels when the hero already conveys the same meaning.
- Align card titles and body text to the shared palette.

### Local Food And Travel Tips

- Keep their existing content structure, but bring card titles, body, and meta text into the same palette and spacing rhythm as the newer pages.

## Shared Components

Reuse the current shared components where they already exist:

- `PageShell`
- `PageHero`
- `SectionHeading`
- `ContactCTA`

No new generic card component is required. Each page keeps its own card markup, but mobile spacing, typography, and colors should follow the shared rules above.

## Visual Consistency Rules

To keep mobile looking unified:

- one main title per page section
- no extra repeated label unless it adds information
- body copy stays in a muted brown tone
- accent text is reserved for labels, headings, and actions
- cards use a consistent radius/padding pattern across pages

## Verification

The implementation should be verified with:

- `npm run build`
- `npm run lint`
- a mobile-only source review to confirm the same layout rhythm is used across all in-scope pages
- a color-role review to confirm text is limited to the agreed 3-role palette

## Risks

- Over-standardizing could make every page feel the same.
- Under-standardizing would keep the current mix of styles.

The approach should favor shared rhythm and palette over identical page templates.
