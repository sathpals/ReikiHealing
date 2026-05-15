import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Stars } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[15%] w-72 h-72 bg-primary/15 rounded-full blur-[120px] animate-float-1" />
        <div className="absolute top-[35%] right-[10%] w-96 h-96 bg-accent/15 rounded-full blur-[140px] animate-float-2" />
        <div className="absolute bottom-[15%] left-[35%] w-80 h-80 bg-secondary/25 rounded-full blur-[130px] animate-float-3" />
        <div className="absolute top-[55%] left-[5%] w-48 h-48 bg-primary/10 rounded-full blur-[90px] animate-float-2" />
        <div className="absolute top-[10%] right-[30%] w-56 h-56 bg-accent/10 rounded-full blur-[100px] animate-float-1" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-primary/80 border border-primary/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
            Divine Healing
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-primary/8 blur-3xl rounded-full animate-pulse pointer-events-none" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground relative z-10 leading-[1.1]">
            Reconnect With Your{" "}
            <span className="text-primary italic block">Inner Light</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl font-light leading-relaxed"
        >
          Gentle Reiki, energy healing, and spiritual guidance to bring calm, clarity, and balance back into your life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button
            size="lg"
            className="text-base px-8 py-6 rounded-full bg-primary text-primary-foreground shadow-[0_0_25px_rgba(218,165,32,0.35)] hover:shadow-[0_0_40px_rgba(218,165,32,0.55)] transition-all duration-300 hover:scale-105"
            onClick={() => scrollTo("connect")}
            data-testid="button-book-session"
          >
            Book a Session
          </Button>
          <button
            onClick={() => scrollTo("services")}
            className="flex items-center gap-2 text-base text-foreground/70 hover:text-primary transition-colors duration-300 font-medium"
            data-testid="button-explore-services"
          >
            <Stars className="w-4 h-4" />
            Explore Services
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-foreground/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
