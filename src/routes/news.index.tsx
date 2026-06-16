import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { news } from "@/data/news";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News & Insights — SwiftCargo Logistics" },
      { name: "description", content: "Network updates, technology launches, and sustainability milestones." },
      { property: "og:title", content: "News — SwiftCargo" },
      { property: "og:description", content: "Updates from across our network." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="News" title="News & insights" description="Updates from across our network." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <Link key={n.slug} to="/news/$slug" params={{ slug: n.slug }} className="overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden"><img src={n.image} alt={n.title} className="h-full w-full object-cover" loading="lazy" /></div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs"><span className="font-semibold uppercase tracking-wider text-accent">{n.category}</span><time className="text-muted-foreground">{n.date}</time></div>
                <h2 className="mt-2 font-display text-lg font-semibold">{n.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  ),
});
