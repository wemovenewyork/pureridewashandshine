import ProductCard, { type Product } from "./ProductCard";

export const PRODUCTS: Product[] = [
  {
    id: "blue-soap",
    name: "Blue Soap",
    subtitle: "Rich colored foam — emulsified wash formula for all surfaces",
    price: 15,
    category: "soap",
    color: "#00a8ff",
    bottleColor: "#00a8ff",
    badge: "Best Seller",
    image: "/product-blue-soap.png",
  },
  {
    id: "ceramic-spray",
    name: "Ceramic Spray",
    subtitle: "SiO2 technology — enhanced shine + deep shine protection",
    price: 15,
    category: "ceramic",
    color: "#00a8ff",
    bottleColor: "#002855",
    badge: "Pro Pick",
    image: "/product-ceramic-spray.png",
  },
  {
    id: "thick-dressing",
    name: "Thick Dressing",
    subtitle: "Rejuvenates dry surfaces — water based, thick & high shine",
    price: 15,
    category: "interior",
    color: "#e5e7eb",
    bottleColor: "#e5e7eb",
    image: "/product-thick-dressing.png",
  },
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    subtitle: "No streaks formula — safe on tint, removes grime & dirt",
    price: 10,
    category: "glass",
    color: "#f472b6",
    bottleColor: "#f9a8d4",
    image: "/product-glass-cleaner.png",
  },
];

export default function ProductGrid() {
  return (
    <section
      className="border-y-[3px] border-pure-outline py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 border-[2px] border-pure-outline px-3 py-1 mb-4 bg-pure-outline">
              <span className="font-cartoon text-[10px] uppercase tracking-[0.2em] text-white">The Lineup</span>
            </div>
            <h2
              id="products-heading"
              className="font-display italic text-5xl md:text-6xl leading-none tracking-wide text-pure-outline"
            >
              FOUR PRODUCTS.<br />
              <span style={{ WebkitTextStroke: "2px #111827", color: "transparent" }}>
                ONE STANDARD.
              </span>
            </h2>
          </div>
          <a
            href="/products"
            className="font-cartoon text-sm uppercase tracking-widest text-pure-outline border-b-[2px] border-pure-outline hover:text-pure-blue hover:border-pure-blue transition-colors self-start md:self-auto pb-0.5"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-[3px] border-pure-outline p-6 shadow-cartoon"
          style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1628 100%)" }}
        >
          <div>
            <p className="font-display italic text-2xl text-white leading-tight">
              GET ALL 4 IN THE BUNDLE
            </p>
            <p className="font-body text-sm text-white/50 mt-1">
              Ceramic Spray · Blue Soap · Thick Dressing · Glass Cleaner
            </p>
          </div>
          <a href="/bundles">
            <button
              className="btn-premium-red font-cartoon text-sm uppercase tracking-widest text-white px-6 py-3 whitespace-nowrap"
              aria-label="Shop the Pure Ride 4-piece bundle"
            >
              Shop Bundle $50 →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
