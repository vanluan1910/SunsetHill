# Light Standardization Design

## Goal

Standardize the content-page visual system across the project without flattening every page into the same layout. The outcome should make the pages feel like one product through shared background treatment, consistent typography hierarchy, shared text-color rules, and a repeated section skeleton.

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
- Home page typography alignment where it affects cross-page consistency

Out of scope:

- Replacing each page's unique content structure with a single rigid template
- Navigation behavior changes
- Translation rewrites beyond small consistency fixes required by the visual cleanup
- Major content changes

## Existing Foundation

The project already has a usable shared base:

- `PageShell`
- `PageHero`
- `SectionHeading`
- `ContactCTA`
- shared warm background through `warm-page-bg`

This work builds on that foundation instead of introducing a broader component system.

## Standardization Strategy

### 1. Page Shell Consistency

All content pages continue to use `PageShell` so the background, root text tone, and page frame remain shared.

Home remains visually distinct through `sunset-home`, but its text hierarchy should still feel compatible with the rest of the application.

### 2. Typography Hierarchy

The project should converge on the following visual hierarchy:

- **Hero titles:** `font-serif`, large, high-contrast, reserved for page-level headlines
- **Section titles:** `font-serif`, medium-large, clear separation from body copy
- **Card titles:** `font-sans`, bold, compact, easier to scan in repeated grids
- **Body text:** `font-sans`, readable, consistent line-height
- **Meta labels / kicker text:** uppercase, letter-spaced, smaller, accent-colored

This keeps editorial drama in page titles and section titles while making repeated cards easier to scan.

### 3. Shared Text-Color Roles

Current pages mix too many near-identical browns and dark neutrals. The standard should reduce that to four visual roles:

- **Primary heading text:** deep dark neutral
- **Secondary heading / accent text:** warm brown / resort accent
- **Body text:** muted dark brown
- **Meta / support text:** lighter muted brown

The implementation should reduce arbitrary page-specific values where practical and use one consistent palette across components.

### 4. Shared Layout Skeleton

Each page should loosely follow the same rhythm, even when content blocks differ:

1. Hero or page header
2. Main section heading
3. Primary card/content area
4. One CTA/help block

Pages do not need identical internal grids, but they should feel aligned through spacing, card chrome, and visual order.

## Page-Level Intent

### Quick Information

- Keep the current two-column desktop arrangement.
- Standardize the text colors and section/card typography.
- Preserve the simpler card grouping already in place.

### Wi-Fi & Reception

- Keep the left hero and right reception/services structure.
- Ensure the same heading and body scale as Quick Information.
- Keep the Wi-Fi credentials visually distinct but not on a separate font/color system.

### House Rules

- Keep the hero + bento pattern.
- Preserve the stronger editorial tone.
- Standardize card body text and support CTA treatment to match the shared system.

### Resort Services

- Keep the current desktop hero + bento/service grid and mobile stacked cards.
- Normalize card title/body scale and text colors against the shared rules.

### Tours & Tickets

- Keep the card grid and hero.
- Align section spacing, section heading treatment, and card text colors with Explore and Attractions.

### Explore Phu Quoc

- Keep the beaches card grid and hero.
- Align card and section hierarchy with Tours & Tickets.

### Attractions

- Keep the editorial hero, signature bento, and culture/crafts sections.
- Preserve stronger image-led storytelling while aligning heading/body/meta text rules.

### Local Food and Travel Tips

- These two pages currently lag behind the newer design language.
- They should be updated to match the shared typography and text-color hierarchy without losing their existing content structure.

### Home

- Home remains visually distinct.
- Only typography relationships should be tuned so the transition from Home to content pages feels intentional.

## Component Reuse Rules

Reuse:

- `PageShell`
- `PageHero`
- `SectionHeading`
- `ContactCTA`

Do not introduce a generic shared card for every page. Card content structures are still different enough that the abstraction would likely become prop-heavy and brittle.

## Verification

The implementation should verify:

- `npm run build`
- `npm run lint`
- visual-source consistency review across all in-scope page components
- no duplicated or competing primary Reception CTA on a page
- section titles and card titles follow the agreed serif/sans split
- repeated body/meta text colors are visually aligned across files

## Risks

- Over-standardizing can remove page personality
- Under-standardizing leaves the current “every page is slightly different” problem intact

The chosen strategy intentionally favors **shared hierarchy over identical composition**.
