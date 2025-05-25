import type { Metadata } from "next";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Script from "next/script";

import "./globals.css";
import "./fixOverflow.css";
import StoreProvider from "@/redux/storeProvider";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { dM_Sans, satoshi, helvetica } from "./fonts";

// Only register GSAP plugins on the client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase);
}

export const metadata: Metadata = {
  title: "RoboRangers • STEM Summer Camp",
  description: "Join RoboRangers STEM Summer Camp! Learn robotics, coding, and 3D printing in a fun, engaging environment. First class FREE! Ages 8+",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  return (    <html lang="en" className={`${satoshi.variable} ${helvetica.variable} ${dM_Sans.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        ></meta>
      </head>      <body className={dM_Sans.className}>
        <StoreProvider>{children}</StoreProvider>
        <Script src="https://cdn.jsdelivr.net/gh/vipulkumar-dev/gsap@2024/ScrambleTextPlugin.min.js" />
      </body>
    </html>
  );
}
