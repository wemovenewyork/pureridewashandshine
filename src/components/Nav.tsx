"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, List, X, User } from "@phosphor-icons/react";
import { useCartStore } from "@/store/cartStore";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/bundles", label: "Bundles" },
  { href: "/how-to", label: "How-To" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, openCart } = useCartStore();
  const count = itemCount();

  return (
    <nav
      className="sticky top-0 z-50 bg-pure-night border-b-[3px] border-pure-outline"
      style={{ boxShadow: "0 4px 0 0 #111827, 0 6px 24px rgba(0,0,0,0.6)" }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Pure Ride Wash & Shine home">
            <Image
              src="/pure-ride-logo.png"
              alt="Pure Ride Wash & Shine"
              width={80}
              height={80}
              className="h-16 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 8px rgba(0,168,255,0.5))" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-cartoon text-sm uppercase tracking-widest px-5 py-2 text-white/70 hover:text-white hover:bg-white/5 border-[2px] border-transparent hover:border-white/10 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Sign in to your account"
              className="hidden md:flex items-center gap-2 font-cartoon text-xs uppercase tracking-widest px-4 py-2 text-white/60 hover:text-white border-[2px] border-white/20 hover:border-white/40 transition-all duration-150"
            >
              <User size={15} weight="bold" aria-hidden="true" />
              Sign In
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              aria-label={`Shopping cart, ${count} item${count !== 1 ? "s" : ""}`}
              className="relative flex items-center justify-center w-10 h-10 btn-premium-blue text-white"
            >
              <ShoppingCart size={20} weight="bold" aria-hidden="true" />
              {count > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-pure-red text-white text-[10px] font-cartoon w-5 h-5 flex items-center justify-center border-[2px] border-pure-outline"
                  aria-live="polite"
                >
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden flex items-center justify-center w-10 h-10 border-[2px] border-white/20 text-white hover:border-pure-blue hover:text-pure-blue transition-all duration-150"
            >
              {menuOpen ? <X size={20} weight="bold" aria-hidden="true" /> : <List size={20} weight="bold" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="accent-line" aria-hidden="true" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-pure-midnight border-t-[2px] border-white/10">
          <div className="px-4 py-5 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-cartoon text-sm uppercase tracking-widest px-4 py-3 text-white border-[2px] border-white/10 hover:border-pure-blue hover:text-pure-blue transition-all duration-150 block text-center"
              >
                {link.label}
              </Link>
            ))}
            <button
              className="w-full mt-2 font-cartoon text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 text-white/60 border-[2px] border-white/20"
              aria-label="Sign in to your account"
            >
              <User size={14} weight="bold" aria-hidden="true" />
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
