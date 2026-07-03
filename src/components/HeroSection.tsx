import { useState, useEffect } from "react";
import JellyClayButton from "@/components/JellyClayButton";
import HeroDesktop from "@/components/HeroDesktop";
import { motion } from "@/lib/motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [downloadCount, setDownloadCount] = useState<number>(56385);

  useEffect(() => {
    fetch("https://api.github.com/repos/Natively-AI-assistant/natively-cluely-ai-assistant/releases?per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          let total = 0;
          for (const release of data) {
            if (release.assets && Array.isArray(release.assets)) {
              for (const asset of release.assets) {
                if (typeof asset.download_count === "number") {
                  total += asset.download_count;
                }
              }
            }
          }
          if (total > 0) {
            setDownloadCount(total);
          }
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch GitHub releases download count, using fallback.", err);
      });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24 pb-20 md:pt-28 md:pb-28 flex items-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-ascii-magic-1 opacity-90" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(circle_at_center,black_35%,transparent_85%)] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.32),_transparent_50%)]" />

      <div className="max-content relative z-10">
        <div className="grid items-center gap-14 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
          <div className="max-w-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-1.5 shadow-[0_10px_30px_rgba(17,24,39,0.06)] backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#4B5563]">
                Live · v2.7 out now
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 24, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.45, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[clamp(3.75rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.06em] text-[#1F2937]"
              >
                {t("hero.title_line1")}
              </motion.h1>

              <div className="flex flex-wrap gap-x-4 gap-y-2 font-serif text-[clamp(3.75rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.06em] text-[#1F2937]">
                {(t("hero.title_words", { returnObjects: true }) as string[]).map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.95 + index * 0.1,
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-7 max-w-[520px] space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[18px] leading-relaxed text-[#4B5563] md:text-[19px]"
              >
                {t("hero.subtitle_line1")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.95, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[18px] leading-relaxed text-[#4B5563] md:text-[19px]"
              >
                {t("hero.subtitle_line2")}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col items-start gap-4"
            >
              <div className="relative group">
                <JellyClayButton className="text-xl" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: [0, 0.35, 0], scale: 1.15 }}
                  transition={{ delay: 2.8, duration: 2, repeat: 0 }}
                  className="absolute inset-0 -z-10 rounded-full bg-emerald-300/30 blur-2xl"
                />
              </div>
              <p className="text-sm font-medium tracking-wide text-[#4B5563]">
                {t("hero.trusted", { count: new Intl.NumberFormat(i18n.language || "en").format(downloadCount) })}
              </p>
            </motion.div>
          </div>

          <HeroDesktop />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;