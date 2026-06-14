import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Plane, Ship, Warehouse, MapPin, Network, FileCheck, Thermometer, ShieldCheck, Globe, Zap, Clock } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrackingWidget } from "@/components/tracking-widget";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { stats, testimonials } from "@/data/misc";
import { regions, coverageAggregate } from "@/data/coverage";
import { news } from "@/data/news";
import { images } from "@/data/images";

const iconMap = { Truck, Plane, Ship, Warehouse, MapPin, Network, FileCheck, Thermometer };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SwiftCargo Logistics — Global freight, warehousing & supply chain" },
      { name: "description", content: "End-to-end logistics across 80+ countries. Real-time tracking, dedicated fleet, and 24/7 control-tower visibility." },
      { property: "og:title", content: "SwiftCargo Logistics" },
      { property: "og:description", content: "Global logistics. Local precision." },
      { property: "og:image", content: images.heroTruck },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div aria-hidden className="absolute inset-0 -z-10">
          <img src={images.heroTruck} alt="" className="h-full w-full object-cover opacity-25" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
        </div>
        <Container>
          <div className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Global logistics. Local precision.</p>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Move anything, anywhere, on time.</h1>
              <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
                Freight, warehousing, customs, and last-mile under one network — with real-time visibility across 80+ countries.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary"><Link to="/quote-request">Request a Quote</Link></Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/services">Explore Services <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <ul className="mt-8 grid grid-cols-3 gap-4 text-center">
                {stats.slice(0, 3).map((s) => (
                  <li key={s.label}><p className="font-display text-2xl font-bold text-accent">{s.value}</p><p className="text-xs text-primary-foreground/70">{s.label}</p></li>
                ))}
              </ul>
            </div>
            <div className="lg:pl-6">
              <TrackingWidget />
            </div>
          </div>
        </Container>
      </section>

      <Section muted>
        <SectionHeading eyebrow="What we do" title="A full-stack logistics partner" description="Eight integrated services, one operating model, one control tower." center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = (iconMap as any)[s.icon] ?? Truck;
            return (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                    <p className="mt-4 inline-flex items-center text-sm font-medium text-accent group-hover:underline">Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" /></p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Why SwiftCargo" title="Built for shippers who don't tolerate surprises." description="The visibility, network, and people you need — without the layers." />
            <ul className="mt-8 space-y-4">
              {[
                { icon: Globe, title: "80+ country network", body: "One contract, one control tower across road, air, ocean, and warehouse." },
                { icon: Zap, title: "Real-time visibility", body: "Live shipment status with predictive ETAs and exception alerts." },
                { icon: ShieldCheck, title: "Compliance built-in", body: "AEO, C-TPAT, GDP, ISO 9001/14001/27001/45001." },
                { icon: Clock, title: "24/7 control tower", body: "Always-on operations team across three regional hubs." },
              ].map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent/15 text-accent-foreground"><f.icon className="h-5 w-5 text-accent" /></span>
                  <div>
                    <p className="font-display font-semibold">{f.title}</p>
                    <p className="text-sm text-muted-foreground">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={images.warehouse} alt="SwiftCargo warehouse operations" className="rounded-xl shadow-xl" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Coverage" title="Worldwide network, local execution." description={`${coverageAggregate.warehouses} warehouses · ${coverageAggregate.cities}+ cities · ${coverageAggregate.countries}+ countries`} center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((r) => (
            <Link key={r.slug} to="/coverage/$slug" params={{ slug: r.slug }} className="group overflow-hidden rounded-xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.image} alt={r.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{r.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.summary}</p>
                <p className="mt-3 inline-flex items-center text-sm font-medium text-accent group-hover:underline">Explore region <ArrowRight className="ml-1 h-3.5 w-3.5" /></p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Industries" title="Solutions tailored to your sector" center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((i) => (
            <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden"><img src={i.image} alt={i.name} className="h-full w-full object-cover" loading="lazy" /></div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{i.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{i.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Case studies" title="Results from the world's best shippers" center />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((c) => (
            <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden"><img src={c.image} alt={c.title} className="h-full w-full object-cover" loading="lazy" /></div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{c.industry}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center"><Button asChild variant="outline"><Link to="/case-studies">All case studies</Link></Button></div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Customers" title="Trusted by leaders" center />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author}><CardContent className="p-6">
              <p className="text-base text-foreground">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold">{t.author}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </CardContent></Card>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Latest insights" title="News & updates" center />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <Link key={n.slug} to="/news/$slug" params={{ slug: n.slug }} className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden"><img src={n.image} alt={n.title} className="h-full w-full object-cover" loading="lazy" /></div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{n.category}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-primary text-primary-foreground">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 py-14 lg:flex-row lg:items-center lg:py-20">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's move your supply chain forward.</h2>
              <p className="mt-2 max-w-2xl text-primary-foreground/80">Get a tailored quote in under one business day.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" variant="secondary"><Link to="/quote-request">Request a Quote</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><Link to="/contact">Contact us</Link></Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
