import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollToSection as scrollTo } from "@/lib/scrollToSection";
import aboutImg from "@assets/archana-about.webp";

const EASE = [0.22, 0.8, 0.3, 1] as const;

const textGroup: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function About() {
  return (
    <section id="about" className="section-y relative overflow-hidden bg-background">
      {/* warm beige wash over the cream background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgb(var(--spirit-gold-rgb) / 0.07)" }}
      />

      <div className="container-page relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ---- Photo ------------------------------------------------- */}
        <motion.figure
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-5 relative mx-auto w-full max-w-sm sm:max-w-md"
        >
          {/* offset beige block behind the photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5"
            style={{ background: "rgb(var(--spirit-gold-rgb) / 0.22)" }}
          />

          <div className="group relative overflow-hidden shadow-[0_20px_50px_-30px_rgba(23,26,58,0.45)]">
            <img
              src={aboutImg}
              alt="Archana Rai seated in meditation"
              width={1086}
              height={1448}
              className="block w-full aspect-[3/4] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              data-testid="about-image"
            />
            {/* thin inner frame line */}
            <div
              aria-hidden="true"
              className="absolute inset-3 sm:inset-4 border border-white/70 pointer-events-none"
            />
          </div>
        </motion.figure>

        {/* ---- Text -------------------------------------------------- */}
        <motion.div
          variants={textGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-7 max-w-2xl"
        >
          <motion.span
            variants={textItem}
            className="block text-xs font-semibold tracking-[0.25em] uppercase text-primary"
          >
            Meet Your Healer
          </motion.span>

          <motion.h2
            variants={textItem}
            className="mt-5 font-serif font-medium text-[2.5rem] sm:text-5xl xl:text-6xl leading-[1.1] tracking-tight text-foreground"
          >
            Archana Rai —
            <br /><span className="text-aura-teal xl:text-5xl">Durga Reiki MahaGuru</span>
          </motion.h2>

          <motion.h3
            variants={textItem}
            className="mt-6 font-serif italic text-2xl sm:text-3xl text-primary"
          >
            A Story of Awakening
          </motion.h3>

          <motion.p
            variants={textItem}
            className="mt-6 text-base sm:text-[17px] text-foreground/70 font-light leading-[1.9] text-pretty"
          >
            Archana’s journey began with a desire to understand, heal and transform herself for her family. Years of meditation gradually deepened under the blessings and guidance of her Divine Guru (Manish Sharma Ji). Through sincere sadhana, spiritual experiences and continued learning, her personal search became a path of helping others reconnect with their own inner strength and Divine energy.
          </motion.p>

          <motion.div variants={textItem} className="mt-9">
            <button
              type="button"
              onClick={() => scrollTo("healer")}
              className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.18em] uppercase text-foreground/85 transition-colors duration-300 hover:text-primary"
            >
              Read Archana’s Journey
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
