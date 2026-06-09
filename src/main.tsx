import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadRoute } from "./routes";
import "./index.css";

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  // The page was prerendered (full body baked in). Load the matching route chunk
  // BEFORE hydrating so lazyWithPreload renders it synchronously and Suspense never
  // shows its fallback (which would mismatch the prerendered DOM). framer-motion is
  // hydration-safe as-is — see src/lib/motion.tsx.
  preloadRoute(window.location.pathname).finally(() => {
    hydrateRoot(rootElement, <App />);
  });
} else {
  createRoot(rootElement).render(<App />);
}
