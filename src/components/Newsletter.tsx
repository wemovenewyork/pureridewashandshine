"use client";

import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import CartoonButton from "./ui/CartoonButton";

function BubblePattern() {
  const bubbles = [
    { size: 60, top: "10%", left: "5%", delay: "0s" },
    { size: 30, top: "40%", left: "12%", delay: "1s" },
    { size: 80, top: "65%", left: "3%", delay: "2s" },
    { size: 45, top: "20%", right: "8%", delay: "0.5s" },
    { size: 70, top: "55%", right: "5%", delay: "1.5s" },
    { size: 35, top: "80%", right: "15%", delay: "3s" },
    { size: 25, top: "5%", left: "30%", delay: "0.8s" },
    { size: 50, top: "85%", left: "45%", delay: "2.2s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full border-[2px] border-white/20 animate-bubble"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: "left" in b ? b.left : undefined,
            right: "right" in b ? (b as { right: string }).right : undefined,
            animationDelay: b.delay,
            background: "rgba(255,255,255,0.05)",
          }}
        />
      ))}
    </div>
  );
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="relative bg-pure-blue border-y-[3px] border-pure-outline py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      <BubblePattern />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* White rounded card */}
        <div className="bg-white border-[4px] border-pure-outline shadow-cartoon-xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 bg-pure-yellow border-[2px] border-pure-outline px-3 py-1 mb-5 shadow-[2px_2px_0_#111827]">
            <span className="font-cartoon text-xs uppercase tracking-widest text-pure-outline">
              Join the Clean Crew
            </span>
          </div>

          <h2
            id="newsletter-heading"
            className="font-display italic text-4xl md:text-5xl text-pure-outline mb-3"
          >
            STAY IN THE{" "}
            <span className="relative inline-block">
              <span className="relative z-10">LOOP</span>
              <span
                className="absolute inset-0 bg-pure-yellow -skew-x-3 -z-0 -mx-1 px-1"
                aria-hidden="true"
              />
            </span>
          </h2>

          <p className="font-body text-base text-gray-600 mb-8 max-w-sm mx-auto">
            Exclusive drops, detailing tips, early access to new formulas, and
            members-only discounts. No spam. Just clean content.
          </p>

          {submitted ? (
            <div className="bg-pure-blue/10 border-[3px] border-pure-blue px-6 py-4 shadow-cartoon">
              <p className="font-cartoon text-pure-darkblue uppercase tracking-wide">
                ✓ You&apos;re in the crew! Check your inbox.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              aria-label="Newsletter sign-up form"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-required="true"
                className="flex-1 font-body text-base border-[3px] border-pure-outline px-4 py-3 shadow-cartoon focus:outline-none focus:shadow-cartoon-lg focus:border-pure-blue transition-all duration-100 bg-white"
              />
              <CartoonButton
                type="submit"
                variant="red"
                size="md"
                aria-label="Subscribe to the Pure Ride newsletter"
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <PaperPlaneTilt size={18} weight="bold" aria-hidden="true" />
                Subscribe
              </CartoonButton>
            </form>
          )}

          <p className="font-body text-xs text-gray-400 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
