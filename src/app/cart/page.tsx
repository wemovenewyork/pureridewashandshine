"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/cartStore";
import CartoonButton from "@/components/ui/CartoonButton";
import { Trash } from "@phosphor-icons/react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();
  const cartTotal = total();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sky-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display italic text-5xl text-pure-outline mb-10">
            YOUR CART
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-cartoon text-xl text-gray-400 uppercase tracking-wider mb-8">
                Your cart is empty
              </p>
              <a href="/products">
                <CartoonButton variant="red" size="lg" aria-label="Shop products">
                  Shop Products →
                </CartoonButton>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-5 bg-white border-[3px] border-pure-outline shadow-cartoon"
                  >
                    <div
                      className="w-16 h-16 border-[2px] border-pure-outline shrink-0"
                      style={{ background: item.color }}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="font-cartoon text-sm text-pure-outline uppercase">
                        {item.name}
                      </p>
                      <p className="font-body text-xs text-gray-500">{item.subtitle}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Decrease ${item.name} quantity`}
                          className="w-8 h-8 border-[2px] border-pure-outline flex items-center justify-center font-bold hover:bg-gray-100 transition-colors"
                        >
                          −
                        </button>
                        <span className="font-cartoon text-sm" aria-label={`Quantity: ${item.quantity}`}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase ${item.name} quantity`}
                          className="w-8 h-8 border-[2px] border-pure-outline flex items-center justify-center font-bold hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-gray-300 hover:text-pure-red transition-colors"
                      >
                        <Trash size={18} weight="bold" aria-hidden="true" />
                      </button>
                      <span className="font-display italic text-xl text-pure-outline">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
                <button
                  onClick={clearCart}
                  className="font-body text-sm text-gray-400 hover:text-pure-red transition-colors underline underline-offset-2"
                  aria-label="Clear all items from cart"
                >
                  Clear cart
                </button>
              </div>

              {/* Summary */}
              <div className="bg-white border-[3px] border-pure-outline shadow-cartoon-lg p-6 h-fit">
                <h2 className="font-cartoon text-base text-pure-outline uppercase tracking-wider mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="text-pure-outline">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-pure-blue font-cartoon text-xs uppercase">
                      {cartTotal >= 50 ? "FREE" : "$7.99"}
                    </span>
                  </div>
                  <div className="border-t-[2px] border-pure-outline pt-3 flex justify-between">
                    <span className="font-cartoon text-sm text-pure-outline uppercase">Total</span>
                    <span className="font-display italic text-2xl text-pure-outline">
                      ${(cartTotal + (cartTotal >= 50 ? 0 : 7.99)).toFixed(2)}
                    </span>
                  </div>
                </div>
                <CartoonButton
                  variant="red"
                  size="lg"
                  aria-label="Proceed to checkout"
                  className="w-full justify-center"
                >
                  Checkout →
                </CartoonButton>
                {cartTotal < 50 && (
                  <p className="font-body text-xs text-gray-400 mt-3 text-center">
                    Add ${(50 - cartTotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
