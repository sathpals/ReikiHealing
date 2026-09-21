import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollToSection as scrollTo } from "@/lib/scrollToSection";
import meditationImg from "@assets/archana-altar-meditation.jpg";

const EASE = [0.22, 0.8, 0.3, 1] as const;

const textGroup: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const body = "text-base sm:text-[17px] text-foreground/70 font-light leading-[1.9] text-pretty";

/** Editorial "A Journey Within" feature: story left, framed photo right. */
export function JourneyWithin() {
  return (
    <section
      aria-labelledby="journey-within-title"
      className="section-y relative overflow-hidden bg-background"
    >
      {/* very light lavender + warm ivory wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 60% at 78% 45%, rgb(var(--spirit-lavender-rgb) / 0.16), transparent 70%), " +
            "radial-gradient(45% 55% at 12% 70%, rgb(var(--spirit-gold-rgb) / 0.08), transparent 72%)",
        }}
      />

      <div className="container-page relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ---- Text -------------------------------------------------- */}
        <motion.div
          variants={textGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-6 max-w-2xl"
        >
          <motion.div variants={textItem} className="flex items-center gap-4">
            <motion.span
              aria-hidden="true"
              className="block h-px w-10 origin-left"
              style={{ background: "rgb(var(--spirit-gold-rgb) / 0.85)" }}
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.8, ease: EASE } },
              }}
            />
            <span className="text-[11px] sm:text-xs font-medium tracking-[0.3em] uppercase text-primary">
              Spiritual Wellness
            </span>
          </motion.div>

          <motion.h3
            id="journey-within-title"
            variants={textItem}
            className="mt-6 font-serif font-medium text-[2.75rem] sm:text-6xl xl:text-6xl leading-[1.02] tracking-tight text-foreground"
          >
            A Journey <span className="text-aura-teal italic">Within</span>
          </motion.h3>

          <motion.p variants={textItem} className={`mt-7 ${body}`}>
            There is a beautiful spiritual teaching: nature makes an animal complete, but gives a human being the possibility to become complete. A newborn animal placed in water may instinctively swim toward safety. A human being, however, must learn how to swim. In the same way, every human being is born with immense hidden potential, but that potential must be awakened through learning, meditation, sadhana and spiritual guidance.
          </motion.p>

          <motion.p variants={textItem} className={`mt-5 ${body}`}>
            I did not begin this path with the intention of becoming a healer. I began because I wanted to understand myself, bring healing into my life and transform myself for my family. Meditation became a steady part of my life. With the blessings and guidance of my Divine Guru (Manish Sharma Ji), my practice gradually deepened.
          </motion.p>

          <motion.p
            variants={textItem}
            className="mt-7 border-l-2 border-primary/40 pl-5 font-serif italic text-xl sm:text-2xl leading-snug text-foreground/85 text-pretty"
          >
            The Divine has already placed immense potential within every human being. Meditation reveals it, sadhana awakens it, the Guru shows the path and Divine grace gives it purpose.
          </motion.p>

          <motion.div variants={textItem} className="mt-10">
            <button
              type="button"
              onClick={() => scrollTo("healer")}
              className="group inline-flex items-center gap-3 border-b border-foreground/20 pb-2 text-xs font-semibold tracking-[0.22em] uppercase text-foreground/85 transition-colors duration-300 hover:text-primary hover:border-primary/60"
            >
              Explore Healing Sessions
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* ---- Photo: same frame treatment as the About section ------- */}
        <motion.figure
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-6 relative mx-auto w-full max-w-md sm:max-w-lg"
        >
          {/* offset beige block behind the photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5"
            style={{ background: "rgb(var(--spirit-gold-rgb) / 0.22)" }}
          />

          <div className="group relative overflow-hidden shadow-[0_20px_50px_-30px_rgba(23,26,58,0.45)]">
            <img
              src={meditationImg}
              alt="Archana Rai seated in prayer before her altar, with a Buddha statue, lit candles and a lotus bowl"
              width={1067}
              height={1280}
              loading="lazy"
              /* Shown whole: the altar, Buddha statue, candles and wall art are
                 the point of this photo, so there is no display zoom at rest.
                 The file is 0.834 against a 4/5 frame, so `cover` trims only a
                 few percent off the sides. */
              className="block w-full aspect-[4/5] object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              data-testid="journey-image"
            />
            {/* thin inner frame line */}
            <div
              aria-hidden="true"
              className="absolute inset-3 sm:inset-4 border border-white/70 pointer-events-none"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
