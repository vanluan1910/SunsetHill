# Light Standardization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize content-page layout foundations, typography hierarchy, and text-color roles without forcing every page into the same composition.

**Architecture:** Keep `PageShell`, `PageHero`, `SectionHeading`, and `ContactCTA` as the shared primitives. Normalize page-level heading usage, card-title font usage, and repeated text colors across all non-home content pages, while preserving each page’s content-specific card/grid structure.

**Tech Stack:** React JSX, CSS, Vite, Tailwind utility classes.

---

## File Structure

- Modify: `src/components/QuickInfo.jsx`
- Modify: `src/components/WifiReception.jsx`
- Modify: `src/components/HouseRules.jsx`
- Modify: `src/components/MotorbikeRental.jsx`
- Modify: `src/components/ToursTickets.jsx`
- Modify: `src/components/ExplorePhuQuoc.jsx`
- Modify: `src/components/Attractions.jsx`
- Modify: `src/components/LocalFood.jsx`
- Modify: `src/components/TravelTips.jsx`
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

### Task 1: Standardize Shared Typography Rules

**Files:**
- Modify: all in-scope page components listed above

- [ ] **Step 1: Hero and section titles**

Ensure major page and section headings consistently use `font-serif` and the existing large size scale.

- [ ] **Step 2: Card titles**

Convert repeated card titles to `font-sans` + bold weight wherever they are still using mismatched title styling.

- [ ] **Step 3: Body and meta text**

Normalize body copy to a shared readable size/leading pattern and reduce mixed one-off support text scales where practical.

Expected: headings feel editorial; cards feel scannable and consistent.

### Task 2: Standardize Text-Color Roles

**Files:**
- Modify: all in-scope page components listed above

- [ ] **Step 1: Primary heading color**

Use one dominant title color role for page/section/card title text.

- [ ] **Step 2: Body and support colors**

Reduce drifting values between similar body/support text blocks.

- [ ] **Step 3: Meta label consistency**

Normalize kicker/meta label tone for uppercase helper text.

Expected: pages feel like one visual system rather than several close but different brown palettes.

### Task 3: Normalize Older Pages To Shared Skeleton

**Files:**
- Modify: `src/components/LocalFood.jsx`
- Modify: `src/components/TravelTips.jsx`
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

- [ ] **Step 1: Local Food and Travel Tips**

Bring title/card/body styling closer to the newer shared system without rebuilding their layouts.

- [ ] **Step 2: Home typography alignment**

Keep Home visually distinct, but align its copy hierarchy and brand feel with the rest of the site.

Expected: older pages no longer feel visually disconnected from the newly rebuilt pages.

### Task 4: Final Verification

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

- [ ] **Step 3: Consistency review**

Manually inspect source for:

```text
Hero/section headings -> serif
Card titles -> sans bold
One primary CTA per page context
Shared background remains intact
```

## Self-Review

- Spec coverage: all in-scope pages are included, but page-specific layouts are preserved.
- Placeholder scan: No placeholders remain.
- Type consistency: shared primitive components remain unchanged in API.
