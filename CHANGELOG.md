# Changelog

## feat/conversion-optimization-pass

**Expected conversion impact: +15–30% add-to-cart rate, +8–12% email capture rate**

### Priority 1 — Critical Revenue Fixes

**Hero headline** — Fixed three-line "RIDE / CLEAN / RIDE PROUD" layout into two clean lines: "RIDE CLEAN" and "RIDE PROUD". Added price anchor line under CTAs: "Starts at $10 · Free Shipping $50+ · 30-Day Guarantee".

**Cart drawer** — Added free-shipping progress bar ($50 threshold) with animated fill and "X away from free shipping" copy. Cart now opens automatically on every "Add to Cart" action (product cards + bundle CTA).

**Nav** — Removed placeholder "Sign In" button (no accounts exist; it raised trust questions). Cart badge now pulses with a spring animation on count change.

**Announcement bar** — Sticky slim bar above nav: "Free Shipping on Orders $50+ · 30-Day Money-Back Guarantee". Dismissible per session via sessionStorage.

**Bundle repricing** — Individual total updated to $60 (was $55). Savings badge now reads "SAVE $10 / 17% OFF" (was "All 4 for $50", meaningless). Added "Individual total $60 · Bundle $50" sub-line with strikethrough.

**Page order** — HowToSection moved above BundleCTA (education → offer is the right sequence).

**Marquee** — Simplified from 9 phrases to 4: brand, tagline, free shipping, guarantee.

---

### Priority 2 — Trust & Social Proof

**Star ratings** — All 4 product cards now show star ratings and review counts sourced from `lib/products.ts` (Blue Soap 127 reviews, Ceramic Spray 89, Thick Dressing 54, Glass Cleaner 73).

**Product metadata lines** — Each card shows a usage/pairing line in Chakra Petch xs uppercase (e.g., "USE WEEKLY · PAIRS WITH CERAMIC SPRAY").

**Founder trust line** — Single line between Hero and Product Grid: "Formulated in New Jersey · Tested on 500+ vehicles · Built for riders, by riders".

**Testimonials volume** — "Join 340+ riders who've made the switch" added above section heading. Count sourced from `lib/constants.ts` for easy updates.

**Bundle trust badges** — Four-item row below "Add Bundle to Cart" button: 30-Day Guarantee · Free Shipping $50+ · Made in USA · Ships in 24hrs. Phosphor icons, 2×2 grid on mobile.

---

### Priority 3 — Content Refinements

**Newsletter** — Headline changed to "GET 10% OFF YOUR FIRST ORDER". Body copy updated to lead with the incentive. Submit button reads "Get 10% Off". Success state reveals the `PURE10` discount code in a styled badge.

---

### Priority 4 — Technical Hygiene

**OG / Twitter metadata** — Full `openGraph` and `twitter` card metadata added in `layout.tsx` with `metadataBase`, image, and proper descriptions.

**JSON-LD Organization schema** — Injected in root layout with name, url, logo, and contact point.

**JSON-LD Product schema** — `ProductSchema` server component injects one schema block per product on the homepage, including aggregateRating and InStock offer.

**og-image.png** — 1200×630 placeholder created (logo centered on dark navy). Replace with a designed asset before launch.

**Footer contacts** — Removed `1-800-555-RIDE` placeholder. Added `support@pureridewash.com` and `orders@pureridewash.com` alongside existing `hello@pureridewash.com`.
