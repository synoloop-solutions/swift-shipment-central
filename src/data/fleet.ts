import { images } from "./images";

export type FleetVehicle = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  capacity: string;
  payload: string;
  coverageArea: string;
  temperatureControl: string;
  deliveryType: string;
  fuelType: string;
  features: string[];
};

export const fleet: FleetVehicle[] = [
  {
    slug: "semi-trailer",
    name: "Semi-Trailer (53 ft)",
    category: "Heavy Truck",
    summary: "Long-haul tractor and 53 ft trailer for FTL.",
    description: "Our flagship long-haul unit for full-truckload moves across continents.",
    image: images.semiTruck,
    capacity: "3,200 cu ft",
    payload: "22,000 kg",
    coverageArea: "Long-haul intercity",
    temperatureControl: "Ambient",
    deliveryType: "FTL",
    fuelType: "Diesel / LNG",
    features: ["GPS + ELD", "Air-ride suspension", "53 ft dry van", "Tail-lift optional"],
  },
  {
    slug: "reefer-trailer",
    name: "Refrigerated Trailer",
    category: "Cold Chain",
    summary: "Multi-temperature reefer for –25 °C to +25 °C.",
    description: "GDP-compliant reefer trailer with dual-zone capability and IoT temperature logging.",
    image: images.reeferTruck,
    capacity: "2,900 cu ft",
    payload: "20,500 kg",
    coverageArea: "Long-haul intercity",
    temperatureControl: "–25 °C to +25 °C, dual-zone",
    deliveryType: "FTL / dedicated",
    fuelType: "Diesel + electric reefer",
    features: ["IoT temp logging", "Dual-zone partitions", "GDP-validated", "Backup generator"],
  },
  {
    slug: "cargo-van",
    name: "Cargo Van",
    category: "Last Mile",
    summary: "Urban delivery van for parcels and B2B drops.",
    description: "Agile urban delivery vehicle for parcel and B2B last-mile work.",
    image: images.cargoVan,
    capacity: "400 cu ft",
    payload: "1,200 kg",
    coverageArea: "Urban & regional",
    temperatureControl: "Ambient (optional chiller)",
    deliveryType: "LTL / last-mile",
    fuelType: "Diesel / Electric",
    features: ["Driver app", "Curbside loading", "Telematics", "Optional chiller"],
  },
  {
    slug: "ev-delivery",
    name: "Electric Delivery Vehicle",
    category: "Sustainable",
    summary: "Zero-emission urban delivery EV.",
    description: "Battery-electric delivery vehicle for low-emission zones and sustainable last-mile.",
    image: images.vanCargo,
    capacity: "350 cu ft",
    payload: "1,000 kg",
    coverageArea: "Urban (low-emission zones)",
    temperatureControl: "Ambient",
    deliveryType: "Last-mile",
    fuelType: "100% Electric",
    features: ["Zero tailpipe emissions", "250 km range", "Quiet operation", "ULEZ compliant"],
  },
  {
    slug: "flatbed",
    name: "Flatbed / Oversize",
    category: "Specialized",
    summary: "Flatbed and lowboy for oversize and project cargo.",
    description: "Flatbed, step-deck, and lowboy trailers for heavy and oversize project moves.",
    image: images.flatbed,
    capacity: "Up to 48 ft deck",
    payload: "27,000 kg",
    coverageArea: "Intercity & cross-border",
    temperatureControl: "Open / ambient",
    deliveryType: "FTL / project",
    fuelType: "Diesel",
    features: ["Step-deck / lowboy options", "Permit & escort coordination", "Heavy lift", "Tarpaulin & strapping"],
  },
];

export const getFleet = (slug: string) => fleet.find((f) => f.slug === slug);
