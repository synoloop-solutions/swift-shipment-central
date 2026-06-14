import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getCaseStudy, caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const c = getCaseStudy(params.slug);
    if (!c) throw notFound();
    return { study: c };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.study.title ?? "Case Study"} — SwiftCargo` },
      { name: "description", content: loaderData?.study.summary ?? "" },
      { property: "og:image", content: loaderData?.study.image },
    ],
  }),
  notFoundComponent: () => (<Section><h1 className="text-2xl font-bold">Case study not found</h1><Link to="/case-studies" className="text-accent">Back</Link></Section>),
  errorComponent: ({ error }) => <Section><p>{error.message}</p></Section>,
  component: Detail,
});

function Detail() {
  const { study: c } = Route.useLoaderData();
  const related = caseStudies.filter((s) => s.slug !== c.slug && s.industry === c.industry).slice(0, 3);
  return (
    <>
      <PageHeader eyebrow={c.industry} title={c.title} description={c.summary}>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Case Studies", to: "/case-studies" }, { label: c.client }]} />
      </PageHeader>
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <img src={c.image} alt={c.title} className="aspect-[16/9] w-full rounded-xl object-cover" loading="lazy" />
            <section><h2 className="font-display text-2xl font-semibold">Challenge</h2><p className="mt-3">{c.challenge}</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Solution</h2><p className="mt-3">{c.solution}</p></section>
            <section><h2 className="font-display text-2xl font-semibold">Results</h2><p className="mt-3">{c.results}</p></section>
            <blockquote className="rounded-xl border-l-4 border-accent bg-muted p-6">
              <p className="text-lg">“{c.testimonial.quote}”</p>
              <footer className="mt-3 text-sm text-muted-foreground">— {c.testimonial.author}, {c.testimonial.role}</footer>
            </blockquote>
          </div>
          <aside>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold">Key results</h3>
              <dl className="mt-4 space-y-3">
                {c.kpis.map((k) => (
                  <div key={k.label} className="flex items-center justify-between border-b border-border pb-2 last:border-0">
                    <dt className="text-sm text-muted-foreground">{k.label}</dt>
                    <dd className="font-display text-xl font-bold text-accent">{k.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>
      {related.length > 0 && (
        <Section muted>
          <h2 className="font-display text-2xl font-semibold">Related stories</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/case-studies/$slug" params={{ slug: r.slug }} className="rounded-lg border border-border p-4 hover:border-accent">
                <p className="font-display font-semibold">{r.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.summary}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
