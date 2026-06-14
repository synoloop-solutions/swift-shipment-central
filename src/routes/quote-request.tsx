import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { services } from "@/data/services";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Required"),
  company: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(5, "Required"),
  service: z.string().min(1, "Pick a service"),
  origin: z.string().min(2, "Required"),
  destination: z.string().min(2, "Required"),
  details: z.string().min(10, "Tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

export const Route = createFileRoute("/quote-request")({
  head: () => ({
    meta: [
      { title: "Request a Quote — SwiftCargo Logistics" },
      { name: "description", content: "Tell us about your shipment and we'll respond within one business day." },
      { property: "og:title", content: "Quote — SwiftCargo" },
      { property: "og:description", content: "Get a tailored logistics quote." },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [done, setDone] = useState(false);
  const form = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const prev = JSON.parse(localStorage.getItem("swiftcargo:quotes") || "[]");
    localStorage.setItem("swiftcargo:quotes", JSON.stringify([...prev, { ...data, ts: Date.now() }]));
    toast.success("Quote request submitted");
    setDone(true);
  };

  return (
    <>
      <PageHeader eyebrow="Quote" title="Request a quote" description="Tell us about your shipment. We respond within one business day." />
      <Section>
        <div className="mx-auto max-w-2xl">
          {done ? (
            <div className="rounded-xl border border-border bg-card p-10 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
              <h2 className="mt-4 font-display text-2xl font-semibold">Thanks — we'll be in touch.</h2>
              <p className="mt-2 text-sm text-muted-foreground">Our team will respond within one business day.</p>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 rounded-xl border border-border bg-card p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" error={form.formState.errors.name?.message}><Input {...form.register("name")} /></Field>
                <Field label="Company" error={form.formState.errors.company?.message}><Input {...form.register("company")} /></Field>
                <Field label="Email" error={form.formState.errors.email?.message}><Input type="email" {...form.register("email")} /></Field>
                <Field label="Phone" error={form.formState.errors.phone?.message}><Input {...form.register("phone")} /></Field>
              </div>
              <Field label="Service" error={form.formState.errors.service?.message}>
                <Select onValueChange={(v) => form.setValue("service", v, { shouldValidate: true })}>
                  <SelectTrigger><SelectValue placeholder="Select a service…" /></SelectTrigger>
                  <SelectContent>{services.map((s) => <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>)}</SelectContent>
                </Select>
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Origin (city, country)" error={form.formState.errors.origin?.message}><Input {...form.register("origin")} /></Field>
                <Field label="Destination (city, country)" error={form.formState.errors.destination?.message}><Input {...form.register("destination")} /></Field>
              </div>
              <Field label="Shipment details" error={form.formState.errors.details?.message}>
                <Textarea rows={5} placeholder="Weight, dimensions, frequency, special requirements…" {...form.register("details")} />
              </Field>
              <Button type="submit" className="w-full" size="lg">Submit request</Button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-1 text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}
