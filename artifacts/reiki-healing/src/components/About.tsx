import { motion } from "framer-motion";
import { Sparkles, Wind, Droplets } from "lucide-react";

export function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.h2 
            variants={item}
            className="font-serif text-4xl md:text-5xl text-primary mb-6"
          >
            What is Reiki?
          </motion.h2>
          
          <motion.div variants={item} className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-12" />

          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-3xl mx-auto mb-16"
          >
            Reiki is a subtle and effective form of energywork using spiritually guided life force energy. It is the practice of natural healing from within, restoring harmony to your mind, body, and spirit. Like a deep, intentional breath, it clears pathways and reawakens your innate ability to heal.
          </motion.p>

          <motion.div 
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
          >
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(107,33,168,0.3)]">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">Clarity</h3>
              <p className="text-muted-foreground text-sm font-light">Release emotional blockages and find stillness in the mind.</p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(186,134,212,0.3)]">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">Energy</h3>
              <p className="text-muted-foreground text-sm font-light">Realign your chakras to let vital energy flow freely.</p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(107,33,168,0.3)]">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">Balance</h3>
              <p className="text-muted-foreground text-sm font-light">Harmonize the physical and spiritual self for true restoration.</p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
