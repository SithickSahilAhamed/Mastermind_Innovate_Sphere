import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mastermind InnovateSphere | Modern Digital Solutions",
  description:
    "We create scalable websites, software platforms, and impactful digital experiences while supporting students through educational initiatives.",
  keywords:
    "web development, e-commerce, software development, placement guidance, scholarship support, Mastermind InnovateSphere",
  verification: {
    google: "LFuIwZ18DtorhKtzF1d3X1kWqBQAE-um5TF6ZZTqAFs",
  },
  openGraph: {
    title: "Mastermind InnovateSphere",
    description: "Building Modern Digital Solutions for Businesses & Students",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head />
      <body
        className="min-h-screen bg-white text-[#0d1321] antialiased"
        style={{ fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
