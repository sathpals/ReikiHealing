import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Reiki, and what does a session actually feel like?",
    a: "Reiki is a gentle Japanese practice that supports the body's natural ability to relax and restore. You stay fully clothed and rest on a massage table (or in a comfortable chair). Most people describe a deep sense of calm, warmth, or tingling — and many drift in and out of a meditative, dream-like state.",
  },
  {
    q: "Do I need to believe in energy healing for it to work?",
    a: "No belief is required — only openness to rest. Many of our most skeptical clients report the strongest sense of calm. You can simply arrive as you are, lie down, and let the session unfold.",
  },
  {
    q: "How is a distance Reiki session different from an in-person one?",
    a: "During a distance session, we agree on a time, and you settle somewhere quiet and undisturbed. The energy work happens remotely while you rest. Most clients report the experience feels remarkably similar to being in the room — and you save the commute.",
  },
  {
    q: "How many sessions will I need?",
    a: "There is no fixed answer. Some people feel deeply restored after a single session; others prefer a series of three to six visits when working through stress, grief, or a major life transition. We'll talk through what makes sense for you with no pressure to commit upfront.",
  },
  {
    q: "Is energy healing safe alongside medical treatment?",
    a: "Reiki and energy work are complementary practices — they support relaxation and wellbeing alongside (never instead of) medical or psychological care. Please continue working with your doctor or therapist, and feel free to let me know how I can best support your overall care.",
  },
  {
    q: "What should I do before and after a session?",
    a: "Before: arrive a few minutes early, wear comfortable clothing, and skip heavy meals or caffeine if possible. After: drink plenty of water, take it gentle on yourself for the rest of the day, and pay attention to dreams, emotions, or insights — they often hold the most useful messages.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-card/10 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70">F.A.Q</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />
          <p className="text-foreground/60 font-light text-base">
            If you're new to energy healing, here are the questions people most often ask before their first session.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="border border-primary/10 rounded-2xl overflow-hidden bg-card/30 hover:border-primary/25 transition-colors duration-300"
              data-testid={`faq-item-${idx}`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
                data-testid={`faq-toggle-${idx}`}
              >
                <span className="font-light text-foreground/90 text-base leading-snug pr-2">
                  {faq.q}
                </span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {open === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm text-muted-foreground font-light leading-relaxed border-t border-primary/8 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
