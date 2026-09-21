import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Stars } from "lucide-react";
import { scrollToSection as scrollTo } from "@/lib/scrollToSection";
import heroImg from "@assets/image_1778827437426.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-background min-h-[100svh]"
      /* Clears the fixed navbar without the old `mt-12 py-28` guesswork,
         which left the badge tucked under the bar on short viewports. */
      style={{ paddingTop: "calc(var(--nav-h) + 1rem)", paddingBottom: "clamp(2.5rem, 5vh, 4rem)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aura-field" />
        <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-primary/15 rounded-full blur-[120px] animate-float-1" />
        <div className="absolute top-[35%] right-[5%] w-80 h-80 bg-accent/12 rounded-full blur-[140px] animate-float-2" />
        <div className="absolute bottom-[15%] left-[30%] w-96 h-96 bg-secondary/12 rounded-full blur-[150px] animate-float-3" />
      </div>

      <div className="container-page container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="inline-block text-[11px] font-medium tracking-[0.3em] uppercase text-primary/80 border border-primary/25 rounded-full px-4 py-1.5">
              Aura Healing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="mt-6 font-serif text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-foreground leading-[1.08] text-balance"
          >
            Reconnect With{" "}
            <span className="text-aura-teal italic">Your Inner Light</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
            className="mt-6 text-base sm:text-lg text-foreground/65 max-w-xl font-light leading-relaxed text-pretty"
          >
            Durga Reiki, energy healing, and spiritual guidance to bring calm, clarity, and balance back into your life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="ghost"
              className="btn-aura no-default-hover-elevate w-full sm:w-auto justify-center text-base font-semibold px-8 py-6 rounded-full text-primary-foreground transition-all duration-500"
              onClick={() => scrollTo("connect")}
              data-testid="button-book-session"
            >
              Book a Session
            </Button>
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center justify-center sm:justify-start gap-2 px-2 py-3 sm:py-0 text-base text-foreground/65 hover:text-primary transition-colors duration-300 font-medium"
              data-testid="button-explore-services"
            >
              <Stars className="w-4 h-4" />
              Explore Services
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
          className="img-aura relative flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 lg:hidden" />
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute -inset-8 bg-accent/8 rounded-full blur-[60px] animate-float-2 pointer-events-none" />
          <img
            src={heroImg}
            alt="Divine energy healing — sacred light"
            className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.12)] animate-float-1"
            style={{ maxHeight: "520px", objectPosition: "top" }}
            data-testid="hero-image"
          />
        </motion.div>
      </div>

      {/* Hidden below lg: on short/narrow screens it sat on top of the
          CTA row rather than below it. Centred on the section. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-widest uppercase text-foreground/30">Scroll</span>
        <div className="scroll-mouse" aria-hidden="true">
          <span className="scroll-mouse__wheel" />
        </div>
      </motion.div>
    </section>
  );
}
