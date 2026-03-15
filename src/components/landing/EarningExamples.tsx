import { motion } from "framer-motion";

const examples = [
  { referrals: 5, plan: "Starter ($29/mo)", monthly: "$29", yearly: "$348", desc: "Just 5 referrals on the Starter plan" },
  { referrals: 10, plan: "Pro ($49/mo)", monthly: "$98", yearly: "$1,176", desc: "10 referrals on the Pro plan" },
  { referrals: 25, plan: "Mixed plans", monthly: "$290", yearly: "$3,480", desc: "25 referrals across different plans" },
  { referrals: 50, plan: "Mixed plans", monthly: "$725", yearly: "$8,700", desc: "50 referrals with 22% tier bonus" },
  { referrals: 100, plan: "Mixed plans", monthly: "$1,850", yearly: "$22,200", desc: "100 referrals with 25% tier bonus" },
  { referrals: 250, plan: "Mixed plans", monthly: "$5,625", yearly: "$67,500", desc: "250 referrals with 30% elite tier" },
];

export function EarningExamples() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            EARNING <span className="gradient-text">EXAMPLES</span>
          </h2>
          <p className="text-muted-foreground mt-4">Real scenarios showing what you could earn</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
            >
              <p className="text-xs text-muted-foreground font-bold">{ex.referrals} REFERRALS</p>
              <p className="heading-massive text-3xl gradient-text mt-2">{ex.monthly}</p>
              <p className="text-xs text-muted-foreground">/month recurring</p>
              <p className="text-lg font-black text-foreground mt-3">{ex.yearly}/year</p>
              <p className="text-xs text-muted-foreground mt-2">{ex.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
