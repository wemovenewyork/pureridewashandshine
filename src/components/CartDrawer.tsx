"use client";

import { X, Trash, ShoppingCart } from "@phosphor-icons/react";
import { useCartStore } from "@/store/cartStore";
import CartoonButton from "./ui/CartoonButton";
import Link from "next/link";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, total } =
    useCartStore();

  if (!isOpen) return null;

  const cartTotal = total();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-pure-outline/60 z-40"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="fixed right-0 top-0 h-full w-full max-w-sm bg-white border-l-[4px] border-pure-outline shadow-[-8px_0_0_#111827] z-50 flex flex-col"
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b-[3px] border-pure-outline bg-pure-blue">
          <div className="flex items-center gap-3">
            <ShoppingCart size={22} weight="bold" className="text-white" aria-hidden="true" />
            <h2 className="font-cartoon text-base text-white uppercase tracking-wider">
              Your Cart ({items.length})
            </h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="flex items-center justify-center w-9 h-9 bg-white border-[2px] border-white/40 text-pure-outline hover:bg-pure-yellow transition-colors duration-100"
          >
            <X size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingCart size={64} className="text-gray-200 mb-4" aria-hidden="true" />
              <p className="font-cartoon text-sm text-gray-400 uppercase tracking-wider mb-6">
                Cart is empty
              </p>
              <CartoonButton variant="red" size="sm" onClick={closeCart} aria-label="Continue shopping">
                Shop Now →
              </CartoonButton>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border-[3px] border-pure-outline shadow-cartoon bg-white"
              >
                {/* Color swatch */}
                <div
                  className="w-12 h-12 border-[2px] border-pure-outline shrink-0"
                  style={{ background: item.color }}
                  aria-hidden="true"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-cartoon text-xs text-pure-outline uppercase truncate">
                    {item.name}
                  </p>
                  <p className="font-body text-xs text-gray-400 truncate">{item.subtitle}</p>
                  <p className="font-display italic text-base text-pure-outline mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease ${item.name} quantity`}
                      className="w-7 h-7 border-[2px] border-pure-outline flex items-center justify-center font-bold text-sm hover:bg-gray-100 transition-colors"
                    >
                      −
                    </button>
                    <span className="font-cartoon text-sm w-6 text-center" aria-label={`Quantity: ${item.quantity}`}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase ${item.name} quantity`}
                      className="w-7 h-7 border-[2px] border-pure-outline flex items-center justify-center font-bold text-sm hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                  className="self-start text-gray-300 hover:text-pure-red transition-colors duration-100 mt-1"
                >
                  <Trash size={18} weight="bold" aria-hidden="true" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t-[3px] border-pure-outline p-5 bg-sky-50 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-cartoon text-sm text-pure-outline uppercase tracking-wider">
                Total
              </span>
              <span className="font-display italic text-2xl text-pure-outline">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <Link href="/cart" onClick={closeCart}>
              <CartoonButton
                variant="red"
                size="lg"
                aria-label="Proceed to checkout"
                className="w-full justify-center"
              >
                Checkout →
              </CartoonButton>
            </Link>
            <button
              onClick={closeCart}
              className="w-full font-body text-xs text-gray-400 hover:text-pure-outline transition-colors text-center underline underline-offset-2"
              aria-label="Continue shopping"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
