import { motion } from "framer-motion";
import chakraImg from "@assets/QvTKDCndyqLpuzUGs1JRRPN3t7IMr13yyc1ovC8VA0v1Q8aWBm3IXy7C7uQwF_1778830236086.jpeg";

export function ChakraDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-8 bg-background"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 relative z-0">
        <img
          src={chakraImg}
          alt="Seven chakra symbols"
          className="w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
          style={{ maxHeight: "80px" }}
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </motion.div>
  );
}
