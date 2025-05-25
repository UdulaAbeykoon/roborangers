import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { campInfo } from "@/data/data";
import { HeroMarquee } from "./heroMarquee_new";

export function HeroWrapper({}) {
  return (
    <main className="section1__wrapper relative max-w-maxWidth grow">
      <div className="flex flex-col md:flex-row items-center gap-12 py-12">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <div className="text-colorPrimary anime">
              {campInfo.name}
            </div>
            <div className="animation__wrapper anime">
              <span className="animate__this animate__this1 left-0">
                STEM <span className="text-colorPrimary">.</span>
                <br />
              </span>
              <span className="animate__this animate__this2 left-0">
                Summer Camp<span className="text-colorPrimary">.</span>
              </span>
              <span>&nbsp;</span>
            </div>
          </h2>
          
          <p className="text-xl mb-8 anime">
            {campInfo.tagline} Hands-on learning in robotics, coding, and 3D printing for young innovators.          </p>            <div className="flex flex-wrap gap-4 anime">
            <Button asChild className="bg-colorPrimary hover:bg-colorPrimary/80 text-white text-lg py-6 px-8 rounded-full">
              <Link href="https://forms.gle/gnipKuyEhWcJbWJA9" target="_blank" rel="noopener noreferrer">Book Now</Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-colorLight hover:bg-colorLight/10 text-colorLight text-lg py-6 px-8 rounded-full">
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
          
          {campInfo.firstClassFree && (
            <div className="mt-8 p-4 bg-colorLight/10 backdrop-blur-sm rounded-lg inline-block anime">
              <p className="text-lg font-bold text-colorPrimary">FIRST CLASS FREE!</p>
            </div>
          )}        </div>          <div className="md:w-1/2 flex justify-center anime">
          <div className="relative w-full max-w-md aspect-square bg-colorLight/10 rounded-full overflow-hidden">            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                src="/rrlogo.png" 
                alt="RoboRangers Logo" 
                className="w-[120%] h-[120%] object-contain" 
                width={1600}
                height={1600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      <HeroMarquee />
    </main>
  );
}
