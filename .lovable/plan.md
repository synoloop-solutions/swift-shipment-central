
# SwiftCargo Logistics — Revised Build Plan

Production-quality logistics marketing site on TanStack Start + Tailwind v4 + shadcn/ui + Framer Motion. Mock data + LocalStorage. Real Unsplash/Pexels photography. No backend.

## 1. Design System

- Palette (oklch tokens in `src/styles.css`, light + dark): Deep Blue (primary), Logistics Orange (accent), White, Steel Gray (muted), Charcoal (foreground).
- Fonts via `<link>` in `__root.tsx` (Google Fonts preconnect + stylesheet): Space Grotesk (display), Inter (body). Registered in `@theme` as `--font-display` / `--font-sans`.
- Motion: `motion` package; shared `useReducedMotionSafe` gate; subtle fade/slide reveals and hover lifts only.
- Shared primitives: `Section`, `Container`, `SectionHeading`, `PageHeader`, `Breadcrumbs`, `StatCard`, `FeatureCard`, `CTASection`, `EmptyState`, `ErrorState`, `LoadingSkeleton`.

## 2. Routes (file-based under `src/routes/`)

Static: `index`, `about`, `services`, `industries`, `fleet`, `fleet.compare`, `coverage`, `tracking`, `case-studies`, `team`, `careers`, `news`, `quote-request`, `contact`, `resources`, `search`, `compliance`, `privacy`, `terms`, `cookie-policy`, `accessibility`.

Dynamic: `services.$slug`, `industries.$slug`, `fleet.$slug`, `coverage.$slug`, `case-studies.$slug`, `team.$slug`, `careers.$slug`, `news.$slug`.

Server: `sitemap[.]xml.ts`. Static: `public/robots.txt`.

Every dynamic route: typed `loader` resolves slug from data; missing slug throws `notFound()`; both `errorComponent` and `notFoundComponent` defined; router config sets `defaultErrorComponent` + `defaultNotFoundComponent`. Root keeps `<Outlet />` and adds `notFoundComponent`.

`__root.tsx` additions (preserving existing `<Outlet />`, Query provider, error reporting): skip-to-content link, shared `Header` (logo, primary nav, search command trigger, "Request Quote" CTA, mobile sheet menu), `Footer` (sitemap links, offices, legal, "Cookie Settings" button that reopens the consent modal), cookie consent mount, single `<main id="main">` wrapper.

## 3. Mock Data (`src/data/*.ts`, all typed)

- `services.ts` — 8 services (road, air, ocean, warehousing, SCM, last-mile, customs, cold-chain): slug, summary, benefits, process steps, coverage, relatedCaseStudySlugs.
- `industries.ts` — 6 industries.
- `fleet.ts` — 5+ vehicle types: slug, capacity, **payload**, **coverageArea**, **temperatureControl**, **deliveryType**, **fuelType**, features, specs, images. (Comparable attributes are first-class fields to power `/fleet/compare`.)
- `coverage.ts` — 4 regions (`north-america`, `europe`, `africa`, `asia-pacific`) each with: warehouses, distribution centers, delivery times by zone, services available, cities, stats; plus aggregate stats for the index.
- `caseStudies.ts` — 12 stories: client, industry, challenge, solution, results, KPIs, testimonial.
- `team.ts` — ~10 members across executives / logistics / ops / fleet / supply-chain.
- `careers.ts` — 10 roles.
- `news.ts` — 12 articles with body, author, readingTime, related slugs.
- `compliance.ts` — ISO certifications, customs compliance, safety standards, environmental policies, transportation regulations (each a card with title, body, badges, source notes).
- `testimonials.ts`, `stats.ts`, `offices.ts`, `images.ts` (single source of truth for all photo URLs + alt text + width/height), `tracking.ts` (keyed mock shipments incl. `SW123456789`, `SW987654321`, plus extras).

Shared helpers: `getBySlug`, `requireBySlug` (throws `notFound()`), `allSlugs` (used by sitemap + QA test).

## 4. Feature Specs

### Homepage
Hero (LCP image preloaded via `head().links`), tracking widget, stats, services grid, fleet showcase, coverage teaser, industries, why-us, featured case studies, testimonials carousel, latest insights, quote CTA.

### Shipment Tracking (`/tracking` + homepage widget)
- Controlled input + lookup against `tracking.ts`; animated timeline; status/origin/destination/current location; empty + not-found + error states.
- **Search history**: last 10 lookups persisted to `localStorage["swiftcargo:tracking-history"]` (dedup, MRU order). Rendered as chips under the input with tracking number + timestamp; one-click re-tracking re-runs lookup and reorders history. "Clear history" action. Shared `useTrackingHistory` hook used by both the page and the homepage widget.

### Fleet
- `/fleet` listing with filter chips.
- `/fleet/$slug` detail.
- **`/fleet/compare`** — multi-select up to 4 vehicles (persisted in URL search params via `validateSearch`); responsive comparison table (mobile = stacked cards, ≥md = `Table`) with rows: Capacity, Payload, Coverage Area, Temperature Control, Delivery Type, Fuel Type, plus Key Features. "Add vehicle" combobox; remove per column; "Reset" action. "Compare" buttons on `/fleet` and detail pages deep-link with preselection.

### Coverage
- `/coverage` — world overview, region cards, aggregate stats, static world-map image with markers.
- `/coverage/$slug` — region detail: hero + map placeholder, warehouses table, distribution centers grid, delivery-time matrix, services-available list, related case studies, contact CTA. Breadcrumbs. Own `head()` (title/description/og/BreadcrumbList JSON-LD).

### Services / Industries / Case Studies / Team / Careers / News
Listing + detail for each; detail pages include Breadcrumbs, related content, CTA, and per-route SEO + JSON-LD (Service / Article / BreadcrumbList).

### Quote Request, Contact
RHF + zod forms; submissions appended to LocalStorage (`swiftcargo:quotes`, `swiftcargo:contacts`); success state; error messages tied with `aria-describedby`.

### Resources
Mock downloadable assets under `public/resources/`; "download" event logged to LocalStorage and triggers `<a download>`.

### Search (`/search` + header command palette)
Client-side fuzzy index over services / fleet / team / articles / case studies / industries / coverage / compliance; predictive dropdown; results page grouped by type.

### Compliance (`/compliance`)
Sections: ISO Certifications, Customs Compliance, Safety Standards, Environmental Policies, Transportation Regulations. Each rendered as anchored cards with badge logos (illustrative), description, bullet list, and "Download policy" stub via Resources flow. Linked from footer.

### Cookie Consent
Persistent banner (no dismiss without action), shadcn `Dialog` preferences modal with toggles (Necessary always on; Analytics; Marketing; Preferences). Footer "Cookie Settings" button reopens via a shared `useCookieConsent` store. Persisted in `localStorage["swiftcargo:cookie-consent"]`.

## 5. SEO / A11y / Performance

- Per-route `head()`: unique title, description, og:title/description/url, leaf-only og:image (from data catalog), relative canonical.
- JSON-LD: Organization (root), Service / Article / BreadcrumbList on leaves.
- `sitemap.xml` server route enumerates all static + dynamic slugs from `allSlugs()`; `robots.txt` with `Allow: /`.
- Skip-to-content link, one `<main>`, semantic landmarks, labeled inputs, `aria-label` on icon buttons, focus-visible rings, color-contrast via tokens only.
- Images: explicit width/height, `loading="lazy"` (except LCP hero), `aspect-*` wrappers, responsive sizes.
- Code-split per route (automatic via TanStack Start); Framer Motion gated by reduced-motion.

## 6. QA Gates (must pass before marking complete)

### Dynamic-route audit
A dev-only script `scripts/audit-routes.ts` (Node, run via `bun`) imports every data module and prints the full URL list for: services, industries, fleet, coverage, case-studies, team, careers, news. The agent then, for each entity type, exercises a representative slug end-to-end via `browser--view_preview`:
1. Navigate to the slug URL.
2. Confirm detail page content renders (not redirected to listing).
3. Refresh and confirm same content renders.
4. Use browser back and confirm prior page restored.
5. Open the URL directly in a new viewport call.

A detail route redirecting to its listing is a fail and blocks completion.

### Final Completion Audit checklist
Run before declaring done — each item explicitly verified:
- No placeholder sections, empty pages, "lorem", or "REPLACE this" markers anywhere.
- No dead links: every header/footer/CTA link resolves to a defined route.
- No overlapping or hidden content at 320 / 375 / 768 / 1024 / 1440 widths (spot-checked via `browser--view_preview` at those viewports).
- No console errors or runtime errors during navigation through every primary route.
- All dynamic routes verified (above).
- Cookie banner opens, Customize Preferences modal opens, toggles persist, footer reopens it.
- All forms (tracking, quote, contact, careers apply, resource download) submit with valid input and show validation errors with invalid input.
- All CTAs (Track Shipment, Request Quote, View Service / Fleet / Case Study / Member / Role / Article, Compare Fleet, Explore Region) navigate to the correct route.
- Search palette returns results across all entity types.
- Reduced-motion preference disables motion.

## 7. Build Order

1. Tokens, fonts, layout primitives, Header / Footer / skip link, cookie consent.
2. Data modules + image catalog + tracking data + compliance data + coverage regions.
3. Homepage.
4. Listing + detail pairs: services, industries, fleet (+ `/fleet/compare`), coverage (+ `/coverage/$slug`), case studies, team, careers, news.
5. Tracking (+ history), Quote, Contact, Resources, Search, Compliance, About.
6. Legal pages.
7. `sitemap.xml`, `robots.txt`, per-route SEO + JSON-LD.
8. Route-audit script + Final Completion Audit pass; fix any findings; only then mark complete.

## Out of Scope

Real backend, real auth/payments, real map SDK (static map images), AI-generated imagery.
