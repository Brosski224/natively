import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import nativelyLogo from "@/assets/logo.webp";
import { useTranslation } from "react-i18next";

const SPRING = { type: "spring" as const, stiffness: 320, damping: 30 };
const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

type Tab = "summary" | "transcript" | "usage";
const TABS: { id: Tab; label: string }[] = [
  { id: "summary",    label: "Summary"    },
  { id: "transcript", label: "Transcript" },
  { id: "usage",      label: "Usage"      },
];

const COPY_LABEL: Record<Tab, string> = {
  summary:    "Copy full summary",
  transcript: "Copy full transcript",
  usage:      "Copy usage",
};

// Transcript — speaker + time-of-day string + text
const transcriptData = [
  { speaker: "Them", time: "2:02 pm", text: "Thanks for joining. I've got Sarah from procurement on the call too." },
  { speaker: "You",  time: "2:02 pm", text: "Great to meet you both. Can you walk me through your current setup?" },
  { speaker: "Them", time: "2:04 pm", text: "We're stitching together four different tools right now. It's a mess honestly." },
  { speaker: "Them", time: "2:07 pm", text: "Our big concerns are SSO and where the data actually lives. We're EU-based." },
  { speaker: "You",  time: "2:08 pm", text: "We support SAML 2.0 and offer full EU data residency. I can share the compliance docs." },
  { speaker: "Them", time: "2:11 pm", text: "Budget-wise we're looking at around $80k annually. Is that in your range?" },
];

function SummaryContent() {
  return (
    <div className="flex flex-col">
      <p className="text-[9px] text-[#4B5563] leading-[1.65] font-geist mb-2.5">
        Enterprise discovery call with Acme Corp's procurement team. Discussed a 300-seat deployment, EU data residency requirements, and SSO needs ahead of their June contract renewal.
      </p>
      <div className="h-px bg-[#D1D5DB]/70 mb-2.5" />
      <p className="text-[10px] font-semibold text-[#111827] font-geist mb-1.5 tracking-[-0.01em]">Action Items</p>
      {[
        "Send tailored pricing proposal to Sarah by Monday EOD",
        "Share GDPR compliance and EU data residency documentation",
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-2 mb-1.5">
          <div className="w-[14px] h-[14px] rounded-[4px] border border-[#D1D5DB] bg-white/80 flex items-center justify-center shrink-0 mt-[0.5px]">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#16A34A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <p className="text-[9px] text-[#374151] leading-[1.55] font-geist">{item}</p>
        </div>
      ))}
      <p className="text-[10px] font-semibold text-[#111827] font-geist mb-1.5 mt-1 tracking-[-0.01em]">Key Points</p>
      <div className="flex flex-col gap-1">
        {[
          "Acme Corp has an $80k annual budget and vendor contract expiring June 30.",
          "Primary blockers are SSO (SAML 2.0) and EU data residency compliance.",
          "Decision maker is Sarah in procurement — champion is the Head of Engineering.",
        ].map((pt, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <div className="w-[3.5px] h-[3.5px] rounded-full bg-[#6B7280] mt-[4.5px] shrink-0" />
            <p className="text-[9px] text-[#4B5563] leading-[1.55] font-geist">{pt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TranscriptContent() {
  return (
    <div className="flex flex-col gap-3 pb-2">
      {transcriptData.map((entry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: i * 0.035 }}
        >
          {/* Speaker + time */}
          <div className="flex items-baseline gap-1.5 mb-[2px]">
            <span className="text-[9.5px] font-semibold text-[#111827] font-geist">{entry.speaker}</span>
            <span className="text-[8px] text-[#9CA3AF] font-geist">{entry.time}</span>
          </div>
          {/* Text */}
          <p className="text-[9px] text-[#374151] leading-[1.55] font-geist">{entry.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

function UsageContent() {
  return (
    <div className="flex flex-col gap-3 pb-2">
      {/* User question bubble — right aligned */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.04 }}
      >
        <div
          className="max-w-[80%] px-3 py-2 rounded-[14px] rounded-tr-[4px]"
          style={{ background: "linear-gradient(135deg, #4D7BF3 0%, #3B6FE8 100%)" }}
        >
          <p className="text-[8.5px] text-white font-geist leading-[1.45]">
            how do I handle their budget objection without dropping price?
          </p>
        </div>
      </motion.div>

      {/* AI response */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.09 }}
      >
        {/* Natively icon + time */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-[16px] h-[16px] rounded-full bg-[#E5E7EB] flex items-center justify-center overflow-hidden shrink-0">
            <img src={nativelyLogo} alt="N" className="w-[12px] h-[12px] object-contain brightness-0 invert opacity-40" />
          </div>
          <span className="text-[8px] text-[#9CA3AF] font-geist">2:11 pm</span>
        </div>

        {/* AI text response — blue curved card */}
        <div
          className="rounded-[14px] px-3 py-2.5 mb-2"
          style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", border: "1px solid rgba(147,197,253,0.4)" }}
        >
          <p className="text-[9px] text-[#1e3a5f] leading-[1.6] font-geist mb-1.5">
            Anchor to ROI rather than cost. Their current 4-tool stack almost certainly costs more in licensing and lost productivity. Reframe $80k as consolidation savings.
          </p>
          <p className="text-[9px] text-[#1e3a5f] leading-[1.6] font-geist">
            Offer a phased rollout — start with 100 seats at $30k to reduce their commitment risk, with expansion pricing locked in.
          </p>
        </div>

      </motion.div>
      {/* Second exchange */}
      <motion.div className="flex justify-end" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.14 }}>
        <div className="max-w-[80%] px-3 py-2 rounded-[14px] rounded-tr-[4px]" style={{ background: "linear-gradient(135deg, #4D7BF3 0%, #3B6FE8 100%)" }}>
          <p className="text-[8.5px] text-white font-geist leading-[1.45]">what are good follow-up questions to ask them?</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.19 }}>
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-[16px] h-[16px] rounded-full bg-[#E5E7EB] flex items-center justify-center overflow-hidden shrink-0">
            <img src={nativelyLogo} alt="N" className="w-[12px] h-[12px] object-contain brightness-0 invert opacity-40" />
          </div>
          <span className="text-[8px] text-[#9CA3AF] font-geist">2:14 pm</span>
        </div>
        <div className="rounded-[14px] px-3 py-2.5" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", border: "1px solid rgba(147,197,253,0.4)" }}>
          <p className="text-[9px] text-[#1e3a5f] leading-[1.6] font-geist mb-1">Ask about their decision timeline and who else is involved in sign-off. Then probe their biggest pain with the current stack — that's your anchor for the demo.</p>
          <p className="text-[9px] text-[#1e3a5f] leading-[1.6] font-geist">Try: <span className="font-semibold">"When does your current contract expire?"</span> and <span className="font-semibold">"Who else would need to sign off on this?"</span></p>
        </div>
      </motion.div>

      {/* Third exchange */}
      <motion.div className="flex justify-end" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.24 }}>
        <div className="max-w-[80%] px-3 py-2 rounded-[14px] rounded-tr-[4px]" style={{ background: "linear-gradient(135deg, #4D7BF3 0%, #3B6FE8 100%)" }}>
          <p className="text-[8.5px] text-white font-geist leading-[1.45]">summarise what they need for the proposal</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.29 }}>
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-[16px] h-[16px] rounded-full bg-[#E5E7EB] flex items-center justify-center overflow-hidden shrink-0">
            <img src={nativelyLogo} alt="N" className="w-[12px] h-[12px] object-contain brightness-0 invert opacity-40" />
          </div>
          <span className="text-[8px] text-[#9CA3AF] font-geist">2:19 pm</span>
        </div>
        <div className="rounded-[14px] px-3 py-2.5" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", border: "1px solid rgba(147,197,253,0.4)" }}>
          <p className="text-[9px] text-[#1e3a5f] leading-[1.6] font-geist">Include: 300-seat pricing with a 100-seat phased option, SAML 2.0 SSO setup guide, EU data residency compliance doc, and a 2-year locked expansion rate. Address Sarah's procurement checklist directly.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function PremiumMeetingNotesCard() {
  const [activeTab, setActiveTab] = useState<Tab>("summary");
  const { t } = useTranslation();

  const tabContent: Record<Tab, React.ReactNode> = {
    summary:    <SummaryContent />,
    transcript: <TranscriptContent />,
    usage:      <UsageContent />,
  };

  return (
    <div className="w-full h-auto md:aspect-[6/5] flex flex-col bg-[#eef0f4] rounded-[36px] overflow-hidden relative group hover:shadow-lg transition-all duration-300 pt-8 px-6 md:pt-10 md:px-12 pb-0">
      <div className="absolute inset-0 rounded-[36px] pointer-events-none z-20" style={{ boxShadow: "inset 0 2px 14px rgba(120,130,160,0.12)" }} />

      <motion.div
        className="relative z-10 flex-1 flex flex-col"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        {/* Heading — matches UniversalLLM pattern */}
        <div className="space-y-2 max-w-[85%] mb-6">
          <h3 className="text-[26px] md:text-[32px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#2b3445] font-geist">
            {t('features.card4_label')}
          </h3>
          <p className="text-[14px] md:text-[16px] text-[#7b8596] leading-[1.5] font-medium font-geist">
            {t('features.card4_desc')}
          </p>
        </div>

        <div
          className="flex-1 rounded-t-[28px] overflow-hidden flex flex-col"
          style={{
            background: "#f5f6f8",
            boxShadow: "0 -2px 20px rgba(0,0,0,0.07), 0 0 0 1px rgba(255,255,255,0.55)",
          }}
        >
          {/* Header */}
          <div className="px-5 pt-4 pb-0 shrink-0">
            <motion.p
              className="text-[8.5px] text-[#9CA3AF] font-geist mb-[3px] tracking-[0.01em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.4 }}
            >
              Friday, Apr 18
            </motion.p>
            <motion.h3
              className="text-[14px] font-bold text-[#111827] leading-[1.22] font-geist mb-3 tracking-[-0.02em]"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.11, duration: 0.4, ease: EASE_OUT }}
            >
              Acme Corp — Enterprise<br />Discovery Call
            </motion.h3>

            {/* Tabs row */}
            <motion.div
              className="flex items-center justify-between mb-3"
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4, ease: EASE_OUT }}
            >
              <div className="flex items-center gap-[2px] rounded-[10px] p-[3px]" style={{ background: "rgba(0,0,0,0.07)" }}>
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-2.5 py-[4px] rounded-[7px] text-[8.5px] font-geist font-medium transition-colors duration-150"
                    style={{ color: activeTab === tab.id ? "#111827" : "#6B7280" }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0 rounded-[7px] bg-white"
                        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}
                        transition={SPRING}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                ))}
              </div>

              <button className="flex items-center gap-1 text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <rect x="1.5" y="3" width="6" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4.5 3V2a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H9" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeTab}
                    className="text-[8px] font-geist"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {COPY_LABEL[activeTab]}
                  </motion.span>
                </AnimatePresence>
              </button>
            </motion.div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 px-5 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Ask input — centered narrow pill like original */}
          <div className="py-2.5 shrink-0 flex justify-center">
            <div
              className="flex items-center justify-between rounded-full px-3 py-[5px] gap-6"
              style={{ width: "62%", background: "rgba(255,255,255,0.82)", boxShadow: "0 1px 8px rgba(0,0,0,0.07), 0 0 0 1px rgba(255,255,255,0.7)" }}
            >
              <span className="text-[8px] text-[#9CA3AF] font-geist whitespace-nowrap">Ask about this meeting...</span>
              <div className="w-[17px] h-[17px] rounded-full flex items-center justify-center shrink-0" style={{ background: "#e2e4e9", boxShadow: "0 1px 3px rgba(0,0,0,0.10)" }}>
                <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H4M8 2V6" stroke="#374151" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
