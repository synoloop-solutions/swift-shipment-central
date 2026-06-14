import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getTeamMember, team, type TeamMember } from "@/data/team";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const m = getTeamMember(params.slug);
    if (!m) throw notFound();
    return { member: m };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.member.name ?? "Team"} — SwiftCargo` },
      { name: "description", content: `${loaderData?.member.role} at SwiftCargo Logistics.` },
      { property: "og:image", content: loaderData?.member.image },
    ],
  }),
  notFoundComponent: () => (<Section><h1 className="text-2xl font-bold">Team member not found</h1><Link to="/team" className="text-accent">Back to team</Link></Section>),
  errorComponent: ({ error }) => <Section><p>{error.message}</p></Section>,
  component: MemberDetail,
});

function MemberDetail() {
  const { member: m } = Route.useLoaderData() as { member: TeamMember };
  const others = team.filter((t) => t.slug !== m.slug).slice(0, 4);
  return (
    <>
      <PageHeader eyebrow={m.department} title={m.name} description={m.role}>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Team", to: "/team" }, { label: m.name }]} />
      </PageHeader>
      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <img src={m.image} alt={m.name} className="aspect-square rounded-xl object-cover" loading="lazy" />
          <div className="lg:col-span-2">
            <p className="text-lg">{m.bio}</p>
          </div>
        </div>
      </Section>
      <Section muted>
        <h2 className="font-display text-2xl font-semibold">More from the team</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link key={o.slug} to="/team/$slug" params={{ slug: o.slug }} className="rounded-lg border border-border p-4 hover:border-accent">
              <p className="font-display font-semibold">{o.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{o.role}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
