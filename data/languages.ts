export interface Language {
  name: string;
  proficiency: string;
  /** 0–100, used for the bar width. */
  level: number;
  featured?: boolean;
}

/** Spoken languages from my resume. */
export const languages: Language[] = [
  { name: "Telugu", proficiency: "Native Speaker", level: 100, featured: true },
  { name: "English", proficiency: "Professional Proficiency", level: 85, featured: true },
  { name: "Hindi", proficiency: "Professional Proficiency", level: 85, featured: true },
];
