export type OpeningHour = {
  day: string;
  hours: string;
};

export const business = {
  name: "Mr.Kadi Barbershop Friseur",
  wordmark: "MR.KADI",
  descriptor: "BARBERSHOP · FRISEUR",
  phoneDisplay: "+49 1522 2323038",
  phoneHref: "tel:+4915222323038",
  address: {
    street: "Dürerstraße 96",
    postalCode: "01307",
    city: "Dresden",
    country: "Deutschland",
  },
  mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJD345XADJCkcRAff4mgloO8c",
  directionsFallbackUrl:
    "https://www.google.com/maps/search/?api=1&query=D%C3%BCrerstra%C3%9Fe%2096%2C%2001307%20Dresden%2C%20Germany",
  bookingUrl: null as string | null,
  openingHours: [] as OpeningHour[],
  socialLinks: [] as Array<{ label: string; href: string }>,
  originalPhotos: [] as string[],
  review: {
    rating: 4.9,
    count: 134,
    source: "Google",
    suppliedSnapshot: true,
  },
  services: [
    {
      title: "Haarschnitte",
      description: "Von klassischen Schnitten bis zu modernen Styles – finde den Look, der zu dir passt.",
    },
    {
      title: "Bartpflege",
      description: "Für einen gepflegten Bart und saubere Konturen.",
    },
    {
      title: "Gesichtshaarentfernung",
      description: "Für ein gepflegtes Erscheinungsbild und präzise Details.",
    },
  ],
  legal: {
    representative: "[PLACEHOLDER]",
    email: "[PLACEHOLDER]",
    vatId: "[PLACEHOLDER]",
  },
} as const;

export function getBookingAction(bookingUrl: string | null = business.bookingUrl) {
  return bookingUrl
    ? { href: bookingUrl, label: "Termin vereinbaren", ariaLabel: "Termin online vereinbaren" }
    : {
        href: business.phoneHref,
        label: "Termin vereinbaren",
        ariaLabel: `Termin telefonisch vereinbaren – ${business.phoneDisplay} anrufen`,
      };
}