import { motion } from "framer-motion";
import { MessageCircle, CalendarHeart, Flower2, HandHeart } from "lucide-react";

const items = [
  {
    icon: MessageCircle,
    title: "Connect with Me",
    description:
      "Begin with a free 15-minute discovery call to share what you're seeking and find the session that fits you best.",
  },
  {
    icon: CalendarHeart,
    title: "Choose Your Session",
    description:
      "Pick from in-person Reiki, distance healing, energy clearing, or a guided spiritual reading — each tailored to you.",
  },
  {
    icon: Flower2,
    title: "Healing Session",
    description:
      "Settle into a calm, restorative space where energy is gently rebalanced and emotional weight is released.",
  },
  {
    icon: HandHeart,
    title: "After-Session Support",
    description:
      "Receive personalized integration guidance, journaling prompts, and a follow-up check-in to carry the healing forward.",
  },
];

export function FeaturedServices() {
  return (
    <section className="py-16 bg-card/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
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
                className="group relative bg-card/50 border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(218,165,32,0.08)]"
                data-testid={`featured-service-${idx}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300 shadow-[0_0_12px_rgba(218,165,32,0.15)]">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
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
