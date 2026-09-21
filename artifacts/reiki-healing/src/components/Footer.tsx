import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import logoSrc from "@assets/logo-transparent.png";

const usefulLinks = ["Home", "About Archana", "Services", "FAQ", "Book a Session"];
const services = [
  "Reiki & Energy Healing",
  "Removal & Protection",
  "Spiritual Readings",
  "Manifestation & Growth",
  "Distance Reiki",
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/8 pt-16 pb-8">
      {/* Widened to the 80rem track: the same five columns inside the old
          72rem shell were ~11rem each, which wrapped "Reiki & Energy
          Healing" onto three lines and crowded the brand address. */}
      <div className="container-page container-wide">
        {/* Five equal columns on desktop; the brand column only spans
            both tracks on tablet so it isn't left orphaned. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 xl:gap-x-10 gap-y-10 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logoSrc}
              alt="Aura Healz"
              width={96}
              height={96}
              className="h-20 w-auto object-contain -ml-2 mb-4"
              data-testid="footer-logo"
            />
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5 text-pretty">
              Durga Reiki, energy healing, and spiritual guidance to bring calm, clarity, and balance back into your life.
            </p>
            <div className="space-y-1.5 text-xs text-foreground/40 font-light">
              
              <p>Glendale, Arizona, 85305</p>
              <p>Phone: <a href="tel:+14805190052" className="hover:text-primary transition-colors">+1-480-519-0052</a></p>
              <p className="break-words">Email: <a href="mailto:archana@aurahealz.com" className="hover:text-primary transition-colors">archana@aurahealz.com</a></p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-5">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-foreground font-light leading-snug hover:text-primary transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="block text-sm text-muted-foreground font-light leading-snug text-pretty hover:text-primary transition-colors cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-5">Stay Connected</h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 text-pretty">
              Follow along for gentle reminders, reflections, and behind-the-scenes glimpses of the practice.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-primary/15 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_12px_rgba(218,165,32,0.2)]"
                  data-testid={`social-${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-5">Newsletter</h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed text-pretty">
              Receive gentle reminders, healing reflections, and news of upcoming workshops — never more than once a month.
            </p>
          </div>
        </div>

        <div className="border-t border-primary/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-foreground/30 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Aura Healz. All Rights Reserved.</p>
          <p className="italic">Crafted with care for those seeking balance, clarity, and calm.</p>
        </div>
      </div>
    </footer>
  );
}
