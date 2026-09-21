import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CalendarHeart, Flower2, HandHeart } from "lucide-react";
import bgImg from "@assets/image_1778827461038.png";

// `accent` is the pastel used for borders/glow, `ink` the deeper
// sibling used for the icon and hover title so it stays legible.
const items = [
  {
    icon: MessageCircle,
    title: "Connect with Archana",
    description:
      "Begin with a conversation to share what you are seeking and understand which session may suit you best.",
    accent: "var(--spirit-turquoise-rgb)",
    ink: "var(--spirit-teal-rgb)",
  },
  {
    icon: CalendarHeart,
    title: "Choose Your Session",
    description:
      "Choose from touchless distance healing, energy balancing, guided meditation or spiritual guidance according to your intention and comfort.",
    accent: "var(--spirit-lavender-rgb)",
    ink: "var(--spirit-purple-rgb)",
  },
  {
    icon: Flower2,
    title: "Healing Session",
    description:
      "Settle into a calm, comfortable space while the spiritual energy practice is conducted through meditation and focused intention.",
    accent: "var(--spirit-peach-rgb)",
    ink: "196 112 92",
  },
  {
    icon: HandHeart,
    title: "After-Session Support",
    description:
      "Receive simple integration guidance, reflection prompts or continued-practice suggestions when appropriate.",
    accent: "var(--spirit-gold-rgb)",
    ink: "176 124 34",
  },
];

export function FeaturedServices() {
  return (
    <section className="section-y relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title section-title--sm">
           How It Works Your  <span className="text-aura-teal italic">Path to Healing</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
                className="accent-card group relative flex h-full flex-col bg-card/92 backdrop-blur-md border rounded-2xl p-6 text-center"
                data-testid={`featured-service-${idx}`}
              >
                <div className="accent-card__wash absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex h-full flex-col items-center">
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
