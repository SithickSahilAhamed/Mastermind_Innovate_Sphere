"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  FileText,
  MessageCircle,
  TrendingUp,
  Map,
  Star,
  CheckCircle,
  Award,
  Zap,
  Code2,
  Database,
  Cloud,
} from "lucide-react";

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

const offerings = [
  { icon: FileText, title: "Resume Building", desc: "Craft ATS-optimized resumes that highlight your strengths and get noticed by top recruiters.", color: "from-indigo-500 to-purple-500", features: ["ATS Optimization", "Role-specific Templates", "LinkedIn Profile Review", "Portfolio Guidance"] },
  { icon: MessageCircle, title: "Interview Preparation", desc: "Mock interviews, HR rounds, and technical assessments with real-time feedback from industry experts.", color: "from-blue-500 to-cyan-500", features: ["Technical Mock Rounds", "HR Preparation", "STAR Method Training", "Confidence Building"] },
  { icon: TrendingUp, title: "Career Mentorship", desc: "One-on-one guidance from professionals with 5+ years of experience in leading tech companies.", color: "from-green-500 to-emerald-500", features: ["1:1 Mentoring", "Career Path Planning", "Salary Negotiation", "Networking Tips"] },
  { icon: Map, title: "Technology Roadmaps", desc: "Structured learning roadmaps for Frontend, Backend, Full-Stack, DevOps, Data Science, and more.", color: "from-orange-500 to-amber-500", features: ["Curated Resources", "Skill Milestones", "Project Guidance", "Certificate Paths"] },
];

const mentors = [
  { name: "Arjun Sharma", role: "Senior Engineer, Google", exp: "8 Years", speciality: "Full-Stack Development", avatar: "https://randomuser.me/api/portraits/men/11.jpg", rating: 4.9 },
  { name: "Divya Menon", role: "Product Manager, Microsoft", exp: "7 Years", speciality: "Product & Strategy", avatar: "https://randomuser.me/api/portraits/women/12.jpg", rating: 4.8 },
  { name: "Karthik Rajan", role: "DevOps Lead, Amazon", exp: "9 Years", speciality: "Cloud & DevOps", avatar: "https://randomuser.me/api/portraits/men/13.jpg", rating: 4.9 },
  { name: "Nisha Patel", role: "Data Scientist, Meta", exp: "6 Years", speciality: "AI & Data Science", avatar: "https://randomuser.me/api/portraits/women/14.jpg", rating: 4.7 },
];

const roadmaps = [
  { title: "Frontend Developer", skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Next.js"], icon: Code2, color: "from-blue-500 to-cyan-500" },
  { title: "Backend Developer", skills: ["Python/Node.js", "Databases", "REST APIs", "Microservices", "Docker"], icon: Database, color: "from-indigo-500 to-purple-500" },
  { title: "Cloud & DevOps", skills: ["Linux", "Git", "CI/CD", "Kubernetes", "AWS/GCP"], icon: Cloud, color: "from-orange-500 to-amber-500" },
  { title: "Full-Stack Engineer", skills: ["Frontend + Backend", "Databases", "Deployment", "Testing", "System Design"], icon: Zap, color: "from-green-500 to-emerald-500" },
];

const successStats = [
  { value: "85%", label: "Placement Rate" },
  { value: "150+", label: "Students Placed" },
  { value: "4.8★", label: "Average Rating" },
  { value: "5+", label: "Expert Mentors" },
];

export default function PlacementPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh bg-grid" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-15 blur-[80px]" style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.3)", color: "#6ee7b7" }}>
              <Briefcase className="w-3 h-3" /> Career Guidance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Launch Your Tech Career{" "}
              <span style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                with Confidence
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
              Expert-led placement guidance from professionals with 5+ years of industry experience. From resume to offer letter — we&apos;ve got your back.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", color: "#6ee7b7" }}>
              <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              Guidance from professionals with 5+ years of industry experience
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Start Guidance <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#mentors" className="btn-outline px-8 py-4">
                Meet Our Mentors
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: "rgba(16, 185, 129, 0.05)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive{" "}
              <span style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Career Support</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">Everything you need to land your dream job in the tech industry.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8">
            {offerings.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.color}`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section id="mentors" className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Your{" "}
              <span style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mentors</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">Industry professionals from top tech companies ready to guide your career journey.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, i) => (
              <AnimatedSection key={mentor.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={mentor.avatar} alt={mentor.name} className="w-20 h-20 rounded-2xl mx-auto mb-4 object-cover" style={{ border: "2px solid rgba(16, 185, 129, 0.3)" }} />
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-yellow-400 text-sm font-medium">{mentor.rating}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{mentor.name}</h3>
                  <p className="text-emerald-400 text-sm mb-1">{mentor.role}</p>
                  <p className="text-gray-400 text-xs mb-3">{mentor.exp} Experience</p>
                  <span className="px-2 py-1 rounded-full text-xs text-gray-300" style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                    {mentor.speciality}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmaps */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technology{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Roadmaps</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">Structured paths to master the skills employers actually look for.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmaps.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${r.color}`}>
                    <r.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-4">{r.title}</h3>
                  <div className="space-y-2">
                    {r.skills.map((skill, j) => (
                      <div key={skill} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "rgba(99, 102, 241, 0.2)", color: "#a5b4fc" }}>{j + 1}</span>
                        {skill}
                      </div>
                    ))}
                  </div>
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
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15))", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
              <div className="relative z-10">
                <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Land Your Dream Job?</h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">Join our placement guidance program and get personalized support from day one.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary px-8 py-4">
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/contact" className="btn-outline px-8 py-4">
                    Book a Free Call
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
