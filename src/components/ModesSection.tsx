"use client";
import { useState, useRef, memo } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  Zap, Code2, TrendingUp, Users, Briefcase, CalendarDays, BookOpen,
  FileText, Check, MoreHorizontal, Paperclip, LayoutGrid,
} from "lucide-react";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const modes = [
  {
    id: "copilot",
    name: "Co-Pilot",
    icon: Zap,
    tag: "General",
    accent: "#64748B",
    tagColor: "text-slate-400",
    iconBg: "rgba(100,116,139,0.12)",
    iconBorder: "rgba(100,116,139,0.2)",
    prompt: "Assist me during live conversations. Summarise context, flag key points, and suggest responses based on what's being said.",
    intelligence: "General",
  },
  {
    id: "technical",
    name: "Technical Interview",
    icon: Code2,
    tag: "Interview",
    accent: "#3B82F6",
    tagColor: "text-blue-400",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.2)",
    prompt: "Break down every answer into: Problem Statement, My Approach, Edge Cases, Time & Space Complexity. Never give raw code without explaining the reasoning.",
    intelligence: "Technical Interview",
  },
  {
    id: "sales",
    name: "Sales Mode",
    icon: TrendingUp,
    tag: "Sales",
    accent: "#10B981",
    tagColor: "text-emerald-400",
    iconBg: "rgba(16,185,129,0.12)",
    iconBorder: "rgba(16,185,129,0.2)",
    prompt: "Track live signals: budget cues, pain points, objections. Surface recommended closes and next steps in real time during prospect calls.",
    intelligence: "Sales",
  },
  {
    id: "recruiting",
    name: "Recruiting",
    icon: Users,
    tag: "HR",
    accent: "#F59E0B",
    tagColor: "text-amber-400",
    iconBg: "rgba(245,158,11,0.12)",
    iconBorder: "rgba(245,158,11,0.2)",
    prompt: "Correlate candidate responses against the job requisition. Suggest follow-up probes for gaps and surface strong alignment signals.",
    intelligence: "Recruiting",
  },
  {
    id: "job",
    name: "Looking for Work",
    icon: Briefcase,
    tag: "Career",
    accent: "#6366F1",
    tagColor: "text-indigo-400",
    iconBg: "rgba(99,102,241,0.12)",
    iconBorder: "rgba(99,102,241,0.2)",
    prompt: "Coach me on behavioral interview answers using the STAR framework. Lead with business impact. Align every answer to the job description.",
    intelligence: "Looking for Work",
  },
  {
    id: "team",
    name: "Team Meet",
    icon: CalendarDays,
    tag: "Standup",
    accent: "#06B6D4",
    tagColor: "text-cyan-400",
    iconBg: "rgba(6,182,212,0.12)",
    iconBorder: "rgba(6,182,212,0.2)",
    prompt: "Track action items, decisions, and blockers in real time. Assign owners and flag anything that's on the critical path.",
    intelligence: "Team Meet",
  },
  {
    id: "lecture",
    name: "Lecture Mode",
    icon: BookOpen,
    tag: "Education",
    accent: "#F43F5E",
    tagColor: "text-rose-400",
    iconBg: "rgba(244,63,94,0.12)",
    iconBorder: "rgba(244,63,94,0.2)",
    prompt: "Translate complex concepts into plain language. Generate LaTeX formulas on demand and provide intuitive analogies.",
    intelligence: "Lecture",
  },
] as const;

type Mode = typeof modes[number];

/* ─────────────────────────────────────────────────────────────
   SpotlightCard — cursor-aware glow via useMotionValue.
   Never triggers React re-renders on mouse movement.
───────────────────────────────────────────────────────────── */
const SpotlightCard = memo(function SpotlightCard({
  children, className = "", style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glow = useMotionTemplate`radial-gradient(
    280px circle at ${mouseX}px ${mouseY}px,
    rgba(0,0,0,0.025),
    transparent 80%
  )`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className={`relative group overflow-hidden ${className}`}
      style={style}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: glow,
          borderRadius: "inherit",
          transition: "opacity 350ms cubic-bezier(0.23,1,0.32,1)",
        }}
      />
      {children}
    </motion.div>
  );
});

/* ─────────────────────────────────────────────────────────────
   AppMockup — faithful replication of the actual Natively
   Modes UI (light macOS-native aesthetic from the screenshot).
   Blur crossfade on mode switch (Emil: blur bridges the visual
   gap between two crossfade states).
───────────────────────────────────────────────────────────── */
const AppMockup = memo(function AppMockup({ mode, onModeSelect }: { mode: Mode; onModeSelect: (m: Mode) => void }) {
  return (
    <SpotlightCard
      className="w-full h-full rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02)",
      }}
    >
      {/* App body */}
      <div className="flex flex-1 min-h-0">

        {/* Sidebar */}
        <div
          className="w-[240px] shrink-0 flex flex-col"
          style={{ background: "#FAFAFA", borderRight: "1px solid rgba(0,0,0,0.06)" }}
        >
          {/* MODES BETA header */}
          <div className="flex items-center gap-2 px-5 pt-6 pb-3">
            <span className="text-[12px] font-bold text-[#1a202c] tracking-[0.05em]">MODES</span>
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-md"
              style={{ background: "#fef3c7", color: "#d97706" }}
            >
              BETA
            </span>
          </div>

          {/* New Mode button */}
          <div className="px-4 pb-4">
            <div
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[13px] text-black/70 font-medium cursor-pointer transition-colors hover:bg-black/5 shadow-sm"
              style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <span className="text-[16px] leading-none text-black/40 font-light">+</span>
              New Mode
            </div>
          </div>

          {/* Mode list */}
          <div className="flex flex-col px-3 gap-0.5 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {modes.map((m) => {
                const isActive = m.id === mode.id;
                return (
                  <motion.div
                    key={`${m.id}-${mode.id}`}
                    onClick={() => onModeSelect(m)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-black/5 transition-colors"
                    style={{
                      background: isActive ? "rgba(0,0,0,0.06)" : "transparent",
                    }}
                  >
                    <FileText
                      size={15}
                      className={isActive ? "text-black/70 shrink-0" : "text-black/30 shrink-0"}
                    />
                    <span
                      className={`text-[13px] truncate ${
                        isActive ? "text-[#1a202c] font-medium" : "text-black/60 font-medium"
                      }`}
                    >
                      {m.name}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom — Natively Templates */}
          <div className="flex items-center gap-2.5 px-5 py-5 mt-auto" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
            <LayoutGrid size={15} className="text-black/30 shrink-0" />
            <span className="text-[13px] font-medium text-black/40">Natively Templates</span>
          </div>
        </div>

        {/* Main panel — blur crossfade on mode switch */}
        <div className="flex-1 bg-white overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.16, ease: EASE_OUT }}
              className="h-full px-10 py-8 flex flex-col gap-6"
            >
              {/* Title row */}
              <div className="flex items-center justify-between gap-3 shrink-0 mb-1">
                <h3
                  className="text-[32px] font-bold text-[#1a202c] leading-tight tracking-tight font-geist"
                >
                  {mode.name}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-black/60 cursor-pointer hover:bg-black/5 transition-colors"
                    style={{ background: "rgba(0,0,0,0.04)" }}
                  >
                    <Check size={12} className="text-black/50" />
                    Set active
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/5 transition-colors"
                    style={{ background: "rgba(0,0,0,0.04)" }}
                  >
                    <MoreHorizontal size={15} className="text-black/40" />
                  </div>
                </div>
              </div>

              {/* Real-time prompt */}
              <div className="shrink-0">
                <p className="text-[15px] font-bold text-[#1a202c] mb-3">Real-time prompt</p>
                <div
                  className="rounded-xl overflow-hidden bg-white shadow-sm"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <div className="px-5 py-4 min-h-[100px]">
                    <motion.p
                      key={mode.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3, ease: EASE_OUT }}
                      className="text-[14px] text-black/40 leading-relaxed font-geist"
                    >
                      {mode.prompt}
                    </motion.p>
                  </div>
                  <div
                    className="flex justify-end px-5 py-2.5 bg-white"
                    style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <span className="text-[13px] font-medium text-black/30 cursor-pointer hover:text-black/50 transition-colors">Save</span>
                  </div>
                </div>
                <p className="text-[13px] text-black/40 font-geist mt-2.5">
                  Powered by Natively's built-in {mode.intelligence} intelligence.
                </p>
              </div>

              {/* Reference files */}
              <div className="shrink-0">
                <p className="text-[15px] font-bold text-[#1a202c] mb-3">Reference files</p>
                <div
                  className="rounded-xl px-4 py-10 flex flex-col items-center justify-center gap-3 bg-white shadow-sm"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <p className="text-[13px] font-medium text-black/50">Add files as real-time context.</p>
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium text-[#1a202c] cursor-pointer hover:bg-black/5 transition-colors"
                    style={{ background: "rgba(0,0,0,0.04)" }}
                  >
                    <Paperclip size={14} className="text-black/60" />
                    Upload file
                  </div>
                </div>
              </div>

              {/* Notes template */}
              <div className="shrink-0 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[15px] font-bold text-[#1a202c]">Notes template</p>
                  <p className="text-[13px] font-medium text-black/30 cursor-pointer hover:text-black/50 transition-colors">Remove template</p>
                </div>
                <div
                  className="rounded-xl px-5 py-4 bg-white shadow-sm"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <p className="text-[16px] font-bold text-[#1a202c] mb-1">Summary</p>
                  <p className="text-[14px] text-black/50 font-geist">High-level summary of the conversation.</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </SpotlightCard>
  );
});

/* ─── Stagger orchestration ───────────────────────────────── */
const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
};
const listItem = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1] } },
};

/* ─────────────────────────────────────────────────────────────
   ModesSection
───────────────────────────────────────────────────────────── */
export default function ModesSection() {
  const [active, setActive] = useState<Mode>(modes[1]);

  return (
    <section className="section-spacing bg-white">
      <div className="max-content">

        {/* Heading — center-aligned */}
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="hero-headline !text-black leading-[1.0] mb-5 mx-auto text-center"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-0.038em" }}
          >
            Seven modes. One AI that listens.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE_OUT }}
            className="text-[18px] text-[#6B7280] font-geist leading-relaxed mx-auto text-center"
            style={{ maxWidth: "52ch" }}
          >
            Switch between expert personas built for every professional context.
            Each one rewrites the AI's instruction set — not just a prompt suggestion.
          </motion.p>
        </div>

        {/* Main centered mockup box */}
        <div className="max-w-[800px] mx-auto w-full flex justify-center">

          <motion.div
            className="w-full mx-auto min-h-[560px] aspect-auto md:aspect-[16/11]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.08 }}
          >
            <AppMockup mode={active} onModeSelect={setActive} />
          </motion.div>

        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[13px] text-[#9CA3AF] font-geist mt-5 text-center"
        >
          Each mode hard-overrides the AI's instruction set — a complete persona rewrite, not a prompt suggestion.
        </motion.p>

      </div>
    </section>
  );
}
