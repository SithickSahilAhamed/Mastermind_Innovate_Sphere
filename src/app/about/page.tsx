"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  Globe,
  CheckCircle,
  Zap,
} from "lucide-react";
import { stats, teamMembers } from "@/data/site";

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
  { icon: Target, title: "Mission-Driven", desc: "Every project we take is aimed at creating real, measurable impact for our clients and community.", color: "from-indigo-500 to-purple-500" },
  { icon: Eye, title: "Visionary Thinking", desc: "We look ahead — designing solutions that scale with your business and stand the test of time.", color: "from-blue-500 to-cyan-500" },
  { icon: Heart, title: "Community First", desc: "Beyond business, we invest in students and communities through scholarships and consultation support.", color: "from-pink-500 to-rose-500" },
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
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh bg-grid" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-20 blur-[80px]" style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)", color: "#a5b4fc" }}>
              <Users className="w-3 h-3" /> Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We&apos;re More Than a{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Tech Company
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We are a team of passionate developers, designers, and mentors committed to building modern digital solutions while uplifting communities through education and guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: "rgba(99, 102, 241, 0.05)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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
              { icon: Target, label: "Our Mission", text: "To empower businesses with cutting-edge digital solutions and support students in their educational journey by providing technology, mentorship, and guidance — all under one purpose-driven organization.", color: "from-indigo-500 to-purple-500" },
              { icon: Eye, label: "Our Vision", text: "To be a leading digital transformation partner across South Asia, recognized not just for technical excellence but for our lasting social impact on student communities and public welfare.", color: "from-blue-500 to-cyan-500" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.15}>
                <div className="p-8 rounded-2xl h-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.color}`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.label}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Values We{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Live By</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl text-center h-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${v.color}`}>
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our{" "}
              <span style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Journey</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">From a small team with a big dream to a growing digital agency with real social impact.</p>
          </AnimatedSection>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4)" }} />
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.12} className="relative flex gap-8 mb-10">
                <div className="w-16 flex-shrink-0 flex items-start justify-center pt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-indigo-500 bg-[#030712] relative z-10" style={{ boxShadow: "0 0 10px rgba(99, 102, 241, 0.6)" }} />
                </div>
                <div className="pb-2">
                  <span className="text-indigo-400 text-sm font-medium">{item.year}</span>
                  <h3 className="text-white font-semibold text-lg mt-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Team</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">Passionate professionals dedicated to excellence and community impact.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-2xl mx-auto mb-4 object-cover" style={{ border: "2px solid rgba(99, 102, 241, 0.3)" }} />
                  <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                  <p className="text-indigo-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {member.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded-md text-xs text-gray-300" style={{ background: "rgba(99, 102, 241, 0.15)" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)", color: "#a5b4fc" }}>
                <Award className="w-3 h-3" /> Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                We Don&apos;t Just Build —{" "}
                <span style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  We Partner
                </span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Choosing MMIS Technologies means choosing a team that genuinely cares about your success — and the success of the communities around us. We bring technical excellence and human empathy to every engagement.
              </p>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Work With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="p-8 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Globe, label: "Global Standards", color: "from-blue-500 to-cyan-500" },
                      { icon: Zap, label: "Fast Delivery", color: "from-indigo-500 to-purple-500" },
                      { icon: Heart, label: "Social Impact", color: "from-pink-500 to-rose-500" },
                      { icon: Award, label: "Quality Assured", color: "from-amber-500 to-orange-500" },
                    ].map((item) => (
                      <div key={item.label} className="p-4 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 bg-gradient-to-br ${item.color}`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300 text-xs font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-xl text-center" style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                    <div className="text-4xl font-bold text-white mb-1" style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>98%</div>
                    <div className="text-gray-400 text-sm">Client Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
