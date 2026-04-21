"use client";

import { Check } from "@phosphor-icons/react";
import CartoonButton from "./ui/CartoonButton";
import SectionHeading from "./ui/SectionHeading";
import { useCartStore } from "@/store/cartStore";

const bundleIncludes = [
  "Pure Foam Soap (32oz)",
  "Ceramic Spray Shield (16oz)",
  "Streak-Free Glass Cleaner (16oz)",
  "Wheel Blast Degreaser (16oz)",
  "Interior Fresh Detailer (16oz)",
  "Microfiber Wash Mitt",
];

export default function BundleCTA() {
  const { addItem } = useCartStore();

  return (
    <section
      className="bg-pure-yellow border-y-[3px] border-pure-outline py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="bundle-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <SectionHeading as="h2" highlight="THE" id="bundle-heading">
            COMPLETE BUNDLE
          </SectionHeading>
          <p className="font-body text-base text-pure-outline mt-3">
            Everything you need. One box. One kill.
          </p>
        </div>

        {/* White card */}
        <div className="relative bg-white border-[4px] border-pure-outline shadow-cartoon-xl">
          {/* Rotating SAVE 25% badge */}
          <div
            className="absolute -top-6 -right-4 md:-top-8 md:-right-6 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center z-20"
            aria-label="Save 25%"
          >
            <div className="relative animate-rotate-badge">
              <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
                <path
                  id="circle-text-path"
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text className="text-[11px]" fill="#111827" fontFamily="'Russo One', sans-serif">
                  <textPath href="#circle-text-path" startOffset="0%">
                    SAVE 25% • SAVE 25% • SAVE 25% •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-pure-red border-[2px] border-pure-outline rounded-full flex items-center justify-center shadow-[2px_2px_0_#111827]">
                  <span className="font-display italic text-white text-[9px] leading-tight text-center">
                    25%<br />OFF
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left: Bottle arrangement */}
            <div className="flex-1 bg-pure-blue/10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-pure-outline p-8 flex items-center justify-center">
              <div className="flex items-end gap-3 flex-wrap justify-center">
                {[
                  { color: "#00a8ff", height: 96 },
                  { color: "#002855", height: 112 },
                  { color: "#ff3333", height: 80 },
                  { color: "#ffcc00", height: 104 },
                  { color: "#7dd3fc", height: 88 },
                ].map((bottle, i) => (
                  <div key={i} className="relative flex flex-col items-center" aria-hidden="true">
                    {/* Cap */}
                    <div
                      className="border-[2px] border-pure-outline bg-pure-outline"
                      style={{ width: "20px", height: "10px", borderRadius: "2px 2px 0 0" }}
                    />
                    {/* Neck */}
                    <div
                      className="border-x-[2px] border-pure-outline"
                      style={{
                        width: "16px",
                        height: "18px",
                        background: bottle.color,
                        borderTop: "none",
                      }}
                    />
                    {/* Body */}
                    <div
                      className="border-[2px] border-pure-outline shadow-[2px_2px_0_#111827]"
                      style={{
                        width: "36px",
                        height: `${bottle.height}px`,
                        background: bottle.color,
                        borderRadius: "3px 3px 4px 4px",
                      }}
                    >
                      <div
                        className="border-y-[2px] border-pure-outline/40 mx-1"
                        style={{
                          marginTop: "30%",
                          height: "30%",
                          background: "rgba(255,255,255,0.25)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: copy + checklist + pricing */}
            <div className="flex-1 p-8">
              <h3 className="font-display italic text-3xl text-pure-outline mb-2">
                THE FULL KIT
              </h3>
              <p className="font-body text-sm text-gray-600 mb-6">
                Our most popular bundle — trusted by detailing pros and weekend warriors alike.
              </p>

              <ul className="space-y-2 mb-8">
                {bundleIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-pure-blue border-[2px] border-pure-outline flex items-center justify-center shrink-0">
                      <Check size={12} weight="bold" className="text-white" aria-hidden="true" />
                    </div>
                    <span className="font-body text-sm text-pure-outline">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display italic text-4xl text-pure-outline">$74.99</span>
                <span className="font-body text-lg text-gray-400 line-through">$99.95</span>
                <span className="font-cartoon text-xs bg-pure-red text-white px-2 py-0.5 border-[2px] border-pure-outline">
                  YOU SAVE $24.96
                </span>
              </div>

              <CartoonButton
                variant="dark"
                size="lg"
                aria-label="Add the Pure Ride Complete Bundle to cart"
                onClick={() =>
                  addItem({
                    id: "complete-bundle",
                    name: "Complete Bundle",
                    subtitle: "5 products + wash mitt",
                    price: 74.99,
                    color: "#002855",
                  })
                }
                className="w-full justify-center"
              >
                Add Bundle to Cart →
              </CartoonButton>

              <p className="font-body text-xs text-gray-400 mt-3 text-center">
                Free shipping • Limited quantity • Pro formula
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
