import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import bgImg from "@assets/image_1778827397458.png";

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
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-secondary/70 to-foreground/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/60">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-3">
            What Clients <span className="text-yellow-200 italic">Say</span>
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
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <Quote className="w-8 h-8 text-yellow-200/50 mx-auto mb-6" />
                <p className="text-white/90 font-light text-lg md:text-xl leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-serif text-lg text-yellow-200">{t.name}</p>
                  <p className="text-xs tracking-widest uppercase text-white/40 mt-1">{t.role}</p>
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
                  ? "w-8 h-2 bg-yellow-200"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
              data-testid={`testimonial-dot-${idx}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
