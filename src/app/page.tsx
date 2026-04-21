import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowToSection from "@/components/HowToSection";
import ProductGrid from "@/components/ProductGrid";
import BundleCTA from "@/components/BundleCTA";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Nav />
      <CartDrawer />
      <main>
        <Hero />
        <ProductGrid />
        <Testimonials />
        <BundleCTA />
        <HowToSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
