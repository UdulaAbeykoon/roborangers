"use client";
import React, { useState } from "react";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { programs, campInfo } from "@/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";

export default function BookingPage() {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [step, setStep] = useState(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };
  
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <main className="min-h-screen bg-gradient-to-b from-colorSecondary to-colorSecondaryDark text-colorLight pt-32 pb-20 px-paddingX">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-colorPrimary">
            Book Your Camp
          </h1>
          
          {step === 1 && (
            <div className="bg-colorLight/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Select a Program</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {programs.map((program, index) => (
                  <div 
                    key={index}
                    className={`bg-colorLight/5 p-6 rounded-lg cursor-pointer transition-all ${
                      selectedProgram === program.title 
                        ? "border-2 border-colorPrimary transform scale-105" 
                        : "hover:bg-colorLight/10"
                    }`}
                    onClick={() => setSelectedProgram(program.title)}
                  >                    <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                    <p className="text-sm mb-4">{program.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  onClick={() => selectedProgram && setStep(2)}
                  disabled={!selectedProgram}
                  className="bg-colorPrimary hover:bg-colorPrimary/80 text-white text-lg py-6 px-8 rounded-full"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="bg-colorLight/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Personal Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input id="parentName" required className="bg-colorLight/5 border-colorLight/20 text-colorLight" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required className="bg-colorLight/5 border-colorLight/20 text-colorLight" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required className="bg-colorLight/5 border-colorLight/20 text-colorLight" />
                  </div>                  <div className="space-y-2">
                    <Label htmlFor="childName">Child&apos;s Name</Label>
                    <Input id="childName" required className="bg-colorLight/5 border-colorLight/20 text-colorLight" />
                  </div>                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child&apos;s Age</Label>
                    <Input id="childAge" type="number" min="3" max="18" required className="bg-colorLight/5 border-colorLight/20 text-colorLight" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program">Selected Program</Label>
                    <Input id="program" value={selectedProgram} readOnly className="bg-colorLight/5 border-colorLight/20 text-colorLight cursor-not-allowed" />
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button 
                    type="submit"
                    className="bg-colorPrimary hover:bg-colorPrimary/80 text-white text-lg py-6 px-8 rounded-full"
                  >
                    Continue to Date Selection
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {step === 3 && (
            <div className="bg-colorLight/10 backdrop-blur-md rounded-xl p-8 shadow-xl text-center">
              <h2 className="text-3xl font-bold mb-6">Booking Submitted!</h2>              <p className="text-xl mb-6">
                Thank you for booking a session with RoboRangers! We&apos;ve received your information and will contact you shortly to confirm your booking and schedule.
              </p>
              <p className="text-lg mb-8">
                Remember: Your first class is FREE!
              </p>
              <Button 
                onClick={() => setStep(1)}
                className="bg-colorSecondaryLight hover:bg-colorSecondaryLight/80 text-colorSecondary text-lg py-6 px-8 rounded-full"
              >
                Book Another Session
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
