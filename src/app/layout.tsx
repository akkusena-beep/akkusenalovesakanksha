import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akanksha Choudhary — The Fan Archive ❤",
  description:
    "A fan-made tribute and archive dedicated to Akanksha Choudhary — her journey, modeling and pageant milestones, reality-show appearances, music videos, interviews, vlogs and messages from fans.",
  keywords: [
    "Akanksha Choudhary",
    "fan website",
    "Miss Universe India 2025",
    "Splitsvilla X6",
    "Lock Upp",
    "EYES Mohammad Faiz",
    "music videos",
    "fan archive",
  ],
  openGraph: {
    title: "Akanksha Choudhary — The Fan Archive ❤",
    description:
      "A fan-made tribute and archive dedicated to Akanksha Choudhary — her journey, milestones, and messages from fans.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
