import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { compliance } from "@/data/compliance";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Trust & Compliance — SwiftCargo Logistics" },
      { name: "description", content: "ISO certifications, customs compliance, safety standards, environmental policies and transportation regulations." },
      { property: "og:title", content: "Trust & Compliance — SwiftCargo" },
      { property: "og:description", content: "How we operate safely, ethically, and to the highest standards." },
    ],
  }),
  component: CompliancePage,
});

function CompliancePage() {
  return (
    <>
      <PageHeader eyebrow="Trust & compliance" title="How we operate safely, ethically, and to the highest standards" description="Certified management systems, trusted-trader status, and a public sustainability commitment." />
      <Section>
        <nav aria-label="Compliance sections" className="mb-10 flex flex-wrap gap-2">
          {compliance.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:border-accent">{c.title}</a>
          ))}
        </nav>
        <div className="space-y-12">
          {compliance.map((c) => (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-h`} className="scroll-mt-24">
              <h2 id={`${c.id}-h`} className="flex items-center gap-2 font-display text-2xl font-semibold"><ShieldCheck className="h-6 w-6 text-accent" /> {c.title}</h2>
              <p className="mt-2 text-muted-foreground">{c.body}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {c.items.map((i) => (
                  <div key={i.title} className="rounded-xl border border-border bg-card p-5">
                    <p className="font-display font-semibold">{i.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{i.body}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
