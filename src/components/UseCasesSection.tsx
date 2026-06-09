import { LocaleLink } from "@/components/LocaleLink";
import { useTranslation } from "react-i18next";
import { motion } from "@/lib/motion";
import { Briefcase, Users, TrendingUp, GraduationCap, ArrowRight, type LucideIcon } from "lucide-react";

// Spacing and animation easing tokens
const EASE_OUT = [0.25, 1, 0.5, 1];

interface UseCase {
  to: string;
  icon: LucideIcon;
  glowColor: string;
  preview: React.ReactNode;
  en: { title: string; desc: string; cta: string };
  ru: { title: string; desc: string; cta: string };
}

// ─────────────────────────────────────────────────────────────
// Interactive Mockups/Previews for Parallax Visuals
// ─────────────────────────────────────────────────────────────

const InterviewPreview = () => (
  <div className="h-[160px] w-full rounded-2xl bg-[#090D16] border border-slate-800 p-4 relative overflow-hidden flex flex-col justify-between select-none">
    {/* Specular Glare */}
    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
    
    <div>
      {/* Mac Window Dots */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
        <div className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
      </div>
      
      {/* Code Snippet */}
      <div className="font-mono text-[9.5px] text-slate-400 space-y-0.5 leading-normal">
        <div><span className="text-pink-500">const</span> path = (root) =&gt; &#123;</div>
        <div className="pl-3"><span className="text-pink-500">if</span> (!root) <span className="text-pink-500">return</span> [];</div>
        <div className="pl-3">visited.add(root);</div>
        <div>&#125;;</div>
      </div>
    </div>

    {/* Floating Jelly Glass suggestion */}
    <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl border border-emerald-500/10 p-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.15)] -rotate-1 transform translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="relative inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full text-[8.5px] font-bold text-white shadow-[0_4px_10px_rgba(16,185,129,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] overflow-hidden">
          <div className="absolute top-0.5 left-1 right-1 h-[45%] rounded-full bg-gradient-to-b from-white/50 to-white/5 blur-[0.3px] pointer-events-none" />
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-white relative z-10">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
          <span className="relative z-10 uppercase tracking-wider">Copilot</span>
        </span>
      </div>
      <p className="text-[10px] text-slate-800 font-semibold leading-snug">
        Use BFS to optimize search queries.
      </p>
    </div>
  </div>
);

const MeetingPreview = () => (
  <div className="h-[160px] w-full rounded-2xl bg-white border border-slate-200 p-4 relative overflow-hidden flex flex-col justify-between select-none">
    {/* Specular Glare */}
    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />
    
    <div>
      {/* Mac Window Dots */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
        <div className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
      </div>
      
      {/* Conversation layout */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <span className="w-4.5 h-4.5 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-600">A</span>
          <span className="text-[9.5px] font-semibold text-slate-800">Alex</span>
          <span className="text-[8px] text-slate-400">10:14 AM</span>
        </div>
        <p className="text-[9.5px] text-slate-500 pl-6 leading-normal">
          "We need to sync the design mockups next week."
        </p>
      </div>
    </div>

    {/* Floating Jelly Glass note */}
    <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl border border-blue-500/10 p-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.15)] rotate-1 transform translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="relative inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full text-[8.5px] font-bold text-white shadow-[0_4px_10px_rgba(59,130,246,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] overflow-hidden">
          <div className="absolute top-0.5 left-1 right-1 h-[45%] rounded-full bg-gradient-to-b from-white/50 to-white/5 blur-[0.3px] pointer-events-none" />
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white relative z-10">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span className="relative z-10 uppercase tracking-wider">Note</span>
        </span>
      </div>
      <p className="text-[10px] text-slate-800 font-semibold leading-snug">
        Alex to present Figma layout on Monday.
      </p>
    </div>
  </div>
);

const SalesPreview = () => (
  <div className="h-[160px] w-full rounded-2xl bg-[#090D16] border border-slate-800 p-4 relative overflow-hidden flex flex-col justify-between select-none">
    {/* Specular Glare */}
    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-violet-500/10 blur-2xl pointer-events-none" />
    
    <div>
      {/* Mac Window Dots */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
        <div className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
      </div>
      
      {/* Sales Objection text */}
      <div className="space-y-1">
        <div className="text-[8.5px] font-bold text-slate-500 uppercase tracking-wider">Prospect Objection</div>
        <p className="text-[9.5px] text-slate-300 italic leading-snug">"The pricing model isn't clear to us."</p>
      </div>
    </div>

    {/* Floating Talk Track */}
    <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl border border-violet-500/10 p-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.15)] -rotate-1 transform translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="relative inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full text-[8.5px] font-bold text-white shadow-[0_4px_10px_rgba(139,92,246,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] overflow-hidden">
          <div className="absolute top-0.5 left-1 right-1 h-[45%] rounded-full bg-gradient-to-b from-white/50 to-white/5 blur-[0.3px] pointer-events-none" />
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-white relative z-10">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
          <span className="relative z-10 uppercase tracking-wider">Coaching</span>
        </span>
      </div>
      <p className="text-[10px] text-slate-800 font-semibold leading-snug">
        Highlight 80% cost savings with local execution.
      </p>
    </div>
  </div>
);

const LecturePreview = () => (
  <div className="h-[160px] w-full rounded-2xl bg-white border border-slate-200 p-4 relative overflow-hidden flex flex-col justify-between select-none"
    style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)",
      backgroundSize: "100% 16px"
    }}
  >
    {/* Specular Glare */}
    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-amber-500/5 blur-2xl pointer-events-none" />
    
    <div>
      {/* Mac Window Dots */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
        <div className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
      </div>
      
      {/* Lecture outline */}
      <div className="space-y-0.5">
        <div className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">Notebook</div>
        <p className="text-[9.5px] text-slate-800 font-semibold leading-snug">Distributed System Design</p>
      </div>
    </div>

    {/* Floating Takeaway */}
    <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl border border-amber-500/10 p-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.15)] rotate-1 transform translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="relative inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full text-[8.5px] font-bold text-white shadow-[0_4px_10px_rgba(245,158,11,0.15),inset_0_1px_2px_rgba(255,255,255,0.4)] overflow-hidden">
          <div className="absolute top-0.5 left-1 right-1 h-[45%] rounded-full bg-gradient-to-b from-white/50 to-white/5 blur-[0.3px] pointer-events-none" />
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-white relative z-10">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
          <span className="relative z-10 uppercase tracking-wider">Summary</span>
        </span>
      </div>
      <p className="text-[10px] text-slate-800 font-semibold leading-snug">
        Raft splits state machines into isolated subproblems.
      </p>
    </div>
  </div>
);

const USE_CASES: UseCase[] = [
  {
    to: "/ai-interview-assistant",
    icon: Briefcase,
    glowColor: "rgba(16,185,129,0.04)",
    preview: <InterviewPreview />,
    en: { 
      title: "Job interviews", 
      desc: "Real-time coding, system design, and behavioral help on live interviews.",
      cta: "Explore Interview Copilot"
    },
    ru: { 
      title: "Собеседования", 
      desc: "Помощь в реальном времени с кодингом, системным дизайном и поведенческими вопросами.",
      cta: "Попробовать копилот"
    },
  },
  {
    to: "/ai-meeting-assistant",
    icon: Users,
    glowColor: "rgba(59,130,246,0.04)",
    preview: <MeetingPreview />,
    en: { 
      title: "Meetings", 
      desc: "Live transcription, instant answers, and automatic notes for any call.",
      cta: "Explore Meeting Assistant"
    },
    ru: { 
      title: "Встречи", 
      desc: "Транскрипция, мгновенные ответы и авто-заметки для любого звонка.",
      cta: "Попробовать ассистент"
    },
  },
  {
    to: "/sales-call-assistant",
    icon: TrendingUp,
    glowColor: "rgba(139,92,246,0.04)",
    preview: <SalesPreview />,
    en: { 
      title: "Sales calls", 
      desc: "On-call objection handling and talk tracks, invisible to the prospect.",
      cta: "Explore Sales Assistant"
    },
    ru: { 
      title: "Звонки по продажам", 
      desc: "Работа с возражениями и скрипты во время звонка, незаметно для клиента.",
      cta: "Попробовать продажи"
    },
  },
  {
    to: "/lecture-note-taker",
    icon: GraduationCap,
    glowColor: "rgba(245,158,11,0.04)",
    preview: <LecturePreview />,
    en: { 
      title: "Lectures", 
      desc: "Transcribe and summarize classes offline, searchable all semester.",
      cta: "Explore Lecture Notes"
    },
    ru: { 
      title: "Лекции", 
      desc: "Расшифровка и резюме занятий офлайн, поиск по всему семестру.",
      cta: "Попробовать лекции"
    },
  },
];

const UseCasesSection = () => {
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  // Stagger entry animations
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT }
    }
  };

  return (
    <section className="section-spacing bg-white relative overflow-hidden" id="use-cases" style={{ backgroundColor: "#ffffff" }}>
      {/* Background radial soft lights to blend the section premium style */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-slate-50/50 blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-slate-50/30 blur-[150px] pointer-events-none translate-y-1/2" />

      <div className="max-content relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100/80 mb-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 font-geist">
              {isRu ? "Применение" : "Versatility"}
            </span>
          </div>

          <h2
            className="hero-headline !text-black leading-[1.0] mb-5 tracking-tight text-center mx-auto"
            style={{ fontSize: "clamp(40px, 8vw, 96px)", letterSpacing: "-0.038em" }}
          >
            {isRu ? (
              <>
                Один ассистент для <br className="hidden sm:block" />
                <span className="italic font-serif text-slate-700">любого разговора</span>
              </>
            ) : (
              <>
                One assistant for every <br className="hidden sm:block" />
                <span className="italic font-serif text-slate-700">conversation</span>
              </>
            )}
          </h2>
          
          <p className="text-[18px] text-[#6B7280] font-geist leading-relaxed text-center mx-auto" style={{ maxWidth: "46ch" }}>
            {isRu
              ? "Natively — это ИИ-копилот для собеседований и ассистент для встреч в одном приложении: локально, приватно и в реальном времени."
              : "Natively is an AI interview copilot and a meeting assistant in one app — local, private, and real-time."}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {USE_CASES.map((u) => {
            const c = isRu ? u.ru : u.en;
            return (
              <motion.div key={u.to} variants={item} className="h-full">
                <LocaleLink
                  to={u.to}
                  className="group relative flex flex-col justify-between h-[450px] sm:h-[480px] rounded-[32px] border border-slate-200/40 hover:border-slate-300/60 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                  style={{
                    background: "#F2F4F8",
                    boxShadow: [
                      "inset 0 1px 0 rgba(255,255,255,1)",
                      "inset 0 -2px 0 rgba(0,0,0,0.05)",
                      "inset 1px 0 0 rgba(255,255,255,0.8)",
                      "inset -1px 0 0 rgba(0,0,0,0.03)",
                      "0 1px 3px rgba(0,0,0,0.04)",
                      "0 8px 20px rgba(0,0,0,0.04)",
                      "0 24px 48px rgba(0,0,0,0.05)"
                    ].join(", ")
                  }}
                >
                  {/* Subtle color glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 10% 10%, ${u.glowColor} 0%, transparent 65%)`
                    }}
                  />

                  {/* Top Portion: Embedded visual preview mock */}
                  <div className="p-4.5 pb-0 shrink-0 relative z-10">
                    {u.preview}
                  </div>

                  {/* Bottom Portion: Text and metadata */}
                  <div className="p-6.5 pt-5 flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      {/* Header and Icon line */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 bg-white/90 text-slate-700 shadow-sm">
                          <u.icon size={15} strokeWidth={2} />
                        </div>
                        <h3 className="text-[17px] font-semibold text-slate-900 font-geist tracking-tight transition-colors duration-200">
                          {c.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[13px] leading-relaxed text-slate-500 font-geist mb-5 line-clamp-3">
                        {c.desc}
                      </p>
                    </div>

                    {/* CTA Link */}
                    <div 
                      className="flex items-center gap-1.5 text-[12px] font-semibold font-geist mt-auto transition-colors duration-200 text-slate-700 group-hover:text-slate-900"
                    >
                      <span>{c.cta}</span>
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </LocaleLink>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
