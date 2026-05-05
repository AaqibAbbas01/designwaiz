import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "DesignWaiz | Beautiful Interiors At The Best Price",
  description:
    "Premium interior design studio specializing in modular kitchens, wardrobes, and complete home interiors across Delhi NCR. Get your dream home designed by India's top designers.",
  keywords: [
    "interior design",
    "modular kitchen",
    "wardrobe design",
    "home interiors",
    "Delhi NCR",
    "interior designers",
  ],
  openGraph: {
    title: "DesignWaiz | Beautiful Interiors At The Best Price",
    description:
      "Premium interior design studio specializing in modular kitchens, wardrobes, and complete home interiors across Delhi NCR.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <body className="min-h-screen flex flex-col bg-dw-bg-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
