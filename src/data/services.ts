import { images } from "./images";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
  process: { title: string; body: string }[];
  coverage: string[];
  relatedCaseStudies: string[];
};

export const services: Service[] = [
  {
    slug: "road-freight",
    name: "Road Freight",
    tagline: "Reliable trucking across continents",
    summary: "FTL & LTL trucking with real-time tracking and guaranteed transit times.",
    description:
      "Our road freight network spans 40+ countries with FTL, LTL, and dedicated fleet options. GPS-tracked vehicles, ELD compliance, and 24/7 dispatch keep your shipments moving.",
    icon: "Truck",
    image: images.road,
    benefits: [
      "Full Truckload (FTL) and Less-than-Truckload (LTL)",
      "Real-time GPS tracking on every vehicle",
      "Cross-border and customs-managed transit",
      "Dedicated and shared fleet options",
    ],
    process: [
      { title: "Quote", body: "Submit pickup, drop, dimensions — receive a quote in minutes." },
      { title: "Pickup", body: "Driver dispatched within agreed window with bill of lading." },
      { title: "Transit", body: "Live tracking + automatic milestone notifications." },
      { title: "Delivery", body: "Proof of delivery captured digitally and shared." },
    ],
    coverage: ["North America", "Europe", "Asia-Pacific"],
    relatedCaseStudies: ["nordic-retail-network", "automotive-tier1-program"],
  },
  {
    slug: "air-freight",
    name: "Air Freight",
    tagline: "Express airfreight for time-critical cargo",
    summary: "Door-to-door air freight with deferred, priority, and charter service tiers.",
    description:
      "When time matters, our air freight desks book capacity on 280+ carriers and operate dedicated charters for oversize, perishable, and dangerous goods.",
    icon: "Plane",
    image: images.airCargo,
    benefits: [
      "Priority, deferred, and charter tiers",
      "Dangerous goods (IATA DGR) certified",
      "Perishable and pharma temperature control",
      "Customs brokerage included",
    ],
    process: [
      { title: "Book", body: "Capacity confirmed against 280+ carrier contracts." },
      { title: "Handover", body: "Cargo received at origin gateway and screened." },
      { title: "Flight", body: "Status synced to your dashboard at every milestone." },
      { title: "Last mile", body: "Delivered by our ground network." },
    ],
    coverage: ["Global"],
    relatedCaseStudies: ["pharma-cold-chain-launch", "ecommerce-peak-season"],
  },
  {
    slug: "ocean-freight",
    name: "Ocean Freight",
    tagline: "FCL & LCL across every major trade lane",
    summary: "Container shipping with NVOCC contracts and full visibility from origin to door.",
    description:
      "Ocean is the backbone of global trade. We move FCL, LCL, breakbulk, and project cargo with multi-carrier contracts and end-to-end milestone visibility.",
    icon: "Ship",
    image: images.containerShip,
    benefits: [
      "FCL, LCL, breakbulk, project cargo",
      "Multi-carrier NVOCC contracts",
      "Container milestone & sailing schedules",
      "Reefer and DG handling",
    ],
    process: [
      { title: "Booking", body: "Slot booked with carrier; cut-off shared." },
      { title: "Stuffing", body: "Container stuffed at origin warehouse or shipper site." },
      { title: "Sailing", body: "Live vessel ETA and milestone tracking." },
      { title: "Delivery", body: "Customs cleared and trucked to consignee." },
    ],
    coverage: ["Global"],
    relatedCaseStudies: ["retail-import-program", "industrial-project-cargo"],
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    tagline: "Strategic distribution & fulfillment",
    summary: "Multi-client and dedicated warehousing with WMS integration and value-added services.",
    description:
      "60+ warehouses on five continents — pick & pack, kitting, returns, and bonded storage. WMS-integrated with EDI, API, and the major eCommerce platforms.",
    icon: "Warehouse",
    image: images.warehouse,
    benefits: [
      "Ambient, temperature-controlled, bonded space",
      "WMS with EDI / API integration",
      "Pick & pack, kitting, returns processing",
      "Inventory accuracy SLA: 99.95%",
    ],
    process: [
      { title: "Onboard", body: "SKUs profiled, slots assigned, WMS integrated." },
      { title: "Receive", body: "ASN-driven receiving; cycle counts daily." },
      { title: "Fulfill", body: "Same-day cut-offs with multi-carrier shipping." },
      { title: "Report", body: "Real-time inventory dashboards and KPI reports." },
    ],
    coverage: ["North America", "Europe", "Asia-Pacific"],
    relatedCaseStudies: ["dtc-brand-fulfillment", "industrial-spare-parts"],
  },
  {
    slug: "supply-chain-management",
    name: "Supply Chain Management",
    tagline: "End-to-end orchestration",
    summary: "Procurement, planning, and control-tower visibility across your entire supply chain.",
    description:
      "Our 4PL practice orchestrates carriers, suppliers, and warehouses through a single control tower — with demand planning, SLA management, and continuous improvement.",
    icon: "Network",
    image: images.supplyChain,
    benefits: [
      "Control-tower visibility",
      "Demand & inventory planning",
      "Vendor and carrier management",
      "Continuous-improvement program",
    ],
    process: [
      { title: "Assess", body: "Baseline current network, costs, and service." },
      { title: "Design", body: "Network and policy redesign for target service & cost." },
      { title: "Implement", body: "Phased rollout with change management." },
      { title: "Optimize", body: "Quarterly business reviews with KPI scorecards." },
    ],
    coverage: ["Global"],
    relatedCaseStudies: ["fmcg-network-redesign", "automotive-tier1-program"],
  },
  {
    slug: "last-mile-delivery",
    name: "Last-Mile Delivery",
    tagline: "From hub to doorstep",
    summary: "Same-day and next-day urban delivery with live ETAs and proof of delivery.",
    description:
      "150+ city hubs and a mixed fleet of cargo bikes, vans, and electric vehicles deliver to consumers and B2B with real-time ETAs and digital POD.",
    icon: "MapPin",
    image: images.lastMile,
    benefits: [
      "Same-day, next-day, scheduled windows",
      "Live ETA shared with consignee",
      "Digital proof of delivery",
      "Sustainable EV & cargo-bike options",
    ],
    process: [
      { title: "Inject", body: "Parcels injected at city hub from linehaul." },
      { title: "Sort", body: "Routes optimized per driver and time window." },
      { title: "Deliver", body: "Driver app routes, captures POD, handles exceptions." },
      { title: "Confirm", body: "POD photo & signature delivered to shipper." },
    ],
    coverage: ["North America", "Europe", "Asia-Pacific"],
    relatedCaseStudies: ["ecommerce-peak-season", "dtc-brand-fulfillment"],
  },
  {
    slug: "customs-brokerage",
    name: "Customs Brokerage",
    tagline: "Licensed brokers in every market",
    summary: "Customs clearance, duty optimization, and trade compliance under one roof.",
    description:
      "Licensed brokers in every country we serve handle classification, duty management, FTA filings, and AEO/C-TPAT compliance.",
    icon: "FileCheck",
    image: images.customs,
    benefits: [
      "Licensed brokers in every market",
      "HTS classification & duty optimization",
      "FTA filings (USMCA, EU, RCEP)",
      "AEO / C-TPAT certified",
    ],
    process: [
      { title: "Prepare", body: "Docs reviewed; classification confirmed." },
      { title: "File", body: "Entry filed pre-arrival where supported." },
      { title: "Clear", body: "Duties paid; release secured." },
      { title: "Archive", body: "5-year compliant archive maintained." },
    ],
    coverage: ["Global"],
    relatedCaseStudies: ["retail-import-program", "pharma-cold-chain-launch"],
  },
  {
    slug: "cold-chain",
    name: "Cold-Chain Logistics",
    tagline: "Temperature-controlled end-to-end",
    summary: "GDP-validated cold chain for pharma, food, and life sciences.",
    description:
      "Validated cold-chain network from –25 °C to +25 °C — pharma-grade vehicles, IoT-monitored containers, and qualified warehouses.",
    icon: "Thermometer",
    image: images.coldChain,
    benefits: [
      "GDP-validated lanes",
      "IoT temperature monitoring",
      "Qualified pharma warehouses",
      "Excursion response < 30 min",
    ],
    process: [
      { title: "Qualify", body: "Lane qualification & risk assessment." },
      { title: "Monitor", body: "IoT sensors stream live temperature." },
      { title: "Respond", body: "24/7 control tower escalates excursions." },
      { title: "Report", body: "Audit-ready temperature reports per shipment." },
    ],
    coverage: ["Global"],
    relatedCaseStudies: ["pharma-cold-chain-launch", "fresh-produce-export"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
