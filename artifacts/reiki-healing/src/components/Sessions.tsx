import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sessions = [
  {
    title: "Discovery Call",
    duration: "15 min",
    price: "Free",
    description: "Share what you are seeking and find the session that fits you best. A gentle introduction to energy work."
  },
  {
    title: "Reiki Healing Session",
    duration: "60 min",
    price: "$95",
    description: "Full-body energy balancing and chakra alignment. Deeply relaxing and restorative."
  },
  {
    title: "Deep Restoration",
    duration: "90 min",
    price: "$140",
    description: "Extended healing for deep energetic clearing. Includes intuitive guidance and sound therapy."
  },
  {
    title: "Remote Healing",
    duration: "45 min",
    price: "$75",
    description: "Healing energy transcends physical space. Receive the benefits of Reiki from the comfort of your home."
  }
];

export function Sessions() {
  return (
    <section id="sessions" className="py-24 md:py-32 bg-card/30 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Choose Your Session</h2>
          <p className="text-foreground/70 font-light max-w-2xl mx-auto">
            Each session is a sacred space designed to meet you exactly where you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {sessions.map((session, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-card/40 border-primary/20 hover:border-primary/50 transition-colors duration-500 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                      {session.title}
                    </CardTitle>
                    <span className="text-sm font-medium text-accent px-3 py-1 rounded-full bg-accent/10">
                      {session.duration}
                    </span>
                  </div>
                  <CardDescription className="text-lg font-serif text-primary/80">
                    {session.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-light mb-6">
                    {session.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                    data-testid={`button-book-${idx}`}
                  >
                    Select Session
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
