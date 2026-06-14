import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { useNavigate } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { fleet } from "@/data/fleet";
import { X } from "lucide-react";

const searchSchema = z.object({
  ids: z.string().optional().default(""),
});

export const Route = createFileRoute("/fleet/compare")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Compare Fleet — SwiftCargo Logistics" },
      { name: "description", content: "Compare SwiftCargo vehicles side-by-side: capacity, payload, coverage, temperature, delivery type, and fuel." },
      { property: "og:title", content: "Compare Fleet — SwiftCargo" },
      { property: "og:description", content: "Compare vehicles side-by-side." },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  const { ids } = Route.useSearch() as { ids: string };
  const navigate = useNavigate({ from: "/fleet/compare" });
  const selected: string[] = ids.split(",").map((s: string) => s.trim()).filter(Boolean).slice(0, 4);
  const vehicles = selected.map((slug: string) => fleet.find((f) => f.slug === slug)).filter(Boolean) as typeof fleet;
  const available = fleet.filter((f) => !selected.includes(f.slug));

  const setIds = (next: string[]) =>
    navigate({ search: { ids: next.join(",") } });

  return (
    <>
      <PageHeader eyebrow="Fleet" title="Compare vehicles" description="Compare up to 4 vehicles across capacity, payload, coverage area, temperature control, delivery type, and fuel.">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Fleet", to: "/fleet" }, { label: "Compare" }]} />
      </PageHeader>

      <Section>
        <div className="flex flex-wrap items-end gap-3">
          {selected.length < 4 && (
            <div className="w-full max-w-xs">
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Add vehicle</label>
              <Select onValueChange={(v) => setIds([...selected, v])}>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Select a vehicle…" /></SelectTrigger>
                <SelectContent>
                  {available.map((v) => <SelectItem key={v.slug} value={v.slug}>{v.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          )}
          {selected.length > 0 && (
            <Button variant="outline" onClick={() => setIds([])}>Reset</Button>
          )}
        </div>

        {vehicles.length === 0 ? (
          <div className="mt-10 rounded-lg border border-dashed border-border p-10 text-center">
            <p className="text-muted-foreground">No vehicles selected yet. Add one to start comparing.</p>
            <Button asChild className="mt-4"><Link to="/fleet">Browse fleet</Link></Button>
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-40 p-3 text-left text-xs uppercase tracking-wider text-muted-foreground"></th>
                  {vehicles.map((v) => (
                    <th key={v.slug} className="min-w-[200px] border-b border-border p-3 align-bottom text-left">
                      <div className="aspect-[16/10] overflow-hidden rounded-md"><img src={v.image} alt={v.name} className="h-full w-full object-cover" loading="lazy" /></div>
                      <div className="mt-3 flex items-start justify-between gap-2">
                        <Link to="/fleet/$slug" params={{ slug: v.slug }} className="font-display text-sm font-semibold hover:underline">{v.name}</Link>
                        <button onClick={() => setIds(selected.filter((s: string) => s !== v.slug))} aria-label={`Remove ${v.name}`} className="text-muted-foreground hover:text-destructive"><X className="h-4 w-4" /></button>
                      </div>
                      <p className="text-xs text-muted-foreground">{v.category}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Capacity", "capacity"],
                  ["Payload", "payload"],
                  ["Coverage Area", "coverageArea"],
                  ["Temperature Control", "temperatureControl"],
                  ["Delivery Type", "deliveryType"],
                  ["Fuel Type", "fuelType"],
                ].map(([label, key]) => (
                  <tr key={key} className="border-b border-border">
                    <th scope="row" className="p-3 text-left font-medium text-muted-foreground">{label}</th>
                    {vehicles.map((v) => <td key={v.slug} className="p-3">{(v as any)[key as string]}</td>)}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="p-3 text-left align-top font-medium text-muted-foreground">Key features</th>
                  {vehicles.map((v) => (
                    <td key={v.slug} className="p-3 align-top">
                      <ul className="list-disc space-y-1 pl-4">
                        {v.features.map((f) => <li key={f}>{f}</li>)}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </>
  );
}
