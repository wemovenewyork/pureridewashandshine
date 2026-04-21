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
  metadataBase: new URL("https://pure-ride-wash.vercel.app"),
  title: "Pure Ride Wash & Shine | Premium Car Care Products",
  description:
    "Premium car care for riders who don't compromise. Bold formulas, real results. Ride clean. Ride proud.",
  keywords: ["car wash", "car detailing", "ceramic coating", "foam soap", "pure ride", "car care"],
  openGraph: {
    title: "Pure Ride Wash & Shine",
    description: "Premium car care for riders who don't compromise. Ride clean. Ride proud.",
    url: "https://pure-ride-wash.vercel.app",
    siteName: "Pure Ride Wash & Shine",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pure Ride Wash & Shine" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Ride Wash & Shine",
    description: "Premium car care. Ride clean. Ride proud.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pure Ride Wash & Shine",
  url: "https://pure-ride-wash.vercel.app",
  logo: "https://pure-ride-wash.vercel.app/pure-ride-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@pureridewash.com",
    contactType: "customer service",
  },
  sameAs: [] as string[],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${barlowCondensed.variable} ${oswald.variable} ${chakraPetch.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
