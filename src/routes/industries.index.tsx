import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries — SwiftCargo Logistics" },
      { name: "description", content: "Specialized logistics solutions for retail, automotive, healthcare, food, technology and more." },
      { property: "og:title", content: "Industries — SwiftCargo Logistics" },
      { property: "og:description", content: "Specialized logistics for every sector." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Industries" title="Industry-shaped solutions" description="From regulated pharma to peak-season retail — we adapt our network to your sector." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden"><img src={i.image} alt={i.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
              <div className="p-5"><h2 className="font-display text-lg font-semibold">{i.name}</h2><p className="mt-1 text-sm text-muted-foreground">{i.summary}</p></div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  ),
});
