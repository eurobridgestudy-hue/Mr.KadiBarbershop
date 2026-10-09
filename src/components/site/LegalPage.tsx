import { Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business } from "@/content/business";

export function LegalPage({ type }: { type: "impressum" | "datenschutz" }) {
  const isImprint = type === "impressum";
  return (
    <main className="min-h-screen bg-[#faf8f4] px-4 py-12 text-stone-950 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 transition-colors hover:text-stone-950"
        >
          <ArrowLeft className="size-4" /> Zur Website
        </Link>
        <p className="editorial-label mt-12 text-amber-800">
          Rechtliche Informationen
        </p>
        <h1 className="mt-4 font-display text-5xl font-extrabold text-stone-950 sm:text-7xl">
          {isImprint ? "IMPRESSUM" : "DATENSCHUTZ"}
        </h1>
        <div className="mt-10 rounded-r-lg border-l-4 border-amber-600 bg-amber-500/10 p-6">
          <p className="font-bold text-stone-900">
            Entwurf – noch nicht vollständig
          </p>
          <p className="mt-2 text-sm leading-relaxed text-stone-700">
            Diese Seite enthält noch nicht alle gesetzlich erforderlichen Angaben
            und wurde nicht rechtlich geprüft. Vor Veröffentlichung müssen die
            fehlenden Unternehmensangaben ergänzt werden.
          </p>
        </div>
        <div className="mt-12 space-y-10 leading-relaxed text-stone-800">
          {isImprint ? (
            <>
              <section>
                <h2 className="font-display text-2xl font-bold text-stone-950">
                  Bestätigte Kontaktdaten
                </h2>
                <p className="mt-4">
                  {business.name}
                  <br />
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                  <br />
                  {business.address.country}
                </p>
                <p className="mt-3">
                  <a
                    href={business.phoneHref}
                    className="font-bold text-amber-800 hover:text-stone-950"
                  >
                    Telefon: {business.phoneDisplay}
                  </a>
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl font-bold text-stone-950">
                  Noch zu ergänzen
                </h2>
                <p className="mt-4">
                  Verantwortliche Person, Rechtsform, E-Mail-Adresse sowie
                  gegebenenfalls Register- und Umsatzsteuerangaben müssen vor der
                  Veröffentlichung durch den Betreiber ergänzt und geprüft
                  werden.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="font-display text-2xl font-bold text-stone-950">
                  Hinweis zum Datenschutz
                </h2>
                <p className="mt-4">
                  Für eine vollständige Datenschutzerklärung müssen insbesondere
                  Hosting, technische Protokolldaten, eingesetzte Dienste,
                  Speicherdauer, Rechtsgrundlagen und Betroffenenrechte anhand
                  der tatsächlich veröffentlichten Website geprüft und
                  beschrieben werden.
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl font-bold text-stone-950">
                  Externe Links
                </h2>
                <p className="mt-4">
                  Die Website kann zu Google Maps und Google-Bewertungen
                  verlinken. Erst beim Öffnen eines solchen Links wird die externe
                  Website aufgerufen. Es ist keine Karte direkt eingebettet.
                </p>
              </section>
            </>
          )}
        </div>
        <div className="mt-14">
          <Button asChild variant="editorial" size="xl">
            <a href={business.phoneHref}>
              <Phone className="size-4" /> {business.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}