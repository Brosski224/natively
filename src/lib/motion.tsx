// Thin re-export of framer-motion.
//
// Components import `motion` (and friends) from "@/lib/motion" rather than directly
// from "framer-motion" so there is a single seam to adjust motion behavior if needed.
//
// NOTE on prerendering + hydration: the site prerenders full HTML (scripts/prerender.js)
// and hydrates it on the client. framer-motion entrance/looping animations cause React
// to emit a RECOVERABLE hydration warning on first load (the prerender captures an
// animation frame that differs from the client's first paint). This is console-only and
// has no visible or DOM effect — React reconciles to the correct output immediately, and
// crawlers (which don't hydrate) read the fully prerendered content regardless. An
// earlier wrapper that rewrote `initial`/`animate` to suppress the warning did not
// eliminate it and added complexity, so we intentionally keep a plain passthrough.
export * from "framer-motion";
