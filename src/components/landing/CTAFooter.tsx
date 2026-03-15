import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTAFooter() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[400px] w-[400px] sm:w-[600px] rounded-full bg-primary/8 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            READY TO <span className="gradient-text">START?</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg text-muted-foreground">
            Join the Megsy Partner Program today. No fees, no minimums, just earning.
          </p>
          <div className="mt-8 sm:mt-10">
            <Button size="lg" className="gradient-cta glow-cta border-0 text-foreground text-base sm:text-lg px-10 sm:px-12 h-12 sm:h-14 hover:opacity-90 rounded-full font-bold w-full sm:w-auto" asChild>
              <Link to="/login">START EARNING NOW</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
