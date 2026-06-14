import { images } from "./images";

export type Region = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  stats: { warehouses: number; distributionCenters: number; cities: number; staff: number };
  warehouses: { city: string; size: string; type: string }[];
  distributionCenters: { city: string; throughput: string }[];
  deliveryTimes: { zone: string; transit: string }[];
  services: string[];
  cities: string[];
};

export const regions: Region[] = [
  {
    slug: "north-america",
    name: "North America",
    summary: "USA, Canada, Mexico — coast-to-coast coverage.",
    description: "A 25-warehouse, 60-city network with cross-border USMCA expertise and bonded facilities at all major ports of entry.",
    image: images.northAmerica,
    stats: { warehouses: 25, distributionCenters: 8, cities: 60, staff: 3200 },
    warehouses: [
      { city: "Los Angeles, CA", size: "420,000 sq ft", type: "Multi-client + bonded" },
      { city: "Chicago, IL", size: "380,000 sq ft", type: "Multi-client" },
      { city: "Dallas, TX", size: "310,000 sq ft", type: "Cross-dock + bonded" },
      { city: "New York / NJ", size: "290,000 sq ft", type: "Multi-client" },
      { city: "Toronto, ON", size: "240,000 sq ft", type: "Multi-client" },
      { city: "Mexico City, MX", size: "220,000 sq ft", type: "Bonded" },
    ],
    distributionCenters: [
      { city: "Atlanta, GA", throughput: "180k parcels/day" },
      { city: "Memphis, TN", throughput: "150k parcels/day" },
      { city: "Vancouver, BC", throughput: "90k parcels/day" },
    ],
    deliveryTimes: [
      { zone: "Metro same-day", transit: "0-1 day" },
      { zone: "Regional", transit: "1-2 days" },
      { zone: "Cross-country", transit: "3-5 days" },
      { zone: "Cross-border (USMCA)", transit: "2-4 days" },
    ],
    services: ["Road Freight", "Air Freight", "Warehousing", "Last-Mile Delivery", "Customs Brokerage"],
    cities: ["Los Angeles", "San Francisco", "Seattle", "Denver", "Dallas", "Houston", "Chicago", "Atlanta", "Miami", "New York", "Boston", "Toronto", "Montreal", "Vancouver", "Mexico City", "Monterrey"],
  },
  {
    slug: "europe",
    name: "Europe",
    summary: "EU, UK, Nordics — single-market expertise.",
    description: "Coverage across 30+ European countries with bonded warehouses, post-Brexit customs handling, and full intra-EU road network.",
    image: images.europe,
    stats: { warehouses: 22, distributionCenters: 9, cities: 75, staff: 2800 },
    warehouses: [
      { city: "Rotterdam, NL", size: "510,000 sq ft", type: "Multi-client + bonded" },
      { city: "Hamburg, DE", size: "390,000 sq ft", type: "Multi-client" },
      { city: "Madrid, ES", size: "280,000 sq ft", type: "Multi-client" },
      { city: "Milan, IT", size: "250,000 sq ft", type: "Multi-client" },
      { city: "Paris, FR", size: "240,000 sq ft", type: "Multi-client" },
      { city: "London, UK", size: "230,000 sq ft", type: "Bonded post-Brexit" },
    ],
    distributionCenters: [
      { city: "Liège, BE", throughput: "210k parcels/day" },
      { city: "Warsaw, PL", throughput: "140k parcels/day" },
      { city: "Stockholm, SE", throughput: "70k parcels/day" },
    ],
    deliveryTimes: [
      { zone: "Domestic next-day", transit: "1 day" },
      { zone: "Intra-EU", transit: "1-3 days" },
      { zone: "UK <> EU (post-Brexit)", transit: "2-4 days" },
      { zone: "Nordics", transit: "2-3 days" },
    ],
    services: ["Road Freight", "Ocean Freight", "Warehousing", "Last-Mile Delivery", "Customs Brokerage", "Cold-Chain"],
    cities: ["London", "Paris", "Berlin", "Hamburg", "Rotterdam", "Amsterdam", "Madrid", "Barcelona", "Milan", "Rome", "Stockholm", "Copenhagen", "Warsaw", "Prague", "Vienna", "Zurich"],
  },
  {
    slug: "asia-pacific",
    name: "Asia-Pacific",
    summary: "China, SEA, India, ANZ — origin & destination.",
    description: "Strong origin presence in China and SEA with destination networks in India, Japan, and ANZ.",
    image: images.asiaPacific,
    stats: { warehouses: 28, distributionCenters: 12, cities: 80, staff: 4100 },
    warehouses: [
      { city: "Shanghai, CN", size: "620,000 sq ft", type: "Multi-client + bonded" },
      { city: "Shenzhen, CN", size: "480,000 sq ft", type: "Cross-dock + bonded" },
      { city: "Singapore", size: "340,000 sq ft", type: "Multi-client + FTZ" },
      { city: "Mumbai, IN", size: "290,000 sq ft", type: "Multi-client" },
      { city: "Tokyo, JP", size: "240,000 sq ft", type: "Multi-client" },
      { city: "Sydney, AU", size: "220,000 sq ft", type: "Multi-client" },
    ],
    distributionCenters: [
      { city: "Hong Kong", throughput: "260k parcels/day" },
      { city: "Bangkok, TH", throughput: "180k parcels/day" },
      { city: "Melbourne, AU", throughput: "95k parcels/day" },
    ],
    deliveryTimes: [
      { zone: "Intra-city", transit: "0-1 day" },
      { zone: "Intra-country", transit: "1-3 days" },
      { zone: "Intra-region", transit: "2-5 days" },
      { zone: "ANZ <> SEA", transit: "3-5 days" },
    ],
    services: ["Road Freight", "Air Freight", "Ocean Freight", "Warehousing", "Last-Mile Delivery", "Customs Brokerage"],
    cities: ["Shanghai", "Beijing", "Shenzhen", "Hong Kong", "Singapore", "Bangkok", "Kuala Lumpur", "Jakarta", "Manila", "Mumbai", "Delhi", "Tokyo", "Osaka", "Seoul", "Sydney", "Melbourne"],
  },
  {
    slug: "africa",
    name: "Africa",
    summary: "Sub-Saharan & North Africa coverage.",
    description: "Growing presence across Africa with hubs in Johannesburg, Nairobi, Lagos, Cairo, and Casablanca.",
    image: images.africa,
    stats: { warehouses: 10, distributionCenters: 4, cities: 24, staff: 950 },
    warehouses: [
      { city: "Johannesburg, ZA", size: "240,000 sq ft", type: "Multi-client + bonded" },
      { city: "Nairobi, KE", size: "180,000 sq ft", type: "Multi-client" },
      { city: "Lagos, NG", size: "160,000 sq ft", type: "Bonded" },
      { city: "Cairo, EG", size: "150,000 sq ft", type: "Multi-client" },
      { city: "Casablanca, MA", size: "130,000 sq ft", type: "Multi-client" },
    ],
    distributionCenters: [
      { city: "Durban, ZA", throughput: "60k parcels/day" },
      { city: "Accra, GH", throughput: "30k parcels/day" },
    ],
    deliveryTimes: [
      { zone: "Intra-city", transit: "1-2 days" },
      { zone: "Intra-country", transit: "2-5 days" },
      { zone: "Cross-border", transit: "4-8 days" },
    ],
    services: ["Road Freight", "Ocean Freight", "Warehousing", "Customs Brokerage"],
    cities: ["Johannesburg", "Cape Town", "Durban", "Nairobi", "Mombasa", "Lagos", "Abuja", "Accra", "Cairo", "Alexandria", "Casablanca", "Tunis"],
  },
];

export const getRegion = (slug: string) => regions.find((r) => r.slug === slug);

export const coverageAggregate = {
  warehouses: regions.reduce((s, r) => s + r.stats.warehouses, 0),
  distributionCenters: regions.reduce((s, r) => s + r.stats.distributionCenters, 0),
  cities: regions.reduce((s, r) => s + r.stats.cities, 0),
  staff: regions.reduce((s, r) => s + r.stats.staff, 0),
  countries: 80,
};
