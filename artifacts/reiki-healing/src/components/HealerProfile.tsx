import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Star, Heart, Sparkles, Users, Globe, Zap } from "lucide-react";
import profileBg from "@assets/upRkC9WdOUahu9jCtZG5vSXP68AfrXT0-sUG0CUgzSdXVMdptihJw0cSz9HXS_1778830247395.jpeg";

// Rotating pastel/ink pairs so the certification grid reads as a
// harmonious set rather than eight identical teal tiles.
const certAccents = [
  { accent: "var(--spirit-turquoise-rgb)", ink: "var(--spirit-teal-rgb)" },
  { accent: "var(--spirit-lavender-rgb)",  ink: "var(--spirit-purple-rgb)" },
  { accent: "var(--spirit-gold-rgb)",      ink: "176 124 34" },
  { accent: "var(--spirit-peach-rgb)",     ink: "196 112 92" },
];

const accomplishments = [
  { icon: Award,    label: "Usui Reiki Maha Guru",             detail: "Level III Certified" },
  { icon: Star,     label: "Karuna Reiki® Master",                detail: "International Certification" },
  { icon: BookOpen, label: "Pranic Healing Practitioner",         detail: "Advanced Level" },
  { icon: Globe,    label: "Angel Healing & Theta Healing",        detail: "Certified Practitioner" },
  { icon: Zap,      label: "Crystal Healing & Chakra Therapy",    detail: "Specialist" },
  { icon: Heart,    label: "Tarot & Spiritual Guidance",          detail: "Expert Reader" },
  { icon: Users,    label: "Past Life Regression",                detail: "PLRT Certified" },
  { icon: Sparkles, label: "Akashic Records Reading",             detail: "Advanced Practitioner" },
];

// `badge` is deep enough to carry white text; `glow` is the pastel
// used for the timeline dot halo and the card's border tint.
const timeline = [
  {
    year: "2012",
    title: "Spiritual Awakening",
    desc: "Began her personal healing journey after a profound spiritual experience, discovering the transformative power of Reiki energy.",
    badge: "#0C7A70",
    glow: "var(--spirit-turquoise-rgb)",
  },
  {
    year: "2013",
    title: "Reiki Level I & II",
    desc: "Completed Usui Reiki Levels I and II under a lineage Master, experiencing deep personal transformation and clarity.",
    badge: "#6A4EC6",
    glow: "var(--spirit-lavender-rgb)",
  },
  {
    year: "2015",
    title: "Reiki Master Certification",
    desc: "Attained Reiki Master Teacher certification, enabling her to attune others and formally begin her healing practice.",
    badge: "#C24E77",
    glow: "var(--spirit-rose-rgb)",
  },
  {
    year: "2017",
    title: "Advanced Modalities",
    desc: "Trained in Karuna Reiki®, Pranic Healing, Crystal Therapy, and Theta Healing — expanding her toolkit for deep-level transformation.",
    badge: "#A87A20",
    glow: "var(--spirit-gold-rgb)",
  },
  {
    year: "2019",
    title: "Divine Healing Founded",
    desc: "Launched Divine Healing, offering one-on-one sessions, workshops, and group healing circles both in-person and online.",
    badge: "#12866A",
    glow: "109 210 180",
  },
  {
    year: "2021–Present",
    title: "Global Practice",
    desc: "Expanded to serve clients worldwide through distance Reiki and online guidance, touching hundreds of lives across India, UAE, UK, and the US.",
    badge: "#3A3E86",
    glow: "var(--spirit-lavender-rgb)",
  },
];

const expertise = [
  "Stress & Anxiety Relief",
  "Emotional Trauma Healing",
  "Chakra Balancing",
  "Negative Energy Removal",
  "Relationship Healing",
  "Career & Abundance Blocks",
  "Spiritual Awakening Support",
  "Pain & Chronic Illness Support",
  "Manifestation & Law of Attraction",
  "Grief & Loss Support",
];

export function HealerProfile() {
  return (
    <section id="healer" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="aura-field aura-field--gold" />
      <div className="veil-gold absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.3em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3 h-3" /> Meet Your Healer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Archana Rai — <span className="text-aura-teal italic">Reiki Maha Guru</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
        </motion.div>

        {/* Profile hero card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="img-aura img-aura--gold lg:col-span-2 relative"
          >
            <div className="img-hover-warm relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <img
                src={profileBg}
                alt="Archana Rai — Divine Healer"
                className="w-full object-cover"
                style={{ maxHeight: "520px", objectPosition: "top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="font-serif text-2xl text-white mb-1">Archana Rai</p>
                <p className="text-xs tracking-widest uppercase text-white/60">Reiki Maha Guru · Energy Healer · Spiritual Guide</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Usui Reiki", "Karuna Reiki®", "Pranic Healing", "Theta Healing"].map((tag) => (
                    <span key={tag} className="text-[10px] bg-white/15 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="relative z-10 grid grid-cols-3 gap-3 mt-4">
              {[
                { val: "10+", label: "Years", accent: "var(--spirit-turquoise-rgb)", ink: "var(--spirit-teal-rgb)" },
                { val: "500+", label: "Clients", accent: "var(--spirit-lavender-rgb)", ink: "var(--spirit-purple-rgb)" },
                { val: "8+", label: "Modalities", accent: "var(--spirit-gold-rgb)", ink: "176 124 34" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{ "--card-accent-rgb": s.accent } as CSSProperties}
                  className="lift-card bg-card/70 border rounded-xl p-3 text-center backdrop-blur-sm"
                >
                  <p
                    className="font-serif text-xl font-medium"
                    style={{ color: `rgb(${s.ink})` }}
                  >
                    {s.val}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col justify-start"
          >
            <h3 className="font-serif text-2xl text-foreground mb-4">A Life Dedicated to Healing</h3>
            <p className="text-foreground/65 font-light leading-relaxed mb-4 text-base">
              Archana Rai is a Usui Reiki Maha Guru, Karuna Reiki® Master, and multi-certified energy healing practitioner with over a decade of devoted practice. Her journey began with her own transformative healing experience — and from that awakening, a calling was born.
            </p>
            <p className="text-foreground/65 font-light leading-relaxed mb-4 text-base">
              Based in Mumbai, India, Archana works with clients across the globe — offering in-person sessions, distance Reiki, spiritual readings, chakra clearing, and more. Her approach is gentle yet profound: meeting each person exactly where they are, and holding space for whatever needs to surface.
            </p>
            <p className="text-foreground/65 font-light leading-relaxed mb-8 text-base italic border-l-2 border-primary/40 pl-4">
              "Healing is not something I do to you — it is something we create together. My role is simply to hold the light steady, so you can find your way back to yourself."
              <span className="block text-xs not-italic text-foreground/40 mt-2 tracking-widest uppercase">— Archana Rai</span>
            </p>

            <h4 className="font-serif text-lg text-foreground mb-4">Certifications & Specialisations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {accomplishments.map((a, idx) => {
                const Icon = a.icon;
                const tone = certAccents[idx % certAccents.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
                    style={
                      {
                        "--card-accent-rgb": tone.accent,
                        "--card-ink-rgb": tone.ink,
                      } as CSSProperties
                    }
                    className="accent-card group flex items-start gap-3 bg-card/60 border rounded-xl p-3"
                  >
                    <div className="accent-card__icon w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/85 font-medium leading-snug">{a.label}</p>
                      <p className="text-[10px] text-foreground/45 uppercase tracking-wider mt-0.5">{a.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3 className="font-serif text-2xl text-foreground text-center mb-10">
            Healing <span className="text-aura-teal italic">Journey</span>
          </h3>
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, rgb(var(--spirit-teal-rgb) / 0.55), " +
                  "rgb(var(--spirit-purple-rgb) / 0.45), " +
                  "rgb(var(--spirit-rose-rgb) / 0.45), " +
                  "rgb(var(--spirit-gold-rgb) / 0.45), transparent)",
              }}
            />
            <div className="space-y-6 md:space-y-0">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`md:grid md:grid-cols-2 md:gap-8 items-center mb-6 ${idx % 2 === 0 ? "" : "md:[direction:rtl]"}`}
                >
                  <div className={`md:[direction:ltr] ${idx % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div
                      style={{ "--card-accent-rgb": item.glow } as CSSProperties}
                      className={`lift-card inline-block bg-card/70 border rounded-2xl p-5 text-left shadow-sm max-w-sm ${idx % 2 !== 0 ? "md:ml-0" : "md:ml-auto"}`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-bold tracking-widest uppercase text-white px-2.5 py-1 rounded-lg"
                          style={{
                            backgroundColor: item.badge,
                            boxShadow: `0 3px 12px -3px rgb(${item.glow} / 0.85)`,
                          }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <p className="font-serif text-base text-foreground mb-1.5">{item.title}</p>
                      <p className="text-xs text-foreground/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center relative">
                    <div
                      style={
                        {
                          "--card-accent-rgb": item.glow,
                          "--dot-core": item.badge,
                        } as CSSProperties
                      }
                      className="timeline-dot w-3 h-3 rounded-full absolute left-1/2 -translate-x-1/2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Areas of expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h3 className="font-serif text-2xl text-foreground mb-8">
            Areas of <span className="text-aura-teal italic">Expertise</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((e, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="px-4 py-2 rounded-full bg-card/60 border border-primary/15 text-sm text-foreground/75 font-light hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {e}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
