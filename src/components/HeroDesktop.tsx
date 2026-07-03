import { useRef, useState } from "react";
import NativelyInterfaceCard from "@/components/NativelyInterfaceCard";

import desktopUI from "@/assets/desktopui.webp";
import heroVideo from "@/assets/hero.webm";
import heroPoster from "@/assets/hero-poster.webp";

const HeroDesktop = () => {
  const [cardPosition, setCardPosition] = useState({ xPct: 55, yPct: 46 });
  const X_MARGIN = 16;
  const Y_MARGIN = 20;

  const dragOffset = useRef<{ dxPct: number; dyPct: number } | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const screen = screenRef.current;
    if (!screen) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const screenRect = screen.getBoundingClientRect();
    const pointerXPct = ((event.clientX - screenRect.left) / screenRect.width) * 100;
    const pointerYPct = ((event.clientY - screenRect.top) / screenRect.height) * 100;
    dragOffset.current = {
      dxPct: pointerXPct - cardPosition.xPct,
      dyPct: pointerYPct - cardPosition.yPct,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const offset = dragOffset.current;
    const screen = screenRef.current;
    if (!offset || !screen) return;

    const screenRect = screen.getBoundingClientRect();
    const pointerXPct = ((event.clientX - screenRect.left) / screenRect.width) * 100;
    const pointerYPct = ((event.clientY - screenRect.top) / screenRect.height) * 100;

    const rawXPct = pointerXPct - offset.dxPct;
    const rawYPct = pointerYPct - offset.dyPct;

    setCardPosition({
      xPct: Math.min(100 - X_MARGIN, Math.max(X_MARGIN, rawXPct)),
      yPct: Math.min(100 - Y_MARGIN, Math.max(Y_MARGIN, rawYPct)),
    });
  };

  const stopDragging = () => {
    dragOffset.current = null;
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[760px] flex-col gap-6">
      <div className="relative mx-auto w-full max-w-[760px]">
        <div
          className="relative mx-auto aspect-[4/3] w-full max-w-[760px] rounded-[2rem] border border-white/15 bg-white/5 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.2)] backdrop-blur-2xl md:p-4"
        >
          <div className="pointer-events-none absolute inset-x-6 top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <div
            ref={screenRef}
            className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-black/55"
            style={{
              border: "1px solid rgba(94,234,212,0.22)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 0 50px rgba(45,212,191,0.08)",
            }}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
          >
            <img
              src={desktopUI}
              alt="Desktop background"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-transparent to-sky-500/10" />

            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <video
                src={heroVideo}
                poster={heroPoster}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-[78%] w-[76%] object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
              />
            </div>

            <div
              ref={cardRef}
              className="absolute cursor-grab select-none active:cursor-grabbing"
              style={{ left: `${cardPosition.xPct}%`, top: `${cardPosition.yPct}%`, transform: "translate(-50%, -50%)" }}
              onPointerDown={handlePointerDown}
            >
              <NativelyInterfaceCard isMobile={false} hideMessages className="w-full max-w-[440px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesktop;