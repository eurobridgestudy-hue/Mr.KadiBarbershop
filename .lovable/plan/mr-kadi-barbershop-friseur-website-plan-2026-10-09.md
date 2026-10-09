# Mr.Kadi Barbershop Friseur — Website plan

## Goal
Build the complete German, mobile-first one-page website at `/`, focused on turning visitors into phone enquiries while preserving every factual limitation in the brief.

## Visual direction
- Create a distinctive editorial composition using deep charcoal, warm off-white, and restrained bronze tokens.
- Use Manrope for confident display typography and Inter for highly legible body copy.
- Generate a cohesive set of clearly generic editorial grooming photographs; label the gallery as visual inspiration so no image implies real staff, customers, work, or premises.
- Use asymmetric image crops, strong typography, generous spacing, fine rules, and restrained reveal/hover motion with reduced-motion support.

## Page experience
- Build a sticky desktop header and an accessible mobile menu with working anchor links for Start, Leistungen, Über uns, Bewertungen, and Kontakt.
- Keep “Termin vereinbaren” prominent throughout; because no booking URL is verified, every booking action will call `+49 1522 2323038` and explicitly communicate that it starts a call.
- Build the requested sections: hero, introduction, three verified services, craftsmanship, inspiration gallery, static Google review summary, contact/location, closing CTA, and footer.
- Add a single mobile sticky booking action without obscuring content or the footer.
- Use the supplied Google place link for reviews and directions, with an address-search fallback available in centralized business content. Avoid a third-party map embed and its privacy/cookie overhead.
- Hide opening hours, prices, social links, and booking-provider details until verified values are configured.

## Content and configuration
- Centralize confirmed business details, service copy, review snapshot, links, optional booking URL, optional opening hours, optional social profiles, optional original photos, and legal details in one editable content module.
- Implement booking-link resolution once: a verified booking URL takes priority; otherwise the confirmed phone link is used.
- Keep all public copy polished German and avoid unsupported claims, invented reviews, staff, prices, durations, opening status, or appointment confirmations.

## Legal pages
- Add `/impressum` and `/datenschutz` as clearly marked draft information pages requiring completion and legal review.
- Show only confirmed business details publicly; missing legal fields remain internal configuration values and never appear as raw placeholders.
- Provide navigation back to the main website and route-specific metadata.

## SEO, accessibility, and performance
- Set German document language and unique route metadata, including the supplied local-search title/description, Open Graph fields, `og:type`, and Twitter card.
- Add verified-only `HairSalon`/`LocalBusiness` JSON-LD without hours, prices, booking URL, or aggregate-rating markup.
- Use one H1, semantic landmarks, logical headings, descriptive image text, strong focus states, keyboard-safe navigation, large touch targets, and anchor offsets.
- Optimize generated images into responsive local assets, eagerly load only the first-view image, and lazy-load imagery below it.
- Keep robots crawlable and add a sitemap response covering the three public routes.

## Technical details
- Use focused React components for the shared header, sections, CTA, and footer while keeping the one-page anchor architecture requested.
- Extend Tailwind v4 semantic tokens in `src/styles.css`; do not place raw colors in page components.
- Use the existing design-system Button for interactive calls to action and Lucide icons where appropriate.
- Record the centralized content/booking-resolution architecture in `AGENTS.md`.

## Verification
- Add focused tests for the booking fallback and confirmed business/contact values.
- Run the relevant tests and inspect the latest build diagnostics.
- Exercise navigation, mobile menu, call links, directions, review link, and legal-page links in the live preview.
- Visually inspect desktop and mobile layouts for image loading, readable crops, focus/overlap issues, sticky controls, and horizontal overflow.
