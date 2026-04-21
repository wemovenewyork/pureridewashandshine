import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = { title: "Products | Pure Ride Wash & Shine" };

const categories = [
  { value: "all", label: "All" },
  { value: "soap", label: "Wash" },
  { value: "glass", label: "Glass" },
  { value: "ceramic", label: "Ceramic" },
  { value: "wheel", label: "Wheel" },
  { value: "interior", label: "Interior" },
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { cat?: string };
}) {
  const active = searchParams.cat ?? "all";
  const filtered =
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Nav />
      </div>
      <CartDrawer />
      <main className="min-h-screen bg-sky-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <SectionHeading as="h1" highlight="ALL">
              PRODUCTS
            </SectionHeading>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <a
                key={cat.value}
                href={cat.value === "all" ? "/products" : `/products?cat=${cat.value}`}
                className={[
                  "font-cartoon text-xs uppercase tracking-widest px-4 py-2 border-[2px] border-pure-outline transition-all duration-100",
                  active === cat.value
                    ? "bg-pure-outline text-white shadow-cartoon"
                    : "bg-white text-pure-outline hover:bg-pure-yellow",
                ].join(" ")}
                aria-current={active === cat.value ? "page" : undefined}
              >
                {cat.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
