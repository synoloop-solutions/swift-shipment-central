export type Career = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const careers: Career[] = [
  { slug: "senior-logistics-coordinator-london", title: "Senior Logistics Coordinator", department: "Operations", location: "London, UK", type: "Full-time",
    summary: "Coordinate multi-modal shipments across European trade lanes.",
    responsibilities: ["Coordinate end-to-end shipments", "Liaise with carriers and customers", "Resolve exceptions in real time", "Maintain shipment data accuracy"],
    requirements: ["3+ years freight forwarding experience", "Strong communication skills", "Experience with TMS systems", "Right to work in the UK"] },
  { slug: "warehouse-operations-manager-chicago", title: "Warehouse Operations Manager", department: "Warehousing", location: "Chicago, IL", type: "Full-time",
    summary: "Lead a 380,000 sq ft multi-client warehouse and 120 staff.",
    responsibilities: ["P&L responsibility", "Lead daily operations", "Continuous improvement programs", "Health & safety leadership"],
    requirements: ["7+ years warehouse leadership", "WMS expertise (Manhattan, Blue Yonder, etc.)", "Lean / Six Sigma", "OSHA familiarity"] },
  { slug: "customs-broker-singapore", title: "Licensed Customs Broker", department: "Customs", location: "Singapore", type: "Full-time",
    summary: "Manage customs entries for our key APAC accounts.",
    responsibilities: ["Classify and file entries", "Manage duty optimization", "Liaise with Singapore Customs", "Audit and archive entries"],
    requirements: ["Licensed Singapore customs broker", "5+ years brokerage", "Trade compliance knowledge", "Bilingual EN/Mandarin a plus"] },
  { slug: "fleet-engineer-dallas", title: "Fleet Engineer (EV Transition)", department: "Fleet", location: "Dallas, TX", type: "Full-time",
    summary: "Lead our EV transition program for North America.",
    responsibilities: ["Spec and procure EV fleet", "Manage charging infrastructure", "Drive TCO modeling", "Vendor management"],
    requirements: ["BS Mechanical / Electrical Engineering", "5+ years commercial fleet", "EV expertise preferred", "Strong analytics"] },
  { slug: "control-tower-analyst-rotterdam", title: "Control-Tower Analyst", department: "Supply Chain", location: "Rotterdam, NL", type: "Full-time",
    summary: "Run shift in our European control tower.",
    responsibilities: ["Real-time exception management", "KPI reporting", "Customer communications", "Continuous improvement"],
    requirements: ["Bachelor's degree", "2+ years supply chain", "SQL fluency", "English required"] },
  { slug: "software-engineer-react-remote", title: "Senior Software Engineer (React)", department: "Technology", location: "Remote (EU)", type: "Full-time",
    summary: "Build customer-facing logistics applications.",
    responsibilities: ["Build React / TypeScript apps", "Collaborate with product and design", "Own features end-to-end", "Mentor engineers"],
    requirements: ["5+ years React / TS", "Strong eye for UX", "Experience with maps & geo data a plus", "EU time zone"] },
  { slug: "data-scientist-supply-chain-amsterdam", title: "Data Scientist — Supply Chain", department: "Technology", location: "Amsterdam, NL", type: "Full-time",
    summary: "Optimize networks with ML and OR techniques.",
    responsibilities: ["Build forecasting models", "Network optimization", "ETA prediction", "Partner with operations"],
    requirements: ["MS in OR / ML / Statistics", "Python / SQL", "Optimization experience", "Logistics domain a plus"] },
  { slug: "key-account-manager-frankfurt", title: "Key Account Manager", department: "Commercial", location: "Frankfurt, DE", type: "Full-time",
    summary: "Own strategic accounts across DACH.",
    responsibilities: ["Manage top-20 accounts", "Expand share of wallet", "QBR ownership", "Contract negotiation"],
    requirements: ["8+ years logistics sales", "DACH market expertise", "German + English fluency", "Strong negotiator"] },
  { slug: "last-mile-driver-new-york", title: "Last-Mile Delivery Driver", department: "Operations", location: "New York, NY", type: "Full-time",
    summary: "Deliver parcels across NYC boroughs.",
    responsibilities: ["Safe, on-time delivery", "Customer interaction", "Driver app proficiency", "Vehicle care"],
    requirements: ["Valid driver's license, clean record", "1+ year delivery experience", "Customer service mindset", "Physically capable"] },
  { slug: "sustainability-lead-london", title: "Sustainability Lead", department: "Sustainability", location: "London, UK", type: "Full-time",
    summary: "Drive our Scope 1-3 carbon reduction roadmap.",
    responsibilities: ["Carbon accounting program", "Scope 1-3 reduction roadmap", "Customer reporting", "Sustainability partnerships"],
    requirements: ["5+ years sustainability / ESG", "GHG Protocol expertise", "Transport / logistics knowledge", "Strong communicator"] },
];

export const getCareer = (slug: string) => careers.find((c) => c.slug === slug);
