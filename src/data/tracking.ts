export type TrackingEvent = {
  date: string;
  time: string;
  location: string;
  status: string;
  description: string;
};

export type Shipment = {
  id: string;
  status: "In Transit" | "Delivered" | "Out for Delivery" | "At Origin" | "Customs Clearance" | "Exception";
  origin: string;
  destination: string;
  currentLocation: string;
  estimatedDelivery: string;
  service: string;
  weight: string;
  pieces: number;
  timeline: TrackingEvent[];
};

export const shipments: Record<string, Shipment> = {
  SW123456789: {
    id: "SW123456789", status: "In Transit",
    origin: "Shanghai, CN", destination: "Rotterdam, NL",
    currentLocation: "Singapore (transhipment)",
    estimatedDelivery: "2026-06-21", service: "Ocean FCL", weight: "18,450 kg", pieces: 1,
    timeline: [
      { date: "2026-05-28", time: "08:14", location: "Shanghai, CN", status: "Received", description: "Cargo received at origin warehouse" },
      { date: "2026-05-30", time: "16:42", location: "Shanghai, CN", status: "Container Loaded", description: "Container stuffed and sealed" },
      { date: "2026-06-02", time: "11:05", location: "Shanghai Port, CN", status: "Departed Origin", description: "Vessel departed Shanghai" },
      { date: "2026-06-10", time: "07:30", location: "Singapore", status: "Transhipment", description: "Container transferred to onward vessel" },
      { date: "2026-06-14", time: "09:12", location: "Indian Ocean", status: "In Transit", description: "Vessel in transit, ETA Rotterdam 2026-06-21" },
    ],
  },
  SW987654321: {
    id: "SW987654321", status: "Out for Delivery",
    origin: "Frankfurt, DE", destination: "Paris, FR",
    currentLocation: "Paris, FR — out for delivery",
    estimatedDelivery: "2026-06-14", service: "Road LTL", weight: "240 kg", pieces: 3,
    timeline: [
      { date: "2026-06-12", time: "09:00", location: "Frankfurt, DE", status: "Picked Up", description: "Picked up from shipper" },
      { date: "2026-06-13", time: "06:30", location: "Frankfurt Hub", status: "Departed Hub", description: "Departed Frankfurt for Paris" },
      { date: "2026-06-14", time: "05:45", location: "Paris, FR", status: "Arrived", description: "Arrived at Paris destination hub" },
      { date: "2026-06-14", time: "07:20", location: "Paris, FR", status: "Out for Delivery", description: "Out for delivery with driver" },
    ],
  },
  SW555000111: {
    id: "SW555000111", status: "Delivered",
    origin: "Los Angeles, CA", destination: "New York, NY",
    currentLocation: "New York, NY",
    estimatedDelivery: "2026-06-09", service: "Road FTL", weight: "12,800 kg", pieces: 1,
    timeline: [
      { date: "2026-06-04", time: "07:00", location: "Los Angeles, CA", status: "Picked Up", description: "Picked up from shipper" },
      { date: "2026-06-06", time: "14:30", location: "Denver, CO", status: "In Transit", description: "Refueling stop" },
      { date: "2026-06-08", time: "20:10", location: "Cleveland, OH", status: "In Transit", description: "Driver swap" },
      { date: "2026-06-09", time: "11:42", location: "New York, NY", status: "Delivered", description: "Delivered, signed for by J. Carter" },
    ],
  },
  SW777222888: {
    id: "SW777222888", status: "Customs Clearance",
    origin: "Mumbai, IN", destination: "London, UK",
    currentLocation: "London Heathrow (LHR)",
    estimatedDelivery: "2026-06-16", service: "Air Freight", weight: "620 kg", pieces: 14,
    timeline: [
      { date: "2026-06-12", time: "21:00", location: "Mumbai, IN", status: "Received", description: "Received at BOM airport" },
      { date: "2026-06-13", time: "02:30", location: "Mumbai, IN", status: "Departed", description: "Flight departed BOM" },
      { date: "2026-06-13", time: "09:45", location: "London, UK", status: "Arrived", description: "Arrived LHR" },
      { date: "2026-06-13", time: "13:10", location: "London, UK", status: "Customs Clearance", description: "Entry filed, awaiting release" },
    ],
  },
  SW111333555: {
    id: "SW111333555", status: "At Origin",
    origin: "Sydney, AU", destination: "Auckland, NZ",
    currentLocation: "Sydney, AU",
    estimatedDelivery: "2026-06-19", service: "Ocean LCL", weight: "1,250 kg", pieces: 6,
    timeline: [
      { date: "2026-06-14", time: "08:00", location: "Sydney, AU", status: "Received", description: "Received at consolidation warehouse" },
    ],
  },
  SW222444666: {
    id: "SW222444666", status: "Exception",
    origin: "Lagos, NG", destination: "Cairo, EG",
    currentLocation: "Lagos, NG",
    estimatedDelivery: "2026-06-22", service: "Road Freight", weight: "3,400 kg", pieces: 8,
    timeline: [
      { date: "2026-06-11", time: "10:00", location: "Lagos, NG", status: "Picked Up", description: "Picked up from shipper" },
      { date: "2026-06-13", time: "14:00", location: "Lagos, NG", status: "Exception", description: "Document discrepancy — awaiting revised commercial invoice" },
    ],
  },
};

export const exampleTrackingIds = Object.keys(shipments);

export const lookupShipment = (id: string): Shipment | null => {
  const key = id.trim().toUpperCase();
  return shipments[key] ?? null;
};
