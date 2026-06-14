import { images } from "./images";

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  highlights: string[];
};

export const industries: Industry[] = [
  { slug: "retail-ecommerce", name: "Retail & eCommerce", summary: "Fast, accurate fulfillment for DTC and marketplaces.",
    description: "We support the largest retailers and fastest-growing DTC brands with peak-capacity fulfillment, returns, and last-mile delivery.",
    image: images.case10, highlights: ["Peak-season scalability", "Marketplace integrations", "Returns processing", "Same-day urban delivery"] },
  { slug: "automotive", name: "Automotive", summary: "JIT & sequenced delivery for OEMs and Tier-1s.",
    description: "Just-in-time and sequenced delivery for production lines, inbound consolidation, and aftermarket parts distribution.",
    image: images.case2, highlights: ["JIT/JIS sequenced delivery", "Inbound consolidation", "Aftermarket distribution", "MMOG/LE compliance"] },
  { slug: "healthcare-pharma", name: "Healthcare & Pharma", summary: "GDP-validated cold chain for life sciences.",
    description: "Temperature-controlled, validated logistics for pharmaceuticals, biologics, and medical devices.",
    image: images.case5, highlights: ["GDP-validated lanes", "Clinical trial logistics", "Medical device distribution", "Pharma-grade warehousing"] },
  { slug: "manufacturing-industrial", name: "Manufacturing & Industrial", summary: "Heavy, oversize, and project cargo.",
    description: "Inbound, outbound, and project cargo for manufacturers — including breakbulk and oversize moves.",
    image: images.case12, highlights: ["Project cargo", "Breakbulk & RoRo", "Inbound consolidation", "Spare-parts distribution"] },
  { slug: "food-beverage", name: "Food & Beverage", summary: "Ambient & temperature-controlled food logistics.",
    description: "From farm to retailer — ambient, chilled, and frozen logistics with HACCP-compliant warehouses.",
    image: images.case9, highlights: ["HACCP-compliant facilities", "Multi-temperature fleet", "Fresh produce export", "Retail consolidation"] },
  { slug: "technology", name: "Technology", summary: "High-value electronics with secure handling.",
    description: "Secure, insured, and high-value logistics for consumer electronics, data center, and semiconductor cargo.",
    image: images.case7, highlights: ["High-value secure transport", "Data center logistics", "Reverse logistics", "Configuration services"] },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
