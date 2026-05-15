import { Instagram, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

const usefulLinks = ["Home", "About Us", "Services", "FAQ", "Contact"];
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
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-primary mb-3">Divine Healing</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
              Gentle Reiki, energy healing, and spiritual guidance to bring calm, clarity, and balance back into your life.
            </p>
            <div className="space-y-1.5 text-xs text-foreground/40 font-light">
              <p>Your studio address</p>
              <p>City, State, ZIP</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: hello@divinehealing.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-5">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-foreground font-light hover:text-primary transition-colors cursor-pointer">
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
                  <span className="text-sm text-muted-foreground font-light hover:text-primary transition-colors cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-5">Stay Connected</h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
              Follow along for gentle reminders, reflections, and behind-the-scenes glimpses of the practice.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Mail, label: "Email" },
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

            <div className="mt-8 border-t border-primary/8 pt-6">
              <p className="text-xs text-foreground/40 font-medium mb-3 uppercase tracking-wider">Newsletter</p>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Receive gentle reminders, healing reflections, and news of upcoming workshops — never more than once a month.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-foreground/30">
          <p>&copy; {new Date().getFullYear()} Divine Healing. All Rights Reserved.</p>
          <p className="italic">Crafted with care for those seeking balance, clarity, and calm.</p>
        </div>
      </div>
    </footer>
  );
}
