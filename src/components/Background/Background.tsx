"use client";
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import styles from "./Background.module.css";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func: (...args: unknown[]) => void, limit: number) => {
  let lastCall = 0;
  return function (this: unknown, ...args: unknown[]) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  animating: boolean;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string) {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  return match
    ? {
        r: parseInt(match[1], 16),
        g: parseInt(match[2], 16),
        b: parseInt(match[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

export const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 3,
  gap = 32,
  baseColor = "#0f0f0f",
  activeColor = "#5227FF",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 220,
  shockStrength = 7,
  maxSpeed = 5000,
  resistance = 300,
  returnDuration = 1,
  className = "",
  style,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;

    const path = new Path2D();
    path.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return path;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cellSize = dotSize + gap;
    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));

    const gridWidth = cols * cellSize - gap;
    const gridHeight = rows * cellSize - gap;

    const startX = (width - gridWidth) / 2 + dotSize / 2;
    const startY = (height - gridHeight) / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) { 
        dots.push({
          cx: startX + x * cellSize, 
          cy: startY + y * cellSize, 
          xOffset: 0, 
          yOffset: 0, 
          animating: false 
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath) return;

    let rafId: number;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;

        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const distSq = dx * dx + dy * dy;

        let style = baseColor;
        if (distSq <= proxSq) {
          const dist = Math.sqrt(distSq);
          const t = 1 - dist / proximity;

          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);

          style = `rgb(${r},${g},${b})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();

    const observer =
      "ResizeObserver" in window
        ? new ResizeObserver(buildGrid)
        : null;

    if (observer && wrapperRef.current) {
      observer.observe(wrapperRef.current);
    } else {
      window.addEventListener("resize", buildGrid);
    }

    return () => {
      if (observer) observer.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    const onMove = (e: unknown) => {
      if (!(e instanceof MouseEvent)) return;

      const pr = pointerRef.current;
      const now = performance.now();
      const dt = pr.lastTime ? now - pr.lastTime : 16;

      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;

      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;

      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvasRef.current!.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);

        if (speed > speedTrigger && dist < proximity && !dot.animating) {
          dot.animating = true;
          gsap.killTweensOf(dot);

          gsap.to(dot, {
            inertia: { 
              xOffset: dot.cx - pr.x + vx * 0.005, 
              yOffset: dot.cy - pr.y + vy * 0.005, 
              resistance 
            },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot.animating = false;
            },
          });
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);

        if (dist < shockRadius && !dot.animating) {
          dot.animating = true;
          gsap.killTweensOf(dot);

          gsap.to(dot, {
            inertia: { 
              xOffset: (dot.cx - cx) * shockStrength * (Math.max(0, 1 - dist / shockRadius)), 
              yOffset: (dot.cy - cy) * shockStrength * (Math.max(0, 1 - dist / shockRadius)), 
              resistance 
            },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot.animating = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
    };
  }, [
    maxSpeed,
    speedTrigger,
    proximity,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
  ]);

  return (
    <section className={`${styles.dotGrid} ${className}`} style={style}>
      <div ref={wrapperRef} className={styles.dotGridWrap}>
        <canvas ref={canvasRef} className={styles.dotGridCanvas} />
      </div>
    </section>
  );
};
