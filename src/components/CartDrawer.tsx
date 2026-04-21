"use client";

import { X, Trash, ShoppingCart } from "@phosphor-icons/react";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, total } = useCartStore();

  if (!isOpen) return null;

  const cartTotal = total();

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm" onClick={closeCart} aria-hidden="true" />

      <aside
        className="fixed right-0 top-0 h-full w-full max-w-sm z-50 flex flex-col border-l-[4px] border-pure-outline"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #050d1a 100%)",
          boxShadow: "-8px 0 0 #111827",
        }}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-5 border-b-[3px] border-pure-outline"
          style={{ background: "rgba(0,168,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <ShoppingCart size={20} weight="bold" className="text-pure-blue" aria-hidden="true" />
            <h2 className="font-cartoon text-sm text-white uppercase tracking-widest">
              Cart ({items.length})
            </h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="flex items-center justify-center w-8 h-8 border-[2px] border-white/20 text-white/60 hover:border-pure-blue hover:text-pure-blue transition-all duration-150"
          >
            <X size={16} weight="bold" aria-hidden="true" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingCart size={56} className="text-white/10 mb-4" aria-hidden="true" />
              <p className="font-cartoon text-sm text-white/30 uppercase tracking-wider mb-6">Cart is empty</p>
              <button
                onClick={closeCart}
                className="btn-premium-red font-cartoon text-xs uppercase tracking-widest text-white px-6 py-3"
                aria-label="Continue shopping"
              >
                Shop Now →
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-4 border-[2px] border-white/10 hover:border-white/20 transition-colors"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="w-12 h-12 border-[2px] border-pure-outline shrink-0 flex items-center justify-center"
                  style={{ background: `${item.color}20` }}
                  aria-hidden="true"
                >
                  <div className="w-4 h-4 rounded-full" style={{ background: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-cartoon text-xs text-white uppercase tracking-wide truncate">{item.name}</p>
                  <p className="font-body text-xs text-white/30 truncate mt-0.5">{item.subtitle}</p>
                  <p className="font-display italic text-base text-pure-yellow mt-1">
                    ${item.price % 1 === 0 ? item.price.toFixed(0) : item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`} className="w-6 h-6 border border-white/20 flex items-center justify-center text-white/60 hover:text-white text-sm transition-colors">−</button>
                    <span className="font-cartoon text-xs text-white w-5 text-center" aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`} className="w-6 h-6 border border-white/20 flex items-center justify-center text-white/60 hover:text-white text-sm transition-colors">+</button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} className="self-start text-white/20 hover:text-pure-red transition-colors mt-1">
                  <Trash size={16} weight="bold" aria-hidden="true" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t-[3px] border-pure-outline p-5 space-y-4" style={{ background: "rgba(0,0,0,0.3)" }}>
            <div className="flex items-center justify-between">
              <span className="font-cartoon text-xs text-white/50 uppercase tracking-widest">Total</span>
              <span className="font-display italic text-3xl text-pure-yellow">${cartTotal.toFixed(2)}</span>
            </div>
            <Link href="/cart" onClick={closeCart}>
              <button
                aria-label="Proceed to checkout"
                className="btn-premium-red font-cartoon text-sm uppercase tracking-widest text-white px-6 py-3 w-full"
              >
                Checkout →
              </button>
            </Link>
            <button onClick={closeCart} className="w-full font-body text-xs text-white/25 hover:text-white/50 transition-colors text-center underline underline-offset-2" aria-label="Continue shopping">
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
