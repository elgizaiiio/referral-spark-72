import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            TRUSTED BY{" "}
            <span className="gradient-text">CREATORS</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg text-muted-foreground">
            Our partner program is designed for creators, influencers, and entrepreneurs who want to build real income with forever commissions.
          </p>

          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-3">
            <div>
              <p className="text-2xl sm:text-4xl font-black text-foreground">$0</p>
              <p className="mt-1 text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider">Min. Payout</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-black gradient-text">20%</p>
              <p className="mt-1 text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider">Recurring</p>
            </div>
            <div>
              <p className="text-2xl sm:text-4xl font-black text-success">90 Days</p>
              <p className="mt-1 text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider">Cookie Window</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <Button size="lg" className="gradient-cta glow-cta border-0 text-foreground text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 hover:opacity-90 rounded-full font-bold" asChild>
              <Link to="/login">BECOME A PARTNER</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
