"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Work from "@mui/icons-material/Work";
import Schedule from "@mui/icons-material/Schedule";
import LocationOn from "@mui/icons-material/LocationOn";
import CloudUpload from "@mui/icons-material/CloudUpload";
import Description from "@mui/icons-material/Description";
import Close from "@mui/icons-material/Close";
import CheckCircle from "@mui/icons-material/CheckCircle";
import HourglassEmpty from "@mui/icons-material/HourglassEmpty";
import Send from "@mui/icons-material/Send";
import ReportProblem from "@mui/icons-material/ReportProblem";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { careers, siteConfig } from "@/data/site";
import { db } from "@/lib/firebase";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { uploadResume } from "@/lib/cloudinary";

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

const perks = [
  { title: "Real Client Projects", desc: "Work on live websites and software used by real businesses, not simulations." },
  { title: "Mentorship", desc: "Direct guidance from our founders and senior developers throughout your internship." },
  { title: "Certificate & LOR", desc: "Receive a completion certificate and letter of recommendation for strong performers." },
  { title: "Flexible & Remote", desc: "Work from anywhere with flexible hours that fit around your studies." },
];

const emptyForm = { name: "", email: "", phone: "", position: "", portfolio: "", message: "" };

export default function CareerPage() {
  const formSectionRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const scrollToForm = (position?: string) => {
    if (position) setFormData((prev) => ({ ...prev, position }));
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!/\.(pdf|doc|docx)$/i.test(file.name)) {
      setStatus("error");
      setErrorMsg("Please upload a PDF, DOC, or DOCX file.");
      e.target.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setStatus("error");
      setErrorMsg("File size must be under 5MB.");
      e.target.value = "";
      return;
    }

    setStatus("idle");
    setErrorMsg("");
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setStatus("error");
      setErrorMsg("Please attach your resume before submitting.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const resumeUrl = await uploadResume(resumeFile);
      const appRef = doc(collection(db, "careerApplications"));
      await setDoc(appRef, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        portfolio: formData.portfolio,
        message: formData.message,
        resumeFileName: resumeFile.name,
        resumeUrl,
        status: "new",
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      setFormData(emptyForm);
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setTimeout(() => setStatus("idle"), 8000);
    } catch (err) {
      console.error("Career application submission failed:", err);
      setStatus("error");
      setErrorMsg("Something went wrong while submitting. Please try again or email your resume directly.");
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid" />
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-20 blur-[80px]"
          style={{ background: "radial-gradient(circle, #c7d2fe, transparent)" }}
        />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{ background: "#eef1fd", border: "1px solid #c5cee0", color: "#3b5bdb" }}
            >
              <Work sx={{ fontSize: 14 }} /> Careers & Internships
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "#0d1321" }}>
              Build Your Career{" "}
              <span className="gradient-text">With Us</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#4a5568" }}>
              We hire curious, driven interns who want to work on real projects and grow fast. Explore open roles and apply below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="glass-card p-6 rounded-2xl h-full">
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "#0d1321" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding pt-0 bg-section">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="max-w-lg mx-auto" style={{ color: "#4a5568" }}>
              Current internship openings. Don&apos;t see a fit? Apply anyway — we review every submission.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {careers.map((role, i) => (
              <AnimatedSection key={role.id} delay={i * 0.08}>
                <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-lg" style={{ color: "#0d1321" }}>{role.title}</h3>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0"
                      style={{ background: "#eef1fd", color: "#3b5bdb" }}
                    >
                      {role.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: "#8a95a8" }}>
                    <span className="flex items-center gap-1"><LocationOn sx={{ fontSize: 14 }} /> {role.location}</span>
                    <span className="flex items-center gap-1"><Schedule sx={{ fontSize: 14 }} /> {role.duration}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a5568" }}>{role.description}</p>
                  <ul className="space-y-1.5 mb-6">
                    {role.requirements.map((req) => (
                      <li key={req} className="text-xs flex items-start gap-2" style={{ color: "#4a5568" }}>
                        <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#3b5bdb" }} />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollToForm(role.title)} className="btn-primary text-sm mt-auto self-start">
                    Apply Now <ArrowForward sx={{ fontSize: 14 }} />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formSectionRef} className="section-padding scroll-mt-20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#0d1321" }}>
                Apply <span className="gradient-text">Now</span>
              </h2>
              <p className="max-w-lg mx-auto" style={{ color: "#4a5568" }}>
                Fill in your details and attach your resume. Our hiring team reviews every application.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="glass-card p-8 rounded-2xl">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl flex items-center gap-3"
                  style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.3)" }}
                >
                  <CheckCircle sx={{ fontSize: 20, color: "#059669", flexShrink: 0 }} />
                  <p className="text-sm font-medium" style={{ color: "#065f46" }}>
                    Application submitted! We&apos;ll review your resume and reach out if there&apos;s a fit.
                  </p>
                </motion.div>
              )}

              {status === "error" && errorMsg && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl flex items-center gap-3"
                  style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.3)" }}
                >
                  <ReportProblem sx={{ fontSize: 20, color: "#dc2626", flexShrink: 0 }} />
                  <p className="text-sm font-medium" style={{ color: "#991b1b" }}>{errorMsg}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                      style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,91,219,0.08)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                      style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,91,219,0.08)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                      style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>Position *</label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                      style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                    >
                      <option value="">Select a position</option>
                      {careers.map((role) => (
                        <option key={role.id} value={role.title}>{role.title}</option>
                      ))}
                      <option value="Other">Other / Not Listed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>Portfolio / LinkedIn (optional)</label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                    style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>Why should we pick you? (optional)</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="A short note about yourself, your skills, or availability..."
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm resize-none"
                    style={{ background: "#f8f9fc", border: "1px solid #e4e8f0", color: "#0d1321" }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#3b5bdb"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(59,91,219,0.08)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e4e8f0"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#374151" }}>Resume *</label>
                  {!resumeFile ? (
                    <label
                      className="flex flex-col items-center justify-center gap-2 px-4 py-8 rounded-xl cursor-pointer transition-all text-center"
                      style={{ background: "#f8f9fc", border: "1.5px dashed #c5cee0" }}
                    >
                      <CloudUpload sx={{ fontSize: 28, color: "#3b5bdb" }} />
                      <span className="text-sm font-medium" style={{ color: "#0d1321" }}>Click to upload your resume</span>
                      <span className="text-xs" style={{ color: "#8a95a8" }}>PDF, DOC, or DOCX — max 5MB</span>
                      <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                    </label>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "#f8f9fc", border: "1px solid #e4e8f0" }}>
                      <Description sx={{ fontSize: 20, color: "#3b5bdb", flexShrink: 0 }} />
                      <span className="text-sm flex-1 truncate" style={{ color: "#0d1321" }}>{resumeFile.name}</span>
                      <button
                        type="button"
                        onClick={() => { setResumeFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                        className="p-1 rounded-lg transition-colors flex-shrink-0"
                        aria-label="Remove file"
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#eef1fd"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        <Close sx={{ fontSize: 16, color: "#4a5568" }} />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <><HourglassEmpty sx={{ fontSize: 16 }} className="animate-spin" /> Submitting...</>
                  ) : (
                    <><Send sx={{ fontSize: 16 }} /> Submit Application</>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: "#8a95a8" }}>
                  Prefer email? Send your resume to{" "}
                  <a href={`mailto:${siteConfig.email}`} style={{ color: "#3b5bdb" }}>{siteConfig.email}</a>.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
