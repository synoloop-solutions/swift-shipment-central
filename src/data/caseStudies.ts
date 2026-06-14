import { images } from "./images";

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  kpis: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
  image: string;
};

const cs = (
  slug: string, client: string, industry: string, title: string, summary: string,
  image: string, kpis: { label: string; value: string }[], quote: string, author: string, role: string,
): CaseStudy => ({
  slug, client, industry, title, summary, image, kpis,
  challenge: `${client} faced rising service expectations, complex multi-origin sourcing, and fragmented carrier data — without the network visibility to act on it.`,
  solution: `We deployed a tailored ${industry.toLowerCase()} solution combining our network design, control-tower visibility, and dedicated operations team — onboarded in under 90 days.`,
  results: `Within six months, ${client} achieved ${kpis[0].value} on ${kpis[0].label.toLowerCase()}, while reducing logistics cost-to-serve and improving customer satisfaction.`,
  testimonial: { quote, author, role },
});

export const caseStudies: CaseStudy[] = [
  cs("nordic-retail-network", "NordHaus Retail", "Retail", "Redesigning the Nordic retail network", "Cut transit time 28% across Nordic stores.", images.case1,
    [{ label: "Transit time", value: "-28%" }, { label: "On-time delivery", value: "98.6%" }, { label: "Cost-to-serve", value: "-14%" }],
    "SwiftCargo rebuilt our store-replenishment network and it just works.", "Anna Linde", "VP Supply Chain, NordHaus"),
  cs("automotive-tier1-program", "DriveForge", "Automotive", "JIT sequencing for a Tier-1 supplier", "Sequenced delivery to OEM lines with 99.8% accuracy.", images.case2,
    [{ label: "Sequence accuracy", value: "99.8%" }, { label: "Line stoppages", value: "0" }, { label: "Inventory days", value: "-22%" }],
    "Zero line stoppages in 14 months. That speaks for itself.", "Marco Bianchi", "Plant Director, DriveForge"),
  cs("pharma-cold-chain-launch", "BioLume Therapeutics", "Healthcare", "GDP cold chain for a global biologics launch", "Validated 22 lanes in 12 weeks.", images.case5,
    [{ label: "Lanes validated", value: "22" }, { label: "Excursions", value: "0.04%" }, { label: "Launch on schedule", value: "Yes" }],
    "Their cold-chain control tower is best-in-class.", "Dr. Priya Iyer", "Head of Distribution, BioLume"),
  cs("ecommerce-peak-season", "Lumen Direct", "Retail", "Peak-season fulfillment for a top-25 retailer", "Doubled throughput without missed SLAs.", images.case7,
    [{ label: "Peak throughput", value: "2.1x" }, { label: "Same-day cut-off", value: "8 pm" }, { label: "Returns SLA", value: "24 h" }],
    "Our biggest peak ever — and the smoothest.", "Sarah Whitman", "COO, Lumen Direct"),
  cs("retail-import-program", "HarborStock", "Retail", "Ocean import program for big-box retail", "Saved 11% on landed cost.", images.case6,
    [{ label: "Landed cost", value: "-11%" }, { label: "Container visibility", value: "100%" }, { label: "Demurrage", value: "-63%" }],
    "Visibility we never had before, on a network we already used.", "Robert Chen", "Director of Imports, HarborStock"),
  cs("industrial-project-cargo", "Heliotech Energy", "Industrial", "Wind farm project cargo across three countries", "Delivered on time, on permit, on budget.", images.case12,
    [{ label: "Components delivered", value: "184" }, { label: "Permit incidents", value: "0" }, { label: "Schedule", value: "On time" }],
    "Project execution at the level of a top-tier 4PL.", "Eva Mendel", "Logistics Lead, Heliotech"),
  cs("dtc-brand-fulfillment", "Cloud&Co", "DTC", "Fulfillment for a fast-growing DTC brand", "Cut order-to-ship to 4 hours.", images.case10,
    [{ label: "Order-to-ship", value: "4 h" }, { label: "Accuracy", value: "99.96%" }, { label: "NPS", value: "+12" }],
    "Customers notice. Our reviews now mention shipping speed.", "Jordan Pierce", "Founder, Cloud&Co"),
  cs("fmcg-network-redesign", "Brightway Brands", "FMCG", "Network redesign across EU & UK", "Removed 4 nodes, added 1 mega-hub.", images.case9,
    [{ label: "Cost-to-serve", value: "-17%" }, { label: "Service level", value: "+3.2 pts" }, { label: "CO₂", value: "-21%" }],
    "Lower cost AND lower carbon, on the same network.", "Hugo Laurent", "VP Operations, Brightway"),
  cs("industrial-spare-parts", "MachineWorks", "Industrial", "Global spare-parts distribution", "98% next-day availability worldwide.", images.case11,
    [{ label: "Next-day availability", value: "98%" }, { label: "Inventory turns", value: "+1.4" }, { label: "Stockouts", value: "-71%" }],
    "Their parts network keeps our customers running.", "Lukas Müller", "Aftermarket Director, MachineWorks"),
  cs("fresh-produce-export", "GreenHarvest", "Food", "Air-freight produce from East Africa to EU", "Spoilage cut to under 1%.", images.case4,
    [{ label: "Spoilage", value: "<1%" }, { label: "Lead time", value: "36 h" }, { label: "Volume growth", value: "3.2x" }],
    "We finally have a cold chain we can rely on.", "Wanjiru Otieno", "Export Manager, GreenHarvest"),
  cs("tech-product-launch", "Pixelforge", "Technology", "Worldwide product launch in 8 markets", "Day-one availability in every market.", images.case8,
    [{ label: "Day-one markets", value: "8/8" }, { label: "On-time launch", value: "100%" }, { label: "Reverse logistics", value: "<48 h" }],
    "Their launch playbook is now part of ours.", "Lena Park", "Head of Operations, Pixelforge"),
  cs("e-grocery-last-mile", "FreshDash", "Food", "Last-mile e-grocery delivery", "30-min delivery in 12 cities.", images.case3,
    [{ label: "Delivery window", value: "30 min" }, { label: "On-time", value: "97%" }, { label: "Cities live", value: "12" }],
    "30-minute delivery, every day, every weather.", "Maya Rosen", "VP Logistics, FreshDash"),
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
