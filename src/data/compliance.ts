export type ComplianceSection = {
  id: string;
  title: string;
  body: string;
  items: { title: string; body: string }[];
};

export const compliance: ComplianceSection[] = [
  { id: "iso-certifications", title: "ISO Certifications",
    body: "We operate certified management systems across our global network.",
    items: [
      { title: "ISO 9001:2015 — Quality", body: "Group-wide quality management system, audited annually." },
      { title: "ISO 14001:2015 — Environment", body: "Environmental management across 60 sites with zero major findings at recertification." },
      { title: "ISO 45001:2018 — Health & Safety", body: "Occupational health and safety management covering all owned operations." },
      { title: "ISO 27001:2022 — Information Security", body: "Information security management for our technology platforms and customer data." },
    ] },
  { id: "customs-compliance", title: "Customs Compliance",
    body: "Trusted-trader status in key jurisdictions and licensed brokers in every market.",
    items: [
      { title: "AEO (Authorized Economic Operator)", body: "AEO-F (Full) status across the EU and UK." },
      { title: "C-TPAT (US)", body: "Tier-3 certified — the highest tier of the US Customs–Trade Partnership Against Terrorism." },
      { title: "PIP (Canada)", body: "Partners in Protection — certified by the Canada Border Services Agency." },
      { title: "Free-Trade Agreement filings", body: "USMCA, EU-FTAs, RCEP, CPTPP filings handled in-house." },
    ] },
  { id: "safety-standards", title: "Safety Standards",
    body: "A relentless focus on safety across our drivers, warehouse staff, and contractors.",
    items: [
      { title: "TRIR < 0.9", body: "Total Recordable Incident Rate well below industry average." },
      { title: "Driver safety program", body: "Telematics-based scoring, coaching, and recognition for all professional drivers." },
      { title: "Warehouse safety", body: "Daily toolbox talks, monthly drills, and quarterly internal audits." },
      { title: "IATA DGR / IMDG / ADR", body: "Dangerous goods certified across air, sea, and road." },
    ] },
  { id: "environmental-policies", title: "Environmental Policies",
    body: "Our environmental commitments are public, time-bound, and externally verified.",
    items: [
      { title: "Net-zero by 2040", body: "Validated by SBTi with interim 2030 milestones." },
      { title: "Scope 1-3 reporting", body: "GHG Protocol reporting, externally assured." },
      { title: "Electric & alternative-fuel fleet", body: "30% of last-mile fleet electric by 2027." },
      { title: "Sustainable warehousing", body: "BREEAM / LEED for all new facilities; 100% renewable electricity by 2028." },
    ] },
  { id: "transportation-regulations", title: "Transportation Regulations",
    body: "Full compliance with the regulations of the regions in which we operate.",
    items: [
      { title: "FMCSA / DOT (US)", body: "ELD-compliant; SMS scores monitored monthly." },
      { title: "EU Mobility Package", body: "Driver hours, cabotage, and posting compliance across all EU operations." },
      { title: "UK DVSA", body: "Operator licence, driver CPC, and tachograph compliance." },
      { title: "DG transport (IATA / IMO / ADR)", body: "Certified handling and transport of hazardous and dangerous goods." },
    ] },
];
