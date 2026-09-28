export interface Education {
  institution: string;
  shortInstitution: string;
  degree: string;
  field?: string;
  period: string;
  score: string;
  /** Optional pill on the card, e.g. "Honors", "In progress". */
  badge?: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    institution: "Open University Malaysia (OUM) · Institute of Professional Development",
    shortInstitution: "OUM · Institute of Professional Development",
    degree: "Executive Diploma",
    field: "Hotel Management & Catering Science",
    period: "— Present",
    score: "In progress",
    badge: "Ongoing",
    highlights: [
      "Professional qualification covering hotel operations, food production and catering science",
      "Practical grounding in kitchen management, beverage service and front-office hospitality",
      "Recognised pathway into senior culinary and food-and-beverage management roles",
    ],
  },
];
