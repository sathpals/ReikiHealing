import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Heart, Sparkles } from "lucide-react";

const contactInfo = [
  { icon: Mail,    label: "Email Us",       value: "archana@divinehealing.com",  color: "bg-teal-500/15 text-teal-600" },
  { icon: Phone,   label: "Call / WhatsApp", value: "+91 98765 43210",           color: "bg-violet-500/15 text-violet-600" },
  { icon: MapPin,  label: "Location",       value: "Mumbai, Maharashtra, India", color: "bg-rose-500/15 text-rose-600" },
  { icon: Clock,   label: "Response Time",  value: "Within one business day",   color: "bg-amber-500/15 text-amber-600" },
];

const sessionTypes = [
  "Discovery Call (Free, 15 min)",
  "Reiki & Energy Healing",
  "Negative Energy Removal & Protection",
  "Spiritual Readings & Guidance",
  "Manifestation & Abundance Healing",
  "Distance Reiki Session",
  "In-Person Reiki Session",
  "Chakra Balancing Session",
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent ✨",
        description: "Thank you for reaching out. Archana will get back to you within one business day.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="connect" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/8" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.3em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            <Heart className="w-3 h-3" /> Contact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Get <span className="text-aura-teal italic">In Touch</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-5" />
          <p className="text-foreground/60 font-light max-w-xl mx-auto text-base">
            Have a question, or ready to begin your healing journey? Archana is here to listen and guide you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-card/60 to-secondary/10 border border-primary/15 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="font-serif text-lg text-foreground">Let's Connect</p>
              </div>
              <p className="text-sm text-foreground/60 font-light leading-relaxed">
                Whether you're exploring healing for the first time or returning for ongoing support — every message is welcome. There is no question too small.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                    className="flex items-center gap-4 bg-card/50 border border-primary/10 rounded-xl p-4 hover:border-primary/25 hover:shadow-md transition-all duration-300"
                    data-testid={`contact-info-${idx}`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${info.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-foreground/40 font-medium mb-0.5">{info.label}</p>
                      <p className="text-sm text-foreground/80 font-light">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="rounded-xl bg-gradient-to-br from-secondary/15 to-accent/10 border border-secondary/20 p-4">
              <p className="text-xs text-foreground/50 font-light leading-relaxed italic text-center">
                "Your message is held in complete confidence. Sessions support your wellbeing alongside — not instead of — medical or psychological care."
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card/50 border border-primary/12 rounded-2xl p-8 backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
          >
            <h3 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </span>
              Send a Message
            </h3>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium tracking-wide uppercase text-foreground/50">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="Your name"
                    className="bg-background/60 border-primary/15 focus-visible:ring-primary/35 rounded-xl h-11"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium tracking-wide uppercase text-foreground/50">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-background/60 border-primary/15 focus-visible:ring-primary/35 rounded-xl h-11"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium tracking-wide uppercase text-foreground/50">
                  Session Interest
                </label>
                <Select>
                  <SelectTrigger className="bg-background/60 border-primary/15 focus:ring-primary/35 rounded-xl h-11">
                    <SelectValue placeholder="Choose a session type…" />
                  </SelectTrigger>
                  <SelectContent>
                    {sessionTypes.map((s) => (
                      <SelectItem key={s} value={s.toLowerCase().replace(/\s+/g, "-")}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium tracking-wide uppercase text-foreground/50">
                  Your Message <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="What are you seeking? How have you been feeling? Share as much or as little as you'd like…"
                  className="min-h-[130px] bg-background/60 border-primary/15 focus-visible:ring-primary/35 resize-none rounded-xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm py-6 rounded-xl shadow-[0_4px_20px_rgba(0,160,140,0.25)] hover:shadow-[0_6px_30px_rgba(0,160,140,0.4)] transition-all duration-300 tracking-wider uppercase font-medium hover:scale-[1.01]"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
