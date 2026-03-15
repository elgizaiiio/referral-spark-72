import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Active Referrers" },
  { value: "$25K+", label: "Paid Out" },
  { value: "2,000+", label: "Signups Generated" },
  { value: "4.9/5", label: "Satisfaction Rate" },
];

export function TrustSection() {
  return (
    <section className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">TRUSTED BY CREATORS</p>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Join a Growing <span className="gradient-text">Community</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <p className="text-3xl font-black gradient-text sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
