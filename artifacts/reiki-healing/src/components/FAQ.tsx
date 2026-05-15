import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Reiki, and what does a session actually feel like?",
    a: "Reiki is a gentle Japanese practice that supports the body's natural ability to relax and restore. You stay fully clothed and rest on a massage table or in a comfortable chair. Most people describe a deep sense of calm, warmth, or tingling — and many drift in and out of a meditative, dream-like state.",
    color: "from-teal-500/20 to-cyan-500/10",
    badge: "bg-teal-500/15 text-teal-700",
  },
  {
    q: "Do I need to believe in energy healing for it to work?",
    a: "No belief is required — only openness to rest. Many of our most skeptical clients report the strongest sense of calm. You can simply arrive as you are, lie down, and let the session unfold.",
    color: "from-violet-500/20 to-purple-500/10",
    badge: "bg-violet-500/15 text-violet-700",
  },
  {
    q: "How is a distance Reiki session different from an in-person one?",
    a: "During a distance session, we agree on a time, and you settle somewhere quiet and undisturbed. The energy work happens remotely while you rest. Most clients report the experience feels remarkably similar to being in the room — and you save the commute.",
    color: "from-rose-500/20 to-pink-500/10",
    badge: "bg-rose-500/15 text-rose-700",
  },
  {
    q: "How many sessions will I need?",
    a: "There is no fixed answer. Some people feel deeply restored after a single session; others prefer a series of three to six visits when working through stress, grief, or a major life transition. We'll talk through what makes sense for you with no pressure to commit upfront.",
    color: "from-amber-500/20 to-yellow-500/10",
    badge: "bg-amber-500/15 text-amber-700",
  },
  {
    q: "Is energy healing safe alongside medical treatment?",
    a: "Reiki and energy work are complementary practices — they support relaxation and wellbeing alongside (never instead of) medical or psychological care. Please continue working with your doctor or therapist, and feel free to let Archana know how she can best support your overall care.",
    color: "from-emerald-500/20 to-green-500/10",
    badge: "bg-emerald-500/15 text-emerald-700",
  },
  {
    q: "What should I do before and after a session?",
    a: "Before: arrive a few minutes early, wear comfortable clothing, and skip heavy meals or caffeine if possible. After: drink plenty of water, take it gentle on yourself for the rest of the day, and pay attention to dreams, emotions, or insights — they often hold the most useful messages.",
    color: "from-sky-500/20 to-blue-500/10",
    badge: "bg-sky-500/15 text-sky-700",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-background to-accent/8" />
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            F.A.Q
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-5" />
          <p className="text-foreground/60 font-light text-base max-w-xl mx-auto">
            If you're new to energy healing, here are the questions people most often ask before their first session.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className={`rounded-2xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                open === idx ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-primary/25" : "hover:border-primary/20 hover:shadow-md"
              }`}
              data-testid={`faq-item-${idx}`}
            >
              <button
                className="w-full flex items-start gap-4 p-5 text-left group"
                onClick={() => setOpen(open === idx ? null : idx)}
                data-testid={`faq-toggle-${idx}`}
              >
                <span className={`shrink-0 w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center mt-0.5 ${faq.badge}`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-light text-foreground/90 text-sm leading-snug group-hover:text-foreground transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`shrink-0 w-4 h-4 text-primary/60 mt-1 transition-transform duration-300 ${open === idx ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className={`mx-4 mb-4 rounded-xl bg-gradient-to-br ${faq.color} p-4 border border-primary/8`}>
                      <p className="text-sm text-foreground/75 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/50 text-sm font-light">
            Still have questions?{" "}
            <button
              onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:underline underline-offset-2 font-medium transition-colors"
            >
              Get in touch
            </button>
            {" "}— Archana is happy to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
