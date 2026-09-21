import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";

const faqs = [
  {
    q: "What is spiritual energy healing?",
    a: "Spiritual energy healing is a complementary wellness practice intended to encourage relaxation, emotional comfort, energetic balance and inner connection. It is based on spiritual intention and energy practices rather than medical diagnosis or treatment.",
  },
  {
    q: "What is Durga Reiki?",
    a: "Durga Reiki is the central spiritual energy practice in Archana’s work. Archana has attained the level of Durga Reiki Mahaguru and approaches the practice with devotion, meditation and respect for her Guru’s guidance.",
  },
  {
    q: "How does a touchless distance session work?",
    a: "You participate from a quiet place while Archana conducts the spiritual energy work through deep meditation and focused intention. No physical touch or travel is required. A brief conversation before the session establishes your intention and answers practical questions.",
  },
  {
    q: "What can I seek support for?",
    a: "People may seek spiritual-wellness support for everyday stress, emotional heaviness, difficult experiences, discomfort or pain, low energy, restlessness, lack of clarity or a desire for spiritual growth. These sessions do not treat medical or psychological conditions.",
  },
  {
    q: "Do I need to share a diagnosis or private medical details?",
    a: "No. You may simply describe the general area in which you would like support. Please discuss medical or mental-health concerns with a qualified healthcare professional.",
  },
  {
    q: "How should I prepare?",
    a: "Choose a quiet and comfortable place, silence avoidable distractions and allow yourself a few calm minutes before the scheduled session. Archana will share any additional preparation that is appropriate for your selected session.",
  },

  {
    q: "What might I experience during a session?",
    a: "Experiences vary. Some people may notice calmness, warmth, emotional lightness, relaxation or increased awareness. Others may have a subtle or quiet experience. There is no required sensation and no guaranteed result.",
  },
  {
    q: "Will I notice results immediately?",
    a: "Each person’s experience is different. Some people may notice a sense of calm during or soon after a session, while others may reflect on the experience over time. Individual experiences and results vary.",
  },
  {
    q: "Can spiritual healing replace medical or mental-health care?",
    a: "No. Spiritual healing is a complementary wellness practice. It does not diagnose, treat or cure medical or psychological conditions and should not replace care from a licensed healthcare professional.",
  },
  {
    q: "Can I learn meditation separately?",
    a: "Yes. Archana offers guided meditation for beginners and for people who want to deepen an existing practice. Meditation guidance may be offered on its own or combined with touchless energy work.",
  },
  {
    q: "Where are sessions available?",
    a: "Archana is based in Phoenix, Arizona, and offers distance sessions to people across the United States.",
  },
  {
    q: "How do I begin?",
    a: "Use the Book a Session section to share your preferred session type and general intention. Archana will help you understand the available options without pressure or obligation.",
  },
];

const EASE = [0.22, 0.8, 0.3, 1] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-y relative overflow-clip bg-background">
      {/* soft warm wash, matching the About section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgb(var(--spirit-gold-rgb) / 0.05)" }}
      />

      <div className="container-page relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* ---- Heading (stays in view on desktop) --------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-4 lg:sticky lg:top-[calc(var(--nav-h)+2rem)]"
        >
          <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            F.A.Q
          </span>
          <h2 className="mt-5 font-serif font-medium text-[2.75rem] sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight text-foreground">
            Frequently Asked <span className="text-aura-teal italic">Questions</span>
          </h2>
          <p className="mt-7 text-base text-foreground/65 font-light leading-[1.85] text-pretty max-w-md">
            If you're new to energy healing, here are the questions people most often ask before their first session.
          </p>
          <p className="mt-6 text-sm text-foreground/55 font-light">
            Still have questions?{" "}
            <button
              type="button"
              onClick={() => scrollToSection("connect")}
              className="text-primary font-medium underline-offset-4 hover:underline transition-colors"
            >
              Get in touch
            </button>
            {" "}— Archana is happy to help.
          </p>
        </motion.div>

        {/* ---- Accordion --------------------------------------------- */}
        <div className="lg:col-span-8 border-t-2 border-primary/60">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: EASE }}
                className="border-b border-foreground/10"
                data-testid={`faq-item-${idx}`}
              >
                <button
                  type="button"
                  className="group w-full flex items-center justify-between gap-6 py-6 px-1 sm:px-2 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  data-testid={`faq-toggle-${idx}`}
                >
                  <span
                    className={`font-serif text-xl sm:text-[22px] leading-snug transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-foreground/90 group-hover:text-primary"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className={`shrink-0 w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-1 sm:px-2 pb-7 pr-10 text-base text-foreground/70 font-light leading-[1.85] text-pretty">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
