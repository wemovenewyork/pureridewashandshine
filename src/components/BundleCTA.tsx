"use client";

import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import CartoonButton from "./ui/CartoonButton";
import SectionHeading from "./ui/SectionHeading";
import { useCartStore } from "@/store/cartStore";

const bundleIncludes = [
  "Ceramic Spray",
  "Blue Soap",
  "Thick Dressing",
  "Glass Cleaner",
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
            Everything you need for that FULL clean &amp; shine.
          </p>
        </div>

        {/* White card */}
        <div className="relative bg-white border-[4px] border-pure-outline shadow-cartoon-xl">
          {/* Rotating BUNDLE DEAL badge */}
          <div
            className="absolute -top-6 -right-4 md:-top-8 md:-right-6 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center z-20"
            aria-label="Bundle Deal"
          >
            <div className="relative animate-rotate-badge">
              <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
                <path
                  id="circle-text-path"
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text fontSize="11" fill="#111827" fontFamily="'Russo One', sans-serif">
                  <textPath href="#circle-text-path" startOffset="0%">
                    BUNDLE DEAL • SAVE MORE •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-pure-red border-[2px] border-pure-outline rounded-full flex items-center justify-center shadow-[2px_2px_0_#111827]">
                  <span className="font-display italic text-white text-[9px] leading-tight text-center">
                    4PC<br />SET
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left: real bundle image */}
            <div className="flex-1 bg-pure-outline/5 border-b-[3px] md:border-b-0 md:border-r-[3px] border-pure-outline flex items-center justify-center p-4 md:p-6 min-h-[280px]">
              <Image
                src="/bundle-4piece.png"
                alt="Pure Ride Complete 4-Piece Set — Ceramic Spray, Blue Soap, Thick Dressing, Glass Cleaner"
                width={420}
                height={320}
                className="w-full max-w-sm object-contain"
              />
            </div>

            {/* Right: copy + checklist + pricing */}
            <div className="flex-1 p-8">
              <h3 className="font-display italic text-3xl text-pure-outline mb-2">
                THE 4-PIECE SET
              </h3>
              <p className="font-body text-sm text-gray-600 mb-6">
                Our most popular bundle — everything you need for a clean, shiny ride.
                Trusted by detailing pros and weekend warriors alike.
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

              <div className="flex items-baseline gap-4 mb-6 flex-wrap">
                <span className="font-display italic text-4xl text-pure-outline">$50</span>
                <span className="font-body text-lg text-gray-400 line-through">$55</span>
                <span className="font-cartoon text-xs bg-pure-red text-white px-2 py-0.5 border-[2px] border-pure-outline">
                  ALL 4 FOR JUST $50
                </span>
              </div>

              <CartoonButton
                variant="dark"
                size="lg"
                aria-label="Add the Pure Ride 4-Piece Bundle to cart"
                onClick={() =>
                  addItem({
                    id: "4piece-bundle",
                    name: "4-Piece Bundle Set",
                    subtitle: "Ceramic Spray, Blue Soap, Thick Dressing, Glass Cleaner",
                    price: 50.00,
                    color: "#002855",
                    image: "/bundle-4piece.png",
                  })
                }
                className="w-full justify-center"
              >
                Add Bundle to Cart →
              </CartoonButton>

              <p className="font-body text-xs text-gray-400 mt-3 text-center">
                Save more. Shine better. Ride clean. Limited time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
