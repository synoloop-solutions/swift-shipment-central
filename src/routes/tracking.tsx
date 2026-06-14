import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useEffect } from "react";
import { PageHeader, Section } from "@/components/layout/section";
import { TrackingWidget } from "@/components/tracking-widget";
import { useTrackingHistory } from "@/hooks/use-tracking-history";
import { exampleTrackingIds } from "@/data/tracking";

const searchSchema = z.object({ id: z.string().optional() });

export const Route = createFileRoute("/tracking")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Shipment Tracking — SwiftCargo Logistics" },
      { name: "description", content: "Track your SwiftCargo shipment in real time." },
      { property: "og:title", content: "Track — SwiftCargo" },
      { property: "og:description", content: "Real-time shipment tracking." },
    ],
  }),
  component: TrackingPage,
});

function TrackingPage() {
  const { id } = Route.useSearch();
  const { push } = useTrackingHistory();
  useEffect(() => { if (id) push(id); }, [id, push]);

  return (
    <>
      <PageHeader eyebrow="Tracking" title="Where is my shipment?" description="Enter your tracking number for real-time status and full milestone history." />
      <Section>
        <div className="mx-auto max-w-3xl">
          <TrackingWidget compact />
          <div className="mt-8 rounded-lg border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Sample tracking numbers</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {exampleTrackingIds.map((eid) => <li key={eid} className="rounded bg-background px-2 py-1 font-mono text-xs">{eid}</li>)}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
