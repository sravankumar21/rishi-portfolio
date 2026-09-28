export interface Education {
  institution: string;
  shortInstitution: string;
  degree: string;
  field?: string;
  period: string;
  /** Optional right-hand pill, e.g. a grade. Omit when there's nothing to show. */
  score?: string;
  /** Optional pill above the title. */
  badge?: string;
  /** Renders the "Completed" treatment (emerald + check) instead of neutral. */
  completed?: boolean;
  highlights: string[];
}

export const education: Education[] = [
  {
    institution: "Open University Malaysia (OUM) · Institute of Professional Development",
    shortInstitution: "OUM · Institute of Professional Development",
    degree: "Executive Diploma",
    field: "Hotel Management & Catering Science",
    period: "Completed",
    badge: "Completed",
    completed: true,
    highlights: [
      "Professional qualification covering hotel operations, food production and catering science",
      "Practical grounding in kitchen management, beverage service and front-office hospitality",
      "Recognised pathway into senior culinary and food-and-beverage management roles",
    ],
  },
];
