// React.lazy always suspends on the FIRST render of a component — even if the
// dynamic import has already resolved — because it only reads the resolved value
// after it has thrown the promise once. For a prerendered SPA that means the route
// chunk's Suspense fallback (a spinner) renders during hydration and mismatches the
// prerendered HTML, triggering React hydration errors (#418/#423) and a flash.
//
// lazyWithPreload returns a component that renders the module SYNCHRONOUSLY once it
// has been preloaded (via .preload()), so hydration commits the real page directly
// with no Suspense fallback. Before preload completes it falls back to React.lazy.
import {
  lazy,
  createElement,
  forwardRef,
  type ComponentType,
} from "react";

// Page components accept arbitrary props (some take canonicalPath, most take none).
type AnyProps = Record<string, unknown>;
type ModuleDefault = { default: ComponentType<AnyProps> };

// Intersection (not `interface extends`): ComponentType is a union
// (ComponentClass | FunctionComponent). An interface extending that union keeps
// only members common to both, dropping the call AND construct signatures — which
// makes the result unusable as a JSX element (TS2604/TS2786). Intersecting via a
// type alias preserves the union's signatures, so it stays a valid JSX component.
export type PreloadableComponent = ComponentType<AnyProps> & {
  preload: () => Promise<ModuleDefault>;
};

export function lazyWithPreload(
  loader: () => Promise<ModuleDefault>
): PreloadableComponent {
  let loaded: ComponentType<AnyProps> | null = null;
  let promise: Promise<ModuleDefault> | null = null;

  const preload = () => {
    if (!promise) {
      promise = loader().then((mod) => {
        loaded = mod.default;
        return mod;
      });
    }
    return promise;
  };

  const Lazy = lazy(preload);

  const Component = forwardRef<unknown, AnyProps>((props, ref) => {
    // Synchronous path: module already preloaded → render it directly, no Suspense.
    if (loaded) {
      return createElement(loaded, { ...props, ref });
    }
    // Not yet loaded (e.g. client-side navigation to a not-preloaded route):
    // fall back to normal lazy + Suspense.
    return createElement(Lazy, { ...props, ref });
  }) as unknown as PreloadableComponent;

  Component.preload = preload;
  return Component;
}
