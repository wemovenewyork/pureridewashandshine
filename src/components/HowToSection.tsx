import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Rinse & Prep",
    description: "Start with a thorough rinse to remove loose dirt. Work in shade or early morning for best results.",
    accent: "#00a8ff",
    bg: "rgba(0,168,255,0.08)",
    border: "rgba(0,168,255,0.3)",
  },
  {
    number: "02",
    title: "Foam & Scrub",
    description: "Apply Pure Blue Soap with a wash mitt or foam cannon. Work panel by panel from roof down.",
    accent: "#ffcc00",
    bg: "rgba(255,204,0,0.08)",
    border: "rgba(255,204,0,0.3)",
  },
  {
    number: "03",
    title: "Rinse & Shine",
    description: "Final rinse top to bottom. Finish with Ceramic Spray for long-lasting hydrophobic protection.",
    accent: "#ff3333",
    bg: "rgba(255,51,51,0.08)",
    border: "rgba(255,51,51,0.3)",
  },
];

export default function HowToSection() {
  return (
    <section
      className="bg-white border-b-[3px] border-pure-outline py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="howto-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeading as="h2" highlight="HOW" id="howto-heading">
            TO GET THE SHINE
          </SectionHeading>
          <p className="font-body text-base text-gray-500 mt-4 max-w-lg mx-auto">
            Three steps. One perfect ride. No excuses.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Dashed connector — desktop only */}
          <div
            className="hidden md:block absolute top-14 left-[calc(16.666%+2.5rem)] right-[calc(16.666%+2.5rem)] border-t-[3px] border-dashed border-pure-outline/30 z-0"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center z-10">
              {/* Number badge */}
              <div
                className="w-28 h-28 rounded-full border-[4px] border-pure-outline flex items-center justify-center mb-8 shadow-cartoon-lg shrink-0"
                style={{ background: step.bg, boxShadow: `8px 8px 0 #111827, 0 0 30px ${step.accent}40` }}
              >
                <span
                  className="font-display italic text-5xl leading-none"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </span>
              </div>

              {/* Card */}
              <div
                className="w-full border-[3px] border-pure-outline p-6 text-center shadow-cartoon"
                style={{ background: "#fff", borderTop: `4px solid ${step.accent}` }}
              >
                <h3 className="font-cartoon text-base text-pure-outline uppercase tracking-widest mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step connector arrow (mobile) */}
              {i < 2 && (
                <div
                  className="md:hidden font-display italic text-3xl text-pure-outline/30 mt-4"
                  aria-hidden="true"
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/how-to"
            className="inline-block font-cartoon text-sm uppercase tracking-widest border-[3px] border-pure-outline px-6 py-3 bg-pure-outline text-white shadow-cartoon hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
          >
            View All Guides →
          </a>
        </div>
      </div>
    </section>
  );
}
