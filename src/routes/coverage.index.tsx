import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { regions, coverageAggregate } from "@/data/coverage";
import { ArrowRight, Building2, Truck, Globe } from "lucide-react";

export const Route = createFileRoute("/coverage/")({
  head: () => ({
    meta: [
      { title: "Coverage — SwiftCargo Logistics" },
      { name: "description", content: "85 warehouses across 80+ countries — North America, Europe, Asia-Pacific, and Africa." },
      { property: "og:title", content: "Coverage — SwiftCargo" },
      { property: "og:description", content: "Global network, regional execution." },
    ],
  }),
  component: CoveragePage,
});

function CoveragePage() {
  return (
    <>
      <PageHeader eyebrow="Coverage" title="A global network with regional depth" description="85 warehouses and 240+ cities across four regions." />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Globe, label: "Countries", value: coverageAggregate.countries + "+" },
            { icon: Building2, label: "Warehouses", value: coverageAggregate.warehouses },
            { icon: Truck, label: "Distribution centers", value: coverageAggregate.distributionCenters },
            { icon: Globe, label: "Cities served", value: coverageAggregate.cities + "+" },
          ].map((s) => (
            <li key={s.label} className="rounded-xl border border-border bg-card p-6 text-center">
              <s.icon className="mx-auto h-6 w-6 text-accent" />
              <p className="mt-3 font-display text-3xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {regions.map((r) => (
            <Link key={r.slug} to="/coverage/$slug" params={{ slug: r.slug }} className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden"><img src={r.image} alt={r.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold">{r.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{r.summary}</p>
                <dl className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div><dt className="text-muted-foreground">Warehouses</dt><dd className="font-semibold">{r.stats.warehouses}</dd></div>
                  <div><dt className="text-muted-foreground">DCs</dt><dd className="font-semibold">{r.stats.distributionCenters}</dd></div>
                  <div><dt className="text-muted-foreground">Cities</dt><dd className="font-semibold">{r.stats.cities}</dd></div>
                </dl>
                <p className="mt-4 inline-flex items-center text-sm font-medium text-accent">Explore region <ArrowRight className="ml-1 h-4 w-4" /></p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
