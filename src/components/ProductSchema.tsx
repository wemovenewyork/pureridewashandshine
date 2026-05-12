import { PRODUCTS } from "@/lib/products";

export default function ProductSchema() {
  const schemas = PRODUCTS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: `https://pure-ride-wash.vercel.app${p.image ?? ""}`,
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: p.rating.halfStar ? p.rating.score + 0.5 : p.rating.score,
      reviewCount: p.rating.count,
      bestRating: 5,
    },
  }));

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
