import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------
   Spiritual line-art ornaments. Each section gets its own motif rather
   than repeating the rings: thin gold strokes that draw in once, then
   move gently (float / very slow spin / twinkle) via CSS.
------------------------------------------------------------------- */

type MotionKind = "float" | "spin" | "twinkle";

type ArtProps = {
  className?: string;
  size: string;
  delay?: number;
  motion?: MotionKind;
  opacity?: number;
};

const GOLD = "rgb(var(--spirit-gold-rgb) / 0.7)";

function Frame({
  className = "",
  size,
  delay = 0,
  motion: kind = "float",
  opacity = 1,
  children,
}: ArtProps & { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className={`ornament-art ornament-art--${kind} ${className}`}
      style={{ width: size, opacity, "--ornament-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function useDraw(delay: number) {
  const reduce = useReducedMotion();
  return (i = 0) => ({
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 2.2, delay: delay + i * 0.12, ease: [0.22, 0.8, 0.3, 1] as const },
  });
}

const lotusPaths = [
  "M100 18 C80 44 80 80 100 102 C120 80 120 44 100 18 Z",
  "M100 102 C70 92 54 62 60 36 C82 48 96 74 100 102 Z",
  "M100 102 C130 92 146 62 140 36 C118 48 104 74 100 102 Z",
  "M100 102 C60 106 30 84 18 60 C48 60 80 78 100 102 Z",
  "M100 102 C140 106 170 84 182 60 C152 60 120 78 100 102 Z",
  "M36 112 C70 122 130 122 164 112",
];

/** Outline lotus, echoing the flower in the Aura Healz logo. */
export function LotusOrnament(props: ArtProps) {
  const draw = useDraw(props.delay ?? 0);
  return (
    <Frame {...props}>
      <svg viewBox="0 0 200 130" className="block w-full h-auto overflow-visible">
        {lotusPaths.map((d, i) => (
          <motion.path
            key={i}
            {...draw(i)}
            d={d}
            fill="none"
            stroke={GOLD}
            strokeWidth="1"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </Frame>
  );
}

const petal = "M100 100 C91 74 91 44 100 16 C109 44 109 74 100 100 Z";
const innerPetal = "M100 100 C95 86 95 70 100 56 C105 70 105 86 100 100 Z";

/** Twelve-petal mandala line drawing; pairs well with a very slow spin. */
export function MandalaOrnament(props: ArtProps) {
  const draw = useDraw(props.delay ?? 0);
  return (
    <Frame {...props}>
      <svg viewBox="0 0 200 200" className="block w-full h-auto overflow-visible">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.path
            key={`o${i}`}
            {...draw(i * 0.3)}
            d={petal}
            transform={`rotate(${i * 30} 100 100)`}
            fill="none"
            stroke={GOLD}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.path
            key={`i${i}`}
            {...draw(2 + i * 0.2)}
            d={innerPetal}
            transform={`rotate(${i * 30 + 15} 100 100)`}
            fill="none"
            stroke={GOLD}
            strokeOpacity="0.6"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <motion.circle
          {...draw(3)}
          cx="100"
          cy="100"
          r="7"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Frame>
  );
}

/** One of the project's existing chakra icons, used as a faint slow-turning motif. */
export function ChakraImageOrnament({ src, ...props }: ArtProps & { src: string }) {
  return (
    <Frame {...props}>
      <img src={src} alt="" loading="lazy" className="block w-full h-auto" />
    </Frame>
  );
}

/** Small four-point sparkle that twinkles softly. */
export function SparkleOrnament(props: ArtProps) {
  return (
    <Frame motion="twinkle" {...props}>
      <svg viewBox="0 0 24 24" className="block w-full h-auto">
        <path
          d="M12 1 C12.8 8 16 11.2 23 12 C16 12.8 12.8 16 12 23 C11.2 16 8 12.8 1 12 C8 11.2 11.2 8 12 1 Z"
          fill="rgb(var(--spirit-gold-rgb) / 0.55)"
        />
      </svg>
    </Frame>
  );
}
