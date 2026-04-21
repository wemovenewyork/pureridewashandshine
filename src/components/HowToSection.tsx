import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Rinse & Prep",
    description:
      "Start with a thorough rinse using clean water to remove loose dirt and debris. For best results, work in shade or early morning.",
    color: "bg-pure-blue",
    textColor: "text-white",
  },
  {
    number: "02",
    title: "Foam & Scrub",
    description:
      "Apply Pure Foam Soap generously using a wash mitt or foam cannon. Work panel by panel from roof to bottom in straight lines.",
    color: "bg-pure-yellow",
    textColor: "text-pure-outline",
  },
  {
    number: "03",
    title: "Rinse & Shine",
    description:
      "Final rinse from top to bottom. Finish with Pure Ceramic Spray Shield for long-lasting hydrophobic protection and deep gloss.",
    color: "bg-pure-red",
    textColor: "text-white",
  },
];

export default function HowToSection() {
  return (
    <section className="bg-sky-50 py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="howto-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionHeading as="h2" highlight="HOW" id="howto-heading">
            TO GET THE SHINE
          </SectionHeading>
          <p className="font-body text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Three steps. One perfect ride. No excuses.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0">

          {/* Dashed connector — desktop only */}
          <div
            className="hidden md:block absolute top-16 left-[calc(16.666%+3rem)] right-[calc(16.666%+3rem)] border-t-[3px] border-dashed border-pure-outline z-0"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center md:flex-1 z-10"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Number badge circle */}
              <div
                className={[
                  "relative flex items-center justify-center",
                  "w-28 h-28 rounded-full",
                  "border-[4px] border-pure-outline shadow-cartoon-lg",
                  step.color,
                  "mb-6 shrink-0",
                ].join(" ")}
              >
                <span className={`font-display italic text-4xl leading-none ${step.textColor}`}>
                  {step.number}
                </span>

                {/* Small number bubble */}
                <div
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-pure-outline flex items-center justify-center border-[2px] border-white"
                  aria-hidden="true"
                >
                  <span className="font-cartoon text-xs text-white font-bold">
                    {i + 1}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div className="bg-white border-[3px] border-pure-outline shadow-cartoon p-6 text-center max-w-xs w-full">
                <h3 className="font-cartoon text-lg text-pure-outline uppercase tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-sm text-gray-500 mb-4">
            Need more detail? Check our full wash guides.
          </p>
          <a
            href="/how-to"
            className="inline-block font-cartoon text-sm uppercase tracking-widest border-[3px] border-pure-outline px-6 py-3 bg-pure-blue text-white shadow-cartoon hover:shadow-[6px_6px_0px_0px_#111827] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
          >
            View All Guides →
          </a>
        </div>
      </div>
    </section>
  );
}
