import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionTemplate,
  animate,
} from "@/lib/motion";
import JellyClayButton from "@/components/JellyClayButton";
import HeroDesktop from "@/components/HeroDesktop";
import { useTranslation } from "react-i18next";

import mountainVideo from "@/assets/bg.mp4";
import mountainPoster from "@/assets/bg.png";

// ===========================================================================
// Animation primitives
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

// === Pinned rounded-card hero =============================================
// The section's *scroll track* (sectionRef) is taller than the viewport.
// The visible content is `sticky top-0`, so it stays locked in place for
// the whole track — that's what gives us room for:
//   phase A [0    -> ZOOM_END]     : bg zooms out, padding/radius flatten
//   phase B [HD_START -> HD_END]   : HeroDesktop fades + lifts in (overlaps
//                                     the tail of phase A)
//   phase C [HD_END -> 1]          : everything holds fully revealed while
//                                     the user keeps scrolling — the pin
//                                     doesn't release until progress hits 1,
//                                     so we never jump to the next section
//                                     right as HD appears.
// All useTransform calls below clamp to their start/end range, so the
// values naturally freeze once progress moves past the phase's window.
const BG_SCALE_START = 1.22; // zoomed-in crop on first paint
const BG_SCALE_END = 1.0;
const BG_Y_PX = 40;
const CARD_RADIUS_START_REM = 2; // 32px, matches md:rounded-[2rem]
const CARD_RADIUS_END_REM = 0;
const SECTION_PAD_CLAMP = "clamp(16px, 2vw, 24px)"; // ~ p-4 md:p-6

const ZOOM_END = 0.32; // frame flattens + video settles by here ("slight scroll")
const HD_START = 0.24; // HeroDesktop starts fading in slightly before zoom finishes
const HD_END = 0.5; // fully revealed here — everything after this is just hold time

// How much extra scroll track the pin gets. Bigger = longer hold before the
// next section is allowed to appear. ~1.2x viewport height of "hold" room.
const PIN_TRACK_VH = 220;

const NOISE_DATA_URL =
  "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

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
  // Smoothly-animated download counter.
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
  // Mouse parallax on the HeroDesktop wrapper only.
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
  // Scroll-driven state, tracked against the tall outer wrapper so the
  // sticky inner content has room to animate + hold before releasing.
  // -------------------------------------------------------------------------
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Outer card padding: shrinks to 0 over phase A only, then holds at 0.
  const padProgress = useTransform(scrollYProgress, [0, ZOOM_END], [1, 0]);
  const sectionPadding = useMotionTemplate`calc(${SECTION_PAD_CLAMP} * ${padProgress})`;

  // BG video: zoomed in -> settled, over phase A only.
  const bgScale = useTransform(
    scrollYProgress,
    [0, ZOOM_END],
    [BG_SCALE_START, BG_SCALE_END],
  );
  const bgY = useTransform(scrollYProgress, [0, ZOOM_END], [0, BG_Y_PX]);

  // Card border radius: rounded -> square, over phase A only.
  const cardRadius = useTransform(
    scrollYProgress,
    [0, ZOOM_END],
    [`${CARD_RADIUS_START_REM}rem`, `${CARD_RADIUS_END_REM}rem`],
  );
  const cardRadiusStyle = useMotionTemplate`${cardRadius}`;

  // HeroDesktop reveal: fades + lifts in during phase B, then holds fully
  // visible for the remainder of the pin (phase C).
  const desktopOpacity = useTransform(scrollYProgress, [HD_START, HD_END], [0, 1]);
  const desktopY = useTransform(scrollYProgress, [HD_START, HD_END], [24, 0]);

  // Track reveal state in React so aria-hidden / pointer-events stay correct
  // (reading a motion value's .get() during render would go stale, since it
  // doesn't trigger a re-render on its own).
  const [isDesktopVisible, setIsDesktopVisible] = useState(
    prefersReducedMotion,
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsDesktopVisible(true);
      return;
    }
    const unsubscribe = desktopOpacity.on("change", (latest: number) => {
      setIsDesktopVisible(latest > 0.05);
    });
    return () => unsubscribe();
  }, [desktopOpacity, prefersReducedMotion]);

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
  // Translated content.
  // -------------------------------------------------------------------------
  const titleWords = t("hero.title_words", { returnObjects: true }) as string[];
  const joinedTitleWords = titleWords.join(" ");
  const trustedLabel = t("hero.trusted", { count: formattedCount });

  // Reduced-motion users don't need the long pin track (nothing animates,
  // so extra empty scroll space would just feel like dead space).
  const trackHeight = prefersReducedMotion ? "100svh" : `${PIN_TRACK_VH}vh`;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      style={{ height: trackHeight }}
      className="relative w-full bg-black"
    >
      {/* Pinned viewport-height layer. Stays fixed in place for the whole
          scroll track above, giving the animation room to play + hold. */}
      <motion.div
        style={{ padding: sectionPadding }}
        className="sticky top-0 isolate h-[100svh] w-full overflow-hidden bg-black md:h-screen"
      >
        {/* The card: rounded + inset on first paint, flattens to a
            full-bleed square as padding/radius animate to 0. */}
        <motion.div
          className="relative h-full w-full overflow-hidden rounded-2xl bg-black shadow-[0_30px_90px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/10 md:rounded-[2rem]"
          style={{ borderRadius: cardRadiusStyle }}
        >
          {/* Background video / poster */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {prefersReducedMotion ? (
              <motion.img
                src={mountainPoster}
                alt=""
                aria-hidden="true"
                draggable={false}
                style={{ scale: bgScale, y: bgY }}
                className="h-full w-full origin-center object-cover object-center will-change-transform"
              />
            ) : (
              <motion.video
                src={mountainVideo}
                poster={mountainPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                tabIndex={-1}
                style={{ scale: bgScale, y: bgY }}
                className="h-full w-full origin-center object-cover object-center will-change-transform"
              />
            )}

            {/* Atmospheric overlays — dark vignette so white text stays
                legible over the video regardless of footage brightness. */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.7) 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
              style={{
                backgroundImage: NOISE_DATA_URL,
                backgroundSize: "180px 180px",
              }}
            />
          </div>

          {/* Foreground — vertical stack, nudged slightly above true center */}
          <motion.div
            className="relative z-10 mx-auto flex h-full w-full max-w-[1240px] flex-col items-center justify-center gap-8 px-6 pb-[16vh] pt-10 text-center md:px-10 md:gap-10 md:pb-[18vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Live badge */}
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-3.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-12px_rgba(0,0,0,0.4)] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-[1px] hover:border-white/[0.2] hover:bg-white/[0.1]"
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
              <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-neutral-300">
                Live · v2.7 out now
              </span>
            </motion.span>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="mx-auto max-w-[920px] font-serif font-light leading-[0.95] tracking-[-0.045em] text-white text-[clamp(2.25rem,6vw,5.5rem)]"
            >
              <motion.span variants={itemVariants} className="block">
                {t("hero.title_line1")}
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent"
              >
                {joinedTitleWords}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-[560px] text-[17px] leading-[1.55] text-neutral-300 md:text-[18px]"
            >
              {t("hero.subtitle_line1")}{" "}
              <span className="text-neutral-400">
                {t("hero.subtitle_line2")}
              </span>
            </motion.p>

            {/* CTA + metadata */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-5"
            >
              <JellyClayButton className="text-base" />

              <div
                role="list"
                aria-label="Product highlights"
                className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400"
              >
                <span
                  role="listitem"
                  className="font-semibold tabular-nums text-white"
                >
                  {trustedLabel}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-3 w-px bg-white/20 sm:inline-block"
                />
                <span role="listitem">Open Source</span>
                <span
                  aria-hidden="true"
                  className="hidden h-3 w-px bg-white/20 sm:inline-block"
                />
                <span role="listitem">Free</span>
              </div>
            </motion.div>
          </motion.div>

          {/* HeroDesktop — absolutely positioned so it never occupies layout
              space (and never pushes the text off-center) while hidden.
              Fades + lifts in during phase B, holds through phase C. */}
          <motion.div
            ref={desktopRef}
            onMouseMove={handleParallaxMove}
            onMouseLeave={handleParallaxLeave}
            style={{
              x: springX,
              y: prefersReducedMotion ? springY : desktopY,
              opacity: desktopOpacity,
              pointerEvents: isDesktopVisible ? "auto" : "none",
            }}
            aria-hidden={!isDesktopVisible}
            className="absolute bottom-[6vh] left-1/2 z-20 w-[760px] max-w-[calc(100vw-64px)] -translate-x-1/2 will-change-transform md:max-w-[calc(100vw-96px)]"
          >
            <HeroDesktop />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;