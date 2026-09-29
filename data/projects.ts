export interface Project {
  name: string;
  tagline: string;
  /** Short "why it matters" note shown in the detail modal. */
  craft: string;
  description: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Fruit & Vegetable Carving",
    tagline: "Live event showpieces",
    craft:
      "Guest events call for a centrepiece that carries the room. Carving is the craft I use to give an occasion a visual signature before the first course is served.",
    description:
      "Intricate fruit and vegetable carvings and professional plate decorations executed for guest events at a luxury resort, adding artistic flair to the table.",
    image: "/creations/carving.jpg",
  },
  {
    name: "Advanced Culinary Plating",
    tagline: "Fine-dining presentation",
    craft:
      "A dish has to read correctly before it is tasted. Plating is where preparation, temperature and brand standards converge on the pass.",
    description:
      "Consistently producing dishes that hold strict brand standards for taste, texture and visual presentation across service.",
    image: "/creations/plating.jpg",
  },
  {
    name: "Large-Scale Banquet Production",
    tagline: "Corporate banquets & events",
    craft:
      "Banquets are a production problem before they are a service problem. Scaling quality across hundreds of covers comes down to prep lists and mise en place held to standard.",
    description:
      "Producing premium multi-cuisine dishes for large corporate banquets and live buffet stations, with hygiene and equipment routines to match the volume.",
    image: "/creations/banquet.jpg",
  },
  {
    name: "Garde Manger & Cold Kitchen",
    tagline: "Cold section production",
    craft:
      "The cold section sets the tone for the meal. Freshness, precise preparation and disciplined storage protocols are the whole job.",
    description:
      "Running the cold kitchen with exacting mise en place, from fresh ingredient preparation through to section-ready service.",
    image: "/creations/prep.jpg",
  },
];
