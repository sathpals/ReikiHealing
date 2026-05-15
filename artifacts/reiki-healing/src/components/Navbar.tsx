import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoSrc from "@assets/logo-transparent.png";

const links = [
  { label: "Home",    id: "home" },
  { label: "About",   id: "about" },
  { label: "Healer",  id: "healer" },
  { label: "Services",id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "FAQ",     id: "faq" },
  { label: "Contact", id: "connect" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 60],
    ["rgba(253, 248, 240, 0)", "rgba(253, 248, 240, 0.92)"]
  );
  const blur = useTransform(scrollY, [0, 60], ["blur(0px)", "blur(16px)"]);

  useEffect(() => {
    return scrollY.on("change", (v) => setIsScrolled(v > 20));
  }, [scrollY]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter: blur }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-primary/10 py-3" : "py-5"}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <img
            src={logoSrc}
            alt="Divine Healing — Spiritual Wellness"
            className="h-14 w-auto object-contain"
            data-testid="nav-logo"
          />

          <div className="hidden md:flex gap-8 text-xs font-medium tracking-[0.15em] uppercase text-foreground/70">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="hover:text-primary transition-colors duration-200"
                data-testid={`nav-${l.id}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-[56px] inset-x-0 z-40 bg-background/95 backdrop-blur-xl border-b border-primary/10 py-6 flex flex-col items-center gap-6"
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
              data-testid={`nav-mobile-${l.id}`}
            >
              {l.label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
}
