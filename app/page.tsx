"use client";
import React from "react";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { HeroSection } from "@/components/heroSection";
import { ProgramsSection } from "@/components/programsSection";
import { BookingSection } from "@/components/bookingSection";
import { ContactSection } from "@/components/contactSection";

import "./index.css";

export default function HomePage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <main className="w-full">
        <HeroSection />
        <ProgramsSection />
        <BookingSection />
        <ContactSection />
      </main>
    </>
  );
}
