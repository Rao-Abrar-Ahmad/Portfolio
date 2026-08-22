# CONTEXT.md — Rao's Portfolio Site

Glossary of resolved terms and decisions. No implementation detail beyond naming — see spec.md for the buildable spec.

## Terms

**Rendering Mode**: Deployed to **Vercel** using Next.js's native App Router SSR/server components — no adapter layer needed (the earlier OpenNext/Cloudflare Workers plan was replaced; Vercel is Next.js's native platform). Still not a static export — server-rendering is used because the site will grow real server-backed features (contact form API route, future CMS-backed project data).

**Project**: A single portfolio case study (e.g., "Ozelu", "SoSync"). Defined as a local, statically-typed object — not fetched from a CMS. Source of truth is a TS config file (array of `Project` objects), authored directly by Rao like structured JSON. This is distinct from a future "CMS Project" (not in scope yet) which would be the same shape fetched remotely instead of imported locally.

**Project Grid**: The landing-page (`/`) section that loops over every Project in the array and renders a card per project. No pagination or curation in scope now — grid grows as projects are added. A separate `/projects` index page is explicitly out of scope for this version (future work).

**Experience Timeline**: The Experience section's presentation — a vertical, hand-drawn-style connecting line down the page linking each Role (RF Technologies, Technoworld Solutions) as a stop, rendered as a rotated card with company/dates/bullets. Chronological, no tabs/accordion interaction.

**Header**: Small centered element containing only Rao's name and two icon links (LinkedIn, GitHub) — no anchor nav, no menu. Intentionally minimal since the site is a single scrollable page.

**Image Delivery**: All images (hero headshot, project thumbnails, project gallery images) are hosted and served via Cloudinary CDN, referenced by URL in the local Project data / hero config — not stored as local static assets, and not run through Cloudflare Images or the native Next.js image optimizer.

**Hero Photo Treatment**: Rao's existing circular, transparent-background headshot is kept as-is (not re-cropped into a wobbly blob), but mounted inside a tape/thumbtack-decorated frame with slight rotation — resolving the tension between a geometrically perfect circle and the design system's "no straight lines / no perfect geometry" rule by treating the circle as a photo *mounted* on the page, not a raw UI shape.

**Site Config**: A local `data/site.ts` file, sibling to `data/projects.ts`, authored and maintained by Rao himself — holds SEO/metadata (title, description, Open Graph image, etc.) and other site-wide personal info. Out of scope for this spec to define its exact shape; Rao owns its content.

**Modal Transition**: The open/close animation of the Project Modal (intercepted `/projects/[slug]` route overlaying the grid), implemented with Framer Motion's `AnimatePresence` — route-driven enter/exit animation, distinct from the Timeline Draw-In below.

**Timeline Draw-In**: The scroll-driven animation of the Experience Timeline's connecting line and role cards, implemented with GSAP + ScrollTrigger — the line appears to "draw itself" and cards animate in as the user scrolls through the Experience section. Chosen over Framer Motion for this specific effect because GSAP/ScrollTrigger is better suited to sequenced, scroll-position-linked path animation.

**Project Modal**: The overlay view of a Project shown when navigating to it from the grid on `/`, implemented via Next.js parallel + intercepting routes (`@modal/(.)projects/[slug]`), so the URL still becomes `/projects/[slug]` but renders as an overlay on top of the grid.

**Project Page**: The full, standalone rendering of a Project at `/projects/[slug]`, shown on direct navigation/refresh/shared link (no intercepting route active) — same data and same content as the Project Modal, different chrome.
