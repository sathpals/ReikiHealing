import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Energy Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float-1" />
        <div className="absolute top-[40%] right-[20%] w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float-2" />
        <div className="absolute bottom-[20%] left-[40%] w-80 h-80 bg-secondary/30 rounded-full blur-[110px] animate-float-3" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Pulsing glow behind text */}
          <div className="absolute -inset-8 bg-primary/10 blur-2xl rounded-full animate-pulse pointer-events-none" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground relative z-10 drop-shadow-sm">
            Natural Healing <br />
            <span className="text-primary italic">From Within</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl font-light leading-relaxed"
        >
          A serene sanctuary for emotional peace, physical balance, and spiritual renewal. Experience the quiet vibration of potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-12"
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-[0_0_20px_rgba(218,165,32,0.3)] hover:shadow-[0_0_30px_rgba(218,165,32,0.5)] transition-all duration-300"
            onClick={() => document.getElementById('sessions')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-book-hero"
          >
            Begin Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
