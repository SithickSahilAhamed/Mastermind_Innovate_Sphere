"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  ClipboardCheck,
  Building2,
  Code2,
  Palette,
  Briefcase,
  MessageSquare,
  CheckCircle,
  Zap,
} from "lucide-react";
import { services } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  ClipboardCheck,
  Building2,
  Code2,
  Palette,
  Briefcase,
  MessageSquare,
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
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh bg-grid" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-15 blur-[80px]" style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "rgba(139, 92, 246, 0.15)", border: "1px solid rgba(139, 92, 246, 0.3)", color: "#c4b5fd" }}>
              <Zap className="w-3 h-3" /> What We Do
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Services Built for{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Real Impact
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
                  className="group p-8 rounded-2xl relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.color}`} />

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color}`}>
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Process</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">A proven, structured approach to delivering exceptional results every time.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-5xl font-black mb-4" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
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
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(6, 182, 212, 0.1))", border: "1px solid rgba(99, 102, 241, 0.3)" }}>
              <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.5) 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
                <Link href="/contact" className="btn-primary px-8 py-4">
                  Request a Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
