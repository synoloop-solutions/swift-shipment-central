import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Section, Container } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { getService, services, type Service } from "@/data/services";
import { getCaseStudy } from "@/data/caseStudies";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: [
        { title: `${s?.name ?? "Service"} — SwiftCargo Logistics` },
        { name: "description", content: s?.summary ?? "" },
        { property: "og:title", content: `${s?.name} — SwiftCargo` },
        { property: "og:description", content: s?.summary ?? "" },
        { property: "og:image", content: s?.image },
      ],
      scripts: s ? [{ type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: s.name, description: s.summary, provider: { "@type": "Organization", name: "SwiftCargo Logistics" },
      }) }] : [],
    };
  },
  notFoundComponent: () => (
    <Section><div className="text-center"><h1 className="text-2xl font-bold">Service not found</h1><Link to="/services" className="text-accent underline">Back to services</Link></div></Section>
  ),
  errorComponent: ({ error }) => <Section><p>{(error as Error).message}</p></Section>,
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Service" title={service.name} description={service.tagline}>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.name }]} />
      </PageHeader>
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <img src={service.image} alt={service.name} className="aspect-[16/9] w-full rounded-xl object-cover" loading="lazy" />
            <p className="text-lg text-foreground">{service.description}</p>

            <div>
              <h2 className="font-display text-2xl font-semibold">What you get</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> {b}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">How it works</h2>
              <ol className="mt-4 grid gap-4 sm:grid-cols-2">
                {service.process.map((p, i) => (
                  <li key={p.title} className="rounded-lg border border-border p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">Step {i + 1}</p>
                    <p className="mt-1 font-display font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <Card><CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold">Get a tailored quote</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tell us about your shipment — we'll respond within one business day.</p>
              <Button asChild className="mt-4 w-full"><Link to="/quote-request">Request a Quote</Link></Button>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold">Coverage</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {service.coverage.map((c) => <li key={c}>• {c}</li>)}
              </ul>
            </CardContent></Card>
          </aside>
        </div>
      </Section>

      {service.relatedCaseStudies.length > 0 && (
        <Section muted>
          <h2 className="font-display text-2xl font-semibold">Related case studies</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {service.relatedCaseStudies.map((slug) => {
              const cs = getCaseStudy(slug);
              if (!cs) return null;
              return (
                <Link key={slug} to="/case-studies/$slug" params={{ slug }} className="overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
                  <div className="aspect-[16/9] overflow-hidden"><img src={cs.image} alt={cs.title} className="h-full w-full object-cover" loading="lazy" /></div>
                  <div className="p-5"><p className="text-xs uppercase tracking-wider text-accent">{cs.industry}</p><h3 className="mt-1 font-display font-semibold">{cs.title}</h3></div>
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      <Section>
        <h2 className="font-display text-2xl font-semibold">Other services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="rounded-lg border border-border p-4 hover:border-accent">
              <p className="font-display font-semibold">{o.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{o.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
