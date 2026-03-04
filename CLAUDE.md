# CLAUDE.md — Amish Homesteading Website (Phase 1 Skeleton)

## Phase 1 Goal (next 2–3 days)
Build a polished, mobile-first public website that looks expensive and feels interactive.
NO real payments, NO real donation processing yet (placeholders only).

## Non-negotiables
- Mobile-first. Test small screens first.
- Fast, clean, modern design. Not generic.
- Reusable components and consistent spacing/typography.
- Keep placeholders for future features (enroll, donate, goals, media library).

## Pages to create now (with placeholder content)
- Home
- About / Our Story (Amish to Adventist)
- Programs (overview)
- Program detail template (5 example programs as placeholders)
- Register / Enroll (placeholder multi-step UI only; no payment)
- Donate (categories + optional “goal” UI placeholders; no payment)
- Media / Resources (placeholder list + category filters UI)
- Visit Us
- Beliefs
- Policies (weather, refunds, terms, privacy)
- Contact

## Interactivity (Phase 1)
Include light, tasteful interactivity that works on mobile:
- Sticky nav with active section highlight or scroll behavior
- Accordion FAQs on program pages
- Simple filter/tabs on Resources page
- Stepper UI on Register page (UI only)

Animations: only transform/opacity. No transition-all.

## Local dev
- Run on localhost via project dev server (npm run dev).
- After each change: ensure no console errors and layout works on mobile.

## Styling rules
- Consistent spacing scale + type scale across pages.
- Avoid “default Tailwind blue” look; choose a deliberate palette.
- Every clickable element must have hover + focus-visible + active.
- Accessibility basics: semantic headings, labels on forms, keyboard-friendly nav.

## Placeholder assets
- Images: https://placehold.co/WIDTHxHEIGHT
- Copy: realistic placeholder text (not lorem ipsum).