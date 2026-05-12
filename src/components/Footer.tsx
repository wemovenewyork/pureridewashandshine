import Link from "next/link";
import Image from "next/image";
import { Envelope } from "@phosphor-icons/react/dist/ssr";

const shopLinks = [
  { href: "/products", label: "All Products" },
  { href: "/bundles", label: "Bundles" },
  { href: "/products?cat=soap", label: "Blue Soap" },
  { href: "/products?cat=ceramic", label: "Ceramic Spray" },
  { href: "/products?cat=glass", label: "Glass Cleaner" },
  { href: "/products?cat=interior", label: "Thick Dressing" },
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

export default function Footer() {
  return (
    <footer
      className="border-t-[4px] border-pure-outline"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #050d1a 100%)" }}
      aria-label="Site footer"
    >
      {/* Top accent */}
      <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #ff3333, #00a8ff, #ffcc00)" }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Logo + tagline + social */}
          <div className="flex flex-col gap-6">
            <div
              className="border-[3px] border-pure-outline shadow-cartoon inline-flex items-center justify-center p-3 w-fit"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <Image
                src="/pure-ride-logo.png"
                alt="Pure Ride Wash & Shine"
                width={64}
                height={64}
                className="h-14 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 10px rgba(0,168,255,0.4))" }}
              />
            </div>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs">
              Bold formulas. Bold results. Pure Ride Wash &amp; Shine — car care built for riders who don&apos;t compromise.
            </p>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-cartoon text-xs text-pure-blue uppercase tracking-[0.2em] mb-5">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/40 hover:text-white transition-colors duration-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-cartoon text-xs text-pure-blue uppercase tracking-[0.2em] mb-5">Company</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/40 hover:text-white transition-colors duration-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="font-cartoon text-xs text-pure-blue uppercase tracking-[0.2em] mb-5">Support</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/40 hover:text-white transition-colors duration-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a href="mailto:hello@pureridewash.com" className="flex items-center gap-2 font-body text-sm text-white/40 hover:text-pure-blue transition-colors duration-100" aria-label="Email Pure Ride">
                <Envelope size={13} aria-hidden="true" />
                hello@pureridewash.com
              </a>
              <a href="mailto:support@pureridewash.com" className="flex items-center gap-2 font-body text-xs text-white/30 hover:text-pure-blue transition-colors duration-100" aria-label="Email Pure Ride support">
                <Envelope size={12} aria-hidden="true" />
                support@pureridewash.com
              </a>
              <a href="mailto:orders@pureridewash.com" className="flex items-center gap-2 font-body text-xs text-white/30 hover:text-pure-blue transition-colors duration-100" aria-label="Email Pure Ride orders">
                <Envelope size={12} aria-hidden="true" />
                orders@pureridewash.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25">
            © {new Date().getFullYear()} Pure Ride Wash &amp; Shine. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/20">
            Designed by{" "}
            <a
              href="https://instagram.com/wemovenewyork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-pure-blue transition-colors"
            >
              @wemovenewyork
            </a>
            <span className="mx-2 text-white/10" aria-hidden="true">·</span>
            Powered by{" "}
            <a
              href="https://futreeng.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-pure-blue transition-colors"
            >
              FutreEng
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
