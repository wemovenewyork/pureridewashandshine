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

const categoryLabel: Record<Product["category"], string> = {
  soap: "WASH",
  glass: "GLASS",
  ceramic: "CERAMIC",
  wheel: "WHEEL",
  interior: "INTERIOR",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  return (
    <article
      className="group border-[3px] border-pure-outline shadow-cartoon hover:shadow-cartoon-lg transition-shadow duration-150 bg-white flex flex-col"
      aria-label={product.name}
    >
      {/* Colored header panel */}
      <div
        className="relative border-b-[3px] border-pure-outline flex items-center justify-center h-44 overflow-hidden"
        style={{ background: product.color }}
      >
        {/* Category label */}
        <div className="absolute top-3 left-3 bg-pure-outline px-2 py-0.5">
          <span className="font-cartoon text-[10px] text-white uppercase tracking-widest">
            {categoryLabel[product.category]}
          </span>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-pure-yellow border-[2px] border-pure-outline px-2 py-0.5 shadow-[2px_2px_0_#111827]">
            <span className="font-cartoon text-[10px] text-pure-outline uppercase tracking-wide">
              {product.badge}
            </span>
          </div>
        )}

        {/* Product image or sculpted bottle placeholder */}
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={150}
            className="object-contain h-36 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          /* CSS-sculpted bottle placeholder */
          <div className="relative flex items-end justify-center h-36" aria-hidden="true">
            {/* Bottle body */}
            <div
              className="relative border-[3px] border-pure-outline"
              style={{
                width: "52px",
                height: "96px",
                background: product.bottleColor,
                borderRadius: "6px 6px 8px 8px",
                boxShadow: "3px 3px 0 #111827",
              }}
            >
              {/* Label stripe */}
              <div
                className="absolute left-0 right-0 border-y-[2px] border-pure-outline"
                style={{
                  top: "30%",
                  height: "35%",
                  background: "rgba(255,255,255,0.3)",
                }}
              />
              {/* Neck */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-7 border-[3px] border-pure-outline bg-inherit"
                style={{
                  width: "24px",
                  height: "28px",
                  borderRadius: "4px 4px 0 0",
                  background: product.bottleColor,
                }}
              />
              {/* Cap */}
              <div
                className="absolute left-1/2 -translate-x-1/2 border-[3px] border-pure-outline bg-pure-outline"
                style={{
                  width: "28px",
                  height: "12px",
                  top: "-44px",
                  borderRadius: "3px 3px 0 0",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-cartoon text-sm text-pure-outline uppercase tracking-wide leading-snug mb-1">
          {product.name}
        </h3>
        <p className="font-body text-xs text-gray-500 mb-3 flex-1">{product.subtitle}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="font-display italic text-xl text-pure-outline">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-body text-xs text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to cart FAB */}
          <button
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                subtitle: product.subtitle,
                price: product.price,
                color: product.color,
                image: product.image,
              })
            }
            aria-label={`Add ${product.name} to cart`}
            className="flex items-center justify-center w-10 h-10 bg-pure-blue border-[3px] border-pure-outline text-white shadow-cartoon hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
          >
            <Plus size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
