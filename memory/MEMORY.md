# Heritage Harvest Homestead — Project Memory

## Project
Next.js 15 App Router. Dev: `npm run dev`.
Root: `C:\Users\Donovan\Desktop\amish-homesteading-site`

## CRITICAL: Directory Structure
- Pages live in `app/` (root-level, NOT src/app/)
- Components live in `src/components/` (tsconfig alias `@/*` → `./src/*`)
- Data/lib lives in `src/lib/`
- Public assets in `public/`
- `src/app_backup/` is archived — do NOT edit
- Root-level `components/` and `lib/` are legacy/unused — do NOT edit
- Only edit: `app/`, `src/components/`, `src/lib/`, `public/`

## Design System
- Palette: forest (#2C5016), forest-dark (#1A3009), forest-light (#3D6B22), amber (#B8860B), amber-light (#D4A54B), barn (#8B2E19), stone (#FAF7F2), stone-dark (#EDE5D8), stone-darker (#D8CDBE), earth (#5C4D3C), earth-light (#7A6E65), cream (#FFFDF9)
- Fonts: Playfair Display (--font-heading), Inter (--font-sans)
- Images: `https://placehold.co/WIDTHxHEIGHT` or `placehold.co/WxH/BGCOLOR/TEXTCOLOR`
- Animations: only transform/opacity (no transition-all)

## Phase 1 Status: COMPLETE
All pages built. All components pre-existed.

### Pages created
- `/` — Home (hero, programs grid, story snippet, numbers, testimonial, donate CTA, visit CTA)
- `/about` — Timeline, values, family bio
- `/programs` — Grid + FAQ (static, no accordion)
- `/programs/[slug]` — Dynamic detail: curriculum, schedule, instructor, FAQ accordion, other programs
- `/register` — 4-step stepper (program → info → group → review), placeholder submit
- `/donate` — Category selector, amount picker, goals with ProgressBar, no payment
- `/resources` — Search + Tabs filter + ResourceCard grid
- `/visit` — Map placeholder, lodging cards, FAQ, what-to-expect grid
- `/beliefs` — Belief cards on dark bg, hospitality note, links to adventist.org
- `/contact` — Form with success state, contact info, hours
- `/policies` — Hub with 4 cards
- `/policies/weather`, `/policies/refunds`, `/policies/terms`, `/policies/privacy`

### Data
`src/lib/programs.ts` — expanded Program type with description, instructor, topics, includes, schedule, faqs + `getProgramBySlug()` helper

### Components (all pre-built, used as-is)
Navbar, Footer, Section, Button, Card (ProgramCard, ResourceCard), Accordion, Tabs, Stepper, Badge, ProgressBar, PageHero, SectionHeader

## Key Patterns
- Client pages: register, donate, resources, contact → "use client"
- Server pages: everything else (metadata exports work)
- Badge: `variant="forest"|"amber"|"barn"|"stone"|"earth"`; ProgressBar: value 0–100
- Button: `variant="primary"|"secondary"|"outline"|"ghost"|"amber"`, accepts href (renders Link) or button
