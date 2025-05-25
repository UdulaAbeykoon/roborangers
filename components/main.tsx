import React from "react";
import { HeroSection } from "@/components/heroSection";
import { ProgramsSection } from "@/components/programsSection";
import { BookingSection } from "@/components/bookingSection";
import { ContactSection } from "@/components/contactSection";

export function Main() {
  return (
    <main className="w-full min-h-screen overflow-visible">
      <div style={{ position: "relative", zIndex: 0 }}>
        <HeroSection />
      </div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <ProgramsSection />
      </div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <BookingSection />
      </div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <ContactSection />
      </div>
    </main>
  );
}
