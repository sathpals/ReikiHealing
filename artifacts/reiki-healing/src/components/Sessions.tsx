import { motion } from "framer-motion";
import { ChakraImageOrnament } from "@/components/decor/Ornaments";
import crownChakra from "@assets/chakras/chakra-crown.png";
import { Aperture, ArrowRight, Feather, Flame, HandHeart, House, Sparkles, Sprout, WalletCards, Waves } from "lucide-react";
import { scrollToSection as scrollTo } from "@/lib/scrollToSection";

// Thin outline icons chosen to suit each service
const services = [
  {
    icon: Sparkles,
    title: "Durga Reiki",
    description:
      "A spiritual energy practice connected with Shakti, associated with strength, protection, compassion, transformation and awakening.",
  },
  {
    icon: HandHeart,
    title: "Touchless Distance Healing",
    description:
      "Receive spiritual energy support from the comfort and privacy of your own space.",
  },
  {
    icon: WalletCards,
    title: "Card Reader & Guidance",
    description:
      "Intuitive readings that offer perspective on life transitions, relationships, or decisions — always delivered with warmth, honesty, and care.",
  },
  {
    icon: Sprout,
    title: "Manifestation & Growth",
    description:
      "Guided sessions that help you set clear intentions, release limiting beliefs, and align your energy with the life you want to grow into.",
  },
  {
    icon: Waves,
    title: "Energy Balancing",
    description:
      "A gentle session designed to restore harmony within your energy field and promote calm, stability and overall well-being.",
  },
  {
    icon: Flame,
    title: "Personalized Energy Healing",
    description:
      "A customized healing session focused on your individual emotional, spiritual and energetic needs.",
  },
  {
    icon: House,
    title: "Vastu Cleansing",
    description:
      "Spiritual energy cleansing intended to create a more peaceful, positive and harmonious living or working space.",
  },
  {
    icon: Aperture,
    title: "Aura Reader",
    description:
      "An intuitive reading to explore your energy field, emotional patterns and areas that may benefit from greater balance.",
  },
  {
    icon: Feather,
    title: "Angel Healing",
    description:
      "A gentle spiritual practice inviting angelic guidance and positive energy to support peace, comfort and inner clarity.",
  },
];

export function Sessions() {
  return (
    <section id="services" className="section-y bg-background relative overflow-hidden">
      <div className="veil-peach absolute inset-0 pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[160px] pointer-events-none" />
      <ChakraImageOrnament src={crownChakra} size="clamp(10rem, 18vw, 16rem)" motion="spin" opacity={0.09} className="-left-12 top-16 hidden sm:block" />
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-head"
        >
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">
            Check our <span className="text-aura-teal italic">Services</span>
          </h2>
          <div className="section-rule" />
          <p className="section-lede">
            Each session is personalized to where you are today. Whether you need deep rest, emotional release, or spiritual clarity, there is a path here for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative flex h-full flex-col rounded-2xl border border-primary/10 bg-card/80 p-7 sm:p-8 text-left transition-colors duration-500 hover:bg-primary/[0.07] hover:border-primary/25"
                data-testid={`service-card-${idx}`}
              >
                {/* short gold accent line — lengthens on hover */}
                <span
                  aria-hidden="true"
                  className="block h-[2px] w-11 transition-[width] duration-500 ease-out group-hover:w-16"
                  style={{ background: "rgb(var(--spirit-gold-rgb) / 0.85)" }}
                />

                <Icon className="mt-7 w-7 h-7 text-primary" strokeWidth={1.5} aria-hidden="true" />

                <h4 className="mt-6 font-serif text-2xl text-foreground leading-snug text-balance">
                  {service.title}
                </h4>
                <p className="mt-3 mb-6 text-[15px] text-foreground/70 font-light leading-[1.75] text-pretty">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => scrollTo("connect")}
                  className="mt-auto inline-flex items-center gap-2 self-start text-xs font-semibold tracking-[0.18em] uppercase text-primary/90 transition-colors duration-300 hover:text-primary"
                  data-testid={`service-book-${idx}`}
                >
                  Book This Session
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
