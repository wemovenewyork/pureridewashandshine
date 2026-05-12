export interface ProductRating {
  score: number;
  halfStar: boolean;
  count: number;
}

export interface ProductMeta {
  id: string;
  name: string;
  subtitle: string;
  description: string;
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
    subtitle: "Ultra-rich blue foam wash & wax — foam cannon ready, no color transfer",
    description:
      "Neon Suds Premium Wash & Wax delivers ultra-rich blue color and superior cleaning power. Use it in your foam cannon or wash tunnel for professional results every time. Our advanced formula won't color transfer to any vehicle finish, so you can wash with confidence. Experience the perfect blend of vibrant suds and protective carnauba wax in one premium product.",
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
    subtitle: "SiO2 ceramic coating — hydrophobic shield + mirror shine",
    description:
      "Advanced SiO2 ceramic spray engineered to deliver exceptional hydrophobic protection and a deep, mirror-like shine. This premium formula creates a durable water-repellent barrier on your vehicle's surface, causing water to bead and roll away effortlessly. The advanced ceramic technology bonds to paint for long-lasting protection against environmental contaminants, UV rays, and oxidation. Perfect for maintaining that showroom finish between professional detailing sessions.",
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
    subtitle: "Rubber, vinyl & plastic conditioner — interior + exterior, UV protection",
    description:
      "Our Thick RVP Dressing is the ultimate conditioning solution for rubber, vinyl, and plastic surfaces throughout your vehicle. Whether you're restoring dashboard shine, protecting door seals, conditioning tires, or revitalizing exterior trim, this versatile formula works on both interior and exterior applications. It penetrates deep to restore color and flexibility while creating a protective barrier against UV damage, cracking, and fading. Keep every rubber, vinyl, and plastic surface looking fresh and well-maintained with one premium product.",
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
    subtitle: "Streak-free, ammonia-free — windshields, mirrors, headlights",
    description:
      "Crystal-clear visibility starts with spotless glass. Our ready-to-use glass cleaner cuts through grime, dirt, and film on windshields, headlights, windows, and mirrors with ease. The alcohol-based formula works fast without ammonia, leaving behind a streak-free, sparkling finish that enhances clarity and shine. Perfect for keeping your vehicle's glass pristine and safe.",
    price: 10,
    category: "glass",
    color: "#f472b6",
    bottleColor: "#f9a8d4",
    image: "/product-glass-cleaner.png",
    rating: { score: 5, halfStar: false, count: 73 },
    usageLine: "AMMONIA-FREE · TINT-SAFE",
  },
];
