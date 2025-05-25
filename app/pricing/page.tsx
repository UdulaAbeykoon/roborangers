"use client";
import React from "react";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { pricing, campInfo } from "@/data/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <main className="min-h-screen bg-gradient-to-b from-colorSecondary to-colorSecondaryDark text-colorLight pt-32 pb-20 px-paddingX">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-colorPrimary">
            Camp Pricing
          </h1>
          
          <div className="bg-colorLight/10 backdrop-blur-md rounded-xl p-8 mb-12 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{pricing.regularPrice} {pricing.currency}</h2>
                <p className="text-xl opacity-90">{pricing.perClass ? "Per Class" : "Per Day"}</p>
                <p className="text-lg opacity-80">{pricing.schedule}</p>
              </div>
              <div className="mt-6 md:mt-0">
                <span className="bg-colorPrimary text-white text-lg font-bold py-2 px-4 rounded-full">
                  FIRST CLASS FREE!
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-colorLight/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Season</h3>
                <p className="text-lg">{pricing.duration}</p>
              </div>
              <div className="bg-colorLight/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Ages</h3>
                <p className="text-lg">{campInfo.ages}</p>
              </div>
              <div className="bg-colorLight/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Schedule</h3>
                <p className="text-lg">{pricing.schedule}</p>
              </div>
              <div className="bg-colorLight/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Scholarships</h3>
                <p className="text-lg">{pricing.scholarshipsAvailable ? "Available" : "Not Available"}</p>
              </div>
            </div>
              <div className="text-center mt-8">
              <Button asChild className="bg-colorPrimary hover:bg-colorPrimary/80 text-white text-lg py-6 px-8 rounded-full">
                <Link href="https://forms.gle/NGxER6cypDFNMZZS8" target="_blank" rel="noopener noreferrer">Book a Camp Session</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-colorLight/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>                <h3 className="text-xl font-bold mb-2">What&apos;s included in the price?</h3>
                <p>Each class includes all necessary materials, equipment usage, and expert instruction from our qualified STEM educators.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How do I claim my free first class?</h3>
                <p>Simply register for any program and your first session will automatically be free. No coupon code needed!</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Are there any discounts available?</h3>
                <p>Yes, we offer sibling discounts and multi-week discounts. Contact us for more information.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How do I apply for a scholarship?</h3>
                <p>Please contact us at {campInfo.contact.email} for information about our scholarship program.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
