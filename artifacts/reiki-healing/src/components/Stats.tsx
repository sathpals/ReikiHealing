import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Smile, BookOpen, Clock, Users } from "lucide-react";

const stats = [
  { icon: Smile, value: 232, label: "People Helped" },
  { icon: BookOpen, value: 102, label: "Healing Sessions" },
  { icon: Clock, value: 10, label: "Years of Experience" },
  { icon: Users, value: 15, label: "Workshops Hosted" },
];

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}</span>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-card/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground">
            Healing Lives With{" "}
            <span className="text-primary">Care & Compassion</span>
          </h3>
          <p className="text-foreground/55 font-light mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Supporting emotional, mental, and spiritual wellness through personalized healing sessions and compassionate guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
                data-testid={`stat-${idx}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(218,165,32,0.15)]">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-serif text-5xl text-primary font-medium mb-2">
                  <Counter target={s.value} inView={inView} />
                  {s.value === 10 && <span className="text-3xl">+</span>}
                </div>
                <p className="text-xs tracking-widest uppercase text-foreground/50 font-medium">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
