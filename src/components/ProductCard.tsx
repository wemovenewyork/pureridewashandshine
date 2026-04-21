"use client";

import Image from "next/image";
import { Plus } from "@phosphor-icons/react";
import { useCartStore } from "@/store/cartStore";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: "soap" | "glass" | "ceramic" | "wheel" | "interior";
  image?: string;
  color: string;
  bottleColor: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  return (
    <article
      className="group relative flex flex-col border-[3px] border-pure-outline shadow-cartoon hover:shadow-cartoon-lg transition-all duration-150 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d1f35 0%, #0a1628 100%)" }}
      aria-label={product.name}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-pure-yellow border-[2px] border-pure-outline px-2 py-0.5 shadow-[2px_2px_0_#111827]">
          <span className="font-cartoon text-[10px] text-pure-outline uppercase tracking-widest">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image panel */}
      <div
        className="relative flex items-center justify-center overflow-hidden border-b-[3px] border-pure-outline"
        style={{
          height: "220px",
          background: "linear-gradient(145deg, #0a1628 0%, #050d1a 100%)",
        }}
      >
        {/* Glow behind image */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${product.color}15 0%, transparent 70%)` }}
          aria-hidden="true"
        />

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain h-48 w-auto group-hover:scale-105 transition-transform duration-300 relative z-10"
            style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }}
          />
        ) : (
          /* CSS bottle fallback */
          <div className="relative flex items-end justify-center h-44 z-10" aria-hidden="true">
            <div className="relative border-[3px] border-pure-outline" style={{ width: "52px", height: "96px", background: product.bottleColor, borderRadius: "6px 6px 8px 8px", boxShadow: "3px 3px 0 #111827" }}>
              <div className="absolute left-0 right-0 border-y-[2px] border-pure-outline" style={{ top: "30%", height: "35%", background: "rgba(255,255,255,0.2)" }} />
              <div className="absolute left-1/2 -translate-x-1/2 -top-7 border-[3px] border-pure-outline" style={{ width: "24px", height: "28px", borderRadius: "4px 4px 0 0", background: product.bottleColor }} />
              <div className="absolute left-1/2 -translate-x-1/2 border-[3px] border-pure-outline bg-pure-outline" style={{ width: "28px", height: "12px", top: "-44px", borderRadius: "3px 3px 0 0" }} />
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-cartoon text-sm text-white uppercase tracking-widest leading-tight mb-1">
          {product.name}
        </h3>
        <p className="font-body text-xs text-white/40 mb-4 flex-1 leading-relaxed">{product.subtitle}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display italic text-2xl leading-none" style={{ color: "#ffcc00" }}>
              ${product.price % 1 === 0 ? product.price.toFixed(0) : product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-body text-xs text-white/30 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to cart */}
          <button
            onClick={() => addItem({
              id: product.id,
              name: product.name,
              subtitle: product.subtitle,
              price: product.price,
              color: product.color,
              image: product.image,
            })}
            aria-label={`Add ${product.name} to cart`}
            className="flex items-center justify-center w-10 h-10 btn-premium-blue text-white"
          >
            <Plus size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-[3px] w-0 group-hover:w-full transition-all duration-300"
        style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
        aria-hidden="true"
      />
    </article>
  );
}
