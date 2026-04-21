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

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCartStore();

  const handleTilt = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(4px)`;
  };

  const resetTilt = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  return (
    <article
      className="group relative flex flex-col border-[3px] border-pure-outline shadow-cartoon hover:shadow-cartoon-lg overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(160deg, #0d1f35 0%, #0a1628 100%)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      aria-label={product.name}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-pure-yellow border-[2px] border-pure-outline px-2 py-0.5 shadow-[2px_2px_0_#111827]">
          <span className="font-cartoon text-[10px] text-pure-outline uppercase tracking-widest">{product.badge}</span>
        </div>
      )}

      {/* Image panel */}
      <div className="relative flex items-center justify-center overflow-hidden border-b-[3px] border-pure-outline"
        style={{ height: "220px", background: "linear-gradient(145deg, #0a1628 0%, #050d1a 100%)" }}>

        {/* Per-product color glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${product.color}18 0%, transparent 70%)` }}
          aria-hidden="true" />

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain h-48 w-auto group-hover:scale-110 transition-transform duration-500 relative z-10"
            style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.5))" }}
          />
        ) : (
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
        <h3 className="font-cartoon text-sm text-white uppercase tracking-widest leading-tight mb-1">{product.name}</h3>
        <p className="font-body text-xs text-white/40 mb-4 flex-1 leading-relaxed">{product.subtitle}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display italic text-2xl leading-none" style={{ color: "#ffcc00" }}>
              ${product.price % 1 === 0 ? product.price.toFixed(0) : product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-body text-xs text-white/30 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={(e) => { addRipple(e); addItem({ id: product.id, name: product.name, subtitle: product.subtitle, price: product.price, color: product.color, image: product.image }); openCart(); }}
            aria-label={`Add ${product.name} to cart`}
            className="btn-ripple flex items-center justify-center w-10 h-10 btn-premium-blue text-white"
          >
            <Plus size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Bottom color accent — slides in from left on hover */}
      <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
        aria-hidden="true" />
    </article>
  );
}
