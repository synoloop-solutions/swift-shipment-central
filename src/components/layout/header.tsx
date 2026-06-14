import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/fleet", label: "Fleet" },
  { to: "/coverage", label: "Coverage" },
  { to: "/tracking", label: "Track" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <Truck className="h-5 w-5" aria-hidden />
          </span>
          SwiftCargo
        </Link>
        <nav aria-label="Primary" className="hidden lg:flex">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-muted" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/search" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground">Search</Link>
          <Button asChild>
            <Link to="/quote-request">Request a Quote</Link>
          </Button>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className={cn("lg:hidden", open ? "block" : "hidden")}>
        <div className="border-t border-border bg-background px-4 py-3">
          <ul className="flex flex-col gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link to="/quote-request" onClick={() => setOpen(false)}>Request a Quote</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
