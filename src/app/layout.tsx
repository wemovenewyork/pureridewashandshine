import type { Metadata } from "next";
import { Barlow_Condensed, Oswald, Chakra_Petch } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const oswald = Oswald({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pure Ride Wash & Shine | Premium Car Care Products",
  description:
    "Bold, esports-inspired car care products. Premium foam soap, ceramic coatings, glass cleaner, wheel degreaser and more. Pure Ride — ride clean, ride proud.",
  keywords: ["car wash", "car detailing", "ceramic coating", "foam soap", "pure ride"],
  openGraph: {
    title: "Pure Ride Wash & Shine",
    description: "Premium car care products with bold cartoon energy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${oswald.variable} ${chakraPetch.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
