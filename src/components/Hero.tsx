"use client";

import Image from "next/image";
import Link from "next/link";
import CartoonButton from "./ui/CartoonButton";

function Bubble({
  size,
  top,
  left,
  delay,
  opacity,
}: {
  size: number;
  top: string;
  left: string;
  delay: string;
  opacity: number;
}) {
  return (
    <div
      className="absolute rounded-full border-[3px] border-white/40 animate-bubble"
      style={{
        width: size,
        height: size,
        top,
        left,
        animationDelay: delay,
        opacity,
        background: "rgba(255,255,255,0.08)",
      }}
      aria-hidden="true"
    />
  );
}

function Sparkle({ top, right, delay }: { top: string; right: string; delay: string }) {
  return (
    <div
      className="absolute text-pure-yellow text-2xl font-bold animate-pulse-sparkle select-none pointer-events-none"
      style={{ top, right, animationDelay: delay }}
      aria-hidden="true"
    >
      ✦
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative bg-pure-blue overflow-hidden"
      aria-label="Hero section"
    >
      {/* Floating bubbles */}
      <Bubble size={80} top="10%" left="5%" delay="0s" opacity={0.5} />
      <Bubble size={40} top="25%" left="15%" delay="1.2s" opacity={0.4} />
      <Bubble size={120} top="60%" left="2%" delay="2.5s" opacity={0.3} />
      <Bubble size={60} top="5%" left="40%" delay="0.8s" opacity={0.5} />
      <Bubble size={30} top="80%" left="20%" delay="1.8s" opacity={0.6} />
      <Bubble size={90} top="15%" left="75%" delay="3s" opacity={0.3} />
      <Bubble size={50} top="50%" left="85%" delay="0.5s" opacity={0.45} />
      <Bubble size={70} top="70%" left="70%" delay="2s" opacity={0.35} />

      {/* Sparkle accents */}
      <Sparkle top="12%" right="25%" delay="0s" />
      <Sparkle top="35%" right="10%" delay="0.7s" />
      <Sparkle top="60%" right="30%" delay="1.4s" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-16">

          {/* Left: copy */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-pure-yellow border-[3px] border-pure-outline shadow-cartoon px-4 py-1.5 mb-6">
              <span className="font-cartoon text-xs uppercase tracking-widest text-pure-outline">
                🏆 Premium Car Care
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display italic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-white mb-4">
              RIDE{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-pure-outline">CLEAN</span>
                <span
                  className="absolute inset-0 bg-pure-yellow -z-0 -skew-x-6 -mx-2 px-2"
                  aria-hidden="true"
                />
              </span>
              <br />
              RIDE{" "}
              <span className="text-pure-yellow">PROUD</span>
            </h1>

            {/* Speech bubble paragraph */}
            <div className="relative inline-block md:block mt-6 mb-8">
              <div
                className="bg-pure-darkblue border-[3px] border-pure-outline shadow-cartoon-lg px-6 py-5 max-w-md mx-auto md:mx-0"
                style={{ borderRadius: "4px 20px 20px 20px" }}
              >
                {/* Speech bubble triangle */}
                <div
                  className="absolute -top-3 left-4 w-0 h-0"
                  style={{
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderBottom: "14px solid #111827",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-[9px] left-[17px] w-0 h-0"
                  style={{
                    borderLeft: "9px solid transparent",
                    borderRight: "9px solid transparent",
                    borderBottom: "11px solid #002855",
                  }}
                  aria-hidden="true"
                />
                <p className="font-body text-base text-white/90 leading-relaxed">
                  Car care that hits different. Bold formulas. Bold results.
                  Our esports-grade detailing lineup keeps your ride looking
                  like it just rolled off the showroom floor — every single time.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/products">
                <CartoonButton variant="red" size="lg" aria-label="Shop all Pure Ride products">
                  Shop Now →
                </CartoonButton>
              </Link>
              <Link href="/bundles">
                <CartoonButton variant="yellow" size="lg" aria-label="View Pure Ride bundles">
                  See Bundles
                </CartoonButton>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
              {["Free Shipping $50+", "30-Day Guarantee", "Pro Formula"].map((badge) => (
                <div
                  key={badge}
                  className="bg-white/15 border-[2px] border-white/40 px-3 py-1.5"
                >
                  <span className="font-cartoon text-xs text-white uppercase tracking-wider">
                    ✓ {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated logo blob */}
          <div className="flex-1 flex items-center justify-center relative min-h-[320px] md:min-h-[480px]">
            {/* Outer blob (cyan, slow spin) */}
            <div
              className="absolute animate-spin-slow"
              style={{
                width: "380px",
                height: "380px",
                background: "rgba(0,180,255,0.35)",
                border: "4px solid rgba(255,255,255,0.3)",
                borderRadius: "60% 40% 70% 30% / 30% 70% 30% 70%",
              }}
              aria-hidden="true"
            />
            {/* Inner blob (white, counter-rotate) */}
            <div
              className="absolute animate-spin-reverse"
              style={{
                width: "300px",
                height: "300px",
                background: "rgba(255,255,255,0.15)",
                border: "4px solid rgba(255,255,255,0.5)",
                borderRadius: "40% 60% 30% 70% / 70% 30% 70% 30%",
              }}
              aria-hidden="true"
            />

            {/* Logo */}
            <div
              className="relative z-10 animate-float"
              style={{ filter: "drop-shadow(6px 6px 0 #111827)" }}
            >
              <Image
                src="/pure-ride-logo.svg"
                alt="Pure Ride Wash & Shine logo"
                width={280}
                height={280}
                className="object-contain"
                priority
              />
            </div>

            {/* Bouncing star */}
            <div
              className="absolute top-4 right-8 md:right-12 text-4xl animate-bounce-star select-none pointer-events-none"
              aria-hidden="true"
            >
              ⭐
            </div>

            {/* Pulsing sparkles */}
            <div
              className="absolute bottom-8 left-4 text-3xl animate-pulse-sparkle select-none pointer-events-none"
              style={{ animationDelay: "0.5s" }}
              aria-hidden="true"
            >
              ✨
            </div>
            <div
              className="absolute top-12 left-8 text-2xl animate-pulse-sparkle select-none pointer-events-none"
              style={{ animationDelay: "1.2s" }}
              aria-hidden="true"
            >
              ✦
            </div>
          </div>
        </div>
      </div>

      {/* Wavy SVG divider */}
      <div className="relative -mb-1" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 block"
        >
          {/* filled path — sky-50 fill */}
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#f0f9ff"
          />
          {/* stroked path on top */}
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40"
            fill="none"
            stroke="#111827"
            strokeWidth="4"
          />
        </svg>
      </div>
    </section>
  );
}
