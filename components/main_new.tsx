import React from "react";
import { HeroSection } from "@/components/heroSection/heroSection";
import { ProgramsSection } from "@/components/programsSection/programsSection";
import { PricingSection } from "@/components/pricingSection/pricingSection";
import { BookingSection } from "@/components/bookingSection/bookingSection";
import { ContactSection } from "@/components/contactSection/contactSection";

export function Main() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <PricingSection />
      <BookingSection />
      <ContactSection />
    </>
  );
}
