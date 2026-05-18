import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import JellyClayButton from "@/components/JellyClayButton";
import JellyClayGithubStars from "@/components/JellyClayGithubStars";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocalePath } from "@/components/LocaleLink";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import previewVideo from "@/assets/preview.mp4";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const GITHUB_URL = "https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant/releases/latest";

const Navbar = () => {
  const { t } = useTranslation();
  const localePath = useLocalePath();
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/ru" || location.pathname === "/ru/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  // Track whether user has scrolled past the hero — switch nav to glass-pill mode.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 32);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // On non-home pages we render a solid white sticky bar (legacy behavior).
  // On home, we render a floating glass pill that grows a backdrop after scroll.
  const useDarkText = !isHomePage || scrolled;

  const navLinks: { label: string; href: string; isNew?: boolean; isPro?: boolean; isToken?: boolean }[] = [
    { label: "Product Hunt", href: "https://www.producthunt.com/products/natively-ai-2?utm_source=other&utm_medium=social" },
    { label: "Hacker News", href: "https://news.ycombinator.com/item?id=46923304" },
    { label: t('nav.github'), href: "https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant" },
    { label: "$NAT", href: "https://app.printr.money/trade/0xba1e50273ec14ca52b3fa64a5054c39470c2835392c6ecd06876f5bccd597d7b", isToken: true },
    { label: t('nav.pro'), href: localePath("/pro"), isPro: true },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    if (label === t('nav.preview')) {
      e.preventDefault();
      setShowPreview(true);
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  // On the home page we render a sticky pill that's transparent over the hero
  // and morphs into a glass pill once the user scrolls past it.
  const homePillBg = scrolled
    ? "bg-white/70 backdrop-blur-2xl border border-black/5 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.18)]"
    : "bg-transparent border border-transparent";

  return (
    <>
      {isHomePage ? (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="sticky top-3 md:top-5 z-50 flex justify-center pointer-events-none px-3 md:px-6"
        >
          <div
            className={`pointer-events-auto w-full max-w-[1180px] flex items-center justify-between gap-4 px-5 md:px-6 h-[60px] md:h-[64px] rounded-full transition-[background-color,box-shadow,backdrop-filter,border-color] duration-500 ${homePillBg}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
          >
            <a href={localePath("/")} className="flex items-center gap-2.5 shrink-0">
              <img src={logo} alt="Natively Logo" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
              <span
                className={`font-['Biennale',sans-serif] text-[17px] md:text-[19px] font-semibold tracking-[-0.01em] leading-none transition-colors duration-300 ${
                  useDarkText ? "text-foreground" : "text-white"
                }`}
              >
                Natively
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.label)}
                  className={`text-[13.5px] font-medium tracking-[-0.005em] flex items-center gap-2 transition-colors duration-200 ${
                    link.isToken
                      ? "font-bold"
                      : link.isPro
                      ? "text-amber-500 hover:text-amber-400 font-semibold"
                      : useDarkText
                        ? "text-foreground/75 hover:text-foreground"
                        : "text-white/80 hover:text-white"
                  }`}
                  style={link.isToken ? {
                    background: "linear-gradient(135deg, #6d28d9 0%, #0284c7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: "800",
                  } : undefined}
                >
                  {link.label}
                  {link.isNew && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold">
                      {t('nav.new')}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3 shrink-0">
              <LanguageSwitcher isDark={!useDarkText} />
              <JellyClayGithubStars isDark={!useDarkText} />
            </div>

            <button
              className={`md:hidden p-2.5 -mr-1 rounded-full transition-colors ${
                useDarkText ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t('nav.toggle_menu')}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu — staggered glass overlay */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                className="pointer-events-auto md:hidden absolute top-[calc(100%+8px)] left-3 right-3 rounded-2xl bg-white/95 backdrop-blur-2xl border border-black/5 shadow-[0_18px_60px_-15px_rgba(15,23,42,0.25)] overflow-hidden"
              >
                <div className="px-5 py-4 flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 + i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`text-[15px] py-2.5 px-1 block w-full ${
                        link.isToken
                          ? "font-bold"
                          : link.isPro
                          ? "text-amber-600 font-semibold"
                          : "font-medium text-foreground/75 hover:text-foreground transition-colors"
                      }`}
                      style={link.isToken ? {
                        background: "linear-gradient(135deg, #6d28d9 0%, #0284c7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      } : undefined}
                      onClick={(e) => handleLinkClick(e, link.label)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <div className="pt-3 mt-1 border-t border-black/5 flex justify-center">
                    <LanguageSwitcher isDark={false} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      ) : (
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-border/30"
      >
        <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
          <a href={localePath("/")} className="flex items-center gap-2.5">
            <img src={logo} alt="Natively Logo" className="w-8 h-8 object-contain brightness-0" />
            <span className="font-['Biennale',sans-serif] text-[18px] md:text-[20px] font-semibold leading-tight flex flex-col md:flex-row md:items-center md:gap-2 text-foreground">
              <span>Natively</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.label)}
                className={`text-[14px] font-medium flex items-center gap-2 transition-colors ${
                  link.isToken
                    ? "font-bold"
                    : link.isPro
                    ? "text-amber-500 hover:text-amber-400 font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                style={link.isToken ? {
                  background: "linear-gradient(135deg, #6d28d9 0%, #0284c7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "800",
                } : undefined}
              >
                {link.label}
                {link.isNew && (
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold">
                    {t('nav.new')}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher isDark={false} />
            <JellyClayGithubStars isDark={false} />
          </div>

          <button
            className="md:hidden p-3 min-h-[48px] min-w-[48px] flex items-center justify-center text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t('nav.toggle_menu')}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-border overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm py-3 block w-full ${
                    link.isToken
                      ? "font-bold"
                      : link.isPro
                      ? "text-amber-600 font-semibold"
                      : "font-medium text-[#6B7280] hover:text-[#111827] transition-colors"
                  }`}
                  style={link.isToken ? {
                    background: "linear-gradient(135deg, #6d28d9 0%, #0284c7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  } : undefined}
                  onClick={(e) => handleLinkClick(e, link.label)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-center gap-4">
                <LanguageSwitcher isDark={false} />
              </div>
              <div className="flex justify-center w-full">
                <JellyClayButton href={GITHUB_URL} className="w-full h-12 text-lg px-6">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t('nav.download')}
                  </span>
                </JellyClayButton>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
      )}

      {showPreview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-[3/2] bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors"
            >
              <X size={20} />
            </button>
            <video
              src={previewVideo}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
