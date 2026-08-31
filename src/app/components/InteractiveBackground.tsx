"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative background layer: soft sage-green blobs that tilt in 3D
 * as the cursor moves, and settle back / dip inward while the mouse
 * button is held down (a light "pressed" feel).
 */
export default function InteractiveBackground() {
  const layerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const pressed = useRef(false);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    }
    function onDown() {
      pressed.current = true;
    }
    function onUp() {
      pressed.current = false;
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    function animate() {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;

      const depth = pressed.current ? 0.5 : 1;
      const rx = (-current.current.y * 8 * depth).toFixed(2);
      const ry = (current.current.x * 10 * depth).toFixed(2);
      const tz = pressed.current ? -50 : 0;
      const scale = pressed.current ? 0.97 : 1;

      if (layerRef.current) {
        layerRef.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${tz}px) scale(${scale})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div
        ref={layerRef}
        className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, #6E9765 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, #45613F 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-160px] left-1/4 w-[480px] h-[480px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #8CB183 0%, transparent 70%)",
          }}
        />
      </div>

      {/* faint depth grid, sits slightly behind the blobs visually */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#8CB183 1px, transparent 1px), linear-gradient(90deg, #8CB183 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
