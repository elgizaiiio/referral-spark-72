import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[500px] w-[400px] sm:w-[700px] rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-massive text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground">
            EARN MONEY
          </h1>
          <h1 className="heading-massive text-4xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text mt-2">
            WITH MEGSY
          </h1>
          <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-sm sm:text-lg text-muted-foreground sm:text-xl">
            Share Megsy AI with your audience. Earn 20% recurring commission on every subscription. Build a real income stream.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gradient-cta glow-cta border-0 text-foreground text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 hover:opacity-90 rounded-full font-bold w-full sm:w-auto" asChild>
              <Link to="/login">START EARNING</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 rounded-full font-bold border-border text-foreground hover:bg-accent w-full sm:w-auto" asChild>
              <a href="#how-it-works">LEARN MORE</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
