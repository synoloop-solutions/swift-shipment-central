import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fleet } from "@/data/fleet";
import { ArrowRight, GitCompareArrows } from "lucide-react";

export const Route = createFileRoute("/fleet/")({
  head: () => ({
    meta: [
      { title: "Fleet — SwiftCargo Logistics" },
      { name: "description", content: "Modern, telematics-equipped fleet of trucks, vans, reefers, and EVs." },
      { property: "og:title", content: "Fleet — SwiftCargo" },
      { property: "og:description", content: "4,800 vehicles. Telematics on every unit." },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <PageHeader eyebrow="Fleet" title="A modern, mixed, sustainable fleet" description="Diesel, electric, alternative-fuel — sized to the move.">
        <Button asChild variant="secondary"><Link to="/fleet/compare" search={{ ids: "" }}><GitCompareArrows className="mr-2 h-4 w-4" /> Compare vehicles</Link></Button>
      </PageHeader>
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v) => (
            <Card key={v.slug} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-[16/10] overflow-hidden"><img src={v.image} alt={v.name} className="h-full w-full object-cover" loading="lazy" /></div>
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{v.category}</p>
                <h2 className="mt-2 font-display text-lg font-semibold">{v.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{v.summary}</p>
                <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div><dt className="text-muted-foreground">Payload</dt><dd>{v.payload}</dd></div>
                  <div><dt className="text-muted-foreground">Fuel</dt><dd>{v.fuelType}</dd></div>
                </dl>
                <div className="mt-5 flex gap-2">
                  <Button asChild size="sm"><Link to="/fleet/$slug" params={{ slug: v.slug }}>Details <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link></Button>
                  <Button asChild size="sm" variant="outline"><Link to="/fleet/compare" search={{ ids: v.slug }}>Compare</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
