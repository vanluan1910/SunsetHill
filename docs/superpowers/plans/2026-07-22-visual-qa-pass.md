# Visual QA Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Perform a final visual refinement pass across all content pages to improve spacing, typography rhythm, accent weight, and section hierarchy without changing content or page architecture.

**Architecture:** Apply small class-level adjustments page by page. No new shared components, no content changes, no layout rewrites.

**Tech Stack:** React JSX, Tailwind utility classes, CSS.

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

### Task 1: Hero And Header Rhythm

**Files:**
- Modify the page components listed above where hero/title spacing still feels tight or repetitive.

- [ ] **Step 1: Tighten or reduce repeated post-hero headers**

Remove or soften unnecessary repeated section labels below heroes where the hero already carries the same message.

- [ ] **Step 2: Improve hero-to-content spacing**

Adjust margins/padding so the transition from hero to first content block feels deliberate and even across pages.

### Task 2: Card Typography And Spacing

**Files:**
- Modify card-heavy pages listed above.

- [ ] **Step 1: Refine card title sizing**

Ensure card titles are neither oversized nor too weak relative to card body text.

- [ ] **Step 2: Refine paragraph spacing**

Adjust body spacing and line height where cards feel cramped or too loose.

- [ ] **Step 3: Balance meta rows and badges**

Make small meta labels, support text, and badges sit more comfortably with body text.

### Task 3: Accent Weight And Visual Quietness

**Files:**
- Modify pages where accent colors or section labels still feel too loud or too faint.

- [ ] **Step 1: Soften overly strong accents**

Reduce the visual weight of accent text where it competes with main headings.

- [ ] **Step 2: Strengthen weak hierarchy where needed**

Increase emphasis only where headings or support sections currently disappear visually.

### Task 4: Home Refinement

**Files:**
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

- [ ] **Step 1: Rebalance mobile logo/copy spacing**

Ensure the logo and body copy feel intentional and not crowded.

- [ ] **Step 2: Rebalance support copy spacing if needed**

Keep Home distinct, but aligned with the rest of the site’s reading rhythm.

### Task 5: Verify

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: only visual refinement is changed.
- Placeholder scan: No placeholders remain.
- Type consistency: content and page structures remain intact.
