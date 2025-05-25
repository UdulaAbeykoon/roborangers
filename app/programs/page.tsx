"use client";
import React from "react";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { programs } from "@/data/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <main className="min-h-screen bg-gradient-to-b from-colorSecondary to-colorSecondaryDark text-colorLight pt-32 pb-20 px-paddingX">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-colorPrimary">
            Our Programs
          </h1>
          
          <p className="text-xl mb-12 max-w-3xl">
            At RoboRangers, we offer a variety of engaging STEM programs designed to spark creativity, 
            develop problem-solving skills, and ignite a passion for technology in young minds.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <div key={index} className="bg-colorLight/10 backdrop-blur-md rounded-xl p-6 shadow-xl transition-all hover:transform hover:scale-105">
                <div className="h-16 w-16 bg-colorPrimary rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl text-white">
                    {program.icon === "robot" && "🤖"}
                    {program.icon === "tool" && "🔧"}
                    {program.icon === "code" && "💻"}
                    {program.icon === "coffee" && "☕"}
                    {program.icon === "printer" && "🖨️"}
                  </span>
                </div>                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="mb-4">{program.description}</p>                <Button asChild className="w-full bg-colorPrimary hover:bg-colorPrimary/80 text-white">
                  <Link href="https://forms.gle/NGxER6cypDFNMZZS8" target="_blank" rel="noopener noreferrer">Book This Program</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="bg-colorLight/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-colorLight/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
                <p>Our teachers are passionate STEM professionals with extensive experience in teaching and technology.</p>
              </div>
              <div className="bg-colorLight/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Small Class Sizes</h3>
                <p>With limited spots per session, we ensure personalized attention for each young innovator.</p>
              </div>
              <div className="bg-colorLight/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Hands-On Learning</h3>
                <p>Students learn by doing, creating, and problem-solving with real technology and tools.</p>
              </div>
              <div className="bg-colorLight/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Project-Based</h3>
                <p>Every session culminates in completed projects that children can proudly share and demonstrate.</p>
              </div>
            </div>
              <div className="text-center mt-8">
              <Button asChild className="bg-colorPrimary hover:bg-colorPrimary/80 text-white text-lg py-6 px-8 rounded-full">
                <Link href="https://forms.gle/NGxER6cypDFNMZZS8" target="_blank" rel="noopener noreferrer">Book a Camp Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
