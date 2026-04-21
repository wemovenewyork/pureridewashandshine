import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import BundleCTA from "@/components/BundleCTA";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = { title: "Bundles | Pure Ride Wash & Shine" };

export default function BundlesPage() {
  return (
    <>
      <Nav />
      <CartDrawer />
      <main className="min-h-screen bg-sky-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionHeading as="h1" highlight="PURE RIDE">
            BUNDLES
          </SectionHeading>
          <p className="font-body text-base text-gray-600 mt-4 max-w-xl">
            Save big with our curated detailing kits — built for every level, from quick
            weekend washes to full pro-grade decon details.
          </p>
        </div>
        <BundleCTA />
      </main>
      <Footer />
    </>
  );
}
