import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz (Entwurf) | Mr.Kadi Barbershop Friseur" },
      { name: "description", content: "Entwurf der Datenschutzhinweise von Mr.Kadi Barbershop Friseur in Dresden. Noch nicht vollständig oder rechtlich geprüft." },
      { property: "og:title", content: "Datenschutz (Entwurf) | Mr.Kadi Barbershop Friseur" },
      { property: "og:description", content: "Noch unvollständiger Entwurf der Datenschutzhinweise." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/datenschutz" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: () => <LegalPage type="datenschutz" />,
});