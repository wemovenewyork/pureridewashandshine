"use client";

import { useState } from "react";
import { PaperPlaneTilt, Check, Copy } from "@phosphor-icons/react";
import ScrollReveal from "./ui/ScrollReveal";
import { NEWSLETTER_DISCOUNT_CODE } from "@/lib/constants";

function addRipple(e: React.MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(NEWSLETTER_DISCOUNT_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API blocked; silent fall-through
    }
  };

  return (
    <section
      className="border-b-[3px] border-pure-outline py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050d1a 0%, #001844 100%)" }}
      aria-labelledby="newsletter-heading"
    >
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, #ff3333, #00a8ff, #ffcc00)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal animation="fadeUp">
          <div className="inline-flex items-center gap-2 border-[2px] border-pure-blue/40 px-4 py-1.5 mb-8"
            style={{ background: "rgba(0,168,255,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-pure-blue animate-pulse-sparkle" aria-hidden="true" />
            <span className="font-cartoon text-xs uppercase tracking-[0.2em] text-pure-blue">Join the Clean Crew</span>
          </div>

          <h2 id="newsletter-heading" className="font-display italic leading-none tracking-wide mb-4">
            <span className="block text-5xl md:text-6xl text-white">GET 10% OFF</span>
            <span className="block text-6xl md:text-7xl"
              style={{ WebkitTextStroke: "2px #ffcc00", color: "transparent" }}>YOUR FIRST ORDER</span>
          </h2>

          <p className="font-body text-base text-white/50 mb-10 max-w-md mx-auto leading-relaxed">
            Plus early access to new drops, pro detailing tips, and members-only bundles.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="scaleIn" delay={150}>
          {submitted ? (
            <div className="border-[3px] border-pure-blue px-8 py-6" style={{ background: "rgba(0,168,255,0.08)", boxShadow: "0 0 24px rgba(0,168,255,0.2)" }}>
              <p className="font-cartoon text-pure-blue uppercase tracking-widest mb-3">✓ You&apos;re in the crew. Check your inbox.</p>
              <p className="font-body text-sm text-white/50 mb-2">Your discount code:</p>
              <div className="inline-flex items-center gap-3 border-[3px] border-pure-yellow px-5 py-3" style={{ background: "rgba(255,204,0,0.06)" }}>
                <span className="font-display italic text-3xl text-pure-yellow tracking-widest">{NEWSLETTER_DISCOUNT_CODE}</span>
                <button
                  onClick={copyCode}
                  aria-label={copied ? "Discount code copied" : "Copy discount code"}
                  className="flex items-center gap-1.5 font-cartoon text-[10px] uppercase tracking-widest text-pure-yellow border-[2px] border-pure-yellow px-2 py-1 hover:bg-pure-yellow hover:text-pure-outline transition-colors"
                >
                  {copied ? <Check size={12} weight="bold" /> : <Copy size={12} weight="bold" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="font-body text-xs text-white/30 mt-3">Apply at checkout · One use per customer</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              aria-label="Newsletter sign-up form"
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-required="true"
                className="flex-1 font-body text-sm border-[3px] border-white/20 px-4 py-3 focus:outline-none focus:border-pure-blue transition-colors duration-150 text-white placeholder-white/30"
                style={{ background: "rgba(255,255,255,0.05)" }}
              />
              <button
                type="submit"
                onClick={addRipple}
                aria-label="Subscribe to the Pure Ride newsletter"
                className="btn-ripple btn-premium-red font-cartoon text-sm uppercase tracking-widest text-white px-6 py-3 flex items-center gap-2 whitespace-nowrap justify-center"
              >
                <PaperPlaneTilt size={16} weight="bold" aria-hidden="true" />
                Get 10% Off
              </button>
            </form>
          )}
          <p className="font-body text-xs text-white/25 mt-5">We respect your privacy. Unsubscribe anytime.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
