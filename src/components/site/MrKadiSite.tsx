import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  Menu,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import detailImage from "@/assets/mrkadi-detail.jpg";
import galleryImage from "@/assets/mrkadi-gallery.jpg";
import heroImage from "@/assets/mrkadi-hero.jpg";
import beardImage from "@/assets/service-beard.jpg";
import facialImage from "@/assets/service-facial.jpg";
import haircutImage from "@/assets/service-haircut.jpg";
import { Button } from "@/components/ui/button";
import { business, getBookingAction } from "@/content/business";

const navItems = [
  ["Start", "#start"],
  ["Leistungen", "#leistungen"],
  ["Über uns", "#ueber-uns"],
  ["Bewertungen", "#bewertungen"],
  ["Kontakt", "#kontakt"],
] as const;

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#start"
      className="group inline-flex flex-col leading-none"
      aria-label="Mr.Kadi – zum Seitenanfang"
    >
      <span
        className={`${
          compact ? "text-xl" : "text-2xl"
        } font-display font-extrabold tracking-wider text-white transition-colors group-hover:text-amber-300`}
      >
        {business.wordmark}
      </span>
      <span className="mt-1 text-[0.58rem] font-bold tracking-[0.25em] text-amber-400">
        {business.descriptor}
      </span>
    </a>
  );
}

function BookingButton({
  outline = false,
  className = "",
}: {
  outline?: boolean;
  className?: string;
}) {
  const action = getBookingAction();
  return (
    <Button
      asChild
      variant={outline ? "editorial-outline" : "editorial"}
      size="xl"
      className={className}
    >
      <a href={action.href} aria-label={action.ariaLabel}>
        <Phone className="size-4" aria-hidden="true" />
        {action.label}
      </a>
    </Button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-amber-500/20 bg-stone-950/90 backdrop-blur-xl shadow-xl shadow-black/40"
          : "bg-stone-950/70 backdrop-blur-md"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Wordmark compact />
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Hauptnavigation"
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative py-1 text-sm font-semibold tracking-wide text-stone-200 transition-colors hover:text-amber-300"
            >
              {label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <BookingButton />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-stone-100 hover:bg-stone-900 hover:text-amber-300 lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      {open && (
        <nav
          className="border-t border-amber-500/20 bg-stone-950/98 px-6 pb-8 pt-6 shadow-2xl lg:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="section-shell flex flex-col">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-stone-800/80 py-4 font-display text-2xl font-bold text-stone-100 transition-colors hover:text-amber-300"
              >
                {label}
              </a>
            ))}
            <BookingButton className="mt-6 w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div>
      <div className="inline-flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-amber-400" />
        <p
          className={`editorial-label ${
            light ? "text-amber-800" : "text-amber-400"
          }`}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={`mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl ${
          light ? "text-stone-950" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

const serviceList = [
  {
    ...business.services[0],
    image: haircutImage,
    tag: "Klassisch & Modern",
  },
  {
    ...business.services[1],
    image: beardImage,
    tag: "Kontur & Pflege",
  },
  {
    ...business.services[2],
    image: facialImage,
    tag: "Präzision & Finish",
  },
];

export function MrKadiSite() {
  return (
    <div className="bg-stone-950 text-stone-100 selection:bg-amber-400 selection:text-stone-950">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section
          id="start"
          className="relative scroll-mt-20 overflow-hidden border-b border-amber-500/20 pt-20"
        >
          {/* Ambient Lighting Orbs */}
          <div
            className="pointer-events-none absolute -left-48 top-10 h-96 w-96 rounded-full bg-amber-500/15 blur-[140px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-amber-400/10 blur-[130px]"
            aria-hidden="true"
          />

          <div className="grid min-h-[calc(100svh-5rem)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="section-shell flex items-center py-16 lg:w-auto lg:max-w-none lg:pl-[max(2.5rem,calc((100vw-80rem)/2))] lg:pr-12">
              <div className="max-w-3xl">
                {/* Luxury Badge */}
                <div className="float-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 shadow-[0_0_15px_rgba(226,185,68,0.25)] backdrop-blur-md">
                  <Sparkles className="size-3.5 text-amber-300" />
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Exklusiver Barbershop · Dresden
                  </span>
                </div>

                <h1 className="text-5xl font-extrabold leading-[0.94] tracking-tight sm:text-7xl lg:text-[5.6rem]">
                  DEIN STYLE.
                  <br />
                  <span className="gold-gradient-text">DEIN SCHNITT.</span>
                </h1>

                <p className="mt-8 max-w-xl text-base font-normal leading-relaxed text-stone-200 sm:text-lg">
                  Moderne Haarschnitte, meisterhafte Bartpflege und haarscharfe
                  Konturen – erlebe erstklassiges Barber-Handwerk bei Mr.Kadi in
                  Dresden.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <BookingButton />
                  <Button asChild variant="editorial-outline" size="xl">
                    <a href="#leistungen">
                      Leistungen entdecken{" "}
                      <ArrowDownRight className="size-4" />
                    </a>
                  </Button>
                </div>

                {/* Trust bar */}
                <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-amber-500/20 pt-8 text-sm">
                  <div className="flex items-center gap-2 text-stone-200">
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-white">4.9 / 5</span>
                    <span className="text-stone-300">Google Rating</span>
                  </div>
                  <span className="text-amber-500/40">✦</span>
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-stone-300 transition-colors hover:text-amber-300"
                  >
                    <MapPin className="size-4 text-amber-400" />
                    Dürerstraße 96 · Dresden
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="relative min-h-[50svh] overflow-hidden lg:min-h-full">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-stone-950 lg:via-transparent" />
              <img
                src={heroImage}
                alt="Meisterhafter Haarschnitt im exklusiven Ambiente von Mr.Kadi Barbershop Dresden"
                width={1600}
                height={1200}
                fetchPriority="high"
                className="image-reveal h-full w-full object-cover object-center"
              />

              {/* Floating Accolade Badge */}
              <div className="luxury-glass absolute right-6 top-6 z-20 flex items-center gap-3 rounded-lg border border-amber-400/40 px-4 py-2.5 shadow-2xl">
                <ShieldCheck className="size-5 text-amber-400" />
                <div className="text-left leading-tight">
                  <p className="text-xs font-bold tracking-wider text-white">
                    MR.KADI ATELIER
                  </p>
                  <p className="text-[0.65rem] text-amber-300">
                    Meisterhaftes Handwerk
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 border-t border-amber-500/20 bg-stone-950/85 px-6 py-3 text-xs text-stone-300 backdrop-blur-md">
                Editorialmotiv · Dürerstraße 96 · Dresden
              </div>
            </div>
          </div>
        </section>

        {/* ÜBER UNS (ABOUT) SECTION */}
        <section
          id="ueber-uns"
          className="scroll-mt-20 bg-[#faf8f4] py-24 text-stone-950 sm:py-32"
        >
          <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber-600" />
                <p className="editorial-label text-amber-800">
                  Mr.Kadi Barbershop
                </p>
              </div>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.04] text-stone-950 sm:text-5xl lg:text-6xl">
                GUTER STYLE BEGINNT MIT DEM RICHTIGEN SCHNITT.
              </h2>
            </div>
            <div>
              <div className="flex items-start gap-6 border-b border-stone-300/80 pb-10">
                <p className="text-lg leading-relaxed text-stone-800 sm:text-xl">
                  Ob moderner Fade, klassischer Faconschnitt oder präzise
                  Bartkontur mit dem Rasiermesser – bei Mr.Kadi Barbershop
                  Friseur dreht sich alles um deine Individualität, dein Wohlgefühl
                  und höchste Handwerkskunst direkt in Dresden.
                </p>
                <div className="hidden size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 text-stone-950 shadow-lg sm:flex">
                  <Scissors className="size-8" strokeWidth={1.5} />
                </div>
              </div>

              {/* 3 Pillars */}
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:border-amber-400 hover:shadow-md">
                  <CheckCircle2 className="size-6 text-amber-600" />
                  <h3 className="mt-3 font-display text-base font-bold text-stone-950">
                    Präzision
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    Exakte Linien, saubere Übergänge und messerscharfe Konturen.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:border-amber-400 hover:shadow-md">
                  <Sparkles className="size-6 text-amber-600" />
                  <h3 className="mt-3 font-display text-base font-bold text-stone-950">
                    Premium Produkte
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    Ausgewählte Öle und Pflege für spürbar gesundes Haar & Bart.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:border-amber-400 hover:shadow-md">
                  <Clock className="size-6 text-amber-600" />
                  <h3 className="mt-3 font-display text-base font-bold text-stone-950">
                    Entspannte Zeit
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    Eine Auszeit vom Alltag bei professioneller Beratung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEISTUNGEN (SERVICES) SECTION */}
        <section
          id="leistungen"
          className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
        >
          {/* Ambient Spotlight */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[150px]"
            aria-hidden="true"
          />

          <div className="section-shell relative">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
              <SectionHeading
                eyebrow="Unsere Leistungen"
                title="DEIN LOOK. UNSER HANDWERK."
              />
              <p className="text-base leading-relaxed text-stone-200 sm:text-lg lg:justify-self-end">
                Entdecke maßgeschneiderte Services rund um Haarschnitte,
                Bartpflege und Gesichtspflege mit Leidenschaft und Perfektion.
              </p>
            </div>

            {/* Services Cards Grid */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {serviceList.map((service, index) => (
                <article
                  key={service.title}
                  className="luxury-card group flex flex-col overflow-hidden rounded-2xl border border-amber-500/25 bg-stone-900/70 backdrop-blur-md transition-all duration-500 hover:border-amber-400 hover:shadow-[0_20px_45px_-10px_rgba(226,185,68,0.25)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={`Service: ${service.title} bei Mr.Kadi Barbershop`}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 right-3 rounded-full border border-amber-400/40 bg-stone-950/80 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                      {service.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold tracking-widest text-amber-400">
                        [ 0{index + 1} ]
                      </span>
                      <Scissors className="size-4 text-amber-400/60" />
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-white transition-colors group-hover:text-amber-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-stone-200">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-amber-500/20 pt-5">
                      <a
                        href={business.phoneHref}
                        className="inline-flex items-center gap-2 text-sm font-bold text-amber-300 transition-colors group-hover:text-amber-200"
                      >
                        Jetzt Termin vereinbaren{" "}
                        <ArrowDownRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <BookingButton />
            </div>
          </div>
        </section>

        {/* DETAIL & CRAFTSMANSHIP SECTION */}
        <section className="border-y border-amber-500/20 bg-stone-900/50 py-24 sm:py-32">
          <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/35 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="aspect-[3/4] max-h-[48rem] overflow-hidden rounded-xl">
                <img
                  src={detailImage}
                  alt="Präzise Rasiermesser-Konturierung bei Mr.Kadi"
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="luxury-glass absolute bottom-6 left-6 right-6 rounded-lg border border-amber-400/40 p-4 shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Klassisches Handwerk
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Präzise Rasur & millimetergenaue Konturen
                </p>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Der Mr.Kadi Look"
                title="PRÄZISION BIS INS DETAIL."
              />
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-200">
                Ein außergewöhnlicher Look entsteht durch die Liebe zum Detail.
                Wir vereinen traditionelle Handwerkskunst mit zeitgemäßen
                Trends – für ein makelloses Ergebnis, das zu deinem Charakter
                passt.
              </p>

              {/* Feature Metrics */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-amber-500/30 bg-stone-950/70 p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
                  <p className="font-display text-lg font-extrabold tracking-wider text-amber-400">
                    STYLE
                  </p>
                  <p className="mt-2 text-xs font-medium leading-5 text-stone-300">
                    Individuell & modern
                  </p>
                </div>
                <div className="rounded-xl border border-amber-500/30 bg-stone-950/70 p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
                  <p className="font-display text-lg font-extrabold tracking-wider text-amber-400">
                    PRÄZISION
                  </p>
                  <p className="mt-2 text-xs font-medium leading-5 text-stone-300">
                    Scharfe Konturen
                  </p>
                </div>
                <div className="rounded-xl border border-amber-500/30 bg-stone-950/70 p-5 text-center shadow-lg transition-transform hover:-translate-y-1">
                  <p className="font-display text-lg font-extrabold tracking-wider text-amber-400">
                    PFLEGE
                  </p>
                  <p className="mt-2 text-xs font-medium leading-5 text-stone-300">
                    Erstklassige Frische
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <BookingButton outline />
              </div>
            </div>
          </div>
        </section>

        {/* IMPRESSIONEN / GALLERY SECTION */}
        <section className="bg-[#faf8f4] py-24 text-stone-950 sm:py-32">
          <div className="section-shell">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-amber-600" />
                  <p className="editorial-label text-amber-800">Impressionen</p>
                </div>
                <h2 className="mt-4 font-display text-4xl font-extrabold text-stone-950 sm:text-6xl">
                  ATMOSPHÄRE & HANDWERK.
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-stone-700">
                Lerne den exklusiven Barbershop-Lifestyle kennen. Authentisches
                Ambiente und kompromisslose Leidenschaft.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-2xl border border-stone-300 bg-stone-900 shadow-2xl">
              <div className="relative aspect-[16/9] w-full">
                <img
                  src={galleryImage}
                  alt="Atmosphäre und klassische Barber-Ausstattung bei Mr.Kadi"
                  width={1808}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <span className="editorial-label text-amber-400">
                      Salon Impression
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Elegantes Ambiente in Dresden
                    </h3>
                  </div>
                  <Button asChild variant="editorial" size="lg">
                    <a href={business.phoneHref}>Jetzt Platz sichern</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEWERTUNGEN (REVIEWS) SECTION */}
        <section id="bewertungen" className="scroll-mt-20 py-24 sm:py-32">
          <div className="section-shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Kundenbewertungen"
                title="DAS SAGEN UNSERE KUNDEN."
              />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-200">
                Zufriedene Kunden und erstklassige Rezensionen sprechen für
                sich. Erlebe den Unterschied selbst.
              </p>

              {/* Spotlight Testimonial Card */}
              <div className="mt-10 rounded-2xl border border-amber-500/30 bg-stone-900/70 p-8 shadow-xl">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg italic leading-relaxed text-white">
                  &ldquo;Präziser Haarschnitt, perfekte Konturen und absolut
                  top Service. Für mich ganz klar der beste Barbershop in
                  Dresden!&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-amber-500/20 pt-4 text-xs text-stone-300">
                  <span className="font-bold text-amber-300">
                    Google Rezension · Verifizierter Kunde
                  </span>
                  <span>Dresden</span>
                </div>
              </div>
            </div>

            {/* Score Showcase */}
            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 p-8 shadow-2xl sm:p-12">
              <div className="flex items-center gap-3 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-6 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-display text-6xl font-extrabold text-white sm:text-7xl">
                4,9{" "}
                <span className="font-mono text-2xl font-normal text-amber-400">
                  / 5.0
                </span>
              </p>
              <p className="mt-3 text-lg font-semibold text-stone-200">
                auf Google · 134 echte Bewertungen
              </p>
              <p className="mt-4 text-xs leading-relaxed text-stone-400">
                Stand: Von Unternehmensprofil bereitgestellt. Ausgezeichnet mit
                Höchstnoten für Freundlichkeit, Beratung & Schnittpräzision.
              </p>

              <div className="mt-8">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-400/50 bg-amber-400/10 px-5 py-3 text-sm font-bold text-amber-300 transition-all hover:bg-amber-400 hover:text-stone-950"
                >
                  Alle Bewertungen auf Google lesen{" "}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* KONTAKT & STANDORT SECTION */}
        <section
          id="kontakt"
          className="scroll-mt-20 border-y border-amber-500/20 bg-stone-900/60 py-24 sm:py-32"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Finde uns in Dresden"
              title="DEIN NÄCHSTER SCHNITT WARTET."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Adresse */}
              <div className="luxury-card rounded-2xl border border-amber-500/25 bg-stone-950/80 p-8 shadow-xl sm:p-12">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
                  <MapPin className="size-6" />
                </div>
                <p className="editorial-label mt-6 text-amber-400">Adresse</p>
                <h3 className="mt-3 text-3xl font-extrabold text-white">
                  {business.name}
                </h3>
                <address className="mt-6 text-lg not-italic leading-relaxed text-stone-200">
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                  <br />
                  {business.address.country}
                </address>
                <div className="mt-8">
                  <Button asChild variant="editorial-outline" size="lg">
                    <a
                      href={business.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MapPin className="size-4" /> Route auf Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Card 2: Kontakt & Anruf */}
              <div className="luxury-card rounded-2xl border border-amber-500/25 bg-stone-950/80 p-8 shadow-xl sm:p-12">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
                  <Phone className="size-6" />
                </div>
                <p className="editorial-label mt-6 text-amber-400">
                  Direkter Kontakt
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-3 block font-display text-3xl font-extrabold text-white transition-colors hover:text-amber-300 sm:text-4xl"
                >
                  {business.phoneDisplay}
                </a>
                <p className="mt-6 text-base leading-relaxed text-stone-300">
                  Rufe uns an, um deinen Termin direkt und unkompliziert zu
                  vereinbaren.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="editorial" size="xl">
                    <a
                      href={business.phoneHref}
                      aria-label={`${business.phoneDisplay} jetzt anrufen`}
                    >
                      <Phone className="size-4" /> Jetzt anrufen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DRAMATIC FINAL CTA BANNER */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/15 blur-[160px]"
            aria-hidden="true"
          />
          <div className="section-shell relative">
            <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 px-8 py-20 text-center shadow-2xl sm:px-16">
              <span className="editorial-label text-amber-400">
                Dein neuer Style
              </span>
              <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] text-white sm:text-7xl">
                BEREIT FÜR DEINEN NÄCHSTEN LOOK?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-200">
                Haarschnitt, Bartrasur oder Konturen? Kontaktiere Mr.Kadi
                Barbershop Friseur in Dresden und sichere dir deinen Termin.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="xl"
                  variant="editorial"
                  className="shadow-2xl"
                >
                  <a
                    href={business.phoneHref}
                    aria-label={getBookingAction().ariaLabel}
                  >
                    <Phone className="size-4" /> Termin vereinbaren
                  </a>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="editorial-outline"
                >
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin className="size-4" /> Route planen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-amber-500/20 bg-stone-950 pb-28 pt-16 lg:pb-12">
        <div className="section-shell">
          <div className="grid gap-12 border-b border-stone-800 pb-14 md:grid-cols-3">
            <div>
              <Wordmark />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-300">
                Meisterhafte Haarschnitte, Bartpflege und präzise Details in der
                Dürerstraße in Dresden.
              </p>
            </div>
            <div>
              <p className="editorial-label text-amber-400">Standort</p>
              <p className="mt-5 text-sm leading-relaxed text-stone-300">
                Dürerstraße 96
                <br />
                01307 Dresden
                <br />
                <a
                  href={business.phoneHref}
                  className="mt-2 inline-block font-bold text-amber-300 hover:underline"
                >
                  {business.phoneDisplay}
                </a>
              </p>
            </div>
            <div>
              <p className="editorial-label text-amber-400">Navigation</p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-stone-300">
                {navItems.slice(1).map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors hover:text-amber-300"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-amber-300"
                >
                  Route planen
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {business.name}. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-6 font-semibold">
              <Link
                to="/impressum"
                className="text-stone-300 transition-colors hover:text-amber-300"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-stone-300 transition-colors hover:text-amber-300"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-500/20 bg-stone-950/95 p-3.5 backdrop-blur-xl lg:hidden">
        <BookingButton className="w-full" />
      </div>
    </div>
  );
}