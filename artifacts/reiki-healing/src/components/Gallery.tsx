import { motion } from "framer-motion";
import { useState } from "react";

type Category = "all" | "sessions" | "tools" | "spaces";

const items = [
  {
    title: "Reiki Session",
    subtitle: "Hands-on healing",
    category: "sessions" as Category,
    gradient: "from-violet-900/60 via-purple-800/40 to-indigo-900/60",
    pattern: "radial",
  },
  {
    title: "Meditation Corner",
    subtitle: "Sacred space",
    category: "spaces" as Category,
    gradient: "from-amber-900/50 via-orange-800/30 to-yellow-900/50",
    pattern: "linear",
  },
  {
    title: "Chakra Balancing",
    subtitle: "Energy session",
    category: "sessions" as Category,
    gradient: "from-fuchsia-900/60 via-pink-800/40 to-purple-900/60",
    pattern: "radial",
  },
  {
    title: "Healing Crystals",
    subtitle: "Sacred tools",
    category: "tools" as Category,
    gradient: "from-teal-900/50 via-cyan-800/30 to-blue-900/50",
    pattern: "linear",
  },
  {
    title: "The Studio",
    subtitle: "Sacred space",
    category: "spaces" as Category,
    gradient: "from-rose-900/50 via-pink-800/30 to-fuchsia-900/50",
    pattern: "radial",
  },
  {
    title: "Distance Reiki",
    subtitle: "Remote session",
    category: "sessions" as Category,
    gradient: "from-indigo-900/60 via-blue-800/40 to-violet-900/60",
    pattern: "linear",
  },
  {
    title: "Sage & Palo Santo",
    subtitle: "Energy clearing",
    category: "tools" as Category,
    gradient: "from-emerald-900/50 via-green-800/30 to-teal-900/50",
    pattern: "radial",
  },
  {
    title: "Singing Bowls",
    subtitle: "Sound healing",
    category: "tools" as Category,
    gradient: "from-yellow-900/50 via-amber-800/30 to-orange-900/50",
    pattern: "linear",
  },
  {
    title: "The Altar",
    subtitle: "Sacred space",
    category: "spaces" as Category,
    gradient: "from-purple-900/60 via-violet-800/40 to-fuchsia-900/60",
    pattern: "radial",
  },
];

const filters: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Sessions", value: "sessions" },
  { label: "Crystals & Tools", value: "tools" },
  { label: "Sacred Spaces", value: "spaces" },
];

export function Gallery() {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered = items.filter((i) => active === "all" || i.category === active);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70">Gallery</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Glimpses From Our <span className="text-primary">Healing Space</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />
          <p className="text-foreground/60 font-light max-w-xl mx-auto text-base">
            A look inside the sessions, sacred tools, and quiet corners where the work unfolds.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-xs tracking-wider font-medium uppercase transition-all duration-300 ${
                active === f.value
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(218,165,32,0.3)]"
                  : "border border-primary/20 text-foreground/60 hover:border-primary/50 hover:text-primary"
              }`}
              data-testid={`gallery-filter-${f.value}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
              data-testid={`gallery-item-${idx}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-700`}
              />
              {item.pattern === "radial" && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.08)_0%,transparent_70%)]" />
              )}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <div className="w-20 h-20 rounded-full border border-primary/20" />
                <div className="w-10 h-10 rounded-full border border-primary/30 absolute" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-serif text-base text-foreground">{item.title}</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wider mt-1">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
