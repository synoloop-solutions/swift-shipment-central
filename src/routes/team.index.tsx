import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { team } from "@/data/team";

export const Route = createFileRoute("/team/")({
  head: () => ({
    meta: [
      { title: "Team — SwiftCargo Logistics" },
      { name: "description", content: "Meet the people behind SwiftCargo." },
      { property: "og:title", content: "Team — SwiftCargo" },
      { property: "og:description", content: "Meet our leadership." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Team" title="The people behind SwiftCargo" description="Operators, engineers, and supply-chain experts across four continents." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <Link key={m.slug} to="/team/$slug" params={{ slug: m.slug }} className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg">
              <div className="aspect-square overflow-hidden"><img src={m.image} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
              <div className="p-4">
                <p className="font-display font-semibold">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  ),
});
