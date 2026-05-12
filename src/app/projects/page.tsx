"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code2, Sparkles, CheckCircle, Clock, Zap } from "lucide-react";
import { projects } from "@/data/site";

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

const statusConfig: Record<
  string,
  { icon: React.ElementType; bg: string; border: string; text: string; dot: string }
> = {
  Completed: {
    icon: CheckCircle,
    bg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.35)",
    text: "#6ee7b7",
    dot: "#10b981",
  },
  "Live & Active": {
    icon: Zap,
    bg: "rgba(99, 102, 241, 0.12)",
    border: "rgba(99, 102, 241, 0.35)",
    text: "#a5b4fc",
    dot: "#6366f1",
  },
  Ongoing: {
    icon: Clock,
    bg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.35)",
    text: "#fcd34d",
    dot: "#f59e0b",
  },
};

const categories = [
  "All",
  "Auditing Firm Website",
  "Educational Institution Website",
  "Fashion E-Commerce Website",
  "Construction Company Website",
  "Devotional Application",
  "Soap & Lotion E-Commerce",
  "Habit Tracking Application",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* ─── Hero ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh bg-grid" />
        <div
          className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
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
                background: "rgba(6, 182, 212, 0.15)",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                color: "#67e8f9",
              }}
            >
              <Sparkles className="w-3 h-3" /> Real Client Projects
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Work That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Speaks for Itself
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              7 real projects across 6+ industries — from auditing firms and educational institutions
              to fashion e-commerce and devotional platforms.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 justify-center mt-10">
              {[
                { value: "7", label: "Real Projects" },
                { value: "6+", label: "Industries" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-3xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Category filter ─── */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  activeCategory === cat
                    ? { background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white" }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#9ca3af",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects grid ─── */}
      <section className="section-padding pt-4">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => {
              const cfg = statusConfig[project.status] ?? statusConfig["Ongoing"];
              const StatusIcon = cfg.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.09, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-2xl flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Screenshot / Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

                    {/* gradient tint on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${project.color}`}
                    />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-medium text-white"
                        style={{
                          background: "rgba(0,0,0,0.65)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.12)",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: cfg.bg,
                          border: `1px solid ${cfg.border}`,
                          color: cfg.text,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: cfg.dot }}
                        />
                        <StatusIcon className="w-3 h-3" />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-4">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-gray-300 text-xs">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{
                              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs text-gray-300"
                          style={{ background: "rgba(255,255,255,0.07)" }}
                        >
                          <Code2 className="w-2.5 h-2.5 text-indigo-400" />
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white text-center flex items-center justify-center gap-1.5 transition-all hover:opacity-90"
                        style={{
                          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Visit Site
                      </a>
                      {project.altUrl && (
                        <a
                          href={project.altUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-300 flex items-center justify-center transition-all hover:text-white"
                          style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                          title="Alternate link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div
              className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.15))",
                border: "1px solid rgba(6, 182, 212, 0.3)",
              }}
            >
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Want a Project Like These?
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">
                  Let&apos;s build something exceptional together. Tell us your vision and we&apos;ll
                  make it real.
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
                    Chat on WhatsApp
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
