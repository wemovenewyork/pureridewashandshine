import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  TwitterLogo,
  Envelope,
  Phone,
} from "@phosphor-icons/react/dist/ssr";

const shopLinks = [
  { href: "/products", label: "All Products" },
  { href: "/bundles", label: "Bundles" },
  { href: "/products?cat=soap", label: "Wash & Foam" },
  { href: "/products?cat=ceramic", label: "Ceramic Coatings" },
  { href: "/products?cat=wheel", label: "Wheel Care" },
  { href: "/products?cat=interior", label: "Interior Detail" },
];

const infoLinks = [
  { href: "/how-to", label: "How-To Guides" },
  { href: "/about", label: "Our Story" },
  { href: "/about#careers", label: "Careers" },
  { href: "/about#press", label: "Press" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/returns", label: "Returns" },
];

const socialLinks = [
  { href: "#", label: "Instagram", Icon: InstagramLogo },
  { href: "#", label: "TikTok", Icon: TiktokLogo },
  { href: "#", label: "YouTube", Icon: YoutubeLogo },
  { href: "#", label: "Twitter / X", Icon: TwitterLogo },
];

export default function Footer() {
  return (
    <footer
      className="bg-pure-darkblue border-t-[4px] border-pure-outline"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Logo + social */}
          <div className="flex flex-col gap-6">
            {/* Logo in white card */}
            <div className="bg-white border-[3px] border-pure-outline shadow-cartoon inline-flex items-center justify-center p-3 w-fit">
              <Image
                src="/pure-ride-logo.png"
                alt="Pure Ride Wash & Shine"
                width={64}
                height={64}
                className="h-16 w-auto object-contain"
                style={{ filter: "drop-shadow(2px 2px 0 #111827)" }}
              />
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs">
              Bold formulas. Bold results. Pure Ride Wash & Shine — the car care
              brand built for riders who don&apos;t compromise.
            </p>

            {/* Social buttons */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Follow Pure Ride on ${label}`}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 border-[2px] border-white/30 text-white hover:bg-pure-blue hover:border-pure-blue transition-colors duration-100"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-cartoon text-sm text-pure-yellow uppercase tracking-widest mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Info */}
          <div>
            <h3 className="font-cartoon text-sm text-pure-yellow uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="font-cartoon text-sm text-pure-yellow uppercase tracking-widest mb-5">
              Support
            </h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a
                href="mailto:hello@pureridewash.com"
                className="flex items-center gap-2 font-body text-sm text-white/70 hover:text-pure-blue transition-colors duration-100"
                aria-label="Email Pure Ride support"
              >
                <Envelope size={14} aria-hidden="true" />
                hello@pureridewash.com
              </a>
              <a
                href="tel:+18005557473"
                className="flex items-center gap-2 font-body text-sm text-white/70 hover:text-pure-blue transition-colors duration-100"
                aria-label="Call Pure Ride support"
              >
                <Phone size={14} aria-hidden="true" />
                1-800-555-RIDE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-[2px] border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Pure Ride Wash & Shine. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Built by FutreEng • Crafted with bold energy
          </p>
        </div>
      </div>
    </footer>
  );
}
