import React, { useRef } from "react";

import { HeroWrapper } from "@/components/heroSection/heroWrapper";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";

export function HeroSection({}) {
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-colorSecondary to-colorSecondaryDark text-colorLight relative min-h-screen pt-20 px-paddingX flex flex-col items-center justify-center"
    >
      <Bulge type="Light" />
      <Header color="Light" />
      <HeroWrapper />
    </section>
  );
}
