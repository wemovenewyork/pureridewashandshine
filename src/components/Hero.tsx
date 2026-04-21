"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1628 55%, #001844 100%)" }}
        aria-label="Hero section"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        {/* Speed lines */}
        <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none overflow-hidden" aria-hidden="true">
          {[15, 35, 55, 70, 82].map((top, i) => (
            <div key={i} className="absolute right-0 h-px"
              style={{ top: `${top}%`, width: `${40 + i * 10}%`, background: `linear-gradient(to left, transparent, rgba(0,168,255,${0.05 + i * 0.02}))` }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 md:pt-20">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-6 lg:gap-12">

            {/* ── Left: copy ── */}
            <div className="flex-1 text-center md:text-left">

              {/* Badge */}
              <div className="hero-badge inline-flex items-center gap-2 border-[2px] border-pure-yellow/60 px-4 py-1.5 mb-6"
                style={{ background: "rgba(255,204,0,0.08)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-pure-yellow animate-pulse-sparkle" aria-hidden="true" />
                <span className="font-cartoon text-xs uppercase tracking-[0.2em] text-pure-yellow">Premium Car Care</span>
              </div>

              {/* Headline — each word animates independently */}
              <h1 className="font-display italic leading-[0.88] tracking-wide mb-6">
                <span className="hero-word-1 block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white">
                  RIDE
                </span>
                <span className="hero-word-2 block text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] relative"
                  style={{ WebkitTextStroke: "2px #00a8ff", color: "transparent", textShadow: "0 0 40px rgba(0,168,255,0.25)" }}>
                  CLEAN
                </span>
                <span className="hero-word-3 block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-pure-yellow">
                  RIDE PROUD
                </span>
              </h1>

              {/* Accent line — grows in */}
              <div className="hero-line h-[3px] mb-6 mx-auto md:mx-0"
                style={{ background: "linear-gradient(90deg, #ff3333, #00a8ff, #ffcc00)" }}
                aria-hidden="true" />

              {/* Body */}
              <p className="hero-body font-body text-base md:text-lg text-white/60 max-w-md mx-auto md:mx-0 leading-relaxed mb-8">
                Bold formulas engineered for results. Pro-grade car care
                with the energy your ride deserves.
              </p>

              {/* CTAs */}
              <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
                <Link href="/products">
                  <button
                    className="btn-ripple btn-premium-red font-cartoon text-base uppercase tracking-widest text-white px-8 py-4"
                    aria-label="Shop all Pure Ride products"
                    onClick={(e) => addRipple(e)}
                  >
                    Shop Now →
                  </button>
                </Link>
                <Link href="/bundles">
                  <button
                    className="font-cartoon text-base uppercase tracking-widest text-white px-8 py-4 border-[3px] border-white/30 hover:border-pure-blue hover:text-pure-blue transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                    aria-label="View Pure Ride bundles"
                  >
                    See Bundles
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-stats flex flex-wrap gap-6 justify-center md:justify-start">
                {[
                  { value: "4", label: "Pro Products" },
                  { value: "1", label: "Bundle Kit" },
                  { value: "100%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <div className="font-display italic text-3xl text-pure-blue leading-none">{stat.value}</div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-widest mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: logo ── */}
            <div className="flex-1 flex items-end justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                <div className="animate-glow-pulse" style={{ width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,168,255,0.08) 0%, transparent 70%)" }} />
              </div>
              <div className="hero-logo relative z-10 animate-float" style={{ marginBottom: "-4px" }}>
                <Image
                  src="/pure-ride-logo.png"
                  alt="Pure Ride Wash & Shine"
                  width={520}
                  height={390}
                  className="w-[320px] sm:w-[400px] lg:w-[480px] xl:w-[520px] h-auto object-contain"
                  style={{ filter: "drop-shadow(0 0 30px rgba(0,168,255,0.35)) drop-shadow(0 8px 24px rgba(0,0,0,0.6))" }}
                  priority
                />
              </div>
              <div className="absolute top-8 right-0 md:right-4 bg-pure-red border-[3px] border-pure-outline shadow-cartoon-lg px-3 py-2 animate-bounce-star z-20" aria-label="From $10">
                <span className="font-display italic text-white text-lg leading-none block">FROM</span>
                <span className="font-display italic text-white text-3xl leading-none block">$10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wavy divider */}
        <div className="relative -mb-1" aria-hidden="true">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20 block">
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40" fill="none" stroke="#111827" strokeWidth="4" />
          </svg>
        </div>
      </section>

      {/* ── Marquee ticker strip ── */}
      <div
        className="overflow-hidden border-y-[3px] border-pure-outline py-3"
        style={{ background: "#111827" }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, gi) => (
            <div key={gi} className="flex items-center gap-0 shrink-0">
              {[
                "PURE RIDE WASH & SHINE",
                "CERAMIC SPRAY",
                "BLUE SOAP",
                "THICK DRESSING",
                "GLASS CLEANER",
                "RIDE CLEAN",
                "RIDE PROUD",
                "PRO FORMULA",
                "FREE SHIPPING $50+",
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-4 px-6">
                  <span className="font-display italic text-sm tracking-widest text-white whitespace-nowrap">{item}</span>
                  <span className="text-pure-yellow text-xs">★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

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
