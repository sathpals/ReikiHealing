import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Marketing Manager",
    text: "I came in carrying months of stress and left feeling lighter than I had in years. The session was calm, grounded, and surprisingly emotional — in the best way. I've been sleeping better ever since.",
  },
  {
    name: "Priya R.",
    role: "Yoga Teacher",
    text: "As someone already deep into wellness practices, I wasn't sure what Reiki would add. It added a stillness I didn't know I was missing. I now recommend Divine Healing to all my students.",
  },
  {
    name: "Jenna K.",
    role: "Small Business Owner",
    text: "The spiritual reading gave me clarity I'd been searching for through months of journaling. It was gentle, never pushy, and the guidance felt genuinely tailored to my situation.",
  },
  {
    name: "Marcus B.",
    role: "Software Engineer",
    text: "I was skeptical going in. I left calmer than after a week off work. Whatever this is, it works — and the after-session notes helped me keep that feeling longer than I expected.",
  },
  {
    name: "Elena L.",
    role: "Nurse",
    text: "After years of caring for others, I finally let someone hold space for me. The distance Reiki session was every bit as powerful as I'd hoped. I felt heard, restored, and grounded.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-24 md:py-28 bg-card/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-primary/5 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3">
            What Clients <span className="text-primary">Say</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-x-0"
            >
              <div className="bg-card/50 border border-primary/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-[0_0_40px_rgba(218,165,32,0.04)]">
                <Quote className="w-8 h-8 text-primary/30 mx-auto mb-6" />
                <p className="text-foreground/80 font-light text-lg md:text-xl leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-serif text-lg text-primary">{t.name}</p>
                  <p className="text-xs tracking-widest uppercase text-foreground/40 mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-[240px] md:mt-[200px]">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/25 hover:bg-primary/50"
              }`}
              data-testid={`testimonial-dot-${idx}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
