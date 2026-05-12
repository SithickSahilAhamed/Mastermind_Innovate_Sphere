"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import { siteConfig, faqItems } from "@/data/site";

// ─── EmailJS config ───────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (Gmail) → copy Service ID below
// 3. Create an Email Template → copy Template ID below
// 4. Go to Account → API Keys → copy Public Key below
// Template variables used: {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xxxxxxx"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "xxxxxxxxxxxxxxxxxxxxxx"

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
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
        style={{ background: open ? "rgba(99, 102, 241, 0.08)" : "rgba(255,255,255,0.02)" }}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div
          className="p-5 pt-0 text-gray-400 text-sm leading-relaxed"
          style={{ background: "rgba(99, 102, 241, 0.05)" }}
        >
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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="min-h-screen pt-16">
      {/* ─── Hero ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh bg-grid" />
        <div
          className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{
                background: "rgba(99, 102, 241, 0.15)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                color: "#a5b4fc",
              }}
            >
              <MessageCircle className="w-3 h-3" /> Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Together
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
              Have a project in mind? Need guidance or support? We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Quick contact bar ─── */}
      <section
        className="py-5"
        style={{
          background: "rgba(99, 102, 241, 0.06)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: Phone, label: "Call / WhatsApp", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Clock, label: "Response Time", value: "Within 24 hours", href: undefined },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99, 102, 241, 0.2)" }}
                >
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white text-sm font-medium hover:text-indigo-300 transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact grid ─── */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Fill in the form and we&apos;ll get back to you within 24 hours.
                </p>

                {/* Success banner */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl flex items-center gap-3"
                    style={{
                      background: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <p className="text-emerald-300 text-sm font-medium">
                      Message sent successfully! We&apos;ll reply to your email within 24 hours.
                    </p>
                  </motion.div>
                )}

                {/* Error banner */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl flex items-center gap-3"
                    style={{
                      background: "rgba(239, 68, 68, 0.12)",
                      border: "1px solid rgba(239, 68, 68, 0.35)",
                    }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-300 text-sm font-medium">
                      Failed to send. Please email us directly at{" "}
                      <a href={`mailto:${siteConfig.email}`} className="underline">
                        {siteConfig.email}
                      </a>
                    </p>
                  </motion.div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all text-sm"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all text-sm"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all text-sm"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all text-sm"
                        style={{ background: "rgba(30,30,50,0.9)", border: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        <option value="" style={{ background: "#0d0d1a" }}>Select a subject</option>
                        <option value="Website Development" style={{ background: "#0d0d1a" }}>Website Development</option>
                        <option value="E-Commerce" style={{ background: "#0d0d1a" }}>E-Commerce</option>
                        <option value="Custom Software" style={{ background: "#0d0d1a" }}>Custom Software</option>
                        <option value="Scholarship Support" style={{ background: "#0d0d1a" }}>Scholarship Support</option>
                        <option value="Placement Guidance" style={{ background: "#0d0d1a" }}>Placement Guidance</option>
                        <option value="Consultation" style={{ background: "#0d0d1a" }}>Consultation</option>
                        <option value="Other" style={{ background: "#0d0d1a" }}>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, requirement, or query..."
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all text-sm resize-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info sidebar */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-5">
              {/* Contact details card */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 className="text-white font-semibold text-lg mb-5">Contact Details</h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(99, 102, 241, 0.15)",
                        border: "1px solid rgba(99, 102, 241, 0.2)",
                      }}
                    >
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-0.5">Email</div>
                      <span className="text-white text-sm group-hover:text-indigo-400 transition-colors break-all">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>

                  <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(99, 102, 241, 0.15)",
                        border: "1px solid rgba(99, 102, 241, 0.2)",
                      }}
                    >
                      <Phone className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-0.5">Phone</div>
                      <span className="text-white text-sm group-hover:text-indigo-400 transition-colors">
                        {siteConfig.phone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(99, 102, 241, 0.15)",
                        border: "1px solid rgba(99, 102, 241, 0.2)",
                      }}
                    >
                      <MapPin className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-0.5">Location</div>
                      <span className="text-white text-sm">{siteConfig.address}</span>
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
                      style={{
                        background: "rgba(10, 102, 194, 0.15)",
                        border: "1px solid rgba(10, 102, 194, 0.3)",
                      }}
                    >
                      <LinkedInIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-0.5">LinkedIn</div>
                      <span className="text-white text-sm group-hover:text-blue-400 transition-colors flex items-center gap-1">
                        Mastermind InnovateSphere
                        <ExternalLink className="w-3 h-3" />
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
                style={{
                  background: "rgba(37, 211, 102, 0.08)",
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37, 211, 102, 0.2)" }}
                >
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-green-300 font-semibold">Chat on WhatsApp</div>
                  <div className="text-green-400/70 text-sm">
                    Quick responses — {siteConfig.phone}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-green-400 flex-shrink-0" />
              </a>

              {/* LinkedIn CTA */}
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl transition-all hover:scale-[1.02] block"
                style={{
                  background: "rgba(10, 102, 194, 0.08)",
                  border: "1px solid rgba(10, 102, 194, 0.3)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(10, 102, 194, 0.2)" }}
                >
                  <LinkedInIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-blue-300 font-semibold">Connect on LinkedIn</div>
                  <div className="text-blue-400/70 text-sm">Follow our company page</div>
                </div>
                <ExternalLink className="w-5 h-5 text-blue-400 flex-shrink-0" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <AnimatedSection>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)", height: "340px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.241984!3d12.941643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzI5LjkiTiA4MMKwMTQnMzEuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mastermind InnovateSphere Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Questions
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
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
