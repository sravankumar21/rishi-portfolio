export const profile = {
  name: "Malleboina Rishik",
  firstName: "Rishik",
  middleName: "",
  lastName: "Malleboina",
  initials: "RM",
  role: "Professional Commis Chef",
  photo: "/profile/rishik.jpg",
  location: "Sharjah, UAE",
  email: "rishikmalleboina@gmail.com",
  phone: "+91 9603981904",
  tagline:
    "Commis Chef with luxury 5-star and international resort kitchen experience - hot and cold station production, fine-dining plating, fruit and vegetable carving, and large-scale banquet execution under HACCP standards.",
  heroIntro:
    "I produce high-quality cuisine across hot and cold stations for luxury hotel and resort guests - from garde manger and fine-dining plating to intricate fruit and vegetable carving for large events.",
  intro:
    "I'm Malleboina Rishik - a Professional Commis Chef currently working at Al Badayer Retreat by Sharjah Collection in Sharjah, UAE. My career spans luxury 5-star hotel dining, international resort service and multi-departmental hospitality training. I specialise in cold kitchen production, precise mise en place, high-volume banquet prep, and food safety compliance with HACCP protocols. Outside the kitchen I hold an Executive Diploma in Hotel Management & Catering Science from Open University Malaysia.",
  primaryCta: "View my work",
  secondaryCta: "Get in touch",
  resumeUrl: "/resume.pdf",
} as const;

export type Profile = typeof profile;
