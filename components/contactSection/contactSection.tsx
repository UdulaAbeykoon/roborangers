import React from "react";
import { Button } from "@/components/ui/button";
import { campInfo } from "@/data/data";
import Link from "next/link";

export function ContactSection({}) {
  return (
    <section className="py-20 px-paddingX bg-gradient-to-b from-colorSecondary to-colorSecondaryDark text-colorLight">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-colorPrimary">Get In Touch</h2>
            <p className="text-xl mb-8">              Have questions about our STEM summer camp? We&apos;re here to help! Reach out to us directly or visit our contact page for more.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-colorPrimary flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <a href={`mailto:${campInfo.contact.email}`} className="text-colorSecondaryLight hover:text-colorPrimary">
                    {campInfo.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-colorPrimary flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <a href={`tel:${campInfo.contact.phone}`} className="text-colorSecondaryLight hover:text-colorPrimary">
                    {campInfo.contact.phone}
                  </a>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-colorPrimary hover:bg-colorPrimary/80 text-white">
              <Link href="/contact">Send Us a Message</Link>
            </Button>
          </div>
            <div className="bg-colorLight/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
            <p className="mb-4 text-colorSecondaryLight">
              375 Bamburgh Cir C107, Scarborough, ON M1W 3Y1
            </p>
            
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.12345678901!2d-79.31234567891234!3d43.789123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3f7a5e5e5e5%3A0x8d8d8d8d8d8d8d8d!2s375%20Bamburgh%20Cir%20C107%2C%20Scarborough%2C%20ON%20M1W%203Y1!5e0!3m2!1sen!2sca!4v1653123456789!5m2!1sen!2sca"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="RoboRangers Camp Location"
              ></iframe>
            </div>
            
            <div className="mt-4">
              <Button asChild className="w-full bg-colorPrimary hover:bg-colorPrimary/80 text-white">
                <a href="https://goo.gl/maps/LVsKirthcT7V2vKWA" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg opacity-80">© {new Date().getFullYear()} RoboRangers STEM Summer Camp. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
