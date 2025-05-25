import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { campInfo } from "@/data/data";

export function BookingSection() {
  return (
    <section className="py-20 px-paddingX bg-colorDark text-colorLight">
      <div className="max-w-6xl mx-auto">
        <div className="bg-colorSecondaryHalfDark rounded-xl p-8 shadow-xl text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-colorLight">Ready to Join the Fun?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-colorSecondaryLight">
            Spaces fill up quickly for our summer sessions. Secure your child's spot today and remember - the first class is completely FREE!
          </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="bg-colorPrimary/30 rounded-lg p-6 text-center">
              <p className="text-lg font-bold text-colorLight">Price</p>
              <p className="text-3xl font-bold text-colorLight">{campInfo.price}</p>
            </div>
            <div className="bg-colorPrimary/30 rounded-lg p-6 text-center">
              <p className="text-lg font-bold text-colorLight">Schedule</p>
              <p className="text-xl text-colorLight">{campInfo.schedule}</p>
            </div>
            <div className="bg-colorPrimary/30 rounded-lg p-6 text-center">
              <p className="text-lg font-bold text-colorLight">Ages</p>
              <p className="text-xl text-colorLight">{campInfo.ages}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Button asChild className="bg-colorPrimary hover:bg-colorPrimary/80 text-white text-lg py-6 px-8 rounded-full">
    <Link href="https://forms.gle/gnipKuyEhWcJbWJA9" target="_blank" rel="noopener noreferrer">Book Now</Link>
  </Button>
            <Button asChild className="bg-colorSecondary hover:bg-colorSecondary/80 text-white text-lg py-6 px-8 rounded-full">
              <Link href="/pricing">View Pricing Details</Link>
            </Button>
          </div>
        </div>
        

      </div>
    </section>
  );
}
