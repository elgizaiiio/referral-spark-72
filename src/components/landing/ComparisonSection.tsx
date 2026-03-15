import { motion } from "framer-motion";

const rows = [
  { feature: "Commission Rate", megsy: "20-30%", others: "5-15%" },
  { feature: "Recurring Commission", megsy: "YES — FOREVER", others: "First month only" },
  { feature: "Minimum Payout", megsy: "NO MINIMUM", others: "$50-$100" },
  { feature: "Cookie Duration", megsy: "90 DAYS", others: "30 days" },
  { feature: "Payout Speed", megsy: "24-48 HOURS", others: "30-60 days" },
  { feature: "Payment Methods", megsy: "PAYPAL, BANK, CRYPTO, WISE", others: "PayPal only" },
  { feature: "Marketing Materials", megsy: "100+ TEMPLATES", others: "Basic banner" },
  { feature: "Real-time Tracking", megsy: "YES", others: "Delayed reporting" },
  { feature: "Dedicated Support", megsy: "YES — 24/7", others: "Email only" },
  { feature: "Partner Community", megsy: "500+ MEMBERS", others: "None" },
];

export function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            MEGSY VS <span className="gradient-text">OTHERS</span>
          </h2>
          <p className="text-muted-foreground mt-4">See why our partner program is the best in the industry</p>
        </motion.div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-background border-b border-border">
            <div className="p-4 text-xs font-black text-muted-foreground tracking-wider">FEATURE</div>
            <div className="p-4 text-xs font-black gradient-text tracking-wider text-center">MEGSY AI</div>
            <div className="p-4 text-xs font-black text-muted-foreground tracking-wider text-center">OTHERS</div>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 border-b border-border last:border-0"
            >
              <div className="p-4 text-xs font-bold text-foreground">{row.feature}</div>
              <div className="p-4 text-xs font-black text-foreground text-center">{row.megsy}</div>
              <div className="p-4 text-xs text-muted-foreground text-center">{row.others}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
