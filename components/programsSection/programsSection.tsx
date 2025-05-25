import React from "react";
import { programs } from "@/data/data";

export function ProgramsSection() {
  return (
    <>      <section className="py-20 px-paddingX bg-colorDark text-colorLight">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our STEM Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-colorSecondaryHalfDark rounded-xl p-6 shadow-lg transition-all hover:transform hover:scale-105">
                <div className="h-16 w-16 bg-colorPrimary rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl text-white">
                    {program.icon === "robot" && "🤖"}
                    {program.icon === "tool" && "🔧"}
                    {program.icon === "code" && "💻"}
                    {program.icon === "coffee" && "☕"}
                    {program.icon === "printer" && "🖨️"}
                    {program.icon === "game" && "🎮"}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-colorLight">{program.title}</h3>
                <p className="text-colorSecondaryLight mb-4 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-paddingX bg-black text-colorLight">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-6xl sm:text-8xl font-bold mb-4 bg-gradient-to-r from-colorPrimary to-colorSecondaryLight bg-clip-text text-transparent">Code.</h2>
            <h2 className="text-6xl sm:text-8xl font-bold mb-4 bg-gradient-to-r from-colorPrimary to-colorSecondaryLight bg-clip-text text-transparent">Create.</h2>
            <h2 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-colorPrimary to-colorSecondaryLight bg-clip-text text-transparent">Conquer.</h2>
          </div>
        </div>
      </section>
    </>
  );
}
