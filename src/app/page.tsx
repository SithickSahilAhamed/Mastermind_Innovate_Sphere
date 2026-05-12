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
  Users,
  GraduationCap,
  Star,
  ChevronRight,
  Sparkles,
  Zap,
  ExternalLink,
  Heart,
} from "lucide-react";
import { services, stats, projects, testimonials, industries } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  ClipboardCheck,
  Building2,
  Code2,
  Palette,
  Briefcase,
  MessageSquare,
  CheckCircle,
  Users,
  GraduationCap,
  Heart,
  Sparkles,
  Zap,
};

const statIconMap: Record<string, React.ElementType> = {
  CheckCircle,
  Users,
  GraduationCap,
  Globe,
};

const statusDot: Record<string, string> = {
  Completed: "#10b981",
  "Live & Active": "#6366f1",
  Ongoing: "#f59e0b",
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[#030712] bg-grid" />
        <div className="absolute inset-0 bg-mesh" />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              color: "#a5b4fc",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Mastermind InnovateSphere — Modern Digital Agency
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Building Modern{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Solutions
            </span>
            <br />
            for Businesses &amp; Students
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We create scalable websites, software platforms, and impactful digital experiences
            while supporting students through educational initiatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects" className="btn-primary text-base px-8 py-4">
              View Projects <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-4">
              Contact Us <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-3 justify-center"
          >
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "E-Commerce", "UI/UX"].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section
        className="section-padding"
        style={{
          background: "rgba(99, 102, 241, 0.05)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = statIconMap[stat.icon];
              return (
                <AnimatedSection key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))",
                        border: "1px solid rgba(99, 102, 241, 0.3)",
                      }}
                    >
                      {Icon && <Icon className="w-6 h-6 text-indigo-400" />}
                    </div>
                    <div
                      className="text-3xl sm:text-4xl font-bold text-white mb-1"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TRUST / INDUSTRIES ─── */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{
                background: "rgba(6, 182, 212, 0.15)",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                color: "#67e8f9",
              }}
            >
              <CheckCircle className="w-3 h-3" /> Trusted by Businesses
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Trusted by Businesses{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Across Multiple Industries
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From auditing firms and educational institutions to fashion brands and devotional
              platforms — we deliver across every sector.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-12">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] ?? Globe;
              return (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="p-4 rounded-2xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 bg-gradient-to-br ${ind.color}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-xs font-medium leading-tight">{ind.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Animated trust stats row */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.08))",
              border: "1px solid rgba(99, 102, 241, 0.2)",
            }}
          >
            {[
              { value: "7+", label: "Real Projects Delivered" },
              { value: "6+", label: "Industries Covered" },
              { value: "100%", label: "Modern SaaS Solutions" },
              { value: "Live", label: "Active Client Websites" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center py-2"
              >
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <AnimatedSection className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{
                background: "rgba(99, 102, 241, 0.15)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                color: "#a5b4fc",
              }}
            >
              <Zap className="w-3 h-3" /> Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything You Need to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Scale
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From web development to student support, we offer comprehensive solutions tailored
              to your needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group p-6 rounded-2xl cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(99, 102, 241, 0.3)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(99, 102, 241, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.03)";
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${service.color} opacity-90`}
                  >
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
                  >
                    Learn more{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── REAL PROJECTS PREVIEW ─── */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{
                background: "rgba(139, 92, 246, 0.15)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                color: "#c4b5fd",
              }}
            >
              <Sparkles className="w-3 h-3" /> Real Client Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Projects That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Speak Results
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Real websites, real clients, real results — live and accessible right now.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  {/* Status dot */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusDot[project.status] ?? "#f59e0b" }} />
                    <span className="text-white text-xs">{project.status}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs text-gray-300"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
                  >
                    Visit site <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projects" className="btn-outline">
              View All 7 Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Clients Say
              </span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-medium text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div
              className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))",
                border: "1px solid rgba(99, 102, 241, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Build Something{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Amazing?
                  </span>
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">
                  Let&apos;s collaborate and bring your vision to life. From concept to
                  deployment, we&apos;ve got you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary px-8 py-4">
                    Start Your Project <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="https://wa.me/916382256881?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-8 py-4"
                    style={{ borderColor: "rgba(37, 211, 102, 0.4)", color: "#4ade80" }}
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
