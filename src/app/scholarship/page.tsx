"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Heart,
  Star,
  CheckCircle,
  Users,
  Target,
  Sparkles,
  Package,
  PenTool,
  Laptop,
  Award,
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

const initiatives = [
  { icon: Package, title: "School Bags", desc: "Providing sturdy, quality school bags to help students carry their learning essentials with comfort.", color: "from-blue-500 to-cyan-500" },
  { icon: PenTool, title: "Stationery Items", desc: "Complete stationery kits including pens, pencils, rulers, erasers, and notebooks for daily learning.", color: "from-purple-500 to-pink-500" },
  { icon: BookOpen, title: "Learning Materials", desc: "Textbooks, reference guides, and study material to support academic excellence at every level.", color: "from-indigo-500 to-purple-500" },
  { icon: Laptop, title: "Basic Course Support", desc: "Assistance with online course fees, skill development programs, and digital learning tools.", color: "from-green-500 to-emerald-500" },
];

const process = [
  { step: "01", title: "Application", desc: "Students or guardians submit a support request through our online form or in person." },
  { step: "02", title: "Review", desc: "Our team reviews each application personally, assessing genuine educational need and circumstances." },
  { step: "03", title: "Eligibility Check", desc: "We verify information and determine eligibility based on our criteria for genuine need." },
  { step: "04", title: "Support Delivery", desc: "Selected students receive their educational support package directly." },
];

const impactStats = [
  { value: "200+", label: "Students Supported", icon: Users },
  { value: "15+", label: "Schools Reached", icon: GraduationCap },
  { value: "4+", label: "Years of Impact", icon: Star },
  { value: "100%", label: "Self-Funded Initiative", icon: Heart },
];

const eligibility = [
  "Students from low-income or single-parent families",
  "Students with genuine educational needs",
  "Students in government or government-aided schools",
  "Students who demonstrate commitment to learning",
  "Priority to girls and differently-abled students",
  "Students referred by verified community workers or teachers",
];

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh bg-grid" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-20 blur-[100px]" style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)", color: "#a5b4fc" }}>
              <Heart className="w-3 h-3" /> Student Support Initiative
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Students,{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Changing Futures
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Every child deserves the tools to learn. Our scholarship and support initiative provides educational essentials to students in genuine need, because a better tomorrow starts with education today.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4">
              Apply for Support <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12" style={{ background: "rgba(99, 102, 241, 0.05)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))", border: "1px solid rgba(99, 102, 241, 0.3)" }}>
                  <stat.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="p-8 sm:p-12 rounded-3xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)" }} />
                <GraduationCap className="w-16 h-16 mx-auto mb-6 text-indigo-400 relative z-10" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">Our Mission Statement</h2>
                <p className="text-gray-300 text-lg leading-relaxed relative z-10 mb-6">
                  &ldquo;We believe that financial barriers should never stand between a child and their education. Through our scholarship support program, we provide tangible resources — school bags, stationery, learning materials, and course support — to deserving students who need it most.&rdquo;
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "rgba(99, 102, 241, 0.2)", border: "1px solid rgba(99, 102, 241, 0.4)", color: "#a5b4fc" }}>
                  <Sparkles className="w-4 h-4" />
                  Students are selected manually based on genuine educational needs and eligibility
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We{" "}
              <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Provide</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">Our support covers essential educational materials that make a real difference in a student&apos;s daily learning experience.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl text-center h-full"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-gradient-to-br ${item.color}`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How the{" "}
              <span style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Process Works</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">A transparent, fair, and human process to ensure support reaches those who truly need it.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-5xl font-black mb-4" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(6, 182, 212, 0.4))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)", color: "#a5b4fc" }}>
                <Target className="w-3 h-3" /> Eligibility Criteria
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Who Can{" "}
                <span style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Apply</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our support is focused on students with genuine educational needs. We evaluate each case with care and empathy, not just paperwork.
              </p>
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Submit an Application <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
                  alt="Students studying"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                  <Award className="w-10 h-10 text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">100% Self-Funded</h4>
                    <p className="text-gray-400 text-sm">This initiative is fully funded by MMIS Technologies — no external donations or grants. We believe in giving back from our own success.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))", border: "1px solid rgba(99, 102, 241, 0.3)" }}>
              <div className="relative z-10">
                <Heart className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Know a Student Who Needs Support?</h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">Reach out to us — every genuine request is reviewed with care. Let&apos;s invest in education together.</p>
                <Link href="/contact" className="btn-primary px-8 py-4">
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
