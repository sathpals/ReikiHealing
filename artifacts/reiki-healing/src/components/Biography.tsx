import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronDown, Sparkles, Flame } from "lucide-react";

// The disciplines Archana's practice expanded through, in her own
// ordering. Rotating pastel accents so the grid reads as one set.
const disciplines = [
  "Rudraksha",
  "Dragon Energy",
  "Intuitive Oracle Cards",
  "Crystal Healing",
  "Futhark Runes",
  "Quantum Shambhavi",
  "Angel Healing",
  "Magnetism",
  "Durga Reiki — Mahaguru",
];

const disciplineAccents = [
  "var(--spirit-turquoise-rgb)",
  "var(--spirit-lavender-rgb)",
  "var(--spirit-gold-rgb)",
  "var(--spirit-peach-rgb)",
];

const questions = [
  "Why am I here?",
  "What must I learn?",
  "What must I transform within myself?",
  "And how can whatever I have received through Divine grace become a means of helping others?",
];

const awakening = [
  "She first walked inward to understand herself.",
  "She learned to become still.",
  "She learned to listen.",
  "She learned to trust Divine guidance.",
];

export function Biography() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="story" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="aura-field aura-field--soft" />
      <div className="veil-lavender absolute inset-0 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[420px] h-[420px] bg-secondary/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.3em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3 h-3" /> Her Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Journey of <span className="text-aura-teal italic">Archana Rai</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
        </motion.div>

        {/* Opening teaching */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ "--card-accent-rgb": "var(--spirit-gold-rgb)" } as CSSProperties}
          className="lift-card relative bg-card/70 border rounded-3xl px-8 py-10 mb-10 text-center backdrop-blur-sm"
        >
          <Quote className="w-7 h-7 mx-auto mb-5" style={{ color: "rgb(176 124 34)" }} />
          <p className="text-xs tracking-[0.25em] uppercase text-foreground/45 mb-4">
            There is a profound spiritual teaching that says
          </p>
          <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
            nature gives an animal its completeness, but gives a human being possibilities.
          </p>
        </motion.blockquote>

        {/* Always-visible opening */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-5 text-base text-foreground/75 leading-relaxed"
        >
          <p>
            An animal enters the world already equipped with the instincts necessary for its
            existence. A human being is different. We arrive carrying extraordinary capacities
            within us, but many of them remain dormant until they are awakened through learning,
            discipline, meditation, self-awareness, and sadhana.
          </p>
          <p className="font-serif text-lg text-foreground italic">
            This teaching beautifully reflects the spiritual journey of Archana Rai.
          </p>
          <p>
            Archana did not enter the path of healing simply to learn techniques or collect
            spiritual knowledge. Her journey began inwardly. She first sought understanding and
            healing for herself. Under the grace and guidance of her Divine Guru, meditation
            gradually became a doorway through which she explored deeper dimensions of
            consciousness, purpose, and inner transformation.
          </p>
        </motion.div>

        {/* Expandable remainder */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="story-rest"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-5 text-base text-foreground/75 leading-relaxed pt-5">
                <p>
                  Archana has been practicing meditation for a long time. Through increasingly deep
                  states of meditation, prayer, spiritual discipline, and her Guru's guidance, she
                  came to understand her life from a much wider spiritual perspective.
                </p>
                <p>
                  Within her spiritual experience, Archana became aware of impressions connected
                  with what she understands as her past lives, the lessons carried through those
                  experiences, and the purpose she believes she has come to fulfill in her present
                  life.
                </p>
                <p className="font-serif text-lg text-foreground italic">
                  For her, this awareness was not merely about knowing the past. It was about
                  understanding the present.
                </p>

                {/* The four questions */}
                <div
                  style={{ "--card-accent-rgb": "var(--spirit-lavender-rgb)" } as CSSProperties}
                  className="lift-card bg-card/60 border rounded-2xl p-6 space-y-3 backdrop-blur-sm not-prose"
                >
                  {questions.map((q) => (
                    <p
                      key={q}
                      className="font-serif text-base md:text-lg text-foreground/90 italic pl-4 border-l-2"
                      style={{ borderColor: "rgb(var(--spirit-purple-rgb) / 0.45)" }}
                    >
                      {q}
                    </p>
                  ))}
                </div>

                <p>
                  Her journey reflects the teaching that the deepest human capacities are not
                  necessarily acquired from outside; sometimes they are awakened from within.
                </p>
                <p>
                  Archana believes that deep meditation can become an inner teacher. When practiced
                  with sincerity, discipline, surrender, and the blessings of a Divine Guru,
                  meditation can reveal layers of oneself that ordinary awareness rarely reaches.
                  The mind gradually becomes quieter, intuition becomes clearer, and spiritual
                  understanding begins to unfold.
                </p>
                <p>
                  Yet Archana's path has never been based on meditation alone. Over time, her
                  spiritual exploration expanded through several healing and intuitive disciplines,
                  including:
                </p>
              </div>

              {/* Disciplines */}
              <div className="flex flex-wrap justify-center gap-2.5 my-7">
                {disciplines.map((d, idx) => (
                  <span
                    key={d}
                    style={
                      {
                        "--card-accent-rgb": disciplineAccents[idx % disciplineAccents.length],
                      } as CSSProperties
                    }
                    className="lift-card px-4 py-2 rounded-full bg-card/70 border text-sm text-foreground/80 backdrop-blur-sm cursor-default"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div className="space-y-5 text-base text-foreground/75 leading-relaxed">
                <p>
                  Each practice became another language through which she explored energy,
                  consciousness, intuition, healing, and the relationship between the human and the
                  Divine.
                </p>
              </div>

              {/* Durga Reiki */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ "--card-accent-rgb": "var(--spirit-rose-rgb)" } as CSSProperties}
                className="lift-card bg-card/70 border rounded-3xl p-7 my-7 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(140deg, rgb(var(--spirit-rose-rgb) / 0.28), rgb(var(--spirit-rose-rgb) / 0.08))",
                      color: "#C24E77",
                    }}
                  >
                    <Flame className="w-5 h-5" />
                  </span>
                  <p className="font-serif text-xl text-foreground">
                    At the heart of it all — <span className="italic">Durga Reiki</span>
                  </p>
                </div>
                <p className="text-base text-foreground/75 leading-relaxed">
                  For Archana, Durga Reiki represents much more than an energy-healing modality. It
                  is deeply connected with Shakti — the Divine feminine power associated with
                  strength, protection, transformation, compassion, and awakening. Her journey
                  toward becoming a Durga Reiki Mahaguru developed through personal practice,
                  spiritual discipline, experience, and above all, the grace and guidance she
                  attributes to her Divine Guru.
                </p>
              </motion.div>

              <div className="space-y-5 text-base text-foreground/75 leading-relaxed">
                <p>
                  Like the teaching that a human being carries tremendous dormant possibilities,
                  Archana's story is ultimately a story of awakening.
                </p>
              </div>

              {/* Awakening steps */}
              <div className="my-7 space-y-3">
                {awakening.map((line, idx) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="font-serif text-lg text-foreground/90 italic flex items-center gap-3"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "rgb(var(--spirit-teal-rgb))" }}
                    />
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="space-y-5 text-base text-foreground/75 leading-relaxed">
                <p>
                  And as her inner journey deepened, healing gradually changed from something she
                  was seeking into something she felt called to share.
                </p>
                <p>Archana's spiritual philosophy can therefore be expressed simply:</p>
              </div>

              {/* Philosophy */}
              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ "--card-accent-rgb": "var(--spirit-turquoise-rgb)" } as CSSProperties}
                className="lift-card bg-card/70 border rounded-3xl px-8 py-9 my-7 text-center backdrop-blur-sm"
              >
                <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed">
                  The Divine has already placed immense possibilities within every human being.
                  Sadhana awakens them. Meditation reveals them. A true Guru guides their direction.
                  And Divine grace gives them purpose.
                </p>
              </motion.blockquote>

              <div className="space-y-5 text-base text-foreground/75 leading-relaxed">
                <p>
                  Her journey with Durga Reiki begins from this understanding — not with the claim
                  that one person possesses all the answers, but with the belief that every human
                  being carries a deeper potential waiting to be discovered.
                </p>
                <p>
                  For Archana, deep meditation, sincere sadhana, and the blessings of the Divine
                  Guru are the bridge between that hidden potential and its awakening.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        <div className="text-center mt-9">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="nav-link inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/25 text-xs tracking-[0.2em] uppercase text-primary font-medium hover:bg-primary/8 hover:border-primary/50 transition-all duration-300"
            aria-expanded={expanded}
            aria-controls="story-rest"
            data-testid="biography-toggle"
          >
            {expanded ? "Show Less" : "Read Her Full Story"}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
