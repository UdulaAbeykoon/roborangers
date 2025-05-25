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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-colorPrimary">Get In Touch</h2>            <p className="text-xl mb-8">
              Have questions about our STEM summer camp? We&apos;re here to help! Reach out to us directly or visit our contact page for more.
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
            <h3 className="text-2xl font-bold mb-6">Newsletter Signup</h3>
            <p className="mb-6">
              Subscribe to our newsletter to stay updated on camp sessions, special events, and early registration opportunities.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg bg-colorLight/5 border border-colorLight/20 text-colorLight"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full p-3 rounded-lg bg-colorLight/5 border border-colorLight/20 text-colorLight"
                />
              </div>
              
              <Button type="submit" className="w-full bg-colorPrimary hover:bg-colorPrimary/80 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg opacity-80">© {new Date().getFullYear()} RoboRangers STEM Summer Camp. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
