"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Language from "@mui/icons-material/Language";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import AssignmentTurnedIn from "@mui/icons-material/AssignmentTurnedIn";
import Business from "@mui/icons-material/Business";
import Code from "@mui/icons-material/Code";
import Palette from "@mui/icons-material/Palette";
import Work from "@mui/icons-material/Work";
import Forum from "@mui/icons-material/Forum";
import CheckCircle from "@mui/icons-material/CheckCircle";
import FlashOn from "@mui/icons-material/FlashOn";
import { services } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Globe: Language,
  ShoppingCart,
  ClipboardCheck: AssignmentTurnedIn,
  Building2: Business,
  Code2: Code,
  Palette,
  Briefcase: Work,
  MessageSquare: Forum,
};

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

const process = [
  { step: "01", title: "Discovery & Planning", desc: "We deeply understand your requirements, target audience, and business goals before writing a single line of code." },
  { step: "02", title: "Design & Prototype", desc: "Our designers craft intuitive wireframes and interactive prototypes that align with your brand vision." },
  { step: "03", title: "Development", desc: "Our engineers build scalable, secure, and performant solutions using modern technology stacks." },
  { step: "04", title: "Testing & QA", desc: "Rigorous quality assurance across devices, browsers, and use cases ensures flawless delivery." },
  { step: "05", title: "Launch & Support", desc: "We deploy your project and provide ongoing support, updates, and performance monitoring." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-15 blur-[80px]" style={{ background: "radial-gradient(circle, #ddd6fe, transparent)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "#eef1fd", border: "1px solid #c5cee0", color: "#3b5bdb" }}>
              <FlashOn sx={{ fontSize: 14 }} /> What We Do
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "#0d1321" }}>
              Services Built for{" "}
              <span className="gradient-text">Real Impact</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#4a5568" }}>
              From custom websites to enterprise software platforms, our services are designed to help businesses grow and communities thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8 }}
                  className="glass-card group p-8 rounded-2xl relative overflow-hidden"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.color}`} />

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color}`}>
                    {Icon && <Icon sx={{ fontSize: 28, color: "white" }} />}
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: "#0d1321" }}>{service.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#4a5568" }}>{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm" style={{ color: "#374151" }}>
                        <CheckCircle sx={{ fontSize: 16, color: "#4f46e5", flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: "#3b5bdb" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#2f4ac7"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#3b5bdb"; }}
                  >
                    Get a Quote <ArrowForward sx={{ fontSize: 16 }} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-section">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>
              Our{" "}
              <span className="gradient-text">Process</span>
            </h2>
            <p className="max-w-lg mx-auto" style={{ color: "#4a5568" }}>A proven, structured approach to delivering exceptional results every time.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="glass-card relative p-6 rounded-2xl text-center">
                  <div className="text-5xl font-black mb-4" style={{ background: "linear-gradient(135deg, rgba(59,91,219,0.2), rgba(112,72,232,0.2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: "#0d1321" }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#4a5568" }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg, #eef1fd, #f3f0ff)", border: "1px solid #c5cee0" }}>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>Ready to Get Started?</h2>
                <p className="max-w-xl mx-auto mb-8" style={{ color: "#4a5568" }}>Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
                <Link href="/contact" className="btn-primary px-8 py-4">
                  Request a Free Consultation <ArrowForward sx={{ fontSize: 20 }} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
