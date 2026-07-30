"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Language from "@mui/icons-material/Language";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import AssignmentTurnedIn from "@mui/icons-material/AssignmentTurnedIn";
import Business from "@mui/icons-material/Business";
import Code from "@mui/icons-material/Code";
import Palette from "@mui/icons-material/Palette";
import Work from "@mui/icons-material/Work";
import Forum from "@mui/icons-material/Forum";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Group from "@mui/icons-material/Group";
import School from "@mui/icons-material/School";
import Star from "@mui/icons-material/Star";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import FlashOn from "@mui/icons-material/FlashOn";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Favorite from "@mui/icons-material/Favorite";
import { services, stats, projects, testimonials, industries } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Globe: Language, ShoppingCart, ClipboardCheck: AssignmentTurnedIn, Building2: Business, Code2: Code,
  Palette, Briefcase: Work, MessageSquare: Forum, CheckCircle, Users: Group,
  GraduationCap: School, Heart: Favorite, Sparkles: AutoAwesome, Zap: FlashOn,
};
const statIconMap: Record<string, React.ElementType> = { CheckCircle, Users: Group, GraduationCap: School, Globe: Language };
const statusDot: Record<string, string> = {
  Completed: "#10b981",
  "Live & Active": "#3b5bdb",
  Ongoing: "#f59e0b",
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ─── HERO ─── */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-hero-gradient">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-60" />

        {/* Soft indigo blobs */}
        <div
          className="float-slow absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,91,219,0.1), transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="float-delayed absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(112,72,232,0.08), transparent 70%)", filter: "blur(60px)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: "#eef1fd",
                border: "1px solid #c5d0f5",
                color: "#3b5bdb",
                letterSpacing: "-0.01em",
              }}
            >
              <AutoAwesome sx={{ fontSize: 14 }} />
              Modern Digital Agency — Mastermind InnovateSphere
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold mb-6 leading-[1.08]"
              style={{ color: "#0d1321", letterSpacing: "-0.035em" }}
            >
              Building Modern{" "}
              <span style={{
                background: "linear-gradient(135deg, #3b5bdb 0%, #7048e8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Digital Solutions
              </span>
              <br />
              for Businesses &amp; Students
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "#4a5568", letterSpacing: "-0.01em" }}
            >
              We create scalable websites, software platforms, and impactful digital experiences
              while supporting students through educational initiatives.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
                Get Started Free <ArrowForward sx={{ fontSize: 16 }} />
              </Link>
              <Link href="/projects" className="btn-outline text-base px-8 py-3.5">
                View Our Work <ChevronRight sx={{ fontSize: 16 }} />
              </Link>
            </motion.div>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-12 hidden sm:flex flex-wrap gap-2 justify-center"
            >
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "E-Commerce", "UI/UX"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.07 }}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #d1d9e6",
                    color: "#4a5568",
                    boxShadow: "0 1px 3px rgba(13,19,33,0.06)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS — white strip ─── */}
      <section
        className="py-14 border-t border-b"
        style={{ borderColor: "#e4e8f0", background: "#ffffff" }}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = statIconMap[stat.icon];
              return (
                <AnimatedSection key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.09 }}
                    className="text-center group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "#eef1fd", border: "1px solid #c5d0f5" }}
                    >
                      {Icon && <Icon sx={{ fontSize: 20, color: "#3b5bdb" }} />}
                    </div>
                    <div
                      className="text-3xl sm:text-4xl font-bold mb-1"
                      style={{
                        background: "linear-gradient(135deg, #3b5bdb, #7048e8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: "#8a95a8" }}>{stat.label}</div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES — light gray ─── */}
      <section className="section-padding bg-section">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <span
              className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide"
              style={{ background: "#eef1fd", color: "#3b5bdb" }}
            >
              Trusted by Businesses
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#0d1321", letterSpacing: "-0.03em" }}>
              Across{" "}
              <span style={{
                background: "linear-gradient(135deg, #3b5bdb, #7048e8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Multiple Industries
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: "#4a5568", letterSpacing: "-0.01em" }}>
              From auditing firms and educational institutions to fashion brands and devotional
              platforms — we deliver across every sector.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-10">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] ?? Language;
              return (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-4 rounded-xl text-center bg-white cursor-default transition-all duration-200"
                  style={{
                    border: "1px solid #e4e8f0",
                    boxShadow: "0 1px 4px rgba(13,19,33,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#c5d0f5";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(59,91,219,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e4e8f0";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(13,19,33,0.05)";
                  }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 bg-gradient-to-br ${ind.color}`}
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                  >
                    <Icon sx={{ fontSize: 20, color: "white" }} />
                  </div>
                  <p className="text-xs font-medium leading-tight" style={{ color: "#4a5568" }}>{ind.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Metrics strip */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ background: "#e4e8f0" }}
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
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center py-8 px-4 bg-white"
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #3b5bdb, #7048e8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "#8a95a8" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES — white ─── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <span
              className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide"
              style={{ background: "#eef1fd", color: "#3b5bdb" }}
            >
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#0d1321", letterSpacing: "-0.03em" }}>
              Everything You Need to{" "}
              <span style={{
                background: "linear-gradient(135deg, #3b5bdb, #7048e8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Scale
              </span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "#4a5568", letterSpacing: "-0.01em" }}>
              From web development to student support, we offer comprehensive solutions tailored to your needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group p-6 rounded-2xl bg-white transition-all duration-200"
                  style={{
                    border: "1px solid #e4e8f0",
                    boxShadow: "0 1px 4px rgba(13,19,33,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#c5d0f5";
                    el.style.boxShadow = "0 8px 28px rgba(13,19,33,0.09), 0 2px 6px rgba(59,91,219,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#e4e8f0";
                    el.style.boxShadow = "0 1px 4px rgba(13,19,33,0.05)";
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${service.color} transition-transform duration-200 group-hover:scale-105`}
                    style={{ boxShadow: "0 3px 10px rgba(0,0,0,0.1)" }}
                  >
                    {Icon && <Icon sx={{ fontSize: 24, color: "white" }} />}
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "#0d1321", letterSpacing: "-0.02em" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#4a5568" }}>
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: "#3b5bdb", letterSpacing: "-0.01em" }}
                  >
                    Learn more <ArrowForward sx={{ fontSize: 14 }} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS — light gray ─── */}
      <section className="section-padding bg-section">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <span
              className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide"
              style={{ background: "#f0ebfd", color: "#7048e8" }}
            >
              Real Client Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#0d1321", letterSpacing: "-0.03em" }}>
              Projects That{" "}
              <span style={{
                background: "linear-gradient(135deg, #7048e8, #0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Speak Results
              </span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "#4a5568", letterSpacing: "-0.01em" }}>
              Real websites, real clients, real results — live and accessible right now.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-2xl bg-white transition-all duration-200"
                style={{ border: "1px solid #e4e8f0", boxShadow: "0 1px 4px rgba(13,19,33,0.05)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#c5d0f5";
                  el.style.boxShadow = "0 10px 32px rgba(13,19,33,0.1), 0 2px 6px rgba(59,91,219,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#e4e8f0";
                  el.style.boxShadow = "0 1px 4px rgba(13,19,33,0.05)";
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image} alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: "rgba(255,255,255,0.92)", color: "#0d1321", border: "1px solid #e4e8f0", letterSpacing: "-0.01em" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.92)", border: "1px solid #e4e8f0" }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: statusDot[project.status] ?? "#f59e0b" }}
                    />
                    <span className="text-xs font-medium" style={{ color: "#0d1321", letterSpacing: "-0.01em" }}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "#0d1321", letterSpacing: "-0.02em" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed line-clamp-2" style={{ color: "#4a5568" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{ background: "#eef1fd", color: "#3b5bdb", border: "1px solid #c5d0f5", letterSpacing: "-0.01em" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: "#3b5bdb", letterSpacing: "-0.01em" }}>
                    Visit site <OpenInNew sx={{ fontSize: 12 }} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projects" className="btn-outline">
              View All 7 Projects <ArrowForward sx={{ fontSize: 16 }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS — white ─── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: "#0d1321", letterSpacing: "-0.03em" }}>
              What Our{" "}
              <span style={{
                background: "linear-gradient(135deg, #3b5bdb, #7048e8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Clients Say
              </span>
            </h2>
            <p style={{ color: "#8a95a8", letterSpacing: "-0.01em" }}>Trusted by businesses across industries.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white transition-all duration-200"
                style={{ border: "1px solid #e4e8f0", boxShadow: "0 1px 4px rgba(13,19,33,0.05)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#c5d0f5";
                  el.style.boxShadow = "0 8px 24px rgba(13,19,33,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#e4e8f0";
                  el.style.boxShadow = "0 1px 4px rgba(13,19,33,0.05)";
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} sx={{ fontSize: 16, color: "#facc15" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#4a5568", letterSpacing: "-0.01em" }}>
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.avatar} alt={t.name}
                    className="w-9 h-9 rounded-full object-cover"
                    style={{ border: "2px solid #e4e8f0" }}
                  />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#0d1321", letterSpacing: "-0.01em" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#8a95a8" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — dark navy (Databox dark section) ─── */}
      <section className="section-padding" style={{ background: "#0d1321" }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              {/* Soft glow behind heading */}
              <div
                className="relative inline-block mb-6"
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,91,219,0.3), transparent 70%)",
                  padding: "0 40px 20px",
                }}
              >
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Ready to Build Something{" "}
                  <span style={{
                    background: "linear-gradient(135deg, #6b8eff, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Amazing?
                  </span>
                </h2>
              </div>
              <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}>
                Let&apos;s collaborate and bring your vision to life. From concept to
                deployment, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-dark px-8 py-4 text-base">
                  Start Your Project <ArrowForward sx={{ fontSize: 20 }} />
                </Link>
                <a
                  href="https://wa.me/917904019458?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.85)",
                    background: "transparent",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                  }}
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
