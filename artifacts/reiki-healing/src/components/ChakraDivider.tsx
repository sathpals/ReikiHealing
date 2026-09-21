import type { CSSProperties } from "react";
import { motion } from "framer-motion";
// Individual icons cut from the original chakra strip
// (QvTKDC…_1778830236086.jpeg) with its black background removed.
import rootImg from "@assets/chakras/chakra-root.png";
import sacralImg from "@assets/chakras/chakra-sacral.png";
import solarImg from "@assets/chakras/chakra-solar-plexus.png";
import heartImg from "@assets/chakras/chakra-heart.png";
import throatImg from "@assets/chakras/chakra-throat.png";
import thirdEyeImg from "@assets/chakras/chakra-third-eye.png";
import crownImg from "@assets/chakras/chakra-crown.png";

type Chakra = {
  name: string;
  description: string;
  img: string;
  /** RGB triplet of the icon's own colour, used only for the hover glow */
  glow: string;
};

const chakras: Chakra[] = [
  { name: "Root Chakra",         description: "Grounding & Stability",       img: rootImg,     glow: "237 33 36" },
  { name: "Sacral Chakra",       description: "Creativity & Emotions",       img: sacralImg,   glow: "246 130 31" },
  { name: "Solar Plexus Chakra", description: "Confidence & Personal Power", img: solarImg,    glow: "253 204 7" },
  { name: "Heart Chakra",        description: "Love & Compassion",           img: heartImg,    glow: "34 150 50" },
  { name: "Throat Chakra",       description: "Communication & Expression",  img: throatImg,   glow: "20 170 225" },
  { name: "Third Eye Chakra",    description: "Intuition & Awareness",       img: thirdEyeImg, glow: "48 72 190" },
  { name: "Crown Chakra",        description: "Spiritual Connection",        img: crownImg,    glow: "120 50 220" },
];

function ChakraItem({ chakra, index }: { chakra: Chakra; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      style={{ "--chakra-glow": chakra.glow } as CSSProperties}
      className="chakra-item group"
    >
      <div className="chakra-item__icon">
        <img
          src={chakra.img}
          alt={`${chakra.name} symbol`}
          width={256}
          height={256}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="mt-4 font-serif text-base lg:text-[17px] font-medium text-foreground leading-tight">
        {chakra.name}
      </h3>
      <p className="mt-1.5 text-xs text-foreground/55 font-light leading-snug">
        {chakra.description}
      </p>
    </motion.li>
  );
}

export function ChakraDivider() {
  return (
    <section
      aria-label="The seven chakras"
      className="section-y-tight relative overflow-hidden bg-background"
    >
      {/* soft multi-hue bloom behind the chakra symbols */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(38% 120% at 50% 50%, rgb(var(--spirit-turquoise-rgb) / 0.20), transparent 70%), " +
            "radial-gradient(28% 110% at 22% 50%, rgb(var(--spirit-lavender-rgb) / 0.18), transparent 72%), " +
            "radial-gradient(28% 110% at 78% 50%, rgb(var(--spirit-gold-rgb) / 0.16), transparent 72%)",
        }}
      />

      <div className="container-page container-wide relative z-10">
        <ul className="chakra-list">
          {chakras.map((chakra, idx) => (
            <ChakraItem key={chakra.name} chakra={chakra} index={idx} />
          ))}
        </ul>
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />
    </section>
  );
}
