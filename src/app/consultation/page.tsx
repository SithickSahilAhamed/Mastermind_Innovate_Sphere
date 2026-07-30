"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Business from "@mui/icons-material/Business";
import Security from "@mui/icons-material/Security";
import MenuBook from "@mui/icons-material/MenuBook";
import Group from "@mui/icons-material/Group";
import Description from "@mui/icons-material/Description";
import Forum from "@mui/icons-material/Forum";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Warning from "@mui/icons-material/Warning";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import AccessTime from "@mui/icons-material/AccessTime";
import { siteConfig } from "@/data/site";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

const consultationAreas = [
  {
    icon: Business,
    title: "Banking Inquiry Guidance",
    desc: "Navigate banking procedures, understand account issues, and get clear guidance on banking-related queries without the jargon.",
    examples: ["Account opening queries", "Transaction dispute guidance", "Loan inquiry support", "Digital banking help"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Security,
    title: "Insurance Claim Guidance",
    desc: "Understand insurance policies, claim procedures, and get step-by-step guidance to make the process smoother.",
    examples: ["Health insurance queries", "Claim process walkthrough", "Policy understanding", "Nominee-related guidance"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Description,
    title: "Account-Related Support",
    desc: "Assistance with KYC, document requirements, account updates, and resolving common account-related concerns.",
    examples: ["KYC document guidance", "Account update support", "Password & access help", "Statement queries"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: MenuBook,
    title: "Educational Consultation",
    desc: "Guidance on educational programs, scholarship applications, course selections, and career planning for students.",
    examples: ["Course selection advice", "Scholarship queries", "College application guidance", "Career counseling"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Group,
    title: "General Public Guidance",
    desc: "Helping members of the public navigate common government and institutional procedures with confidence.",
    examples: ["Government portal help", "Document procedures", "RTI filing guidance", "Consumer rights info"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Forum,
    title: "Digital Literacy Support",
    desc: "Helping individuals understand and use digital tools, online services, and technology for everyday needs.",
    examples: ["Online banking setup", "Digital form filling", "Email & communication", "Online services guidance"],
    color: "from-purple-500 to-indigo-500",
  },
];

const process = [
  { step: "01", title: "Reach Out", desc: "Contact us via phone, email, or our contact form to describe your query." },
  { step: "02", title: "Initial Review", desc: "Our team reviews your query and assigns the right advisor for your area of concern." },
  { step: "03", title: "Guidance Session", desc: "We walk you through the process, explain procedures, and answer your questions clearly." },
  { step: "04", title: "Follow-up", desc: "We check back to ensure your query was resolved and provide additional support if needed." },
];

export default function ConsultationPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-15 blur-[80px]" style={{ background: "radial-gradient(circle, #ddd6fe, transparent)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "#f3f0ff", border: "1px solid #ddd6fe", color: "#7048e8" }}>
              <Forum sx={{ fontSize: 14 }} /> Public Guidance Service
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "#0d1321" }}>
              Clear Guidance for{" "}
              <span className="gradient-text">Complex Questions</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8" style={{ color: "#4a5568" }}>
              We provide public consultation and guidance support to help individuals navigate banking, insurance, educational, and government-related queries with confidence.
            </p>

            {/* Important Disclaimer */}
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl mx-auto mb-8 max-w-xl" style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.25)" }}>
              <Warning sx={{ fontSize: 20, color: "#f97316", flexShrink: 0 }} />
              <p className="text-sm font-medium text-left" style={{ color: "#9a3412" }}>
                We provide consultation and guidance support only. We are not a legal, banking, or insurance firm.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Get Guidance <ArrowForward sx={{ fontSize: 20 }} />
              </Link>
              <Link href="#areas" className="btn-outline px-8 py-4">
                Explore Support Areas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="py-6" style={{ background: "#f8f9fc", borderTop: "1px solid #e4e8f0", borderBottom: "1px solid #e4e8f0" }}>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {[
              { icon: Phone, label: "Call Us", value: siteConfig.phone },
              { icon: Email, label: "Email Us", value: siteConfig.email },
              { icon: AccessTime, label: "Support Hours", value: "Mon–Sat, 9 AM – 6 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#eef1fd" }}>
                  <item.icon sx={{ fontSize: 20, color: "#4f46e5" }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "#8a95a8" }}>{item.label}</div>
                  <div className="text-sm font-medium" style={{ color: "#0d1321" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Areas */}
      <section id="areas" className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>
              Areas We{" "}
              <span className="gradient-text">Support</span>
            </h2>
            <p className="max-w-lg mx-auto" style={{ color: "#4a5568" }}>
              From banking to education, we provide clear, accessible guidance across a wide range of everyday needs.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultationAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${area.color}`}>
                  <area.icon sx={{ fontSize: 24, color: "white" }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#0d1321" }}>{area.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a5568" }}>{area.desc}</p>
                <ul className="space-y-1.5">
                  {area.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-xs" style={{ color: "#374151" }}>
                      <CheckCircle sx={{ fontSize: 14, color: "#4f46e5", flexShrink: 0 }} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-section">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>
              How It{" "}
              <span className="gradient-text">Works</span>
            </h2>
            <p className="max-w-lg mx-auto" style={{ color: "#4a5568" }}>A simple, respectful process designed to provide real clarity and support.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="glass-card p-6 rounded-2xl">
                  <div className="text-5xl font-black mb-4" style={{ background: "linear-gradient(135deg, rgba(112,72,232,0.25), rgba(59,91,219,0.25))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "#0d1321" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <AnimatedSection>
            <div className="p-8 rounded-2xl" style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.2)" }}>
              <div className="flex items-start gap-4">
                <Warning sx={{ fontSize: 32, color: "#f97316", flexShrink: 0, marginTop: "4px" }} />
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#9a3412" }}>Important Disclaimer</h3>
                  <p className="leading-relaxed text-sm" style={{ color: "#4a5568" }}>
                    MMIS Technologies provides <strong style={{ color: "#0d1321" }}>consultation and guidance support only</strong>. We are not a registered bank, legal firm, or insurance company. Our guidance is informational and intended to help individuals understand procedures and navigate systems. For legal, financial, or medical decisions, please consult a certified professional in the respective field.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-4">
        <div className="container-max">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg, #f3f0ff, #eef1fd)", border: "1px solid #ddd6fe" }}>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>Need Guidance? We&apos;re Here.</h2>
                <p className="max-w-xl mx-auto mb-8" style={{ color: "#4a5568" }}>Reach out with your query and our team will respond within one business day with clear, helpful guidance.</p>
                <Link href="/contact" className="btn-primary px-8 py-4">
                  Get Help Now <ArrowForward sx={{ fontSize: 20 }} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
