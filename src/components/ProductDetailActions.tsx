"use client";

import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "@phosphor-icons/react";
import { useCartStore } from "@/store/cartStore";
import type { ProductMeta } from "@/lib/products";
import CartoonButton from "@/components/ui/CartoonButton";

export default function ProductDetailActions({ product }: { product: ProductMeta }) {
  const [qty, setQty] = useState(1);
  const { addItem, openCart } = useCartStore();

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product.id,
        name: product.name,
        subtitle: product.subtitle,
        price: product.price,
        color: product.color,
        image: product.image,
      });
    }
    openCart();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-cartoon text-xs uppercase tracking-widest text-pure-outline/70">Qty</span>
        <div className="flex items-center border-[3px] border-pure-outline shadow-cartoon bg-white">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            aria-label="Decrease quantity"
            className="px-3 py-2 hover:bg-pure-yellow transition-colors"
          >
            <Minus size={14} weight="bold" />
          </button>
          <span className="font-cartoon text-lg px-4 min-w-[3rem] text-center">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            aria-label="Increase quantity"
            className="px-3 py-2 hover:bg-pure-yellow transition-colors"
          >
            <Plus size={14} weight="bold" />
          </button>
        </div>
      </div>

      <CartoonButton variant="red" size="lg" onClick={handleAdd} className="flex items-center justify-center gap-2">
        <ShoppingCart size={20} weight="bold" />
        Add to Cart · ${(product.price * qty).toFixed(0)}
      </CartoonButton>
    </div>
  );
}
