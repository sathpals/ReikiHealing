import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Our Studio", value: "Your studio address here" },
  { icon: Mail, label: "Email Us", value: "hello@divinehealing.com" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. You'll hear back within one business day.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="connect" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Get <span className="text-primary">In Touch</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />
          <p className="text-foreground/60 font-light max-w-xl mx-auto text-base">
            Have a question, or ready to book a session? Send a message and you'll hear back within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5 lg:col-span-1"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-card/40 border border-primary/10 rounded-2xl p-5"
                  data-testid={`contact-info-${idx}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(218,165,32,0.12)]">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-foreground/40 font-medium mb-1">{info.label}</p>
                    <p className="text-sm text-foreground/80 font-light">{info.value}</p>
                  </div>
                </div>
              );
            })}

            <div className="bg-card/40 border border-primary/10 rounded-2xl p-5 mt-2">
              <p className="text-xs tracking-wider uppercase text-foreground/40 font-medium mb-3">A Note</p>
              <p className="text-xs text-muted-foreground font-light leading-relaxed italic">
                Your message is private. Sessions complement but do not replace medical or psychological care.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-5 bg-card/40 border border-primary/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium tracking-wide uppercase text-foreground/50">Name</label>
                <Input id="name" required placeholder="Your name" className="bg-background/50 border-primary/15 focus-visible:ring-primary/40 rounded-xl" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium tracking-wide uppercase text-foreground/50">Email</label>
                <Input id="email" type="email" required placeholder="Your email address" className="bg-background/50 border-primary/15 focus-visible:ring-primary/40 rounded-xl" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium tracking-wide uppercase text-foreground/50">Session Interest</label>
              <Select>
                <SelectTrigger className="bg-background/50 border-primary/15 focus:ring-primary/40 rounded-xl">
                  <SelectValue placeholder="Select a session" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="discovery">Discovery Call (Free, 15 min)</SelectItem>
                  <SelectItem value="reiki">Reiki & Energy Healing</SelectItem>
                  <SelectItem value="removal">Removal & Protection</SelectItem>
                  <SelectItem value="readings">Spiritual Readings & Guidance</SelectItem>
                  <SelectItem value="manifestation">Manifestation & Growth</SelectItem>
                  <SelectItem value="distance">Distance Reiki Session</SelectItem>
                  <SelectItem value="inperson">In-Person Reiki Session</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium tracking-wide uppercase text-foreground/50">Message</label>
              <Textarea
                id="message"
                required
                placeholder="What are you seeking? How are you feeling?"
                className="min-h-[130px] bg-background/50 border-primary/15 focus-visible:ring-primary/40 resize-none rounded-xl"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm py-6 rounded-xl shadow-[0_0_20px_rgba(218,165,32,0.2)] hover:shadow-[0_0_35px_rgba(218,165,32,0.4)] transition-all duration-300 tracking-wider uppercase font-medium"
              disabled={isSubmitting}
              data-testid="button-submit-contact"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
