"use client";

import React from "react";
import Link from "next/link";
import "../work.css";
import "../header.css";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import { links } from "@/data/data";
import { Footer } from "@/components/contactSection/footer";

export default function WorkPage() {
  return (
    <>
      <Header color="Light" />
      <div className="darkGradient flex h-screen w-screen flex-col items-center justify-center px-paddingX py-paddingY text-center text-lg text-colorSecondaryLight md:text-3xl">
        <h2 className="text-4xl font-bold mb-6">About RoboRangers</h2>
        <p className="mb-8 max-w-2xl">
          Our page is currently under construction. Please check back soon for
          more information about our STEM summer camp programs!
        </p>
        <Link
          href={links.home}
          className="mt-5 bg-colorPrimary text-colorLight px-8 py-3 rounded-full hover:bg-colorPrimary/80"
        >
          Back to Home
        </Link>
        <Footer className="bottom-0" />
      </div>
    </>
  );
}
