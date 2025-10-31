// app/fonts.ts
import { Montserrat, Lora } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--font-lora",
});
