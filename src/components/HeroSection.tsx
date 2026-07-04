import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  animate,
} from "@/lib/motion";
import JellyClayButton from "@/components/JellyClayButton";
import HeroDesktop from "@/components/HeroDesktop";
import { useTranslation } from "react-i18next";

import mountainVideo from "@/assets/bg.mp4";
import mountainPoster from "@/assets/bg.png";

// ===========================================================================
// Animation primitives — shared between the hero container and its children
// so we never duplicate timing or easing values. Resolved at render time to
// honour prefers-reduced-motion.
// ===========================================================================

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.14,
    },
  },
} as const;

const heroStaticContainerVariants = {
  hidden: {},
  visible: {},
} as const;

const heroItemVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: EASE_OUT_EXPO },
  },
} as const;

const heroStaticItemVariants = {
  hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
} as const;

// ===========================================================================
// Tunables
// ===========================================================================

const COUNT_DELAY_S = 1.4;
const COUNT_DURATION_S = 1.7;
const PARALLAX_MAX_X_PX = 10;
const PARALLAX_MAX_Y_PX = 6;

const NOISE_DATA_URL =
  "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// ===========================================================================
// Background — autoplay-friendly hero video with poster fallback.
// Reduced-motion users get the static poster image instead.
// ===========================================================================

const HeroBackground = ({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {prefersReducedMotion ? (
      <img
        src={mountainPoster}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover object-center"
        draggable={false}
      />
    ) : (
      <video
        src={mountainVideo}
        poster={mountainPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        className="h-full w-full object-cover object-center"
      />
    )}

    {/* Atmospheric overlays — keeping the top dim so the headline stays
        legible without washing the sky out to white. */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(70% 60% at 50% 110%, rgba(255,255,255,0.55), transparent 70%)",
      }}
    />
    <div
      className="absolute inset-x-0 top-0 h-1/2"
      style={{
        background:
          "linear-gradient(to bottom, rgba(17,24,39,0.18), transparent)",
      }}
    />
    <div
      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent"
    />
    <div
      className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
      style={{
        backgroundImage: NOISE_DATA_URL,
        backgroundSize: "180px 180px",
      }}
    />
  </div>
);

// ===========================================================================
// Component
// ===========================================================================

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const [downloadCount, setDownloadCount] = useState<number>(56385);

  // -------------------------------------------------------------------------
  // GitHub releases download counter (unchanged behaviour + fallback).
  // -------------------------------------------------------------------------
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/Natively-AI-assistant/natively-cluely-ai-assistant/releases?per_page=100",
    )
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
        console.warn(
          "Failed to fetch GitHub releases download count, using fallback.",
          err,
        );
      });
  }, []);

  // -------------------------------------------------------------------------
  // Smoothly-animated download counter — Motion's animate() interpolates from
  // 0 to the latest fetched total. Updates a locale-formatted string state.
  // -------------------------------------------------------------------------
  const [formattedCount, setFormattedCount] = useState<string>(
    new Intl.NumberFormat(i18n.language || "en").format(0),
  );

  useEffect(() => {
    const formatter = new Intl.NumberFormat(i18n.language || "en");

    if (prefersReducedMotion) {
      setFormattedCount(formatter.format(downloadCount));
      return;
    }

    const controls = animate(0, downloadCount, {
      duration: COUNT_DURATION_S,
      ease: EASE_OUT_EXPO,
      delay: COUNT_DELAY_S,
      onUpdate: (latest) => {
        setFormattedCount(formatter.format(Math.round(latest)));
      },
    });

    return () => controls.stop();
  }, [downloadCount, i18n.language, prefersReducedMotion]);

  // -------------------------------------------------------------------------
  // Mouse parallax on the desktop preview wrapper only. Spring-smoothed, with
  // movement strictly bounded by PARALLAX_MAX_X_PX / PARALLAX_MAX_Y_PX.
  // -------------------------------------------------------------------------
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });
  const springY = useSpring(pointerY, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });

  const handleParallaxMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ): void => {
    if (prefersReducedMotion) return;
    const node = desktopRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const halfWidth = rect.width / 2 || 1;
    const halfHeight = rect.height / 2 || 1;
    const normalizedX = (event.clientX - rect.left - halfWidth) / halfWidth;
    const normalizedY = (event.clientY - rect.top - halfHeight) / halfHeight;
    pointerX.set(
      Math.max(-1, Math.min(1, normalizedX)) * PARALLAX_MAX_X_PX,
    );
    pointerY.set(
      Math.max(-1, Math.min(1, normalizedY)) * PARALLAX_MAX_Y_PX,
    );
  };

  const handleParallaxLeave = (): void => {
    pointerX.set(0);
    pointerY.set(0);
  };

  // -------------------------------------------------------------------------
  // Resolved variants that respect prefers-reduced-motion.
  // -------------------------------------------------------------------------
  const containerVariants = prefersReducedMotion
    ? heroStaticContainerVariants
    : heroContainerVariants;
  const itemVariants = prefersReducedMotion
    ? heroStaticItemVariants
    : heroItemVariants;

  // -------------------------------------------------------------------------
  // Translated content resolved once per render.
  // -------------------------------------------------------------------------
  const titleWords = t("hero.title_words", { returnObjects: true }) as string[];
  const joinedTitleWords = titleWords.join(" ");
  const trustedLabel = t("hero.trusted", { count: formattedCount });

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-white pt-24 pb-20 md:min-h-screen md:pt-28 md:pb-24"
    >
      <HeroBackground
        prefersReducedMotion={Boolean(prefersReducedMotion)}
      />

      {/* Foreground content */}
      <motion.div
        className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-[0.95fr_1.05fr] md:gap-16 md:px-10 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left column */}
        <div className="relative max-w-[640px]">
          {/* Live badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white/70 px-3.5 py-1.5 shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-12px_rgba(17,24,39,0.08)] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-[1px] hover:border-black/[0.14] hover:bg-white/85 hover:shadow-[0_1px_2px_rgba(17,24,39,0.06),0_12px_32px_-14px_rgba(17,24,39,0.12)]"
          >
            <span aria-hidden="true" className="relative inline-flex h-2 w-2">
              <motion.span
                aria-hidden="true"
                className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60"
                animate={{
                  opacity: [0.35, 0.9, 0.35],
                  scale: [0.85, 1.15, 0.85],
                }}
                transition={{
                  duration: 2.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              Live · v2.7 out now
            </span>
          </motion.span>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="mt-10 font-serif font-light leading-[0.95] tracking-[-0.045em] text-neutral-900 text-[clamp(2.5rem,6vw,5.5rem)]"
          >
            <motion.span variants={itemVariants} className="block">
              {t("hero.title_line1")}
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent"
            >
              {joinedTitleWords}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-[480px] text-[17px] leading-[1.55] text-neutral-600 md:text-[18px]"
          >
            {t("hero.subtitle_line1")}{" "}
            <span className="text-neutral-500">
              {t("hero.subtitle_line2")}
            </span>
          </motion.p>

          {/* CTA + metadata */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-start gap-5"
          >
            <JellyClayButton className="text-base" />

            <div
              role="list"
              aria-label="Product highlights"
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500"
            >
              <span
                role="listitem"
                className="font-semibold tabular-nums text-neutral-900"
              >
                {trustedLabel}
              </span>
              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-neutral-300/80 sm:inline-block"
              />
              <span role="listitem">Open Source</span>
              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-neutral-300/80 sm:inline-block"
              />
              <span role="listitem">Free</span>
            </div>
          </motion.div>
        </div>

        {/* Right column with parallax */}
        <motion.div
          ref={desktopRef}
          onMouseMove={handleParallaxMove}
          onMouseLeave={handleParallaxLeave}
          style={{ x: springX, y: springY }}
          className="relative mx-auto w-[760px] max-w-none will-change-transform"
        >
          <HeroDesktop />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;