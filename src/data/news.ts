import { images } from "./images";

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
};

const long = (intro: string) =>
  `${intro}\n\nThis development comes as global supply chains continue to adapt to shifting demand patterns, regional sourcing, and the broader sustainability transition. Our teams have been investing across digital infrastructure, sustainable fleet, and warehousing capacity to keep pace with customer needs.\n\nWe will continue to publish updates as new milestones are reached. For media inquiries, please contact our press desk.`;

export const news: Article[] = [
  { slug: "swiftcargo-launches-ev-fleet-london", title: "SwiftCargo launches all-electric last-mile fleet in London", category: "Sustainability", excerpt: "200 EVs replace diesel vans across central London.", author: "Communications", date: "2026-05-12", readingTime: "4 min", image: images.news1,
    body: long("SwiftCargo today announced the launch of a 200-vehicle electric last-mile fleet in central London, completing the transition for inside-the-ULEZ operations a year ahead of plan.") },
  { slug: "new-mega-hub-liege", title: "New 510,000 sq ft mega-hub opens in Liège", category: "Network", excerpt: "European parcel throughput grows 35%.", author: "Communications", date: "2026-04-22", readingTime: "5 min", image: images.news2,
    body: long("The new Liège mega-hub will serve as the cornerstone of our European parcel network, lifting cross-border throughput by an estimated 35% during peak.") },
  { slug: "control-tower-2-launch", title: "Control Tower 2.0 launches for top accounts", category: "Technology", excerpt: "Predictive ETA and exception orchestration.", author: "Product", date: "2026-04-03", readingTime: "6 min", image: images.news3,
    body: long("Control Tower 2.0 introduces predictive ETAs, automated exception orchestration, and customer-grade dashboards across our top-200 accounts.") },
  { slug: "iso-14001-recertification", title: "SwiftCargo recertified to ISO 14001:2015", category: "Compliance", excerpt: "Group-wide recertification across 60 sites.", author: "Compliance", date: "2026-03-18", readingTime: "3 min", image: images.news4,
    body: long("Our environmental management system has been recertified to ISO 14001:2015 across 60 sites with zero major findings.") },
  { slug: "ocean-alliance-extension", title: "Ocean carrier alliance extended through 2030", category: "Network", excerpt: "Locks in long-term capacity on key lanes.", author: "Commercial", date: "2026-02-27", readingTime: "4 min", image: images.news5,
    body: long("Our multi-year ocean alliance has been extended through 2030, locking in long-term capacity and pricing stability for our customers on key Pacific and Atlantic lanes.") },
  { slug: "automated-warehouse-shenzhen", title: "Automated warehouse goes live in Shenzhen", category: "Operations", excerpt: "Goods-to-person system triples throughput.", author: "Operations", date: "2026-02-09", readingTime: "5 min", image: images.news6,
    body: long("Our new automated warehouse in Shenzhen has gone live, with a goods-to-person robotic system tripling pick throughput compared to legacy operations.") },
  { slug: "air-charter-network-expansion", title: "Air charter network expanded with new B777 contract", category: "Network", excerpt: "Adds dedicated weekly Asia–Europe rotations.", author: "Commercial", date: "2026-01-21", readingTime: "4 min", image: images.news7,
    body: long("We have signed a long-term agreement for a B777 freighter providing weekly dedicated rotations between Asia and Europe.") },
  { slug: "last-mile-record-q4", title: "Last-mile delivery records new Q4 throughput high", category: "Operations", excerpt: "Peak completed with 99.1% on-time.", author: "Operations", date: "2026-01-08", readingTime: "3 min", image: images.news8,
    body: long("Our last-mile network completed Q4 peak with 99.1% on-time delivery — a record for the company.") },
  { slug: "cold-chain-gdp-audit", title: "Cold-chain network passes pharma GDP audit", category: "Compliance", excerpt: "Zero major findings across 22 lanes.", author: "Compliance", date: "2025-12-12", readingTime: "4 min", image: images.news9,
    body: long("Our pharma cold-chain network passed its annual GDP audit with zero major findings across all 22 validated lanes.") },
  { slug: "customs-tech-investment", title: "Customs platform receives $40M technology investment", category: "Technology", excerpt: "Automation across 5,000 daily entries.", author: "Product", date: "2025-11-30", readingTime: "5 min", image: images.news10,
    body: long("A $40M technology investment will automate classification, FTA filings, and document handling across more than 5,000 daily customs entries.") },
  { slug: "new-network-design-tool", title: "New network design tool released for customers", category: "Technology", excerpt: "Self-service optimization in days, not months.", author: "Product", date: "2025-11-14", readingTime: "4 min", image: images.news11,
    body: long("Customers can now run network design scenarios in our self-service platform — completing optimization work that previously took months in just days.") },
  { slug: "carbon-disclosure-leader", title: "SwiftCargo named to CDP Climate Change A-list", category: "Sustainability", excerpt: "Recognized for transparent climate disclosure.", author: "Sustainability", date: "2025-10-29", readingTime: "3 min", image: images.news12,
    body: long("SwiftCargo has been named to the CDP Climate Change A-list, recognizing our commitment to transparent climate disclosure and credible emissions reduction targets.") },
];

export const getArticle = (slug: string) => news.find((n) => n.slug === slug);
