import ProductCard, { type Product } from "./ProductCard";
import SectionHeading from "./ui/SectionHeading";

export const PRODUCTS: Product[] = [
  {
    id: "blue-soap",
    name: "Blue Soap",
    subtitle: "Rich colored foam — emulsified wash formula for all surfaces",
    price: 15.00,
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
    price: 15.00,
    category: "ceramic",
    color: "#002855",
    bottleColor: "#002855",
    badge: "Pro Pick",
    image: "/product-ceramic-spray.png",
  },
  {
    id: "thick-dressing",
    name: "Thick Dressing",
    subtitle: "Rejuvenates dry surfaces — water based, thick & high shine",
    price: 15.00,
    category: "interior",
    color: "#e5e7eb",
    bottleColor: "#e5e7eb",
    image: "/product-thick-dressing.png",
  },
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    subtitle: "No streaks formula — safe on tint, removes grime & dirt",
    price: 10.00,
    category: "glass",
    color: "#f9a8d4",
    bottleColor: "#f9a8d4",
    image: "/product-glass-cleaner.png",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
