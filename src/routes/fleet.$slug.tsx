import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { getFleet, fleet, type FleetVehicle } from "@/data/fleet";

export const Route = createFileRoute("/fleet/$slug")({
  loader: ({ params }) => {
    const v = getFleet(params.slug);
    if (!v) throw notFound();
    return { vehicle: v };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.vehicle.name ?? "Vehicle"} — SwiftCargo Fleet` },
      { name: "description", content: loaderData?.vehicle.summary ?? "" },
      { property: "og:image", content: loaderData?.vehicle.image },
    ],
  }),
  notFoundComponent: () => (<Section><h1 className="text-2xl font-bold">Vehicle not found</h1><Link to="/fleet" className="text-accent">Back to fleet</Link></Section>),
  errorComponent: ({ error }) => <Section><p>{(error as Error).message}</p></Section>,
  component: FleetDetail,
});

function FleetDetail() {
  const { vehicle: v } = Route.useLoaderData() as { vehicle: FleetVehicle };
  const others = fleet.filter((f) => f.slug !== v.slug).slice(0, 3);
  return (
    <>
      <PageHeader eyebrow={v.category} title={v.name} description={v.summary}>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Fleet", to: "/fleet" }, { label: v.name }]} />
      </PageHeader>
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img src={v.image} alt={v.name} className="aspect-[16/9] w-full rounded-xl object-cover" loading="lazy" />
            <p className="mt-6 text-lg">{v.description}</p>
            <h2 className="mt-8 font-display text-2xl font-semibold">Specifications</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["Capacity", v.capacity], ["Payload", v.payload], ["Coverage area", v.coverageArea],
                ["Temperature control", v.temperatureControl], ["Delivery type", v.deliveryType], ["Fuel type", v.fuelType],
              ].map(([k, val]) => (
                <div key={k as string} className="rounded-md border border-border p-3">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-medium">{val}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-8 font-display text-2xl font-semibold">Features</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {v.features.map((f) => <li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" />{f}</li>)}
            </ul>
          </div>
          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold">Book this vehicle</h3>
              <p className="mt-2 text-sm text-muted-foreground">Request a quote tailored to this asset.</p>
              <Button asChild className="mt-4 w-full"><Link to="/quote-request">Request a Quote</Link></Button>
              <Button asChild variant="outline" className="mt-2 w-full"><Link to="/fleet/compare" search={{ ids: v.slug }}>Add to comparison</Link></Button>
            </div>
          </aside>
        </div>
      </Section>
      <Section muted>
        <h2 className="font-display text-2xl font-semibold">Other vehicles</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/fleet/$slug" params={{ slug: o.slug }} className="rounded-lg border border-border p-4 hover:border-accent">
              <p className="font-display font-semibold">{o.name}</p><p className="mt-1 text-sm text-muted-foreground">{o.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
