import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { PageHeader, Section } from "@/components/layout/section";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { services } from "@/data/services";
import { fleet } from "@/data/fleet";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { news } from "@/data/news";
import { team } from "@/data/team";
import { regions } from "@/data/coverage";
import { compliance } from "@/data/compliance";

type Result = { type: string; title: string; description: string; to: string; params?: any };

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — SwiftCargo Logistics" },
      { name: "description", content: "Search SwiftCargo services, fleet, coverage, case studies, team and news." },
      { property: "og:title", content: "Search — SwiftCargo" },
      { property: "og:description", content: "Find what you need." },
    ],
  }),
  component: SearchPage,
});

const index: Result[] = [
  ...services.map((s) => ({ type: "Service", title: s.name, description: s.summary, to: "/services/$slug", params: { slug: s.slug } })),
  ...fleet.map((f) => ({ type: "Fleet", title: f.name, description: f.summary, to: "/fleet/$slug", params: { slug: f.slug } })),
  ...industries.map((i) => ({ type: "Industry", title: i.name, description: i.summary, to: "/industries/$slug", params: { slug: i.slug } })),
  ...regions.map((r) => ({ type: "Region", title: r.name, description: r.summary, to: "/coverage/$slug", params: { slug: r.slug } })),
  ...caseStudies.map((c) => ({ type: "Case study", title: c.title, description: c.summary, to: "/case-studies/$slug", params: { slug: c.slug } })),
  ...news.map((n) => ({ type: "News", title: n.title, description: n.excerpt, to: "/news/$slug", params: { slug: n.slug } })),
  ...team.map((t) => ({ type: "Team", title: t.name, description: t.role, to: "/team/$slug", params: { slug: t.slug } })),
  ...compliance.map((c) => ({ type: "Compliance", title: c.title, description: c.body, to: "/compliance" })),
];

function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return index.filter((r) => (r.title + " " + r.description + " " + r.type).toLowerCase().includes(term));
  }, [q]);

  return (
    <>
      <PageHeader eyebrow="Search" title="Search SwiftCargo" />
      <Section>
        <div className="relative mx-auto max-w-2xl">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search services, fleet, regions, case studies, news…" className="pl-9" />
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          {q && results.length === 0 && <p className="text-center text-muted-foreground">No results for "{q}".</p>}
          <ul className="divide-y divide-border">
            {results.map((r, i) => (
              <li key={i}>
                <Link to={r.to as any} params={r.params as any} className="flex items-start justify-between gap-4 py-4 hover:bg-muted/40">
                  <div><p className="text-xs font-semibold uppercase tracking-wider text-accent">{r.type}</p><p className="mt-1 font-display font-semibold">{r.title}</p><p className="text-sm text-muted-foreground">{r.description}</p></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
