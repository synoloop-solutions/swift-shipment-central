import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — SwiftCargo Logistics" },
      { name: "description", content: "Road, air, ocean, warehousing, supply chain, last-mile, customs and cold-chain services." },
      { property: "og:title", content: "Services — SwiftCargo Logistics" },
      { property: "og:description", content: "Eight integrated services. One operating model." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Eight services. One network." description="Choose any service standalone, or combine them into an integrated supply-chain solution." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group">
              <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-[16/9] overflow-hidden"><img src={s.image} alt={s.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
                <CardContent className="p-6">
                  <h2 className="font-display text-lg font-semibold">{s.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                  <p className="mt-4 inline-flex items-center text-sm font-medium text-accent">Learn more <ArrowRight className="ml-1 h-4 w-4" /></p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
