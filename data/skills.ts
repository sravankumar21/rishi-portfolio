export interface Skill {
  name: string;
  featured?: boolean;
  note?: string;
}

export interface SkillCategory {
  title: string;
  blurb: string;
  skills: Skill[];
}

/**
 * Core expertise follows my resume's Culinary Expertise and Kitchen Control
 * & Safety groups. `featured` marks the capabilities I work with daily.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Culinary Expertise",
    blurb: "Production and presentation across stations",
    skills: [
      { name: "Garde Manger & Cold Kitchen", featured: true },
      { name: "Advanced Culinary Plating", featured: true },
      { name: "Fruit & Vegetable Carving", featured: true },
      { name: "High-Volume Banquet Prep", featured: true },
      { name: "Multi-Cuisine Production" },
      { name: "Mise en Place" },
      { name: "Live Buffet Stations" },
      { name: "Menu & Special Requests" },
    ],
  },
  {
    title: "Kitchen Control & Safety",
    blurb: "The discipline behind every service",
    skills: [
      { name: "HACCP & Food Safety Logs", featured: true },
      { name: "FIFO & Stock Rotation" },
      { name: "Inventory & Store Control", featured: true },
      { name: "Chiller & Freezer Control" },
      { name: "Kitchen Equipment Operation" },
      { name: "Temperature Logging" },
      { name: "Deep Cleaning Protocols" },
      { name: "Preventative Maintenance" },
    ],
  },
  {
    title: "Service & Presentation",
    blurb: "How the plate reaches the guest",
    skills: [
      { name: "Fine-Dining Standards" },
      { name: "Banquet Plating" },
      { name: "Garnish & Plate Decoration" },
      { name: "Food Cost Control" },
      { name: "Waste Minimisation" },
    ],
  },
  {
    title: "Kitchen Operations",
    blurb: "Working inside a live brigade",
    skills: [
      { name: "Prep List Execution" },
      { name: "Live Station Setup" },
      { name: "Chef de Partie Liaison" },
      { name: "Bulk Ingredient Processing" },
      { name: "Replenishment & Supplier Liaison" },
    ],
  },
];
