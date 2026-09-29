export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

/**
 * Rishik has no GitHub or LinkedIn profile, so only Instagram is listed.
 * Add further entries below and they appear automatically in the hero
 * icon row, the contact details list and the footer. Labels are matched
 * against the icon map in components/home/Hero.tsx - "Instagram" renders
 * an icon, anything else renders a text pill only.
 */
export const socials: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/r_i_s_h_i___m_u_d_h_i_r_a_j",
    handle: "@r_i_s_h_i___m_u_d_h_i_r_a_j",
  },
];
