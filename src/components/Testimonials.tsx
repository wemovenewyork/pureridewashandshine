import SectionHeading from "./ui/SectionHeading";
import { Star } from "@phosphor-icons/react/dist/ssr";

const testimonials = [
  {
    name: "Marcus T.",
    handle: "@cleancarlife",
    avatar: "MT",
    avatarColor: "#00a8ff",
    rating: 5,
    text: "The Pure Foam Soap is legit insane. Most suds I've ever seen from a consumer product. Zero swirls after. This is my new go-to wash for life.",
    product: "Pure Foam Soap",
    offset: "md:mt-0",
  },
  {
    name: "Jasmine R.",
    handle: "@detailqueen",
    avatar: "JR",
    avatarColor: "#ff3333",
    rating: 5,
    text: "I bought the Complete Bundle on a whim and it completely replaced my entire detailing kit. The Ceramic Spray Shield alone is worth the price. Six months later still beading water.",
    product: "Complete Bundle",
    offset: "md:mt-16",
  },
  {
    name: "Devon M.",
    handle: "@blackcarbros",
    avatar: "DM",
    avatarColor: "#002855",
    rating: 5,
    text: "Wheel Blast Degreaser turning purple on my rims is the most satisfying thing I've ever seen. Brake dust doesn't stand a chance. 10/10 no notes.",
    product: "Wheel Blast Degreaser",
    offset: "md:mt-8",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-sky-50 py-20 px-4 sm:px-6 lg:px-8 border-t-[3px] border-pure-outline"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionHeading as="h2" highlight="REAL" id="testimonials-heading">
            RIDERS. REAL RESULTS.
          </SectionHeading>
          <p className="font-body text-base text-gray-500 mt-4">
            Don&apos;t take our word for it — here&apos;s what the community is saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((t) => (
            <div key={t.name} className={`relative ${t.offset}`}>
              {/* Avatar badge — overflows the card corner */}
              <div
                className="absolute -top-6 -left-4 z-20 w-14 h-14 rounded-full border-[3px] border-pure-outline shadow-cartoon flex items-center justify-center font-cartoon text-white text-sm font-bold"
                style={{ background: t.avatarColor }}
                aria-hidden="true"
              >
                {t.avatar}
              </div>

              {/* Card with corner-clipped radius */}
              <div
                className="relative bg-white border-[3px] border-pure-outline shadow-cartoon-lg p-6 pt-10"
                style={{
                  borderRadius: "0 16px 16px 16px",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      weight="fill"
                      className="text-pure-yellow"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="font-body text-sm text-gray-700 leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="border-t-[2px] border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-cartoon text-xs text-pure-outline uppercase tracking-wide">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-gray-400">{t.handle}</p>
                  </div>
                  <div className="bg-pure-blue/10 border-[2px] border-pure-blue/30 px-2 py-1">
                    <span className="font-cartoon text-[9px] text-pure-blue uppercase tracking-widest">
                      {t.product}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
