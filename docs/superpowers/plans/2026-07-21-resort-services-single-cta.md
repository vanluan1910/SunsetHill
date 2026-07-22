# Resort Services Single CTA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ensure Resort Services has only one primary Reception contact CTA per page context.

**Architecture:** Remove contact buttons from individual service cards in `src/components/MotorbikeRental.jsx`. Keep desktop hero hotline CTA and mobile final Assistance card CTA.

**Tech Stack:** React JSX, Vite, Tailwind CSS utility classes.

---

## File Structure

- Modify: `src/components/MotorbikeRental.jsx`
- Responsibility: Render Resort Services page.

### Task 1: Remove Per-Service Contact Buttons

**Files:**
- Modify: `src/components/MotorbikeRental.jsx`

- [ ] **Step 1: Remove Motorbike service button**

Delete the `ContactButton` block from `MotorbikeCard`:

```jsx
<div className="mt-auto pt-5">
  <ContactButton>{t('rules.contactReception', lang)}</ContactButton>
</div>
```

Expected: motorbike keeps reserve note text but no contact button.

- [ ] **Step 2: Remove Taxi service button**

Delete the `ContactButton` block from `TaxiCard`:

```jsx
<div className="mt-5 w-full md:mt-0 md:w-auto">
  <ContactButton variant="solid">{t('rules.contactReception', lang)}</ContactButton>
</div>
```

Expected: taxi keeps description/recommendation but no contact button.

- [ ] **Step 3: Remove unused ContactButton helper if unused**

If no references remain, delete `ContactButton`.

Expected: no unused helper remains.

### Task 2: Verify

**Files:**
- No file changes.

- [ ] **Step 1: Build**

Run: `npm run build`

Expected: Vite build succeeds.

- [ ] **Step 2: Lint**

Run: `npm run lint`

Expected: oxlint reports no errors.

## Self-Review

- Spec coverage: Removes duplicate per-service contact buttons while keeping page-level CTA.
- Placeholder scan: No placeholders remain.
- Type consistency: No API changes.
