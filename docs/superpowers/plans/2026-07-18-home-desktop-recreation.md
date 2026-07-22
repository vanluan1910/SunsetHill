# Home Desktop Recreation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Home slide with a full-screen welcome page that uses the latest supplied Cloudinary background image and matches the framed welcome-panel reference layout.

**Architecture:** Keep the existing Vite React slide shell. Render the new Home markup in `WelcomePage.jsx`, scope all Home-specific styling under `.sunset-home` in `styles-home.css`, and keep the global `Header` plus bottom dot navigation hidden on slide 0.

**Tech Stack:** React 19, Vite 8, scoped CSS, Material Symbols font already loaded by the app.

---

## File Structure

- Modify: `src/components/WelcomePage.jsx`
  - Responsibility: Home slide content and static data.
- Modify: `src/styles-home.css`
  - Responsibility: full-screen welcome reference styling scoped under `.sunset-home`.
- Verify: `src/App.jsx`
  - Responsibility: header and dot navigation remain hidden on slide 0.

---

### Task 1: Replace Home Markup

**Files:**
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Replace component contents**

Use a single `WelcomePage` component with:

```jsx
import '../styles-home.css';

const HOME_BACKGROUND_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784346347/07ce1d9d-f47a-4317-9981-ea5f2d7b4764_lcba0j.png';

const HIGHLIGHTS = [
  { icon: 'room_service', label: 'Warm Hospitality' },
  { icon: 'park', label: 'Tropical Escape' },
  { icon: 'spa', label: 'Relax & Unwind' },
  { icon: 'favorite', label: 'Memorable Stay' },
];

function WelcomePage() {
  return (
    <main className="sunset-home" style={{ '--sh-home-bg': `url('${HOME_BACKGROUND_IMAGE}')` }}>
      <section className="sh-welcome-screen" aria-labelledby="home-title">
        <article className="sh-welcome-panel">
          <div className="sh-sun-mark" aria-hidden="true">
            <span className="material-symbols-outlined">wb_sunny</span>
          </div>
          <div className="sh-kicker-row">
            <span />
            <p>Resort Information</p>
            <span />
          </div>
          <div className="sh-flourish" aria-hidden="true" />
          <h1 id="home-title">Welcome to<br />SunSet Hill Resort!</h1>
          <div className="sh-flourish" aria-hidden="true" />
          <div className="sh-welcome-copy">
            <h2>Dear Valued Guest,</h2>
            <p>Welcome to SunSet Hill Resort! We are delighted to have you with us and hope you enjoy a relaxing and memorable stay in Phu Quoc.</p>
            <p>Below you&apos;ll find important information and useful services to help you enjoy a comfortable and memorable stay. If you need any assistance, please do not hesitate to contact our Reception team at any time.</p>
          </div>
          <div className="sh-highlight-strip" aria-label="Resort highlights">
            {HIGHLIGHTS.map((item) => (
              <div className="sh-highlight" key={item.label}>
                <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

export default WelcomePage;
```

- [ ] **Step 2: Run build**

Run: `npm run build`

Expected: Vite build succeeds.

---

### Task 2: Replace Home CSS

**Files:**
- Modify: `src/styles-home.css`

- [ ] **Step 1: Replace stylesheet contents**

Use CSS scoped under `.sunset-home` to implement:

- full-screen `.sh-welcome-screen` using `--sh-home-bg` as cover background
- `.sh-welcome-panel` positioned left, approximately 58% width desktop, rounded gold border, cream translucent paper background
- centered `Resort Information` kicker and large `Welcome to SunSet Hill Resort!` title
- readable welcome body copy
- bottom `.sh-highlight-strip` with 4 equal items, circular gold icons, mobile stacking
- mobile layout that scrolls if content exceeds viewport

- [ ] **Step 2: Run build**

Run: `npm run build`

Expected: Vite build succeeds.

---

### Task 3: Final Verification

**Files:**
- Verify: `src/components/WelcomePage.jsx`
- Verify: `src/styles-home.css`
- Verify: `src/App.jsx`

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: lint succeeds.

- [ ] **Step 2: Run build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 3: Confirm requirements**

Confirm statically:

- `WelcomePage.jsx` uses `v1784346347/07ce1d9d-f47a-4317-9981-ea5f2d7b4764_lcba0j.png`.
- Home renders welcome panel content, not Quick Information/Breakfast cards.
- `App.jsx` hides global header and bottom dot nav when `slide === 0`.

---

## Self-Review

- Spec coverage: plan covers latest image URL, welcome panel content, highlight strip, scoped CSS, hidden Home navigation, and lint/build verification.
- Placeholder scan: no TBD/TODO placeholders remain.
- Type consistency: class names and constants are consistent across markup and CSS tasks.
