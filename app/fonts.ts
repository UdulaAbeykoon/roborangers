import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dM_Sans = DM_Sans({ 
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  preload: true,
});

export const satoshi = localFont({
  src: "../font/satoshi/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const helvetica = localFont({
  src: "../font/helvetica/HelveticaNowDisplay-Medium.woff2",
  variable: "--font-helvetica",
  display: "swap",
});
