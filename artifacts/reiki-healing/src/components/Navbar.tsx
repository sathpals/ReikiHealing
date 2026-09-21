import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";
import logoSrc from "@assets/logo-transparent.png";

const links = [
  { label: "Home",    id: "home" },
  { label: "About Archana",   id: "about" },
  { label: "Healing Journey",  id: "healer" },
  // { label: "Her Story", id: "story" },
  { label: "Services",id: "services" },
  { label: "Reviews", id: "reviews" },
  { label: "Gallery", id: "gallery" },
  { label: "FAQ",     id: "faq" },
  { label: "Book a Session", id: "connect" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transparent at rest, frosted cream once scrolled.
  const backgroundColor = useTransform(
    scrollY,
    [0, 60],
    ["rgba(253, 248, 240, 0)", "rgba(253, 248, 240, 0.92)"]
  );
  const blur = useTransform(scrollY, [0, 60], ["blur(0px)", "blur(16px)"]);

  useEffect(() => {
    return scrollY.on("change", (v) => setIsScrolled(v > 20));
  }, [scrollY]);

  // Close the mobile sheet if the viewport grows into the desktop nav,
  // otherwise it stays mounted and invisible, trapping focus.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Close first, scroll on the next frame: the open sheet makes the header
  // ~450px tall, so measuring the target before the close render commits puts
  // the destination underneath the panel while it collapses.
  const scrollTo = (id: string) => {
    setMobileOpen(false);
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    /* The bar and the mobile sheet live in one fixed wrapper, and the
       sheet sits in normal flow beneath the bar. Previously it was
       pinned at a hard-coded `top-[56px]` while the bar measured ~140px,
       so the panel opened *behind* the navbar. */
    <motion.header
      style={{ backgroundColor, backdropFilter: blur }}
      className={`fixed top-0 inset-x-0 z-50 transition-[border-color,box-shadow] duration-300 ${
        isScrolled || mobileOpen
          ? "border-b border-primary/10"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className={`container-page container-wide flex items-center justify-between gap-6 transition-[padding] duration-300 ${
          isScrolled ? "py-2.5" : "py-4"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="shrink-0 rounded-md"
        >
          <img
            src={logoSrc}
            alt="Aura Healz — Reiki &amp; Spiritual Wellness"
            /* Height-driven so the mark keeps its own aspect ratio. Never
               re-add a fixed-size `.logoMain`/`.main_logo` rule: unlayered
               CSS beats the Tailwind utilities here, which forced a 100px
               logo past the bar and over the hero badge on phones. */
            className={`w-auto object-contain transition-[height] duration-300 ${
              isScrolled ? "h-[68px] md:h-24" : "h-[84px] md:h-[120px]"
            }`}
            data-testid="nav-logo"
          />
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-9 text-[11px] lg:text-[13px] xl:text-sm font-medium tracking-[0.12em] lg:tracking-[0.15em] uppercase text-foreground/70">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="nav-link whitespace-nowrap hover:text-primary"
              data-testid={`nav-${l.id}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 hover:text-primary transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-testid="nav-mobile-toggle"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.8, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-primary/10"
          >
            <div className="container-page container-wide flex flex-col py-3">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="w-full text-left py-3.5 text-base tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
                  data-testid={`nav-mobile-${l.id}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
