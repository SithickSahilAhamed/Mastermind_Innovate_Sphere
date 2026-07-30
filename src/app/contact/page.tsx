"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";
import Chat from "@mui/icons-material/Chat";
import Send from "@mui/icons-material/Send";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowForward from "@mui/icons-material/ArrowForward";
import OpenInNew from "@mui/icons-material/OpenInNew";
import AccessTime from "@mui/icons-material/AccessTime";
import CheckCircle from "@mui/icons-material/CheckCircle";
import HourglassEmpty from "@mui/icons-material/HourglassEmpty";
import LinkedInIcon from "@/components/LinkedInIcon";
import { siteConfig, faqItems } from "@/data/site";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #e4e8f0" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
        style={{ background: open ? "#eef1fd" : "#ffffff" }}
      >
        <span className="font-medium pr-4" style={{ color: "#0d1321" }}>{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ExpandMore sx={{ fontSize: 20, flexShrink: 0, color: "#4a5568" }} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 text-sm leading-relaxed" style={{ background: "#f8f9fc", color: "#4a5568" }}>
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    const text =
      `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || "Not provided")}%0A` +
      `*Subject:* ${encodeURIComponent(formData.subject)}%0A%0A` +
      `*Message:*%0A${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/917904019458?text=${text}`, "_blank");

    setStatus("success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 6000);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid" />
        <div
          className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #c7d2fe, transparent)" }}
        />
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{ background: "#eef1fd", border: "1px solid #c5cee0", color: "#3b5bdb" }}
            >
              <Chat sx={{ fontSize: 14 }} /> Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "#0d1321" }}>
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Together</span>
            </h1>
            <p className="text-xl max-w-xl mx-auto leading-relaxed" style={{ color: "#4a5568" }}>
              Have a project in mind? Need guidance or support? We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="py-5" style={{ background: "#f8f9fc", borderTop: "1px solid #e4e8f0", borderBottom: "1px solid #e4e8f0" }}>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: Phone, label: "Call / WhatsApp", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { icon: Email, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: AccessTime, label: "Response Time", value: "Within 24 hours", href: undefined },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#eef1fd" }}
                >
                  <item.icon sx={{ fontSize: 20, color: "#4f46e5" }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "#8a95a8" }}>{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium transition-colors break-all"
                      style={{ color: "#0d1321" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#3b5bdb"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#0d1321"; }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium" style={{ color: "#0d1321" }}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-2" style={{ color: "#0d1321" }}>Send Us a Message</h2>
                <p className="text-sm mb-6" style={{ color: "#4a5568" }}>
                  Fill in the form and we&apos;ll get back to you within 24 hours.
                </p>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl flex items-center gap-3"
                    style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.3)" }}
                  >
                    <CheckCircle sx={{ fontSize: 20, color: "#059669", flexShrink: 0 }} />
                    <p className="text-sm font-medium" style={{ color: "#065f46" }}>
                      Message sent successfully! We&apos;ll reply to your email within 24 hours.
                    </p>
                  </motion.div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                        style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,91,219,0.08)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                        style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,91,219,0.08)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                        style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                        style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                      >
                        <option value="">Select a subject</option>
                        <option value="Website Development">Website Development</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Scholarship Support">Scholarship Support</option>
                        <option value="Placement Guidance">Placement Guidance</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, requirement, or query..."
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm resize-none"
                      style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,91,219,0.08)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <><HourglassEmpty sx={{ fontSize: 16 }} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send sx={{ fontSize: 16 }} /> Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info sidebar */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-5">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-5" style={{ color: "#0d1321" }}>Contact Details</h3>
                <div className="space-y-5">
                  <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eef1fd", border: "1px solid #c5cee0" }}
                    >
                      <Email sx={{ fontSize: 20, color: "#4f46e5" }} />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "#8a95a8" }}>Email</div>
                      <span className="text-sm transition-colors break-all" style={{ color: "#0d1321" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#3b5bdb"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#0d1321"; }}
                      >
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>

                  <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eef1fd", border: "1px solid #c5cee0" }}
                    >
                      <Phone sx={{ fontSize: 20, color: "#4f46e5" }} />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "#8a95a8" }}>Phone</div>
                      <span className="text-sm transition-colors" style={{ color: "#0d1321" }}>
                        {siteConfig.phone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eef1fd", border: "1px solid #c5cee0" }}
                    >
                      <LocationOn sx={{ fontSize: 20, color: "#4f46e5" }} />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "#8a95a8" }}>Location</div>
                      <span className="text-sm" style={{ color: "#0d1321" }}>{siteConfig.address}</span>
                    </div>
                  </div>

                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(10,102,194,0.08)", border: "1px solid rgba(10,102,194,0.2)" }}
                    >
                      <LinkedInIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "#8a95a8" }}>LinkedIn</div>
                      <span className="text-sm flex items-center gap-1 transition-colors" style={{ color: "#0d1321" }}>
                        Mastermind InnovateSphere
                        <OpenInNew sx={{ fontSize: 12 }} />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl transition-all hover:scale-[1.02] block"
                style={{ background: "rgba(37,211,102,0.06)", border: "1px solid rgba(37,211,102,0.25)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37,211,102,0.12)" }}
                >
                  <Chat sx={{ fontSize: 24, color: "#16a34a" }} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold" style={{ color: "#166534" }}>Chat on WhatsApp</div>
                  <div className="text-sm" style={{ color: "#4ade80", opacity: 0.8 }}>
                    Quick responses — {siteConfig.phone}
                  </div>
                </div>
                <ArrowForward sx={{ fontSize: 20, color: "#16a34a", flexShrink: 0 }} />
              </a>

              {/* LinkedIn CTA */}
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl transition-all hover:scale-[1.02] block"
                style={{ background: "rgba(10,102,194,0.06)", border: "1px solid rgba(10,102,194,0.2)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(10,102,194,0.12)" }}
                >
                  <LinkedInIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold" style={{ color: "#1e3a5f" }}>Connect on LinkedIn</div>
                  <div className="text-sm" style={{ color: "#60a5fa" }}>Follow our company page</div>
                </div>
                <OpenInNew sx={{ fontSize: 20, color: "#2563eb", flexShrink: 0 }} />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <AnimatedSection>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #e4e8f0", height: "340px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.241984!3d12.941643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzI5LjkiTiA4MMKwMTQnMzEuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mastermind InnovateSphere Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="max-w-lg mx-auto" style={{ color: "#4a5568" }}>
              Quick answers to common questions about our services and processes.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <FAQItem question={item.question} answer={item.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
