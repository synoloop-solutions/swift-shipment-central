import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/layout/section";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { company, offices } from "@/data/misc";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SwiftCargo Logistics" },
      { name: "description", content: "Get in touch with SwiftCargo's global team." },
      { property: "og:title", content: "Contact — SwiftCargo" },
      { property: "og:description", content: "Reach our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [done, setDone] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" description="We respond to every message within one business day." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {done ? (
              <div className="rounded-xl border border-border bg-card p-10 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
                <h2 className="mt-4 font-display text-2xl font-semibold">Message sent</h2>
                <p className="mt-2 text-sm text-muted-foreground">Thank you — we'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                className="space-y-5 rounded-xl border border-border bg-card p-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = Object.fromEntries(new FormData(e.currentTarget).entries());
                  const prev = JSON.parse(localStorage.getItem("swiftcargo:contacts") || "[]");
                  localStorage.setItem("swiftcargo:contacts", JSON.stringify([...prev, { ...data, ts: Date.now() }]));
                  toast.success("Message sent");
                  setDone(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label htmlFor="name">Name</Label><Input id="name" name="name" required /></div>
                  <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required /></div>
                </div>
                <div><Label htmlFor="subject">Subject</Label><Input id="subject" name="subject" required /></div>
                <div><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={6} required /></div>
                <Button type="submit" className="w-full" size="lg">Send message</Button>
              </form>
            )}
          </div>
          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-display font-semibold">Headquarters</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> {company.address}</li>
                <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /> {company.phone}</li>
                <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-accent" /> {company.email}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-display font-semibold">Offices</h3>
              <ul className="mt-3 space-y-3 text-sm">
                {offices.map((o) => (
                  <li key={o.city}><p className="font-medium">{o.city}, {o.country}</p><p className="text-muted-foreground">{o.phone}</p></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
