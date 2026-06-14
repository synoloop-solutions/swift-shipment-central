import { Link } from "@tanstack/react-router";
import { Truck, Mail, Phone, MapPin } from "lucide-react";
import { company, offices } from "@/data/misc";
import { openCookiePreferences } from "@/hooks/use-cookie-consent";

const cols = [
  { title: "Services", links: [
    { to: "/services", label: "All Services" },
    { to: "/services/road-freight", label: "Road Freight" },
    { to: "/services/air-freight", label: "Air Freight" },
    { to: "/services/ocean-freight", label: "Ocean Freight" },
    { to: "/services/warehousing", label: "Warehousing" },
    { to: "/services/last-mile-delivery", label: "Last-Mile Delivery" },
  ]},
  { title: "Company", links: [
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/careers", label: "Careers" },
    { to: "/news", label: "News" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/contact", label: "Contact" },
  ]},
  { title: "Solutions", links: [
    { to: "/industries", label: "Industries" },
    { to: "/fleet", label: "Fleet" },
    { to: "/fleet/compare", label: "Compare Fleet" },
    { to: "/coverage", label: "Coverage" },
    { to: "/resources", label: "Resources" },
    { to: "/compliance", label: "Trust & Compliance" },
  ]},
  { title: "Legal", links: [
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" },
    { to: "/cookie-policy", label: "Cookie Policy" },
    { to: "/accessibility", label: "Accessibility" },
  ]},
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground"><Truck className="h-5 w-5" /></span>
              SwiftCargo
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">{company.tagline}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> {company.address}</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> {company.phone}</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> {company.email}</li>
            </ul>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-sm font-semibold text-foreground">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city} className="text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">{o.city}, {o.country}</p>
              <p>{o.address}</p>
              <p>{o.phone}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <button
            type="button"
            onClick={() => openCookiePreferences()}
            className="rounded-md text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  );
}
