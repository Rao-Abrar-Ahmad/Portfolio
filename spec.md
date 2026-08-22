# Rao's Portfolio Site — Technical Spec

A single-page, server-rendered developer portfolio deployed on Vercel. This document is the complete build spec — hand it directly to the coding agent along with the two source files referenced at the bottom (design system prompt, resume).

---

## 1. Purpose & Positioning

Rao Abrar Ahmad — Front-End Focused Full Stack Developer (React, Next.js, Node.js, Nest.js, FastAPI, Shopify), SaaS & E-commerce expert, 3+ years experience, based in Rawalpindi, Pakistan, freelancing full-time. The site's job is to convert visitors (potential freelance clients, agencies, secondarily employers) into a WhatsApp conversation or a resume view. Keep it simple, fast, and to the point — no unnecessary pages, no unnecessary sections.

---

## 2. Tech Stack & Architecture

- **Framework**: Next.js (App Router), TypeScript
- **Rendering**: Deployed to **Vercel**, using Next.js's native SSR/server components directly — no adapter layer, no static export. Server-rendering is used deliberately because the site will grow real server-backed features post-launch: a server-side contact form endpoint and eventually CMS-backed project data. See §8 for what's in scope now vs. later.
- **Styling**: Tailwind CSS, following the attached Hand-Drawn Design System doc exactly (tokens, components, effects — see §6).
- **Animation**:
  - **Framer Motion** — Project Modal open/close transitions (`AnimatePresence` around the intercepted `/projects/[slug]` route), driven by route changes.
  - **GSAP + ScrollTrigger** — the Experience Timeline's scroll-driven "draw-in": the connecting line drawing itself and each role card animating in as the section scrolls into view.
  - Simple hover/press states (card jiggle, button press-flat) stay as plain CSS transitions per the design system's own spec (`transition-transform duration-100`) — no animation library needed for those.
- **Icons**: `lucide-react`, `stroke-width={2.5}` or `3`, enclosed in rough circles per the design system.
- **Fonts**: `next/font/google` — Kalam (headings, wght 700) and Patrick Hand (body, wght 400). Self-hosted by Next, no external font requests, no layout shift.
- **Images**: All images served from **Cloudinary** — hero headshot, project thumbnails, and project gallery images. Referenced by Cloudinary URL in the local data files (`data/projects.ts`, hero config), not stored as local static assets. Do **not** rely on the native Next.js image optimizer or Cloudflare Images — Cloudinary is the CDN and transform layer.
- **Deployment target**: Vercel.

---

## 3. Page Structure

Single scrollable page at `/`, plus one route pattern for project detail:

```
app/
├── layout.tsx                        # fonts, global styles, paper-texture background
├── page.tsx                          # Header, Hero, Experience, Project Grid, Contact
├── @modal/
│   └── (.)projects/[slug]/page.tsx   # intercepted route — renders Project as overlay
├── projects/
│   └── [slug]/page.tsx               # full standalone Project page (direct nav / refresh / shared link)
└── data/
    ├── projects.ts                   # array of Project objects — Rao adds new projects here
    └── site.ts                       # SEO/metadata + site-wide info — Rao owns this file's content
```

No separate `/projects` index page in this version — the landing page grid loops over the entire `projects.ts` array and grows as projects are added. Revisit if the list gets long (future work).

### Project Modal / Project Page routing pattern

Implement via Next.js **parallel + intercepting routes**:

- Clicking a project card from the grid on `/` navigates to `/projects/[slug]` but intercepts the navigation, rendering the Project as a **modal/overlay on top of the still-visible grid** (the `@modal` slot).
- A **direct visit, hard refresh, or shared link** to `/projects/[slug]` (no client-side interception context) renders the **full standalone Project Page** — same data, same content, different chrome (no overlay/backdrop, just a normal page).
- Both views are populated from the same `Project` object (`data/projects.ts`), keyed by `slug`. Generate static params for all known slugs since the project list is fixed at build/edit time (local TS file, not runtime CMS data).
- Modal dismiss: closing the modal (backdrop click, close button, or Esc) should navigate back to `/` (`router.back()`), not just hide the overlay — must keep the URL bar in sync with what's visually shown.

---

## 4. Data Layer

### `data/projects.ts`

```ts
export type Project = {
  slug: string; // "ozelu" — used in the URL
  title: string; // "Ozelu — Photo & Document Printing E-commerce"
  summary: string; // 1–2 line hook, shown on the grid card
  description: string; // full case-study body, shown on modal/page
  stack: string[]; // ["Next.js", "Node.js", "Stripe", ...]
  role?: string; // e.g. "Architected and delivered end-to-end"
  metrics?: string[]; // e.g. ["4,000+ events", "260,000+ ticket sales"]
  liveUrl?: string; // omit for confidential projects
  repoUrl?: string; // omit unless open-source (e.g. SoSync)
  confidential?: boolean; // true → CTA reads "Details on request" instead of a live link
  thumbnail: string; // single Cloudinary URL — used on the grid card
  images?: string[]; // 3–4 Cloudinary URLs — used in the modal/page gallery (optional)
};

export const projects: Project[] = [
  // Rao adds one object per project here, following the shape above.
];
```

No `featured` flag — every object in the array renders on the landing grid, in array order (or reverse-chronological — confirm with Rao when populating).

### `data/site.ts`

Rao owns and populates this file himself (SEO metadata, Open Graph image, title/description, and any other site-wide info). Do not invent its shape — leave it to Rao, but wire `app/layout.tsx`'s `metadata` export to read from it once it exists.

---

## 5. Sections (in page order)

### 5.1 Header

Small, centered. Contains **only**:

- "Rao" (name)
- Two icon links: LinkedIn, GitHub (`lucide-react` icons, enclosed in rough circles per design system)

No nav bar, no anchor links to other sections, no hamburger menu. Deliberately minimal — smooth and smart, not a typical navbar.

### 5.2 Hero / About

- Short intro with a catchy one-line hook (copy TBD from Rao, drawing on his positioning: Front-End Focused Full Stack Developer | React, Next.js, Node.js, Nest.js, FastAPI, Shopify | SaaS & Ecommerce Expert)
- Two CTA buttons:
  - **WhatsApp** — direct link (`https://wa.me/...`), bypasses any on-page section, opens a chat immediately. No contact form dependency.
  - **View Resume** — external link to a hosted PDF (Rao will supply the link)
- Hero photo: Rao's existing circular, transparent-background headshot (already supplied). **Do not re-crop it into a wobbly/organic shape.** Instead, mount it as-is inside a tape-strip or thumbtack-decorated frame (per design system's `decoration="tape"` / `decoration="tack"` card treatment) with a slight rotation (`-rotate-2` to `rotate-2`). This resolves the shape conflict: the circle stays a circle, but it reads as a photo _pinned to the page_ rather than a generic avatar UI element, keeping it consistent with the "no clinical geometry" design philosophy.

### 5.3 Experience — Sketched Vertical Timeline

- A hand-drawn-style vertical connecting line running down the section (squiggly/dashed, per the design system's SVG decoration guidance). **Animated with GSAP + ScrollTrigger** — the line draws itself progressively as the user scrolls through the section, and each role card animates in (e.g. fade/slide + slight rotation settle) timed to its position along the line.
- Each role from the resume (RF Technologies — Full Stack Developer & Team Lead, Sep 2022–Mar 2026; Technoworld Solutions — Full Stack Developer, Oct 2025–Mar 2026) is a stop on the timeline: a rotated card (wobbly border, hard offset shadow) containing company, title, dates, location/type, and bullet highlights.
- Chronological order, no tabs/accordion — straightforward top-to-bottom scroll, styled as the visual centerpiece of the page (this is the section Rao specifically wants to feel "creative").

### 5.4 Projects — Interactive Grid

- Loops over **all** objects in `data/projects.ts` (no curation, no "view all" — see §3).
- Each card: thumbnail image, title, summary, stack tags, slight rotation, hover "jiggle" (`hover:rotate-1`/`hover:-rotate-1`, hard-shadow lift on hover per design system button/card hover states).
- Card click → navigates to `/projects/[slug]`, intercepted as a modal per §3.
- **Design brief**: this grid should be the most visually creative/interactive section after the timeline — lean into the design system's card decorations (tape/tack variants, post-it yellow for standout cards, dashed borders) rather than a uniform generic grid. Vary rotation and decoration per card so it doesn't look templated.

### 5.5 Project Modal / Project Page (detail view)

Two-column layout on desktop:

- **Left column** — project info, `sticky` positioned so it stays in view while the right column scrolls: title, description, role, stack tags, metrics callouts, live/repo/confidential CTA.
- **Right column** — image gallery, images stacked top to bottom, scrolls independently (standard document flow, not a carousel).
- On mobile: stack single-column, info block first, then images (no sticky behavior needed at narrow widths — confirm reduced/simplified treatment when building).
- Modal chrome (overlay/backdrop, close affordance) only applies to the intercepted `@modal` route; the standalone `/projects/[slug]` page renders the same two-column content full-page, no backdrop. **The modal's open/close is animated with Framer Motion's `AnimatePresence`** (e.g. backdrop fade + panel scale/slide in); the standalone full page has no such transition since there's no prior page state to animate from.

### 5.6 Contact (replaces a footer — this is the last section on the page)

- Email — `mailto:raoabrar629@gmail.com`
- Phone — `tel:` or WhatsApp link (match whichever CTA style was used in the hero for consistency)
- Location — "Rawalpindi, Punjab, Pakistan" (text only)
- LinkedIn + GitHub icons — **repeated here** (same icons as the header; Rao plans to add more social links here in the future, so build this as a small, easily-extendable icon list, not a hardcoded pair)
- No copyright/footer line needed beyond this section — this _is_ the site's ending, there is no separate footer element.

---

## 6. Design System

Implement exactly per the attached **Hand-Drawn Design System** prompt — this is the full authority for tokens, component styling, effects, and responsive rules (colors, typography scale, wobbly border-radius technique, hard offset shadows, paper texture, decoration elements, button/card/input states, spacing, and the mobile-first responsive strategy including which decorative elements hide below `md:`). Do not deviate from its token values or component patterns; the section-specific notes above (§5) are additions on top of it, not replacements.

One resolved exception to note explicitly: the hero headshot keeps its existing circular crop (§5.2) rather than being forced into the wobbly-blob treatment the design system specifies for other circular elements (e.g. stat shapes) — this is an intentional, single exception for a real photograph, not a precedent for other UI elements.

---

## 7. Content Source

Pull all professional content (roles, dates, bullets, project details, tech stack per project, metrics) from Rao's resume on file (`Rao_Abrar_Ahmad_FullStack_Resume_Final.pdf`) unless Rao provides copy directly for a given section. Do not fabricate metrics, dates, or project details not present in the resume or explicitly supplied by Rao.

---

## 8. Explicitly Out of Scope (v1)

- Contact form / server-side email-sending endpoint (planned, not built yet — SSR on Vercel already supports adding a Next.js API route or Server Action for this later with no infra change needed)
- CMS-backed project data (planned future migration off local `projects.ts`)
- Dedicated `/projects` index page
- SEO/metadata content itself (Rao is authoring `data/site.ts` directly)
- Dark mode — design system defines a single light-mode palette only

---

## 9. Reference Documents

- **Design System**: `DESIGNSYSTEM.md`, Hand-Drawn Design System prompt (provided separately — colors, typography, radius/border, shadows, component stylings, layout strategy, non-genericness rules, responsive strategy)
- **Resume**: `Rao_Abrar_Ahmad_FullStack_Resume_Final.pdf` (professional summary, experience, projects, skills)
- **Glossary**: `CONTEXT.md` (accompanying this spec) — canonical terms used throughout this document (Project, Project Grid, Experience Timeline, Header, Image Delivery, Hero Photo Treatment, Site Config, Modal Transition, Timeline Draw-In)
