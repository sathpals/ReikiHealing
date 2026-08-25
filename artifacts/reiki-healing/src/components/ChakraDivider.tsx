import { motion } from "framer-motion";
import chakraImg from "@assets/QvTKDCndyqLpuzUGs1JRRPN3t7IMr13yyc1ovC8VA0v1Q8aWBm3IXy7C7uQwF_1778830236086.jpeg";

export function ChakraDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-12 bg-background"
    >
      {/* soft multi-hue bloom behind the chakra symbols */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(38% 120% at 50% 50%, rgb(var(--spirit-turquoise-rgb) / 0.20), transparent 70%), " +
            "radial-gradient(28% 110% at 22% 50%, rgb(var(--spirit-lavender-rgb) / 0.18), transparent 72%), " +
            "radial-gradient(28% 110% at 78% 50%, rgb(var(--spirit-gold-rgb) / 0.16), transparent 72%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* The source JPEG has a baked-in black background, so rather
            than fight it, it sits on a deliberate deep-indigo plaque
            (#171A3A from the palette). The black merges into the
            plaque and the strip reads as an intentional inset band. */}
        <div
          className="group relative mx-auto max-w-2xl rounded-2xl px-6 py-4 overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
          style={{
            background:
              "linear-gradient(135deg, #171A3A 0%, #1E2350 55%, #171A3A 100%)",
            boxShadow:
              "0 10px 34px -14px rgb(var(--spirit-purple-rgb) / 0.55), " +
              "0 0 0 1px rgb(var(--spirit-lavender-rgb) / 0.22)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-70"
            style={{
              background:
                "radial-gradient(60% 120% at 20% 50%, rgb(var(--spirit-teal-rgb) / 0.22), transparent 70%), " +
                "radial-gradient(60% 120% at 80% 50%, rgb(var(--spirit-gold-rgb) / 0.16), transparent 70%)",
            }}
          />
          <img
            src={chakraImg}
            alt="Seven chakra symbols"
            className="relative z-10 w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ maxHeight: "88px" }}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />
    </motion.div>
  );
}
