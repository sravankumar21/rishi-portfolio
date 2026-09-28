export interface Education {
  institution: string;
  shortInstitution: string;
  degree: string;
  field?: string;
  /** Optional right-hand meta, e.g. "2019 — 2021". Omit when there's nothing to show. */
  period?: string;
  /** Optional grade pill. Omit when there's nothing to show. */
  score?: string;
  /** Optional pill above the title. */
  badge?: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    institution: "Open University Malaysia (OUM) · Institute of Professional Development",
    shortInstitution: "OUM · Institute of Professional Development",
    degree: "Executive Diploma",
    field: "Hotel Management & Catering Science",
    highlights: [
      "Professional qualification covering hotel operations, food production and catering science",
      "Practical grounding in kitchen management, beverage service and front-office hospitality",
      "Recognised pathway into senior culinary and food-and-beverage management roles",
    ],
  },
];
