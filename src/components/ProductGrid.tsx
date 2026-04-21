import ProductCard, { type Product } from "./ProductCard";
import SectionHeading from "./ui/SectionHeading";

export const PRODUCTS: Product[] = [
  {
    id: "pure-foam-soap",
    name: "Pure Foam Soap",
    subtitle: "High-suds pH-neutral wash formula — safe on all surfaces",
    price: 18.99,
    category: "soap",
    color: "#00a8ff",
    bottleColor: "#00a8ff",
    badge: "Best Seller",
  },
  {
    id: "streak-free-glass",
    name: "Streak-Free Glass Cleaner",
    subtitle: "Ammonia-free crystal clarity for all glass surfaces",
    price: 14.99,
    category: "glass",
    color: "#7dd3fc",
    bottleColor: "#7dd3fc",
  },
  {
    id: "ceramic-spray-shield",
    name: "Ceramic Spray Shield",
    subtitle: "SiO2 hydrophobic nano-coating — lasts up to 6 months",
    price: 29.99,
    originalPrice: 39.99,
    category: "ceramic",
    color: "#002855",
    bottleColor: "#002855",
    badge: "Pro Pick",
  },
  {
    id: "wheel-blast-degreaser",
    name: "Wheel Blast Degreaser",
    subtitle: "Iron-reactive brake dust remover — turns purple on contact",
    price: 16.99,
    category: "wheel",
    color: "#ff3333",
    bottleColor: "#ff3333",
  },
  {
    id: "interior-fresh-detailer",
    name: "Interior Fresh Detailer",
    subtitle: "UV-protection detailer for dash, leather, and trim",
    price: 19.99,
    category: "interior",
    color: "#ffcc00",
    bottleColor: "#ffcc00",
  },
];

export default function ProductGrid() {
  return (
    <section
      className="bg-sky-50 py-20 px-4 sm:px-6 lg:px-8 border-t-[3px] border-pure-outline"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeading as="h2" highlight="OUR" id="products-heading">
            PRODUCT LINEUP
          </SectionHeading>
          <a
            href="/products"
            className="font-cartoon text-sm uppercase tracking-widest text-pure-blue underline underline-offset-4 hover:text-pure-outline transition-colors self-start md:self-auto"
          >
            View All Products →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
