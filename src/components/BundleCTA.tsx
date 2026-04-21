"use client";

import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import { useCartStore } from "@/store/cartStore";

const bundleIncludes = [
  { name: "Ceramic Spray", price: "$15" },
  { name: "Blue Soap", price: "$15" },
  { name: "Thick Dressing", price: "$15" },
  { name: "Glass Cleaner", price: "$10" },
];

export default function BundleCTA() {
  const { addItem } = useCartStore();

  return (
    <section
      className="border-b-[3px] border-pure-outline py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1628 60%, #001844 100%)" }}
      aria-labelledby="bundle-heading"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[3px] w-12 bg-pure-red" aria-hidden="true" />
          <span className="font-cartoon text-xs uppercase tracking-[0.25em] text-pure-red">Bundle Deal</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: bundle image */}
          <div className="relative flex items-center justify-center">
            {/* Glow halo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at center, rgba(0,168,255,0.12) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <Image
              src="/bundle-4piece.png"
              alt="Pure Ride Complete 4-Piece Bundle — Ceramic Spray, Blue Soap, Thick Dressing, Glass Cleaner"
              width={560}
              height={420}
              className="relative z-10 w-full max-w-lg object-contain"
              style={{ filter: "drop-shadow(0 0 40px rgba(0,168,255,0.2)) drop-shadow(0 16px 40px rgba(0,0,0,0.6))" }}
            />
          </div>

          {/* Right: copy */}
          <div>
            <h2
              id="bundle-heading"
              className="font-display italic leading-none tracking-wide mb-6"
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl text-white">
                THE COMPLETE
              </span>
              <span
                className="block text-6xl md:text-7xl lg:text-8xl"
                style={{ WebkitTextStroke: "2px #00a8ff", color: "transparent" }}
              >
                4-PIECE SET
              </span>
            </h2>

            <p className="font-body text-base text-white/50 mb-8 max-w-sm">
              Everything you need for that full clean &amp; shine.
              Save more. Shine better. Ride clean.
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              {bundleIncludes.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 border-[2px] border-pure-blue flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0,168,255,0.1)" }}
                    >
                      <Check size={11} weight="bold" className="text-pure-blue" aria-hidden="true" />
                    </div>
                    <span className="font-cartoon text-sm text-white uppercase tracking-wider">{item.name}</span>
                  </div>
                  <span className="font-body text-sm text-white/30 line-through">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div
              className="flex items-center gap-4 mb-8 p-5 border-[2px] border-pure-yellow/30"
              style={{ background: "rgba(255,204,0,0.05)" }}
            >
              <div>
                <div className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">Bundle Price</div>
                <div className="font-display italic text-5xl leading-none text-pure-yellow">$50</div>
              </div>
              <div className="w-px h-12 bg-white/10" aria-hidden="true" />
              <div>
                <div className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">vs. Individual</div>
                <div className="font-cartoon text-lg text-white/30 line-through">$55</div>
              </div>
              <div
                className="ml-auto px-3 py-2 border-[2px] border-pure-red bg-pure-red/10"
              >
                <span className="font-cartoon text-xs text-pure-red uppercase tracking-wider">All 4 for $50</span>
              </div>
            </div>

            <button
              onClick={() => addItem({
                id: "4piece-bundle",
                name: "4-Piece Bundle Set",
                subtitle: "Ceramic Spray, Blue Soap, Thick Dressing, Glass Cleaner",
                price: 50,
                color: "#00a8ff",
                image: "/bundle-4piece.png",
              })}
              aria-label="Add the Pure Ride 4-Piece Bundle to cart"
              className="btn-premium-red font-cartoon text-base uppercase tracking-widest text-white px-8 py-4 w-full"
            >
              Add Bundle to Cart →
            </button>

            <p className="font-body text-xs text-white/30 mt-4 text-center">
              Limited time offer · Save more · Shine better
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
