import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            TRUSTED BY{" "}
            <span className="gradient-text">LEADING CREATORS</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Join hundreds of partners already earning with Megsy AI. Our partner program is designed for creators, influencers, and entrepreneurs who want to build real income.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-4xl font-black text-foreground">500+</p>
              <p className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">Active Partners</p>
            </div>
            <div>
              <p className="text-4xl font-black gradient-text">$250K+</p>
              <p className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">Paid Out</p>
            </div>
            <div>
              <p className="text-4xl font-black text-success">20%</p>
              <p className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">Recurring Commission</p>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" className="gradient-cta glow-cta border-0 text-foreground text-lg px-10 h-14 hover:opacity-90 rounded-full font-bold" asChild>
              <Link to="/login">BECOME A PARTNER</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
