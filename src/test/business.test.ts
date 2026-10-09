import { describe, expect, it } from "vitest";

import { business, getBookingAction } from "@/content/business";

describe("business configuration", () => {
  it("falls back to the confirmed phone number when no booking URL exists", () => {
    expect(getBookingAction(null)).toEqual({
      href: "tel:+4915222323038",
      label: "Termin vereinbaren",
      ariaLabel: "Termin telefonisch vereinbaren – +49 1522 2323038 anrufen",
    });
  });

  it("uses a verified booking URL when configured", () => {
    expect(getBookingAction("https://booking.example/verified").href).toBe(
      "https://booking.example/verified",
    );
  });

  it("keeps the supplied review snapshot and address unchanged", () => {
    expect(business.review).toMatchObject({ rating: 4.9, count: 134, suppliedSnapshot: true });
    expect(business.address).toMatchObject({ street: "Dürerstraße 96", postalCode: "01307", city: "Dresden" });
  });
});