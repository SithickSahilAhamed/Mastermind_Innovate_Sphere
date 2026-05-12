"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import { siteConfig, navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030712]">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-base text-white block leading-tight">Mastermind</span>
                <span
                  className="font-bold text-xs block leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  InnovateSphere
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building Modern Digital Solutions for Businesses &amp; Students.
            </p>

            {/* LinkedIn only */}
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
              style={{
                background: "rgba(10, 102, 194, 0.15)",
                border: "1px solid rgba(10, 102, 194, 0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(10, 102, 194, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(10, 102, 194, 0.15)";
              }}
            >
              <LinkedInIcon className="w-4 h-4 text-blue-400" />
              LinkedIn Profile
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-indigo-400 transition-all duration-200 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                "Website Development",
                "E-Commerce Solutions",
                "Audit & Enquiry Platforms",
                "Construction Websites",
                "Custom Software",
                "UI/UX Design",
                "Placement Guidance",
                "Consultation Support",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-indigo-400 transition-all duration-200 inline-block" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Get in Touch</h3>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-lg text-sm text-white placeholder-gray-500 outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <button
                className="p-2 rounded-lg transition-all flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 text-indigo-400 flex-shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-indigo-400 flex-shrink-0" />
                {siteConfig.address}
              </div>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mastermind InnovateSphere. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
