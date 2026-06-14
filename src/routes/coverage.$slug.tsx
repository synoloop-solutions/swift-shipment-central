import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { getRegion, regions } from "@/data/coverage";

export const Route = createFileRoute("/coverage/$slug")({
  loader: ({ params }) => {
    const r = getRegion(params.slug);
    if (!r) throw notFound();
    return { region: r };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.region.name ?? "Region"} — SwiftCargo Coverage` },
      { name: "description", content: loaderData?.region.summary ?? "" },
      { property: "og:image", content: loaderData?.region.image },
    ],
  }),
  notFoundComponent: () => (<Section><h1 className="text-2xl font-bold">Region not found</h1><Link to="/coverage" className="text-accent">Back to coverage</Link></Section>),
  errorComponent: ({ error }) => <Section><p>{error.message}</p></Section>,
  component: RegionDetail,
});

function RegionDetail() {
  const { region: r } = Route.useLoaderData();
  const others = regions.filter((x) => x.slug !== r.slug);
  return (
    <>
      <PageHeader eyebrow="Region" title={r.name} description={r.summary}>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Coverage", to: "/coverage" }, { label: r.name }]} />
      </PageHeader>
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <img src={r.image} alt={r.name} className="aspect-[16/9] w-full rounded-xl object-cover" loading="lazy" />
            <p className="text-lg">{r.description}</p>

            <div>
              <h2 className="font-display text-2xl font-semibold">Warehouses</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <thead><tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="p-3">City</th><th className="p-3">Size</th><th className="p-3">Type</th>
                  </tr></thead>
                  <tbody>{r.warehouses.map((w) => (
                    <tr key={w.city} className="border-b border-border"><td className="p-3 font-medium">{w.city}</td><td className="p-3">{w.size}</td><td className="p-3">{w.type}</td></tr>
                  ))}</tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Distribution centers</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {r.distributionCenters.map((dc) => (
                  <div key={dc.city} className="rounded-lg border border-border p-4">
                    <p className="font-display font-semibold">{dc.city}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Throughput: {dc.throughput}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Delivery times</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <thead><tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="p-3">Zone</th><th className="p-3">Transit</th>
                  </tr></thead>
                  <tbody>{r.deliveryTimes.map((d) => (
                    <tr key={d.zone} className="border-b border-border"><td className="p-3 font-medium">{d.zone}</td><td className="p-3">{d.transit}</td></tr>
                  ))}</tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Cities served</h2>
              <p className="mt-3 text-sm text-muted-foreground">{r.cities.join(" · ")}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold">Region stats</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Warehouses</dt><dd className="font-semibold">{r.stats.warehouses}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Distribution centers</dt><dd className="font-semibold">{r.stats.distributionCenters}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Cities served</dt><dd className="font-semibold">{r.stats.cities}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Staff</dt><dd className="font-semibold">{r.stats.staff.toLocaleString()}</dd></div>
              </dl>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold">Services available</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {r.services.map((s) => <li key={s}>• {s}</li>)}
              </ul>
              <Button asChild className="mt-4 w-full"><Link to="/quote-request">Request a Quote</Link></Button>
            </div>
          </aside>
        </div>
      </Section>

      <Section muted>
        <h2 className="font-display text-2xl font-semibold">Other regions</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/coverage/$slug" params={{ slug: o.slug }} className="rounded-lg border border-border p-4 hover:border-accent">
              <p className="font-display font-semibold">{o.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{o.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
