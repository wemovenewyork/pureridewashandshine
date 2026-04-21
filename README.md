# Pure Ride Wash & Shine

**Client:** FutreEng  
**Brand:** Bold, esports-inspired car care products — DTC e-commerce  
**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Phosphor Icons · Zustand · Vercel

---

## Setup

```bash
npm install
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL` | No (future) | Shopify Storefront API endpoint |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` | No (future) | Shopify public access token |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No (future) | Stripe publishable key for checkout |

No `.env` file is needed to run locally — the app uses stub Zustand cart state.

---

## Design Tokens

All tokens are in `src/app/globals.css` using Tailwind v4 `@theme {}` syntax.

### Colors
| Token | Hex | Usage |
|---|---|---|
| `pure-blue` | `#00a8ff` | Primary, hero bg, CTA |
| `pure-darkblue` | `#002855` | Footer bg, speech bubble |
| `pure-red` | `#ff3333` | Primary CTA buttons |
| `pure-yellow` | `#ffcc00` | Highlights, badges, secondary CTA |
| `pure-outline` | `#111827` | All borders, drop shadows |

### Typography
| Variable | Font | Usage |
|---|---|---|
| `.font-display` | Bungee (italic) | All major headlines |
| `.font-cartoon` | Russo One | Subheadings, CTAs, UI labels |
| `.font-body` | Chakra Petch 600/700 | Body copy, UI text |

### Cartoon Shadows (the signature pattern)
```
shadow-cartoon:    4px 4px 0px 0px #111827
shadow-cartoon-lg: 8px 8px 0px 0px #111827
shadow-cartoon-xl: 12px 12px 0px 0px #111827
```

All cards, buttons, and framed elements use these. Border convention: `3px–4px solid #111827` on every surface.

---

## Component Architecture

```
src/
  app/
    layout.tsx          ← fonts + metadata
    globals.css         ← all design tokens
    page.tsx            ← landing page
    products/page.tsx   ← full product grid with category filter
    bundles/page.tsx    ← bundle listings
    how-to/page.tsx     ← wash guides
    about/page.tsx      ← brand story
    cart/page.tsx       ← cart page
  components/
    Nav.tsx             ← sticky nav, logo, cart badge, hamburger
    Hero.tsx            ← blue hero, animated blobs, wavy SVG divider
    HowToSection.tsx    ← 3-step guide with circular badges + dashed connector
    ProductGrid.tsx     ← 5-col grid, uses PRODUCTS data array
    ProductCard.tsx     ← colored header, CSS bottle placeholder, add-to-cart FAB
    BundleCTA.tsx       ← yellow section, rotating SAVE 25% badge, bundle card
    Testimonials.tsx    ← 3 staggered cards with avatar overflow badges
    Newsletter.tsx      ← bubble bg, white card, email form
    Footer.tsx          ← darkblue, 4-col, social links, support block
    CartDrawer.tsx      ← slide-in cart drawer
    ui/
      CartoonButton.tsx ← variant=red|yellow|dark|white, size=sm|md|lg
      CartoonCard.tsx   ← border + shadow wrapper
      SectionHeading.tsx ← italic Bungee with optional yellow highlight pill
  store/
    cartStore.ts        ← Zustand cart with persist middleware
```

---

## Cart Architecture

`src/store/cartStore.ts` uses Zustand with `persist` middleware (localStorage). Cart state:

```ts
interface CartItem {
  id, name, subtitle, price, quantity, image?, color
}
```

To integrate **Shopify Storefront API**: replace `addItem`/`removeItem`/`total` calls with Storefront API mutations in a `src/lib/shopify.ts` adapter without touching any component code — the store interface is the seam.

To integrate **Stripe Checkout**: replace the checkout button action with a call to a `POST /api/checkout` route that creates a Stripe Checkout session and redirects.

---

## Logo

`/public/pure-ride-logo.svg` is a generated placeholder. Replace with the final brand asset:

1. Export as PNG at 400×400px minimum, place at `/public/pure-ride-logo.png`
2. Update `src="..."` in `Nav.tsx`, `Hero.tsx`, and `Footer.tsx`

---

## Deployment (Vercel)

1. Push to GitHub
2. Import repo at vercel.com/new
3. Framework: Next.js — auto-detected
4. No env vars needed for stub build
5. Add commerce env vars when integrating Shopify or Stripe
