import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OPTIMUM — Forge Your Next Version",
  description:
    "Elite training. Premium experience. No limits. A cinematic luxury fitness club.",
  openGraph: {
    title: "OPTIMUM — Forge Your Next Version",
    description: "Elite training. Premium experience. No limits.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans bg-ink text-white antialiased">
        <SmoothScroll />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
