import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(15, 15, 18, 0)", "rgba(15, 15, 18, 0.8)"]
  );

  const blur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter: blur }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-primary/10 py-3' : 'py-6'}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-2xl text-primary font-medium tracking-wide">
          Luna Reiki
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wider uppercase text-foreground/80">
          <button onClick={() => scrollTo('home')} className="hover:text-primary transition-colors" data-testid="nav-home">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors" data-testid="nav-about">About</button>
          <button onClick={() => scrollTo('sessions')} className="hover:text-primary transition-colors" data-testid="nav-sessions">Sessions</button>
          <button onClick={() => scrollTo('connect')} className="hover:text-primary transition-colors" data-testid="nav-connect">Connect</button>
        </div>
      </div>
    </motion.nav>
  );
}
