// @/app/ui/fonts.ts

/**
 * This file is used to declare your project's fonts
 */

import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const geist_mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
