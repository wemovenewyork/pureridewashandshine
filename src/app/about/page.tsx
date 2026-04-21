import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = { title: "About | Pure Ride Wash & Shine" };

export default function AboutPage() {
  return (
    <>
      <Nav />
      <CartDrawer />
      <main className="min-h-screen bg-sky-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading as="h1" highlight="OUR">
            STORY
          </SectionHeading>
          <div className="mt-10 space-y-6 font-body text-base text-gray-700 leading-relaxed">
            <p>
              Pure Ride Wash & Shine was born from a simple belief: your car should
              look as bold and aggressive as you feel behind the wheel. We got tired
              of watered-down, generic formulas that promised results and delivered
              mediocrity.
            </p>
            <p>
              Our team of detailing obsessives — engineers, pro racers, and weekend
              warriors — spent three years developing formulas that actually perform.
              Every product in our lineup is tested on real vehicles in real conditions:
              track days, daily drivers, show cars, and everything in between.
            </p>
            <p>
              The bold aesthetic? That&apos;s intentional. Car care shouldn&apos;t feel like
              a pharmaceutical brand. It should feel like the sport it supports.
              Hard edges, bold colors, and uncompromising performance — that&apos;s Pure Ride.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
