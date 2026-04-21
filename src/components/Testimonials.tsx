import { Star } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "./ui/ScrollReveal";

const testimonials = [
  {
    name: "Marcus T.",
    handle: "@cleancarlife",
    avatar: "MT",
    avatarColor: "#00a8ff",
    rating: 5,
    text: "The Blue Soap is legit insane. Most suds I've ever seen from a consumer product. Zero swirls after. This is my new go-to wash for life.",
    product: "Blue Soap",
    offset: "lg:mt-0",
  },
  {
    name: "Jasmine R.",
    handle: "@detailqueen",
    avatar: "JR",
    avatarColor: "#ff3333",
    rating: 5,
    text: "I bought the 4-piece bundle and it completely replaced my entire detailing kit. The Ceramic Spray alone is worth it — six months later still beading water.",
    product: "4-Piece Bundle",
    offset: "lg:mt-12",
  },
  {
    name: "Devon M.",
    handle: "@blackcarbros",
    avatar: "DM",
    avatarColor: "#ffcc00",
    rating: 5,
    text: "Glass Cleaner on my tints with zero streaks, no ammonia smell. The Thick Dressing on my interior trim looks incredible. Pure Ride is the real deal.",
    product: "Glass Cleaner",
    offset: "lg:mt-6",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white border-b-[3px] border-pure-outline py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">

        <ScrollReveal animation="fadeUp" className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border-[2px] border-pure-outline px-3 py-1 mb-4 bg-pure-outline">
              <span className="font-cartoon text-[10px] uppercase tracking-[0.2em] text-white">Reviews</span>
            </div>
            <h2 id="testimonials-heading" className="font-display italic text-5xl md:text-6xl leading-none tracking-wide text-pure-outline">
              REAL RIDERS.<br />
              <span className="text-pure-blue">REAL RESULTS.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} weight="fill" className="text-pure-yellow" aria-hidden="true" />
            ))}
            <span className="font-cartoon text-sm text-pure-outline ml-2 uppercase tracking-wider">5.0</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              animation="fadeUp"
              delay={i * 120}
              className={`relative ${t.offset}`}
            >
              {/* Avatar */}
              <div
                className="absolute -top-5 -left-3 z-20 w-12 h-12 border-[3px] border-pure-outline shadow-cartoon flex items-center justify-center font-cartoon text-white text-sm"
                style={{ background: t.avatarColor }}
                aria-hidden="true"
              >
                {t.avatar}
              </div>

              {/* Card */}
              <div
                className="border-[3px] border-pure-outline shadow-cartoon-lg p-6 pt-10 hover:shadow-cartoon-xl transition-shadow duration-200 bg-white"
                style={{ borderTop: `4px solid ${t.avatarColor}` }}
              >
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} weight="fill" className="text-pure-yellow" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-4 border-t-[2px] border-gray-100">
                  <div>
                    <p className="font-cartoon text-xs text-pure-outline uppercase tracking-widest">{t.name}</p>
                    <p className="font-body text-xs text-gray-400 mt-0.5">{t.handle}</p>
                  </div>
                  <div className="px-2 py-1 border-[2px] border-pure-outline" style={{ background: `${t.avatarColor}15` }}>
                    <span className="font-cartoon text-[9px] uppercase tracking-widest" style={{ color: t.avatarColor }}>{t.product}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
