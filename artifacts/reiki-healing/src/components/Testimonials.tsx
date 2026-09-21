import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImg from "@assets/image_1778827397458.png";

const testimonials = [
  {
    name: "Geet.",
    // role: "Marketing Manager",
    text: "Having severe backpain from almost more than year. With Archana's healing it got resolved. I was amazed to see the results. I would highly recommend her to anyone who is looking for healing and spiritual guidance.",
  },
  {
    name: "Surendra.",
    // role: "Yoga Teacher",
    text: "With Archana Didi's Healing it helped to get the great sleep in night. Money blockages were removed. Recieved Divine Blessing.",
  },
  {
    name: "Pooja.",
    // role: "Small Business Owner",
    text: "Diagnosed with lump-cyst below to chin area. Doctor suggsted surgery, with Archan's healing it vanished in less 2 weeks. thank you Archana Di for helping me.",
  },
  {
    name: "Gajanan",
    // role: "Software Engineer",
    text: "I was struggling to quit smoking. With Archana’s healing, I have finally quit this habit. Thank you, Archana, for your healing and support!…",
  },
  {
    name: "Pushpa",
    // role: "Nurse",
    text: "I was struggling with sleep problems (migraine)  and had a cyst in my tummy area. Since receiving Archana’s healing, the cyst has disappeared, and I have been sleeping better at night. Thank you, Archana, for your care and support!",
  },
];

const AUTOPLAY_MS = 6000;

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setCurrent((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [current]);

  const t = testimonials[current];

  return (
    <section id="reviews" className="section-y relative overflow-hidden">
      {/* Soft pastel field. The photo is blurred and desaturated so it reads as
          a diffuse aura glow rather than a sharp, shiny image; the brightness
          lift is kept gentle so highlights bloom instead of blowing out.
          Inset is negative so the blur's soft edge falls outside the section. */}
      <div
        className="absolute inset-[-3rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
          filter: "saturate(0.7) brightness(1.4) blur(14px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(70% 80% at 50% 45%, rgb(var(--spirit-cream-rgb) / 0.72), transparent 82%),
            linear-gradient(180deg,
              rgb(var(--spirit-cream-rgb) / 0.80) 0%,
              rgb(var(--spirit-cream-rgb) / 0.60) 45%,
              rgb(var(--spirit-cream-rgb) / 0.84) 100%)
          `,
        }}
      />

      <div className="container-page container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span
            className="block text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: "rgb(var(--spirit-gold-rgb))" }}
          >
            Client Experiences
          </span>
          <h2 className="section-title text-foreground">
            Reflections from the{" "}
            <span className="italic" style={{ color: "var(--spirit-purple)" }}>
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Floor sized to the longest quote: without it the section height
            changes on every rotation, shifting Gallery, FAQ and Contact
            under the reader (and under in-page jumps). */}
        <div className="stack-slot min-h-[21rem] sm:min-h-[17rem] md:min-h-[15rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -28 }}
              transition={{ duration: 0.45, ease: [0.22, 0.8, 0.3, 1] }}
              className="w-full"
            >
              <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-white/70 bg-white/65 backdrop-blur-xl px-7 py-11 sm:px-12 sm:py-14 shadow-[0_18px_50px_rgb(var(--spirit-indigo-rgb)/0.10)]">
                <p className="font-serif text-lg sm:text-xl leading-[1.8] text-foreground/85 text-pretty">
                  {t.text}
                </p>

                <div className="mt-8 flex items-center justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                    {t.name.replace(/\.$/, "")}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-9 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(current - 1, -1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/15 bg-white/50 text-foreground/60 transition-colors duration-300 hover:border-primary/40 hover:text-primary"
            aria-label="Previous testimonial"
            data-testid="testimonial-prev"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx, idx > current ? 1 : -1)}
                className={`rounded-full transition-all duration-300 ${
                  idx === current ? "w-2.5 h-2.5" : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
                style={idx === current ? { background: "var(--spirit-purple)" } : undefined}
                aria-label={`Show testimonial ${idx + 1}`}
                aria-current={idx === current}
                data-testid={`testimonial-dot-${idx}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(current + 1, 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/15 bg-white/50 text-foreground/60 transition-colors duration-300 hover:border-primary/40 hover:text-primary"
            aria-label="Next testimonial"
            data-testid="testimonial-next"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
}
