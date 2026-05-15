import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/10 py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="font-serif text-2xl text-primary mb-2">Luna Reiki</h3>
        <p className="text-muted-foreground font-light mb-8 italic">Ancient healing energy for the modern soul.</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-foreground/50 hover:text-primary transition-colors" aria-label="Instagram" data-testid="social-instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-foreground/50 hover:text-primary transition-colors" aria-label="Twitter" data-testid="social-twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-foreground/50 hover:text-primary transition-colors" aria-label="Email" data-testid="social-email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-xs text-foreground/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Luna Reiki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
