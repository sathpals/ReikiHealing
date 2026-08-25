import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Eye, Target, Wifi, MapPin } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Reiki & Energy Healing",
    description:
      "A gentle, hands-on (or hands-above) session that clears energetic blockages, calms the nervous system, and supports the body's natural ability to restore itself.",
  },
  {
    icon: Shield,
    title: "Removal & Protection",
    description:
      "Clear heavy energy, stagnation, and unwanted attachments — then close with grounding and protective practices you can carry into daily life.",
  },
  {
    icon: Eye,
    title: "Spiritual Readings & Guidance",
    description:
      "Intuitive readings that offer perspective on life transitions, relationships, or decisions — always delivered with warmth, honesty, and care.",
  },
  {
    icon: Target,
    title: "Manifestation & Growth",
    description:
      "Guided sessions that help you set clear intentions, release limiting beliefs, and align your energy with the life you want to grow into.",
  },
  {
    icon: Wifi,
    title: "Distance Reiki Session",
    description:
      "Receive the full benefit of a Reiki session from the comfort of your home — connection, presence, and healing energy are not bound by distance.",
  },
  {
    icon: MapPin,
    title: "In-Person Reiki Session",
    description:
      "A 60-minute in-studio Reiki session in a calm, scent-soft room — designed for deep rest, nervous-system recovery, and quiet renewal.",
  },
];

export function Sessions() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="veil-peach absolute inset-0 pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Check our <span className="text-aura-teal italic">Services</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />
          <p className="text-foreground/60 font-light max-w-2xl mx-auto text-base leading-relaxed">
            Each session is personalized to where you are today. Whether you need deep rest, emotional release, or spiritual clarity, there is a path here for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.09 }}
                className="group relative h-full bg-card/40 border border-primary/10 rounded-2xl p-7 text-center hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(218,165,32,0.1)] overflow-hidden"
                data-testid={`service-card-${idx}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex h-full flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300 shadow-[0_0_15px_rgba(107,33,168,0.2)] group-hover:shadow-[0_0_20px_rgba(218,165,32,0.2)]">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-foreground/75 font-normal leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-auto text-xs tracking-wider uppercase text-primary hover:text-primary hover:bg-primary/10 rounded-full px-4 transition-all duration-300"
                    onClick={() => scrollTo("connect")}
                    data-testid={`service-book-${idx}`}
                  >
                    Book This Session
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
