import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import MobileContactBar from "@/components/MobileContactBar";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

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
  title: "Optimum Fitness Club | Elazığ",
  description:
    "Elazığ'da kadın ve erkek üyeler için ayrı antrenman alanları, kardiyo, ağırlık ve grup dersleri sunan Optimum Fitness Club.",
  openGraph: {
    title: "Optimum Fitness Club | Elazığ",
    description:
      "Optimum Fitness Club Elazığ'da antrenman alanları, grup dersleri ve üyelik bilgileri.",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/images/brand/optimum-fitness-club-logo.png",
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
    <html lang="tr" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans bg-ink text-white antialiased">
        <SmoothScroll />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        {children}
        <MobileContactBar />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
