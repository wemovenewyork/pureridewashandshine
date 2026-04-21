"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, List, X, User } from "@phosphor-icons/react";
import { useCartStore } from "@/store/cartStore";
import CartoonButton from "./ui/CartoonButton";

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
      className="sticky top-0 z-50 bg-white border-b-[3px] border-pure-outline shadow-[0_4px_0_0_#111827]"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Pure Ride Wash & Shine home">
            <div
              className="relative"
              style={{ filter: "drop-shadow(2px 2px 0 #111827)" }}
            >
              <Image
                src="/pure-ride-logo.svg"
                alt="Pure Ride Wash & Shine"
                width={80}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-cartoon text-sm uppercase tracking-wider px-4 py-2 text-pure-outline hover:bg-pure-yellow border-[2px] border-transparent hover:border-pure-outline transition-all duration-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <CartoonButton
              variant="white"
              size="sm"
              aria-label="Sign in to your account"
              className="hidden md:flex items-center gap-2"
            >
              <User size={16} weight="bold" aria-hidden="true" />
              Sign In
            </CartoonButton>

            {/* Cart button */}
            <button
              onClick={openCart}
              aria-label={`Shopping cart, ${count} item${count !== 1 ? "s" : ""}`}
              className="relative flex items-center justify-center w-11 h-11 border-[3px] border-pure-outline bg-pure-blue text-white shadow-cartoon hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
            >
              <ShoppingCart size={22} weight="bold" aria-hidden="true" />
              {count > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-pure-red text-white text-xs font-cartoon w-5 h-5 flex items-center justify-center border-[2px] border-pure-outline"
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
              className="md:hidden flex items-center justify-center w-11 h-11 border-[3px] border-pure-outline bg-white shadow-cartoon hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
            >
              {menuOpen ? (
                <X size={22} weight="bold" aria-hidden="true" />
              ) : (
                <List size={22} weight="bold" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t-[3px] border-pure-outline bg-white">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-cartoon text-sm uppercase tracking-wider px-4 py-3 text-pure-outline border-[2px] border-pure-outline hover:bg-pure-yellow transition-colors duration-100 block text-center"
              >
                {link.label}
              </Link>
            ))}
            <CartoonButton
              variant="dark"
              size="sm"
              aria-label="Sign in to your account"
              className="w-full flex items-center justify-center gap-2 mt-2"
            >
              <User size={16} weight="bold" aria-hidden="true" />
              Sign In
            </CartoonButton>
          </div>
        </div>
      )}
    </nav>
  );
}
