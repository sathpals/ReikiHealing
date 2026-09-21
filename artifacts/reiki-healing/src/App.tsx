import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
// import { FeaturedServices } from "@/components/FeaturedServices";
import { About } from "@/components/About";
import { JourneyWithin } from "@/components/JourneyWithin";
import { Stats } from "@/components/Stats";
import { Sessions } from "@/components/Sessions";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { HealerProfile } from "@/components/HealerProfile";
import { Biography } from "@/components/Biography";
import { ChakraDivider } from "@/components/ChakraDivider";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

// With a relative build base, BASE_URL is "./"; resolve it against the
// current page so routing works in whichever folder the site is uploaded to.
const routerBase = new URL(import.meta.env.BASE_URL, window.location.href).pathname.replace(/\/$/, "");

function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        {/* <FeaturedServices /> */}
        <ChakraDivider />
        <About />
        <JourneyWithin />
        <HealerProfile />
        {/* <Biography /> */}
        <Stats />
        <Sessions />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/index.html" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={routerBase}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
