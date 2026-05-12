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
        <section className="border-b-[3px] border-pure-outline bg-white px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cartoon text-xs uppercase tracking-widest text-pure-outline/50 mb-4">
              About the Set
            </h2>
            <p className="font-body text-lg text-pure-outline/90 leading-relaxed">
              Get the full Pure Ride lineup in one premium kit and tackle every surface of
              your vehicle without compromise. This complete bundle pairs our Wash &amp; Wax,
              Ceramic Spray, RVP Dressing, and Glass Cleaner — four pro-grade formulas
              engineered to work together from the first rinse to the final shine — plus a
              free microfiber wash cloth to get you started. Wash with vibrant color-safe
              suds, lock in protection with hydrophobic SiO2 coating, condition every rubber,
              vinyl, and plastic surface, and finish with streak-free crystal-clear glass.
              Perfect for car enthusiasts who want professional results at home — and the
              best value Pure Ride has to offer.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
