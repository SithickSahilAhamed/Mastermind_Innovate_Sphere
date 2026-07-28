"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TrackChanges from "@mui/icons-material/TrackChanges";
import Visibility from "@mui/icons-material/Visibility";
import Favorite from "@mui/icons-material/Favorite";
import Lightbulb from "@mui/icons-material/Lightbulb";
import Group from "@mui/icons-material/Group";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import Language from "@mui/icons-material/Language";
import CheckCircle from "@mui/icons-material/CheckCircle";
import FlashOn from "@mui/icons-material/FlashOn";
import { stats } from "@/data/site";

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

const timeline = [
  { year: "2021", title: "Company Founded", desc: "Started with a vision to bridge technology and community impact." },
  { year: "2022", title: "First 10 Clients", desc: "Delivered successful web and software projects across multiple industries." },
  { year: "2023", title: "Scholarship Initiative Launched", desc: "Began supporting underprivileged students with educational resources." },
  { year: "2024", title: "Placement Program Expanded", desc: "Launched structured placement guidance with industry expert mentors." },
  { year: "2025", title: "50+ Projects Completed", desc: "Crossed a major milestone with over 50 successful digital projects." },
];

const values = [
  { icon: TrackChanges, title: "Mission-Driven", desc: "Every project we take is aimed at creating real, measurable impact for our clients and community.", color: "from-indigo-500 to-purple-500" },
  { icon: Visibility, title: "Visionary Thinking", desc: "We look ahead — designing solutions that scale with your business and stand the test of time.", color: "from-blue-500 to-cyan-500" },
  { icon: Favorite, title: "Community First", desc: "Beyond business, we invest in students and communities through scholarships and consultation support.", color: "from-pink-500 to-rose-500" },
  { icon: Lightbulb, title: "Innovation Always", desc: "We stay at the cutting edge of technology, constantly learning and applying new approaches.", color: "from-amber-500 to-orange-500" },
];

const whyUs = [
  "End-to-end digital solutions under one roof",
  "5+ years of combined industry experience",
  "Agile development with transparent communication",
  "Post-launch support and maintenance",
  "Community impact through student initiatives",
  "Affordable pricing without compromising quality",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-20 blur-[80px]" style={{ background: "radial-gradient(circle, #c7d2fe, transparent)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "#eef1fd", border: "1px solid #c5cee0", color: "#3b5bdb" }}>
              <Group sx={{ fontSize: 14 }} /> Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "#0d1321" }}>
              We&apos;re More Than a{" "}
              <span className="gradient-text">Tech Company</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#4a5568" }}>
              We are a team of passionate developers, designers, and mentors committed to building modern digital solutions while uplifting communities through education and guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: "#f8f9fc", borderTop: "1px solid #e4e8f0", borderBottom: "1px solid #e4e8f0" }}>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-1 gradient-text">{stat.value}</div>
                <div className="text-sm" style={{ color: "#4a5568" }}>{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: TrackChanges, label: "Our Mission", text: "To empower businesses with cutting-edge digital solutions and support students in their educational journey by providing technology, mentorship, and guidance — all under one purpose-driven organization.", color: "from-indigo-500 to-purple-500" },
              { icon: Visibility, label: "Our Vision", text: "To be a leading digital transformation partner across South Asia, recognized not just for technical excellence but for our lasting social impact on student communities and public welfare.", color: "from-blue-500 to-cyan-500" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.15}>
                <div className="glass-card p-8 rounded-2xl h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.color}`}>
                    <item.icon sx={{ fontSize: 28, color: "white" }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#0d1321" }}>{item.label}</h3>
                  <p className="leading-relaxed" style={{ color: "#4a5568" }}>{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>
              The Values We <span className="gradient-text">Live By</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="glass-card p-6 rounded-2xl text-center h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${v.color}`}>
                    <v.icon sx={{ fontSize: 28, color: "white" }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3" style={{ color: "#0d1321" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="max-w-lg mx-auto" style={{ color: "#4a5568" }}>From a small team with a big dream to a growing digital agency with real social impact.</p>
          </AnimatedSection>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #3b5bdb, #7048e8, #0ea5e9)" }} />
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.12} className="relative flex gap-8 mb-10">
                <div className="w-16 flex-shrink-0 flex items-start justify-center pt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-indigo-500 bg-white relative z-10" style={{ boxShadow: "0 0 10px rgba(59,91,219,0.4)" }} />
                </div>
                <div className="pb-2">
                  <span className="text-sm font-medium" style={{ color: "#3b5bdb" }}>{item.year}</span>
                  <h3 className="font-semibold text-lg mt-1" style={{ color: "#0d1321" }}>{item.title}</h3>
                  <p className="text-sm mt-1" style={{ color: "#4a5568" }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "#eef1fd", border: "1px solid #c5cee0", color: "#3b5bdb" }}>
                <EmojiEvents sx={{ fontSize: 14 }} /> Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#0d1321" }}>
                We Don&apos;t Just Build — <span className="gradient-text">We Partner</span>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: "#4a5568" }}>
                Choosing MMIS Technologies means choosing a team that genuinely cares about your success — and the success of the communities around us.
              </p>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3" style={{ color: "#374151" }}>
                    <CheckCircle sx={{ fontSize: 20, color: "#4f46e5" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Work With Us <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-3xl" style={{ background: "linear-gradient(135deg, #eef1fd, #f3f0ff)", border: "1px solid #c5cee0" }}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Language, label: "Global Standards", color: "from-blue-500 to-cyan-500" },
                    { icon: FlashOn, label: "Fast Delivery", color: "from-indigo-500 to-purple-500" },
                    { icon: Favorite, label: "Social Impact", color: "from-pink-500 to-rose-500" },
                    { icon: EmojiEvents, label: "Quality Assured", color: "from-amber-500 to-orange-500" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl text-center bg-white" style={{ border: "1px solid #e4e8f0" }}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 bg-gradient-to-br ${item.color}`}>
                        <item.icon sx={{ fontSize: 20, color: "white" }} />
                      </div>
                      <span className="text-xs font-medium" style={{ color: "#374151" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl text-center" style={{ background: "#eef1fd", border: "1px solid #c5cee0" }}>
                  <div className="text-4xl font-bold mb-1 gradient-text">98%</div>
                  <div className="text-sm" style={{ color: "#4a5568" }}>Client Satisfaction Rate</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
