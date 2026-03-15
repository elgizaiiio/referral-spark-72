import { motion } from "framer-motion";

const tiers = [
  { referrals: "1-10", rate: "20%", label: "STARTER" },
  { referrals: "11-50", rate: "22%", label: "GROWING" },
  { referrals: "51-100", rate: "25%", label: "ADVANCED" },
  { referrals: "100+", rate: "30%", label: "ELITE" },
];

export function CommissionStructure() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            COMMISSION <span className="gradient-text">TIERS</span>
          </h2>
          <p className="text-muted-foreground mt-4">The more you refer, the more you earn per referral</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
            >
              <p className="heading-massive text-4xl gradient-text">{tier.rate}</p>
              <p className="text-sm font-bold text-foreground mt-3">{tier.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{tier.referrals} referrals</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
