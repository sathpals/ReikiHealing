import { motion } from "framer-motion";
import { Award, BookOpen, Star, Heart, Sparkles, Users, Globe, Zap } from "lucide-react";
import profileBg from "@assets/image_1778827437426.png";

const accomplishments = [
  { icon: Award,    label: "Usui Reiki Grand Master",             detail: "Level III Certified" },
  { icon: Star,     label: "Karuna Reiki® Master",                detail: "International Certification" },
  { icon: BookOpen, label: "Pranic Healing Practitioner",         detail: "Advanced Level" },
  { icon: Globe,    label: "Angel Healing & Theta Healing",        detail: "Certified Practitioner" },
  { icon: Zap,      label: "Crystal Healing & Chakra Therapy",    detail: "Specialist" },
  { icon: Heart,    label: "Tarot & Spiritual Guidance",          detail: "Expert Reader" },
  { icon: Users,    label: "Past Life Regression",                detail: "PLRT Certified" },
  { icon: Sparkles, label: "Akashic Records Reading",             detail: "Advanced Practitioner" },
];

const timeline = [
  {
    year: "2012",
    title: "Spiritual Awakening",
    desc: "Began her personal healing journey after a profound spiritual experience, discovering the transformative power of Reiki energy.",
    color: "bg-teal-500",
  },
  {
    year: "2013",
    title: "Reiki Level I & II",
    desc: "Completed Usui Reiki Levels I and II under a lineage Master, experiencing deep personal transformation and clarity.",
    color: "bg-violet-500",
  },
  {
    year: "2015",
    title: "Reiki Master Certification",
    desc: "Attained Reiki Master Teacher certification, enabling her to attune others and formally begin her healing practice.",
    color: "bg-rose-500",
  },
  {
    year: "2017",
    title: "Advanced Modalities",
    desc: "Trained in Karuna Reiki®, Pranic Healing, Crystal Therapy, and Theta Healing — expanding her toolkit for deep-level transformation.",
    color: "bg-amber-500",
  },
  {
    year: "2019",
    title: "Divine Healing Founded",
    desc: "Launched Divine Healing, offering one-on-one sessions, workshops, and group healing circles both in-person and online.",
    color: "bg-emerald-500",
  },
  {
    year: "2021–Present",
    title: "Global Practice",
    desc: "Expanded to serve clients worldwide through distance Reiki and online guidance, touching hundreds of lives across India, UAE, UK, and the US.",
    color: "bg-primary",
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
            Archana Rai — <span className="text-primary italic">Reiki Grand Master</span>
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
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <img
                src={profileBg}
                alt="Archana Rai — Divine Healer"
                className="w-full object-cover"
                style={{ maxHeight: "520px", objectPosition: "top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="font-serif text-2xl text-white mb-1">Archana Rai</p>
                <p className="text-xs tracking-widest uppercase text-white/60">Reiki Grand Master · Energy Healer · Spiritual Guide</p>
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
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { val: "10+", label: "Years" },
                { val: "500+", label: "Clients" },
                { val: "8+", label: "Modalities" },
              ].map((s) => (
                <div key={s.label} className="bg-card/60 border border-primary/12 rounded-xl p-3 text-center backdrop-blur-sm">
                  <p className="font-serif text-xl text-primary font-medium">{s.val}</p>
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
              Archana Rai is a Usui Reiki Grand Master, Karuna Reiki® Master, and multi-certified energy healing practitioner with over a decade of devoted practice. Her journey began with her own transformative healing experience — and from that awakening, a calling was born.
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
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
                    className="flex items-start gap-3 bg-card/40 border border-primary/10 rounded-xl p-3 hover:border-primary/25 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/12 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
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
            Healing <span className="text-primary italic">Journey</span>
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
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
                    <div className={`inline-block bg-card/60 border border-primary/12 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition-shadow duration-300 max-w-sm ${idx % 2 !== 0 ? "md:ml-0" : "md:ml-auto"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-bold tracking-widest uppercase text-white px-2.5 py-1 rounded-lg ${item.color}`}>
                          {item.year}
                        </span>
                      </div>
                      <p className="font-serif text-base text-foreground mb-1.5">{item.title}</p>
                      <p className="text-xs text-foreground/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center relative">
                    <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_12px_rgba(0,160,140,0.5)] absolute left-1/2 -translate-x-1/2`} />
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
            Areas of <span className="text-primary italic">Expertise</span>
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
