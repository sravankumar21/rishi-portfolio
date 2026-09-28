export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Al Badayer Retreat by Sharjah Collection",
    role: "Commis Chef",
    period: "Feb 2025 — Present",
    location: "Sharjah, UAE",
    type: "Full-time",
    current: true,
    summary:
      "Producing high-quality cuisine for luxury resort guests across hot and cold stations, while managing specialised food storage, stock control and HACCP-compliant kitchen procedures.",
    highlights: [
      "Prepare and execute high-quality culinary dishes, consistently maintaining strict brand standards for taste, texture and visual presentation",
      "Collaborate with the Chef de Partie and senior culinary leaders to streamline live station setups, kitchen prep lists and plating workflows",
      "Manage specialised food storage protocols with diligent labelling and FIFO procedures to minimise ingredient waste",
      "Ensure unconditional compliance with local and international food hygiene guidelines in alignment with HACCP regulations",
      "Execute intricate fruit and vegetable carvings and professional plate decorations to add artistic flair to guest events",
      "Monitor inventory levels proactively, tracking daily stock movements and coordinating with suppliers for timely replenishment",
    ],
    tech: [
      "Garde Manger",
      "Fine Dining Plating",
      "Fruit & Vegetable Carving",
      "Banquet Production",
      "HACCP",
      "FIFO Stock Rotation",
      "Inventory Control",
      "Chiller Management",
    ],
  },
  {
    company: "The Park 5-Star Hotel",
    role: "Commis Chef",
    period: "Sept 2022 — Dec 2023",
    location: "Chennai, India",
    type: "Full-time",
    summary:
      "Prepared, cooked and presented premium multi-cuisine dishes for standard restaurant dining and large corporate banquets, owning food cost control and sanitation routines.",
    highlights: [
      "Prepared, cooked and presented premium multi-cuisine dishes for restaurant dining and large corporate banquets",
      "Monitored daily food stock levels and optimised procurement to support internal kitchen food cost control metrics",
      "Executed routine kitchen procedures including daily temperature logs, blast chiller checks and structured item labelling",
      "Maintained spotless culinary hygiene, station deep cleaning and strict adherence to uniform and sanitation protocols",
      "Identified operational kitchen hazards immediately, ensuring continuous preventative maintenance and equipment safety",
    ],
    tech: [
      "Multi-Cuisine Production",
      "Banquet Service",
      "Food Cost Control",
      "Temperature Logging",
      "Blast Chiller Checks",
      "Deep Cleaning",
      "Equipment Safety",
    ],
  },
  {
    company: "Country Inn & Suites by Radisson",
    role: "Hospitality & Culinary Trainee",
    period: "Jan 2021 — Apr 2021",
    location: "Zirakpur, Punjab, India",
    type: "Training Programme",
    summary:
      "Multi-departmental hospitality training with a primary specialisation in F&B Production, rotating across kitchen, service, front office and housekeeping.",
    highlights: [
      "Gained immersive multi-departmental training with a primary specialisation in F&B Production, managing live buffet stations and banquet prep",
      "Assisted senior kitchen staff in processing bulk raw materials and ingredient sorting while adhering to basic sanitation codes",
      "Rotated through F&B Service, Front Office and Housekeeping to build a comprehensive foundation in luxury hotel operations",
    ],
    tech: [
      "F&B Production",
      "Live Buffet Stations",
      "Banquet Prep",
      "Bulk Ingredient Processing",
      "F&B Service",
      "Front Office",
      "Housekeeping",
    ],
  },
];
