import { LocaleLink } from "@/components/LocaleLink";
import { useTranslation } from "react-i18next";
import { motion } from "@/lib/motion";
import { Briefcase, Users, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";

// Spacing, easing, and hover transition tokens
const EASE_OUT = [0.25, 1, 0.5, 1];

interface UseCase {
  to: string;
  icon: React.ComponentType<any>;
  accentClass: string;
  glowColor: string;
  iconBg: string;
  iconBorder: string;
  textColor: string;
  en: { title: string; desc: string; cta: string };
  ru: { title: string; desc: string; cta: string };
}

const USE_CASES: UseCase[] = [
  {
    to: "/ai-interview-assistant",
    icon: Briefcase,
    accentClass: "hover:border-emerald-500/30 hover:shadow-emerald-500/[0.03]",
    glowColor: "rgba(16,185,129,0.06)",
    iconBg: "rgba(16,185,129,0.08)",
    iconBorder: "rgba(16,185,129,0.18)",
    textColor: "#10B981",
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
    accentClass: "hover:border-blue-500/30 hover:shadow-blue-500/[0.03]",
    glowColor: "rgba(59,130,246,0.06)",
    iconBg: "rgba(59,130,246,0.08)",
    iconBorder: "rgba(59,130,246,0.18)",
    textColor: "#3B82F6",
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
    accentClass: "hover:border-violet-500/30 hover:shadow-violet-500/[0.03]",
    glowColor: "rgba(139,92,246,0.06)",
    iconBg: "rgba(139,92,246,0.08)",
    iconBorder: "rgba(139,92,246,0.18)",
    textColor: "#8B5CF6",
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
    accentClass: "hover:border-amber-500/30 hover:shadow-amber-500/[0.03]",
    glowColor: "rgba(245,158,11,0.06)",
    iconBg: "rgba(245,158,11,0.08)",
    iconBorder: "rgba(245,158,11,0.18)",
    textColor: "#F59E0B",
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
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100/80 mb-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 font-geist">
              {isRu ? "Применение" : "Versatility"}
            </span>
          </div>

          <h2 className="hero-headline !text-black text-[32px] sm:text-[44px] md:text-[68px] leading-[1.1] mb-5 tracking-tight">
            {isRu ? (
              <>
                Один ассистент для <span className="italic font-serif text-slate-700 block sm:inline">любого разговора</span>
              </>
            ) : (
              <>
                One assistant for <span className="italic font-serif text-slate-700 block sm:inline">every conversation</span>
              </>
            )}
          </h2>
          
          <p className="text-[16px] sm:text-[18px] text-slate-500 max-w-2xl mx-auto font-geist leading-relaxed">
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
                  className={`group relative flex flex-col justify-between h-full rounded-[24px] border border-slate-200/60 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.04)] ${u.accentClass} overflow-hidden`}
                >
                  {/* Subtle color glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 10% 10%, ${u.glowColor} 0%, transparent 65%)`
                    }}
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Icon */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: u.iconBg,
                          border: `1px solid ${u.iconBorder}`,
                          color: u.textColor
                        }}
                      >
                        <u.icon size={20} strokeWidth={1.8} />
                      </div>

                      {/* Header */}
                      <h3 className="text-[18px] sm:text-[19px] font-semibold text-slate-900 font-geist tracking-tight mb-2.5 transition-colors duration-200">
                        {c.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13.5px] leading-relaxed text-slate-500 font-geist mb-8">
                        {c.desc}
                      </p>
                    </div>

                    {/* CTA Link */}
                    <div 
                      className="flex items-center gap-1.5 text-[12.5px] font-semibold font-geist mt-auto transition-colors duration-200"
                      style={{ color: u.textColor }}
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
