import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { resources } from "@/data/misc";
import { Download } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — SwiftCargo Logistics" },
      { name: "description", content: "Whitepapers, guides, and reports from our team." },
      { property: "og:title", content: "Resources — SwiftCargo" },
      { property: "og:description", content: "Industry guides and reports." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  function onDownload(slug: string, title: string) {
    const prev = JSON.parse(localStorage.getItem("swiftcargo:downloads") || "[]");
    localStorage.setItem("swiftcargo:downloads", JSON.stringify([...prev, { slug, ts: Date.now() }]));
    toast.success(`${title} — download started`);
    // Trigger a placeholder text-file download
    const blob = new Blob([`${title}\n\nThis is a sample SwiftCargo resource.`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${slug}.txt`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }
  return (
    <>
      <PageHeader eyebrow="Resources" title="Whitepapers, guides & reports" description="Practical knowledge from our operations and supply chain experts." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((r) => (
            <div key={r.slug} className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{r.type}</p>
              <h2 className="mt-2 font-display text-lg font-semibold">{r.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
              <p className="mt-1 text-xs text-muted-foreground">{r.pages} pages · PDF</p>
              <Button className="mt-4" onClick={() => onDownload(r.slug, r.title)}><Download className="mr-2 h-4 w-4" /> Download</Button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
