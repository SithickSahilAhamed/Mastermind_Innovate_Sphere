"use client";

import Link from "next/link";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";
import Send from "@mui/icons-material/Send";
import OpenInNew from "@mui/icons-material/OpenInNew";
import LinkedInIcon from "@/components/LinkedInIcon";
import { siteConfig, navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer style={{ background: "#0d1321" }}>
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,91,219,0.6), rgba(112,72,232,0.6), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Mastermind InnovateSphere logo"
                className="w-10 h-10 rounded-xl object-cover"
                style={{ boxShadow: "0 2px 10px rgba(59,91,219,0.4)" }}
              />
              <div>
                <span className="font-bold text-base block leading-tight text-white" style={{ letterSpacing: "-0.02em" }}>Mastermind</span>
                <span className="font-bold text-xs block leading-tight" style={{ background: "linear-gradient(135deg, #6b8eff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "-0.01em" }}>
                  InnovateSphere
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "-0.01em" }}>
              Building Modern Digital Solutions for Businesses &amp; Students.
            </p>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ background: "rgba(10,102,194,0.15)", border: "1px solid rgba(10,102,194,0.3)", color: "#60a5fa", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(10,102,194,0.25)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(10,102,194,0.15)"; }}
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn Profile
              <OpenInNew sx={{ fontSize: 12, opacity: 0.6 }} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.09em" }}>Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                    style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <span className="w-0 group-hover:w-3 h-px rounded-full transition-all duration-200 inline-block" style={{ background: "#3b5bdb" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.09em" }}>Services</h3>
            <ul className="space-y-3">
              {["Website Development","E-Commerce Solutions","Audit & Enquiry Platforms","Construction Websites","Custom Software","UI/UX Design","Placement Guidance","Consultation Support"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                    style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <span className="w-0 group-hover:w-3 h-px rounded-full transition-all duration-200 inline-block" style={{ background: "#3b5bdb" }} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.09em" }}>Get in Touch</h3>
            <div className="flex gap-2 mb-6 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg text-sm outline-none bg-transparent placeholder-gray-600 text-white"
                style={{ letterSpacing: "-0.01em" }}
              />
              <button
                className="p-2 rounded-lg flex-shrink-0 transition-all"
                style={{ background: "#3b5bdb", boxShadow: "0 2px 8px rgba(59,91,219,0.4)" }}
                aria-label="Subscribe"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#2f4ac7"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#3b5bdb"; }}
              >
                <Send sx={{ fontSize: 16, color: "white" }} />
              </button>
            </div>

            <div className="space-y-3.5">
              {[
                { href: `mailto:${siteConfig.email}`, Icon: Email, text: siteConfig.email },
                { href: `tel:${siteConfig.phone}`, Icon: Phone, text: siteConfig.phone },
              ].map(({ href, Icon, text }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-start gap-3 text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "-0.01em" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >
                  <Icon sx={{ fontSize: 16, color: "#818cf8", marginTop: "2px", flexShrink: 0 }} />
                  <span className="break-all">{text}</span>
                </a>
              ))}
              <div className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <LocationOn sx={{ fontSize: 16, color: "#818cf8", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ letterSpacing: "-0.01em" }}>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "-0.01em" }}>
            © {new Date().getFullYear()} Mastermind InnovateSphere. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <Link
                key={label}
                href="/contact"
                className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "-0.01em" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)"; }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
