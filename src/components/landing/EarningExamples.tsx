import { motion } from "framer-motion";

const examples = [
  { referrals: 5, plan: "Entry ($9/mo)", monthly: "$9", yearly: "$108", desc: "5 referrals on the Entry plan at 20%" },
  { referrals: 10, plan: "Starter ($29/mo)", monthly: "$58", yearly: "$696", desc: "10 referrals on the Starter plan at 20%" },
  { referrals: 25, plan: "Pro ($49/mo)", monthly: "$245", yearly: "$2,940", desc: "25 referrals on the Pro plan at 20%" },
  { referrals: 50, plan: "Mixed plans", monthly: "$590", yearly: "$7,080", desc: "50 referrals across different plans at 20%" },
  { referrals: 100, plan: "Pro ($49/mo)", monthly: "$980", yearly: "$11,760", desc: "100 referrals on the Pro plan at 20%" },
  { referrals: 250, plan: "Elite ($149/mo)", monthly: "$7,450", yearly: "$89,400", desc: "250 referrals on the Elite plan at 20%" },
];

export function EarningExamples() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            EARNING <span className="gradient-text">EXAMPLES</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">Scenarios showing potential earnings with 20% forever commission</p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-4 sm:p-8 text-center hover:border-primary/30 transition-colors"
            >
              <p className="text-[10px] sm:text-xs text-muted-foreground font-bold">{ex.referrals} REFERRALS</p>
              <p className="heading-massive text-xl sm:text-3xl gradient-text mt-2">{ex.monthly}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">/month recurring</p>
              <p className="text-sm sm:text-lg font-black text-foreground mt-2 sm:mt-3">{ex.yearly}/year</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">{ex.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
