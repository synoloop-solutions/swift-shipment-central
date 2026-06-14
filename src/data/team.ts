import { images } from "./images";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  { slug: "elena-marsh", name: "Elena Marsh", role: "Chief Executive Officer", department: "Executive", image: images.team1,
    bio: "Elena has 22 years in global logistics and previously led network operations for a Fortune 100 retailer." },
  { slug: "david-okoye", name: "David Okoye", role: "Chief Operating Officer", department: "Executive", image: images.team2,
    bio: "David leads our worldwide operations across 80 countries and is a Six Sigma master black belt." },
  { slug: "mira-tanaka", name: "Mira Tanaka", role: "Chief Technology Officer", department: "Executive", image: images.team3,
    bio: "Mira built our control-tower platform and previously led engineering at two logistics tech unicorns." },
  { slug: "sven-larsen", name: "Sven Larsen", role: "VP Ocean Freight", department: "Logistics", image: images.team4,
    bio: "30 years in liner shipping and NVOCC operations, based in Rotterdam." },
  { slug: "amelia-clarke", name: "Amelia Clarke", role: "VP Air Freight", department: "Logistics", image: images.team5,
    bio: "Amelia runs our air-freight desks worldwide and chairs our DG safety committee." },
  { slug: "carlos-mendez", name: "Carlos Mendez", role: "VP Road Freight", department: "Operations", image: images.team6,
    bio: "Carlos manages our 4,800-vehicle road fleet across the Americas and Europe." },
  { slug: "yara-haddad", name: "Yara Haddad", role: "VP Warehousing", department: "Operations", image: images.team7,
    bio: "Yara oversees our 85 warehouses and led the recent WMS modernization program." },
  { slug: "noah-kim", name: "Noah Kim", role: "Director Fleet Engineering", department: "Fleet", image: images.team8,
    bio: "Noah leads fleet engineering, EV transition, and our preventive-maintenance program." },
  { slug: "priya-rao", name: "Priya Rao", role: "Director Supply Chain Solutions", department: "Supply Chain", image: images.team9,
    bio: "Priya designs end-to-end solutions for our top customers across pharma, retail, and tech." },
  { slug: "lucas-fernandez", name: "Lucas Fernandez", role: "Director Customs & Compliance", department: "Supply Chain", image: images.team10,
    bio: "Lucas is a licensed customs broker in five jurisdictions and leads our AEO/C-TPAT program." },
];

export const getTeamMember = (slug: string) => team.find((t) => t.slug === slug);
