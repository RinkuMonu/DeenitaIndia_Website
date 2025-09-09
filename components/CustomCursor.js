// components/CustomCursor.js
"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return; 
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = 0, y = 0;      
    let rx = 0, ry = 0;     
    const ease = 0.18;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      // dot snaps to pointer
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const raf = () => {
      rx += (x - rx) * ease;
      ry += (y - ry) * ease;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      loop = requestAnimationFrame(raf);
    };

    const grow = (isGrow) => {
      ring.style.transition = "width .15s ease, height .15s ease, border-color .15s ease";
      ring.style.width = isGrow ? "48px" : "32px";
      ring.style.height = isGrow ? "48px" : "32px";
      ring.style.borderColor = isGrow ? "rgba(0,0,0,.7)" : "rgba(0,0,0,.4)";
    };
    const enter = () => grow(true);
    const leave = () => grow(false);

    const attachHoverListeners = () => {
      const els = document.querySelectorAll(
        "a,button,[role='button'],input,textarea,select,label"
      );
      els.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
      return () =>
        els.forEach((el) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
    };

    // respect reduced motion
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    let detachHover = () => {};
    let loop = 0;

    window.addEventListener("mousemove", onMove, { passive: true });
    detachHover = attachHoverListeners();
    if (!prefersReduced) loop = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("mousemove", onMove);
      detachHover?.();
      if (loop) cancelAnimationFrame(loop);
    };
  }, []);

  const base = "pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2";

  return (
    <>
      {/* ring */}
      <div
        ref={ringRef}
        className={`${base} hidden md:block h-8 w-8 rounded-full border border-black/40 bg-transparent`}
      />
      {/* dot */}
      <div
        ref={dotRef}
        className={`${base} hidden md:block h-3 w-3 rounded-full bg-black`}
      />
    </>
  );
}
