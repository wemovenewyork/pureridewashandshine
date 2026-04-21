export interface ProductRating {
  score: number;
  halfStar: boolean;
  count: number;
}

export interface ProductMeta {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: "soap" | "glass" | "ceramic" | "wheel" | "interior";
  image?: string;
  color: string;
  bottleColor: string;
  badge?: string;
  rating: ProductRating;
  usageLine: string;
}

export const PRODUCTS: ProductMeta[] = [
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
    rating: { score: 5, halfStar: false, count: 127 },
    usageLine: "USE WEEKLY · PAIRS WITH CERAMIC SPRAY",
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
    rating: { score: 5, halfStar: false, count: 89 },
    usageLine: "USE MONTHLY · 6-MONTH PROTECTION",
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
    rating: { score: 4, halfStar: true, count: 54 },
    usageLine: "INTERIOR + TIRES · LONG-LASTING SHINE",
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
    rating: { score: 5, halfStar: false, count: 73 },
    usageLine: "AMMONIA-FREE · TINT-SAFE",
  },
];
