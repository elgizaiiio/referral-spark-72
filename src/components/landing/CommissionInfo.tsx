import { motion } from "framer-motion";

const perks = [
  "20% commission forever on all subscriptions",
  "No cap on earnings — unlimited potential",
  "Real-time tracking dashboard",
  "Marketing tools and templates included",
  "No minimum payout threshold",
  "90-day cookie window",
];

export function CommissionInfo() {
  return (
    <section id="commission" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            THE <span className="gradient-text">DEAL</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-lg">
            Simple, transparent, and designed for your success
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-6 sm:p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <p className="text-6xl sm:text-7xl lg:text-8xl font-black gradient-text">20%</p>
            <p className="mt-2 text-sm sm:text-lg text-muted-foreground">Recurring Commission</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-xs sm:text-sm text-foreground">{perk}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
