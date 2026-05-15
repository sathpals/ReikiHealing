import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import handsEnergyImg from "@assets/image_1778827454908.png";
import handsLightImg from "@assets/image_1778827461038.png";
import chakraImg from "@assets/image_1778827392136.png";
import goddesImg from "@assets/image_1778827437426.png";
import mountainImg from "@assets/image_1778827432553.png";
import forestImg from "@assets/image_1778827397458.png";

type Category = "all" | "sessions" | "tools" | "spaces";

const items = [
  {
    title: "Reiki Session",
    subtitle: "Hands-on healing",
    category: "sessions" as Category,
    img: handsEnergyImg,
  },
  {
    title: "Sacred Energy",
    subtitle: "Healing light",
    category: "sessions" as Category,
    img: handsLightImg,
  },
  {
    title: "Chakra Balancing",
    subtitle: "Energy session",
    category: "sessions" as Category,
    img: chakraImg,
  },
  {
    title: "Divine Feminine",
    subtitle: "Sacred wisdom",
    category: "spaces" as Category,
    img: goddesImg,
  },
  {
    title: "Mountain Meditation",
    subtitle: "Sacred stillness",
    category: "spaces" as Category,
    img: mountainImg,
  },
  {
    title: "Energy Awakening",
    subtitle: "Spiritual healing",
    category: "sessions" as Category,
    img: forestImg,
  },
];

const filters: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Sessions", value: "sessions" },
  { label: "Sacred Spaces", value: "spaces" },
];

export function Gallery() {
  const [active, setActive] = useState<Category | "all">("all");
  const [lightbox, setLightbox] = useState<null | (typeof items)[0]>(null);

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
            A look inside the sessions, sacred energy, and quiet corners where the work unfolds.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-xs tracking-wider font-medium uppercase transition-all duration-300 ${
                active === f.value
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,160,140,0.3)]"
                  : "border border-primary/20 text-foreground/60 hover:border-primary/50 hover:text-primary"
              }`}
              data-testid={`gallery-filter-${f.value}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
                onClick={() => setLightbox(item)}
                data-testid={`gallery-item-${idx}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="font-serif text-base text-white">{item.title}</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider mt-1">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-md p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="w-full object-cover max-h-[75vh]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <p className="font-serif text-xl text-white">{lightbox.title}</p>
                <p className="text-xs text-white/60 uppercase tracking-widest mt-1">{lightbox.subtitle}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-background/40 transition-colors text-lg font-light"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
