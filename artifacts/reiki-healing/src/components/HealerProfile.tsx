import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Eye, Flame, Flower, Flower2, Gem, Globe, Sparkles, Waves } from "lucide-react";
import { LotusOrnament } from "@/components/decor/Ornaments";

/* ------------------------------------------------------------------
   "Healing Journey" — an alternating timeline down a central rail.
   Each milestone carries its own pastel accent (tile tint + dot), so
   the column reads as a progression rather than eight identical cards.
------------------------------------------------------------------- */

type Milestone = {
  icon: typeof Flower;
  title: string;
  desc: string;
  /** Pastel used for the icon tile and the dot halo. */
  accent: string;
  /** Deeper ink of the same hue, for the icon glyph and dot core. */
  ink: string;
};

const milestones: Milestone[] = [
  {
    icon: Flower2,
    title: "Archana's Beginnings",
    desc: "Archana comes from a spiritual family, and from childhood she has been connected to spirituality through family traditions, meditation, and the blessings of her Guru.",
    accent: "var(--spirit-turquoise-rgb)",
    ink: "18 134 106",
  },
  {
    icon: Flower,
    title: "Deep Spiritual Practice",
    desc: "Through years of meditation, sadhana, self-exploration and inner work, Archana has deepened her connection with the Divine and developed a strong foundation in energy healing and spiritual wisdom.",
    accent: "var(--spirit-lavender-rgb)",
    ink: "106 78 198",
  },
  {
    icon: Sparkles,
    title: "Durga Reiki Mahaguru",
    desc: "Archana became a Durga Reiki Mahaguru, blending divine guidance with energy healing to help bring strength, protection, courage, and compassion to others.",
    accent: "var(--spirit-rose-rgb)",
    ink: "194 78 119",
  },
  {
    icon: Waves,
    title: "Magnetism & Energy Healing",
    desc: "Archana works with Magnetism and Energy Healing as a holistic wellness practice, creating balance and harmony within the body, mind, and energy field.",
    accent: "var(--spirit-gold-rgb)",
    ink: "168 122 32",
  },
  {
    icon: Flame,
    title: "Dragon Energy Healing",
    desc: "Archana incorporates Dragon Energy Healing, working with the dragon's symbolism of strength, transformation, protection, and powerful inner energy.",
    accent: "var(--spirit-teal-rgb)",
    ink: "18 134 106",
  },
  {
    icon: Gem,
    title: "Complementary Healing Modalities",
    desc: "Her journey also includes Angel Healing, Crystal Healing, Futhark Runes, Rudraksha, and other sacred energy traditions, which enrich her work and intuitive connection.",
    accent: "var(--spirit-rose-rgb)",
    ink: "194 78 119",
  },
  {
    icon: Eye,
    title: "Third Eye Awakening",
    desc: "Through the spiritual guidance from her Divine Guru (Manish Sharma Ji), Archana is learning and practising third eye awakening, including Quantum Shambhavi, to enhance intuition, inner guidance, and clarity.",
    accent: "var(--spirit-purple-rgb)",
    ink: "106 78 198",
  },
  {
    icon: Globe,
    title: "Global Practice",
    desc: "Today, Archana serves clients worldwide through distance Reiki and online guidance, touching hundreds of lives across India and the US, and continues to expand her practice.",
    accent: "var(--spirit-lavender-rgb)",
    ink: "58 62 134",
  },
];

const modalities = [
  "Durga Reiki",
  "Magnetism",
  "Dragon Energy",
  "Angel Healing",
  "Crystal Healing",
  "Futhark Runes",
  "Rudraksha",
  "Quantum Shambhavi",
  "and more",
];

const closing = ["Healing Beyond Boundaries", "Guided by the Divine", "For a Brighter Tomorrow"];

/** Small gold lotus that caps the timeline. */
function LotusMark() {
  return (
    <svg viewBox="0 0 200 130" className="w-10 h-auto shrink-0" aria-hidden="true">
      {[
        "M100 18 C80 44 80 80 100 102 C120 80 120 44 100 18 Z",
        "M100 102 C70 92 54 62 60 36 C82 48 96 74 100 102 Z",
        "M100 102 C130 92 146 62 140 36 C118 48 104 74 100 102 Z",
        "M100 102 C60 106 30 84 18 60 C48 60 80 78 100 102 Z",
        "M100 102 C140 106 170 84 182 60 C152 60 120 78 100 102 Z",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="rgb(var(--spirit-gold-rgb) / 0.85)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function HealerProfile() {
  return (
    <section id="healer" className="section-y relative overflow-hidden">
      {/* ---- Ambient field: lavender left, cream centre, peach right ---- */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(38% 46% at 8% 42%, rgb(var(--spirit-gold-rgb) / 0.22), transparent 70%),
            radial-gradient(45% 55% at 92% 30%, rgb(var(--spirit-peach-rgb) / 0.22), transparent 72%),
            radial-gradient(50% 60% at 50% 55%, rgb(var(--spirit-cream-rgb) / 0.75), transparent 78%),
            linear-gradient(105deg,
              rgb(var(--spirit-lavender-rgb) / 0.32) 0%,
              rgb(var(--spirit-cream-rgb) / 0.70) 45%,
              rgb(var(--spirit-peach-rgb) / 0.26) 100%)
          `,
        }}
      />
      {/* Big line-art lotus behind the left column, as in the reference */}
      <LotusOrnament
        size="clamp(16rem, 30vw, 26rem)"
        motion="float"
        opacity={0.5}
        className="-left-20 top-1/4 hidden sm:block"
      />

      <div className="container-page relative z-10">
        {/* ---- Heading ------------------------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center"
        >
          <h2 className="font-serif font-medium text-[2.25rem] sm:text-5xl tracking-tight text-foreground">
            Healing{" "}
            <span className="italic" style={{ color: "var(--spirit-gold)" }}>
              Journey
            </span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 sm:w-16"
              style={{ background: "rgb(var(--spirit-gold-rgb) / 0.7)" }}
            />
            <span
              className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--spirit-purple)" }}
            >
              A path of divine guidance
            </span>
            <span
              aria-hidden="true"
              className="h-px w-10 sm:w-16"
              style={{ background: "rgb(var(--spirit-gold-rgb) / 0.7)" }}
            />
          </div>

          {/* Script accent, desktop only — it has nowhere to sit on a phone */}
          <p
            aria-hidden="true"
            className="hidden lg:block absolute right-0 -top-2 text-right leading-[1.15] text-3xl xl:text-4xl -rotate-6"
            style={{ fontFamily: "'Parisienne', cursive", color: "rgb(var(--spirit-gold-rgb) / 0.9)" }}
          >
            Heal
            <br />
            <span className="inline-block translate-x-5">Align</span>
            <br />
            <span className="inline-block translate-x-10">Awaken</span>
          </p>
        </motion.div>

        {/* ---- Timeline ----------------------------------------------- */}
        <div className="relative mt-14 md:mt-16">
          {/* Central rail — left-aligned on phones, centred from md up */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 w-px left-[0.625rem] md:left-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, " +
                "rgb(var(--spirit-teal-rgb) / 0.5) 6%, " +
                "rgb(var(--spirit-purple-rgb) / 0.45) 35%, " +
                "rgb(var(--spirit-rose-rgb) / 0.45) 65%, " +
                "rgb(var(--spirit-gold-rgb) / 0.45) 88%, transparent)",
            }}
          />

          <ol className="space-y-5 md:space-y-0">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const onLeft = idx % 2 === 0;
              return (
                <motion.li
                  key={m.title}
                  initial={{ opacity: 0, x: onLeft ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 0.8, 0.3, 1] }}
                  className="grid grid-cols-[1.25rem_1fr] md:grid-cols-[1fr_1.25rem_1fr] items-start gap-x-4 md:gap-x-0 md:mb-6 md:last:mb-0"
                  style={{ "--accent": m.accent, "--ink": m.ink } as CSSProperties}
                >
                  {/* Dot */}
                  <span className="col-start-1 md:col-start-2 flex justify-center mt-7">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{
                        background: "rgb(var(--ink))",
                        boxShadow: "0 0 0 4px rgb(var(--accent) / 0.35)",
                      }}
                    />
                  </span>

                  {/* Card. Class strings are written out in full rather than
                      interpolated — Tailwind scans source text, so a built-up
                      `md:col-start-${n}` would never be generated. */}
                  <article
                    className={`col-start-2 w-full md:max-w-[26rem] rounded-2xl border border-white/70 backdrop-blur-sm p-5 sm:p-6 text-left shadow-[0_10px_34px_rgb(var(--spirit-indigo-rgb)/0.07)] ${
                      onLeft
                        ? "md:col-start-1 md:justify-self-end md:mr-9"
                        : "md:col-start-3 md:justify-self-start md:ml-9"
                    }`}
                    style={{
                      background:
                        "linear-gradient(140deg, rgb(var(--accent) / 0.13), rgb(var(--spirit-cream-rgb) / 0.88) 55%)",
                    }}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        aria-hidden="true"
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                        style={{ background: "rgb(var(--accent) / 0.22)" }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.5} style={{ color: "rgb(var(--ink))" }} />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl sm:text-[1.35rem] leading-snug text-foreground">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-sm leading-[1.75] text-foreground/65 font-light text-pretty">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* ---- Lotus rule --------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex items-center justify-center gap-5"
        >
          <span
            aria-hidden="true"
            className="h-px w-16 sm:w-40"
            style={{ background: "linear-gradient(to right, transparent, rgb(var(--spirit-gold-rgb) / 0.75))" }}
          />
          <LotusMark />
          <span
            aria-hidden="true"
            className="h-px w-16 sm:w-40"
            style={{ background: "linear-gradient(to left, transparent, rgb(var(--spirit-gold-rgb) / 0.75))" }}
          />
        </motion.div>

        {/* ---- Modalities + closing line ------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 text-center"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-foreground/70">
            {modalities.map((name, i) => (
              <li key={name} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full"
                    style={{ background: "rgb(var(--spirit-gold-rgb))" }}
                  />
                )}
                <span className={name === "and more" ? "italic text-foreground/50" : ""}>{name}</span>
              </li>
            ))}
          </ul>

          <p
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-serif italic text-base sm:text-lg"
            style={{ color: "rgb(var(--spirit-gold-rgb))" }}
          >
            {closing.map((line, i) => (
              <span key={line} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current opacity-70" />
                )}
                {line}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
