import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getIndustry, industries, type Industry } from "@/data/industries";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const i = getIndustry(params.slug);
    if (!i) throw notFound();
    return { industry: i };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.industry.name ?? "Industry"} — SwiftCargo` },
      { name: "description", content: loaderData?.industry.summary ?? "" },
      { property: "og:image", content: loaderData?.industry.image },
    ],
  }),
  notFoundComponent: () => (
    <Section><h1 className="text-2xl font-bold">Industry not found</h1><Link to="/industries" className="text-accent">Back</Link></Section>
  ),
  errorComponent: ({ error }) => <Section><p>{error.message}</p></Section>,
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData() as { industry: Industry };
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);
  return (
    <>
      <PageHeader eyebrow="Industry" title={industry.name} description={industry.summary}>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Industries", to: "/industries" }, { label: industry.name }]} />
      </PageHeader>
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img src={industry.image} alt={industry.name} className="aspect-[16/9] w-full rounded-xl object-cover" loading="lazy" />
            <p className="mt-6 text-lg">{industry.description}</p>
            <h2 className="mt-8 font-display text-2xl font-semibold">Highlights</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {industry.highlights.map((h) => <li key={h} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> {h}</li>)}
            </ul>
          </div>
          <aside>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold">Need help with {industry.name.toLowerCase()}?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Talk to a sector specialist.</p>
              <Button asChild className="mt-4 w-full"><Link to="/quote-request">Request a Quote</Link></Button>
            </div>
          </aside>
        </div>
      </Section>
      <Section muted>
        <h2 className="font-display text-2xl font-semibold">Other industries</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/industries/$slug" params={{ slug: o.slug }} className="rounded-lg border border-border p-4 hover:border-accent">
              <p className="font-display font-semibold">{o.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{o.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
