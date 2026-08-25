import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@assets/archana-flower-blessing-ceremony.png";

const credentials = [
  "Certified Reiki Master Practitioner",
  "Personalized, one-on-one care",
  "Holistic mind-body-spirit approach",
  "Over 10 years of practice",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-background overflow-hidden">
      <div className="aura-field aura-field--soft" />
      <div className="veil-lavender absolute inset-0 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70">About</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Find Out More <span className="text-aura-teal italic">About Us</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/60 via-50% to-transparent mx-auto mb-6" />
          <p className="text-foreground/60 font-light max-w-2xl mx-auto text-base leading-relaxed">
            Divine Healing is a sanctuary for those seeking gentle, grounded support on their wellness journey — a space where ancient healing traditions meet compassionate, modern care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="img-aura relative"
          >
            <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl pointer-events-none" />
            <div className="absolute -inset-2 bg-accent/8 rounded-3xl blur-xl pointer-events-none animate-pulse" />
            <img
              src={aboutImg}
              alt="Archana Rai seated in meditation during a flower-blessing ceremony"
              className="img-hover-warm relative z-10 w-full rounded-3xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              style={{ maxHeight: "480px", objectFit: "cover", objectPosition: "center 42%" }}
              data-testid="about-image"
            />
            <div className="absolute bottom-5 left-5 right-5 z-20 bg-background/75 backdrop-blur-md rounded-2xl p-4 border border-primary/25 shadow-lg">
              <p className="text-xs tracking-widest uppercase text-primary font-medium mb-1">Practice</p>
              <p className="font-serif text-base text-foreground">Reiki · Energy · Healing · Transformation</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              Excellent health to unlock the best quality of your life
            </h3>
            <p className="text-foreground/60 font-light italic mb-5 text-base leading-relaxed border-l-2 border-primary/40 pl-4">
              True wellbeing is more than the absence of illness — it is the quiet flow of energy through a balanced body, a calm mind, and an open heart.
            </p>
            <p className="text-foreground/70 font-light mb-8 text-base leading-relaxed">
              Drawing on over a decade of practice in Reiki, energy healing, and intuitive guidance, I work with each person individually — listening deeply, holding space without judgment, and offering tools that gently restore harmony. Whether you arrive carrying stress, grief, uncertainty, or simply a longing for clarity, you are welcomed exactly as you are.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map((cred, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className={`w-5 h-5 mt-0.5 shrink-0 ${idx % 2 === 0 ? "text-primary" : "text-secondary"}`}
                  />
                  <span className="text-sm text-foreground/80 font-light">{cred}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
