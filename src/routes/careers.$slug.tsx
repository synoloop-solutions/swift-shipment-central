import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { getCareer, careers } from "@/data/careers";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const c = getCareer(params.slug);
    if (!c) throw notFound();
    return { role: c };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.role.title ?? "Role"} — SwiftCargo Careers` },
      { name: "description", content: loaderData?.role.summary ?? "" },
    ],
  }),
  notFoundComponent: () => (<Section><h1 className="text-2xl font-bold">Role not found</h1><Link to="/careers" className="text-accent">Back</Link></Section>),
  errorComponent: ({ error }) => <Section><p>{error.message}</p></Section>,
  component: CareerDetail,
});

function CareerDetail() {
  const { role } = Route.useLoaderData();
  const others = careers.filter((c) => c.slug !== role.slug).slice(0, 4);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader eyebrow={role.department} title={role.title} description={`${role.location} · ${role.type}`}>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Careers", to: "/careers" }, { label: role.title }]} />
      </PageHeader>
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg">{role.summary}</p>
            <div><h2 className="font-display text-2xl font-semibold">Responsibilities</h2><ul className="mt-3 list-disc space-y-1 pl-5">{role.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul></div>
            <div><h2 className="font-display text-2xl font-semibold">Requirements</h2><ul className="mt-3 list-disc space-y-1 pl-5">{role.requirements.map((r) => <li key={r}>{r}</li>)}</ul></div>
          </div>
          <aside>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold">Apply</h3>
              {submitted ? (
                <p className="mt-3 text-sm text-muted-foreground">Thank you — we'll be in touch.</p>
              ) : (
                <form
                  className="mt-3 space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
                    const prev = JSON.parse(localStorage.getItem("swiftcargo:applications") || "[]");
                    localStorage.setItem("swiftcargo:applications", JSON.stringify([...prev, { ...data, role: role.slug, ts: Date.now() }]));
                    toast.success("Application submitted");
                    setSubmitted(true);
                  }}
                >
                  <div><Label htmlFor="name">Full name</Label><Input id="name" name="name" required /></div>
                  <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required /></div>
                  <div><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={4} /></div>
                  <Button type="submit" className="w-full">Submit application</Button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </Section>
      <Section muted>
        <h2 className="font-display text-2xl font-semibold">Other open roles</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link key={o.slug} to="/careers/$slug" params={{ slug: o.slug }} className="rounded-lg border border-border p-4 hover:border-accent">
              <p className="font-display font-semibold">{o.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{o.location}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
