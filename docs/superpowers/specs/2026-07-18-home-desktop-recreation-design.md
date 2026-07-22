# Home Desktop Recreation Design

Date: 2026-07-18

## Goal

Recreate the desktop home page to closely match the latest provided welcome reference image. The new home replaces the current first slide in the existing Vite React app.

## Scope

- Replace the current `WelcomePage` slide with a full-screen welcome page. The desktop view should use the latest supplied Cloudinary background image and position text/content like the reference: cream/gold framed panel on the left, resort image area on the right.
- Keep the existing horizontal slide app shell and all non-home slides.
- Hide the existing global `Header` while `slide === 0` so the reference image layout is unobstructed.
- Keep mobile functional with responsive stacking, even though the main target is desktop.

## Architecture

The implementation stays minimal and focused:

- `src/components/WelcomePage.jsx` renders the new home page markup as React JSX.
- `src/styles-home.css` contains the scoped visual system under `.sunset-home`, including fonts, colors, layout, hover states, and responsive rules.
- `src/App.jsx` conditionally renders the existing `Header` only for slides after Home.

No new routing, persisted state, or external data model is needed.

## Visual Behavior

The desktop page should closely follow the latest image reference:

- Full-screen desktop Home using the Cloudinary background: `https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784346347/07ce1d9d-f47a-4317-9981-ea5f2d7b4764_lcba0j.png`.
- No top home navigation, bento services grid, accommodations section, footer, or bottom dot navigation on this recreated Home slide.
- Left framed panel content: “Resort Information”, “Welcome to SunSet Hill Resort!”, “Dear Valued Guest,”, two welcome paragraphs, and a bottom highlight strip.
- Highlight strip contains Warm Hospitality, Tropical Escape, Relax & Unwind, and Memorable Stay.
- Cream paper-like panel, rounded gold border, subtle shadow, gold decorative icons/dividers, and serif typography should approximate the reference.

## Data And Assets

The implementation should use the latest supplied Cloudinary URL as the full Home background image. Existing project assets remain untouched. The existing `lang` prop may remain accepted by `WelcomePage`, but this recreated desktop design will use the English copy from the reference so it matches the source design.

## Error Handling

There is no network API or form submission. If remote images fail to load, the page should still show readable text over background/fallback colors. No runtime DOM scripting is required.

## Testing

Verification should include:

- `npm run build` to confirm JSX/CSS compiles.
- A desktop visual smoke check via local Vite preview or dev server if feasible.
- Confirm slide navigation still works for other slides and the global header appears outside Home.

## Out Of Scope

- Rebuilding every other slide to match this design.
- Adding booking functionality.
- Adding full multilingual translations for the reference home copy.
- Replacing remote images with local optimized assets.
