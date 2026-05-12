import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CaretLeft, Star } from "@phosphor-icons/react/dist/ssr";
import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductDetailActions from "@/components/ProductDetailActions";
import { PRODUCTS } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found | Pure Ride Wash & Shine" };
  return {
    title: `${product.name} | Pure Ride Wash & Shine`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const ratingValue = product.rating.halfStar ? product.rating.score + 0.5 : product.rating.score;

  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Nav />
      </div>
      <CartDrawer />
      <main className="min-h-screen bg-sky-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-cartoon text-xs uppercase tracking-widest text-pure-outline mb-8 hover:text-pure-red transition-colors"
          >
            <CaretLeft size={14} weight="bold" />
            All Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image panel */}
            <div
              className="relative flex items-center justify-center border-[3px] border-pure-outline shadow-cartoon-lg overflow-hidden"
              style={{ background: "linear-gradient(145deg, #0a1628 0%, #050d1a 100%)", minHeight: "480px" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${product.color}22 0%, transparent 70%)` }}
                aria-hidden="true"
              />
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={420}
                  height={420}
                  className="object-contain relative z-10"
                  style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6))" }}
                  priority
                />
              )}
              {product.badge && (
                <div className="absolute top-4 left-4 z-20 bg-pure-yellow border-[2px] border-pure-outline px-3 py-1 shadow-[3px_3px_0_#111827]">
                  <span className="font-cartoon text-xs text-pure-outline uppercase tracking-widest">{product.badge}</span>
                </div>
              )}
            </div>

            {/* Detail panel */}
            <div className="flex flex-col">
              <h1 className="font-display italic text-4xl md:text-5xl text-pure-outline leading-none tracking-wide mb-4">
                {product.name.toUpperCase()}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5" aria-label={`${ratingValue} out of 5 stars`}>
                  {Array.from({ length: product.rating.score }).map((_, i) => (
                    <Star key={i} size={18} weight="fill" className="text-pure-yellow" aria-hidden="true" />
                  ))}
                  {product.rating.halfStar && (
                    <Star size={18} weight="duotone" className="text-pure-yellow" aria-hidden="true" />
                  )}
                </div>
                <span className="font-body text-sm text-pure-outline/60" style={{ fontWeight: 600 }}>
                  ({product.rating.count} reviews)
                </span>
              </div>

              <p className="font-cartoon text-sm uppercase tracking-widest text-pure-outline/70 mb-6">
                {product.subtitle}
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display italic text-5xl leading-none" style={{ color: "#ff3333" }}>
                  ${product.price % 1 === 0 ? product.price.toFixed(0) : product.price.toFixed(2)}
                </span>
              </div>

              <div className="mb-8">
                <h2 className="font-cartoon text-xs uppercase tracking-widest text-pure-outline/50 mb-3">
                  Description
                </h2>
                <p className="font-body text-base text-pure-outline/90 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mb-8 inline-flex self-start bg-pure-darkblue border-[3px] border-pure-outline px-4 py-2 shadow-cartoon">
                <span className="font-cartoon text-xs text-white uppercase tracking-widest">
                  {product.usageLine}
                </span>
              </div>

              <ProductDetailActions product={product} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
