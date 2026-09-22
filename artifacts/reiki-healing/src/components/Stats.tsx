import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Smile, BookOpen, Clock, Users } from "lucide-react";
import statsBgImg from "@assets/-f0PQzH68UTDFFD6FehVW_y-U-OUP1V5y82SudiQH4meXJ0ifUHjiizq-FpOB_1778830182869.jpeg";

const stats = [
  { icon: Smile,    value: 50, suffix: "+", label: "People Helped" },
  { icon: BookOpen, value: 100, suffix: "+", label: "Healing Sessions" },
  { icon: Clock,    value: 4,  suffix: "+", label: "Years of Experience" },
  { icon: Users,    value: 5,  suffix: "+", label: "Workshops Hosted" },
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
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(start); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}</span>;
}

export function Stats() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${statsBgImg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/60 to-foreground/80" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-white text-balance">
            Healing Lives With{" "}
            <span className="text-aura-turquoise italic">Care & Compassion</span>
          </h3>
          <p className="text-white/60 font-light mt-4 max-w-xl mx-auto text-sm leading-relaxed text-pretty">
            Unless Archana is professionally licensed as a mental-health counselor.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 sm:gap-8">
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
                <div className="w-14 h-14 rounded-full bg-white/12 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20 shadow-[0_0_25px_rgba(100,220,255,0.15)]">
                  <Icon className="w-6 h-6 text-cyan-200" />
                </div>
                <div className="font-serif text-4xl sm:text-5xl text-white font-medium mb-2 tabular-nums">
                  <Counter target={s.value} inView={inView} />{s.suffix}
                </div>
                <p className="text-[11px] tracking-widest uppercase text-white/55 font-medium">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
