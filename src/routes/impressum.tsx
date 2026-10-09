import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum (Entwurf) | Mr.Kadi Barbershop Friseur" },
      { name: "description", content: "Entwurf des Impressums von Mr.Kadi Barbershop Friseur in Dresden. Noch nicht vollständig oder rechtlich geprüft." },
      { property: "og:title", content: "Impressum (Entwurf) | Mr.Kadi Barbershop Friseur" },
      { property: "og:description", content: "Noch unvollständiger Entwurf der rechtlichen Anbieterinformationen." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/impressum" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: () => <LegalPage type="impressum" />,
});