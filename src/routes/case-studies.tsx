import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — SwiftCargo Logistics" },
      { name: "description", content: "How leading shippers transformed their supply chain with SwiftCargo." },
      { property: "og:title", content: "Case Studies — SwiftCargo" },
      { property: "og:description", content: "Real customer results." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Case studies" title="Results from real customers" description="Twelve stories of measurable supply-chain improvement." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden"><img src={c.image} alt={c.title} className="h-full w-full object-cover" loading="lazy" /></div>
              <div className="p-5"><p className="text-xs uppercase tracking-wider text-accent">{c.industry}</p><h2 className="mt-2 font-display text-lg font-semibold">{c.title}</h2><p className="mt-2 text-sm text-muted-foreground">{c.summary}</p></div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  ),
});
