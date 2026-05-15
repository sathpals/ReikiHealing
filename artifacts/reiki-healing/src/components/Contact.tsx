import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I will connect with you soon.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="connect" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Connect with Me</h2>
          <p className="text-foreground/70 font-light text-lg">
            Begin with a free 15-minute discovery call to share what you are seeking and find the session that fits you best.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-card/50 p-8 rounded-2xl border border-primary/10 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/90">Name</label>
              <Input id="name" required placeholder="Your name" className="bg-background/50 border-primary/20 focus-visible:ring-primary/50" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/90">Email</label>
              <Input id="email" type="email" required placeholder="Your email address" className="bg-background/50 border-primary/20 focus-visible:ring-primary/50" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/90">Session Interest</label>
            <Select required>
              <SelectTrigger className="bg-background/50 border-primary/20 focus:ring-primary/50">
                <SelectValue placeholder="Select a session" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="discovery">Discovery Call (15 min)</SelectItem>
                <SelectItem value="healing">Reiki Healing (60 min)</SelectItem>
                <SelectItem value="deep">Deep Restoration (90 min)</SelectItem>
                <SelectItem value="remote">Remote Healing (45 min)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground/90">Message</label>
            <Textarea 
              id="message" 
              required 
              placeholder="What are you seeking? How are you feeling?" 
              className="min-h-[120px] bg-background/50 border-primary/20 focus-visible:ring-primary/50 resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-xl shadow-[0_0_15px_rgba(218,165,32,0.2)] hover:shadow-[0_0_25px_rgba(218,165,32,0.4)] transition-all duration-300"
            disabled={isSubmitting}
            data-testid="button-submit-contact"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
