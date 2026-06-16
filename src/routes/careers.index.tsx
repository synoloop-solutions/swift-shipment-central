import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { careers } from "@/data/careers";
import { MapPin, Briefcase } from "lucide-react";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers — SwiftCargo Logistics" },
      { name: "description", content: "Join SwiftCargo. Open roles across operations, technology, commercial, and sustainability." },
      { property: "og:title", content: "Careers — SwiftCargo" },
      { property: "og:description", content: "Move the world with us." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Careers" title="Move the world with us" description="10 open roles across four continents." />
      <Section>
        <ul className="divide-y divide-border rounded-xl border border-border bg-card">
          {careers.map((c) => (
            <li key={c.slug}>
              <Link to="/careers/$slug" params={{ slug: c.slug }} className="block p-5 hover:bg-muted/40">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-semibold">{c.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.summary}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {c.department}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {c.location}</span>
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 font-medium text-accent-foreground">{c.type}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  ),
});
