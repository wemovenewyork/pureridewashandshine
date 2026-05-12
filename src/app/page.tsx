import AnnouncementBar from "@/components/AnnouncementBar";
import ProductSchema from "@/components/ProductSchema";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowToSection from "@/components/HowToSection";
import ProductGrid from "@/components/ProductGrid";
import BundleCTA from "@/components/BundleCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FounderTrustLine from "@/components/FounderTrustLine";

export default function Home() {
  return (
    <>
      <ProductSchema />
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Nav />
      </div>
      <CartDrawer />
      <main>
        <Hero />
        <FounderTrustLine />
        <ProductGrid />
        <HowToSection />
        <BundleCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
