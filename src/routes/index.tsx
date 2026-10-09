import { createFileRoute } from "@tanstack/react-router";

import { MrKadiSite } from "@/components/site/MrKadiSite";
import { business } from "@/content/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mr.Kadi Barbershop Friseur | Barbershop in Dresden" },
      { name: "description", content: "Mr.Kadi Barbershop Friseur in Dresden: Haarschnitte, Bartpflege und Gesichtshaarentfernung. Dürerstraße 96, 01307 Dresden. Jetzt Kontakt aufnehmen." },
      { property: "og:title", content: "Mr.Kadi Barbershop Friseur | Barbershop in Dresden" },
      { property: "og:description", content: "Moderne Haarschnitte, Bartpflege und präzise Details in der Dürerstraße 96 in Dresden." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HairSalon",
        name: business.name,
        telephone: business.phoneDisplay,
        url: "/",
        hasMap: business.mapsUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          postalCode: business.address.postalCode,
          addressLocality: business.address.city,
          addressCountry: "DE",
        },
      }),
    }],
  }),
  component: MrKadiSite,
});
