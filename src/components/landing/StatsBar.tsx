import { motion } from "framer-motion";

const stats = [
  { value: "20%", label: "RECURRING COMMISSION" },
  { value: "$0", label: "MINIMUM PAYOUT" },
  { value: "90", label: "DAY COOKIE" },
  { value: "24H", label: "PAYOUT SPEED" },
];

export function StatsBar() {
  return (
    <section className="py-12 sm:py-16 border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="heading-massive text-2xl sm:text-3xl lg:text-4xl gradient-text">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-bold tracking-wider mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
