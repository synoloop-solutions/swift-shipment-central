import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { stats, offices, company } from "@/data/misc";
import { images } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SwiftCargo Logistics" },
      { name: "description", content: "Who we are, what we believe, and how we operate." },
      { property: "og:title", content: "About — SwiftCargo" },
      { property: "og:description", content: "Built for the world's most demanding shippers." },
      { property: "og:image", content: images.warehouse },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="About" title={company.name} description="A global logistics company built for the world's most demanding shippers." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-lg">We started in 2008 with a single warehouse and a simple promise: move our customers' freight as if it were our own. Today we run 85 warehouses across 80+ countries — and the promise is still the same.</p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <li key={s.label} className="rounded-lg border border-border bg-card p-4">
                  <p className="font-display text-2xl font-bold text-accent">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <img src={images.warehouse} alt="SwiftCargo operations" className="rounded-xl" loading="lazy" />
        </div>
      </Section>
      <Section muted>
        <h2 className="font-display text-2xl font-semibold">Our offices</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city} className="rounded-lg border border-border bg-card p-4">
              <p className="font-display font-semibold">{o.city}, {o.country}</p>
              <p className="mt-1 text-sm text-muted-foreground">{o.address}</p>
              <p className="text-sm text-muted-foreground">{o.phone}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  ),
});
