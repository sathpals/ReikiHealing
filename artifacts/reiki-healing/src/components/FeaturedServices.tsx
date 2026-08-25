import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CalendarHeart, Flower2, HandHeart } from "lucide-react";
import bgImg from "@assets/image_1778827461038.png";

// `accent` is the pastel used for borders/glow, `ink` the deeper
// sibling used for the icon and hover title so it stays legible.
const items = [
  {
    icon: MessageCircle,
    title: "Connect with Me",
    description:
      "Begin with a free 15-minute discovery call to share what you're seeking and find the session that fits you best.",
    accent: "var(--spirit-turquoise-rgb)",
    ink: "var(--spirit-teal-rgb)",
  },
  {
    icon: CalendarHeart,
    title: "Choose Your Session",
    description:
      "Pick from in-person Reiki, distance healing, energy clearing, or a guided spiritual reading — each tailored to you.",
    accent: "var(--spirit-lavender-rgb)",
    ink: "var(--spirit-purple-rgb)",
  },
  {
    icon: Flower2,
    title: "Healing Session",
    description:
      "Settle into a calm, restorative space where energy is gently rebalanced and emotional weight is released.",
    accent: "var(--spirit-peach-rgb)",
    ink: "196 112 92",
  },
  {
    icon: HandHeart,
    title: "After-Session Support",
    description:
      "Receive personalized integration guidance, journaling prompts, and a follow-up check-in to carry the healing forward.",
    accent: "var(--spirit-gold-rgb)",
    ink: "176 124 34",
  },
];

export function FeaturedServices() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70">How It Works</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
            Your Path to <span className="text-aura-teal italic">Healing</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                style={
                  {
                    "--card-accent-rgb": item.accent,
                    "--card-ink-rgb": item.ink,
                  } as CSSProperties
                }
                className="accent-card group relative bg-card/92 backdrop-blur-md border rounded-2xl p-6 text-center"
                data-testid={`featured-service-${idx}`}
              >
                <div className="accent-card__wash absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="accent-card__icon w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="accent-card__title font-serif text-xl text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/75 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
