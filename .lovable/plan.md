## Diagnosis

The dynamic route files exist and their loaders generally read `params.slug` correctly, but each parent listing route (`/services`, `/fleet`, `/case-studies`, `/team`, `/careers`, `/news`, `/industries`) also has child routes and currently renders listing page content instead of an `<Outlet />`. In TanStack routing, a parent route with children must render `<Outlet />`; otherwise the detail child route matches but its component never appears, making the app look like it stayed on or returned to the parent listing page.

## Implementation Plan

1. **Convert listing routes into parent layouts**
   - Update these parent route files so their component only renders `<Outlet />`:
     - `services.tsx`
     - `industries.tsx`
     - `fleet.tsx`
     - `case-studies.tsx`
     - `team.tsx`
     - `careers.tsx`
     - `news.tsx`
   - Also include `coverage.tsx` if the same parent/child issue is present, so no dynamic routes remain broken.

2. **Move listing page UIs into index child routes**
   - Create index child routes for the listing content:
     - `services.index.tsx`
     - `industries.index.tsx`
     - `fleet.index.tsx`
     - `case-studies.index.tsx`
     - `team.index.tsx`
     - `careers.index.tsx`
     - `news.index.tsx`
     - `coverage.index.tsx` if needed
   - Preserve each listing page’s existing metadata, cards, CTA buttons, and styles on its new index route.

3. **Keep dynamic detail routes as true children**
   - Keep these detail route files using `createFileRoute("/<section>/$slug")`:
     - `services.$slug.tsx`
     - `industries.$slug.tsx`
     - `fleet.$slug.tsx`
     - `case-studies.$slug.tsx`
     - `team.$slug.tsx`
     - `careers.$slug.tsx`
     - `news.$slug.tsx`
   - Ensure every loader only throws `notFound()` when the slug lookup truly fails.

4. **Audit and fix all dynamic links**
   - Verify cards and related-content links use TanStack routing correctly:
     - `to="/services/$slug" params={{ slug }}`
     - `to="/case-studies/$slug" params={{ slug }}`
     - equivalent patterns for every dynamic section
   - Remove or correct any string-built URLs, parent-only links, or accidental fallback navigation.

5. **Validate slug data**
   - Check every dataset for missing, empty, duplicate, or mismatched slugs:
     - `services.ts`
     - `industries.ts`
     - `fleet.ts`
     - `caseStudies.ts`
     - `team.ts`
     - `careers.ts`
     - `news.ts`
   - Confirm each `getX(slug)` helper matches the route param exactly.

6. **QA every dynamic route flow**
   - For every item in every dataset:
     - click from listing card
     - confirm the URL becomes the slug detail URL
     - confirm unique detail content renders
     - refresh the detail page
     - open the detail URL directly
     - use browser back navigation
   - Check browser console/runtime errors after navigation.

## Expected Result

Every dynamic detail page will mount correctly under its parent route, direct URL access and refresh will work, browser back navigation will work, and listing pages will no longer mask or override their detail routes.