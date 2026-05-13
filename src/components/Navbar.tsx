"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import FlashOn from "@mui/icons-material/FlashOn";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#ffffff",
        borderBottom: isScrolled ? "1px solid #e4e8f0" : "1px solid transparent",
        boxShadow: isScrolled ? "0 2px 16px rgba(13,19,33,0.07)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "#3b5bdb", boxShadow: "0 2px 8px rgba(59,91,219,0.3)" }}
            >
              <FlashOn sx={{ fontSize: 16, color: "white" }} />
            </div>
            <div>
              <span className="font-bold text-sm block leading-tight" style={{ color: "#0d1321", letterSpacing: "-0.02em" }}>
                Mastermind
              </span>
              <span
                className="font-bold text-xs block leading-tight"
                style={{
                  background: "linear-gradient(135deg, #3b5bdb, #7048e8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.01em",
                }}
              >
                InnovateSphere
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                style={{
                  color: pathname === link.href ? "#3b5bdb" : "#4a5568",
                  background: pathname === link.href ? "#eef1fd" : "transparent",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    (e.currentTarget as HTMLElement).style.color = "#0d1321";
                    (e.currentTarget as HTMLElement).style.background = "#f1f3f8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    (e.currentTarget as HTMLElement).style.color = "#4a5568";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors"
              style={{ color: "#4a5568", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#3b5bdb"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4a5568"; }}
            >
              Book a Demo
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-5">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#4a5568" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#f1f3f8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            {isMobileOpen ? <Close sx={{ fontSize: 20 }} /> : <MenuIcon sx={{ fontSize: 20 }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#ffffff", borderTop: "1px solid #e4e8f0" }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150"
                  style={{
                    color: pathname === link.href ? "#3b5bdb" : "#4a5568",
                    background: pathname === link.href ? "#eef1fd" : "transparent",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Link href="/contact" className="btn-outline w-full justify-center text-sm">Book a Demo</Link>
                <Link href="/contact" className="btn-primary w-full justify-center text-sm">Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
