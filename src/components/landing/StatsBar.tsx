import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "ACTIVE PARTNERS" },
  { value: "$250K+", label: "COMMISSIONS PAID" },
  { value: "20%", label: "RECURRING COMMISSION" },
  { value: "48H", label: "PAYOUT SPEED" },
  { value: "150+", label: "COUNTRIES" },
  { value: "4.9★", label: "PARTNER RATING" },
];

export function StatsBar() {
  return (
    <section className="py-16 border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="heading-massive text-3xl sm:text-4xl gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-bold tracking-wider mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
