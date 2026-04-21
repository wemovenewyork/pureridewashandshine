import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import HowToSection from "@/components/HowToSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = { title: "How-To Guides | Pure Ride Wash & Shine" };

export default function HowToPage() {
  return (
    <>
      <Nav />
      <CartDrawer />
      <main className="min-h-screen bg-sky-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionHeading as="h1" highlight="WASH">
            GUIDES
          </SectionHeading>
          <p className="font-body text-base text-gray-600 mt-4 max-w-xl">
            Step-by-step guides from Pure Ride pros — from a basic maintenance wash to
            full paint decontamination and ceramic coating application.
          </p>
        </div>
        <HowToSection />
      </main>
      <Footer />
    </>
  );
}
