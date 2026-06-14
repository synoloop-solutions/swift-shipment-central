import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { lookupShipment, type Shipment, exampleTrackingIds } from "@/data/tracking";
import { useTrackingHistory } from "@/hooks/use-tracking-history";
import { cn } from "@/lib/utils";

export function TrackingWidget({ compact = false }: { compact?: boolean }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Shipment | null | undefined>(undefined);
  const { history, push, clear, remove } = useTrackingHistory();
  const navigate = useNavigate();

  function doLookup(id: string) {
    const r = lookupShipment(id);
    setResult(r);
    setValue(id);
    if (r) push(r.id);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    doLookup(value);
  }

  return (
    <Card className={cn("border-border shadow-xl", compact && "bg-card")}>
      <CardContent className="p-5 sm:p-6">
        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row" aria-label="Track a shipment">
          <label htmlFor="track-id" className="sr-only">Tracking number</label>
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input
              id="track-id"
              placeholder="Enter tracking number (e.g. SW123456789)"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="pl-9"
              autoComplete="off"
            />
          </div>
          <Button type="submit">Track shipment</Button>
          {!compact && (
            <Button type="button" variant="outline" onClick={() => navigate({ to: "/tracking" })}>
              Open tracking page
            </Button>
          )}
        </form>

        {history.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Recent searches</p>
              <button type="button" onClick={clear} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                <Trash2 className="h-3 w-3" /> Clear
              </button>
            </div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {history.map((h) => (
                <li key={h.id}>
                  <button
                    type="button"
                    onClick={() => doLookup(h.id)}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium hover:border-accent hover:bg-accent/10"
                  >
                    <span className="font-mono">{h.id}</span>
                    <span className="text-muted-foreground">· {new Date(h.ts).toLocaleString()}</span>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label={`Remove ${h.id}`}
                      onClick={(e) => { e.stopPropagation(); remove(h.id); }}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); remove(h.id); } }}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      ×
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!compact && history.length === 0 && (
          <p className="mt-4 text-xs text-muted-foreground">
            Try a sample: <button type="button" className="font-mono text-accent underline" onClick={() => doLookup(exampleTrackingIds[0])}>{exampleTrackingIds[0]}</button>
          </p>
        )}

        {result === null && (
          <div role="alert" className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            No shipment found for that tracking number. Please check and try again.
          </div>
        )}

        {result && (
          <div className="mt-5 rounded-md border border-border bg-background p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-sm font-semibold">{result.id}</p>
              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent-foreground">{result.status}</span>
            </div>
            <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <p><span className="text-muted-foreground">From:</span> {result.origin}</p>
              <p><span className="text-muted-foreground">To:</span> {result.destination}</p>
              <p><span className="text-muted-foreground">Current:</span> {result.currentLocation}</p>
              <p><span className="text-muted-foreground">ETA:</span> {result.estimatedDelivery}</p>
            </div>
            <Button asChild variant="link" className="mt-2 px-0">
              <a href={`/tracking?id=${result.id}`}>View full timeline <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
