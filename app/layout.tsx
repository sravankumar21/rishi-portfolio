import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const baseUrl = "https://rishikmalleboina.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description:
    "Professional Commis Chef based in Sharjah, UAE, specialising in luxury 5-star hotel and resort kitchens, fine-dining plating, fruit and vegetable carving, banquet production and HACCP-compliant operations.",
  keywords: [
    profile.name,
    "Commis Chef",
    "Professional Chef",
    "Garde Manger",
    "Fine Dining Plating",
    "Fruit and Vegetable Carving",
    "Banquet Production",
    "HACCP",
    "Sharjah",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Luxury kitchen specialist with 5-star hotel experience. Expertise in cold kitchen production, fine-dining plating, carving and large-scale banquet execution under HACCP standards.",
    url: baseUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Luxury kitchen specialist with 5-star hotel experience. Expertise in cold kitchen production, fine-dining plating, carving and large-scale banquet execution under HACCP standards.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.dataset.theme='dark';}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <AmbientBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
