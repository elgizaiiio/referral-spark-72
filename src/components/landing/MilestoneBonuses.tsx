import { motion } from "framer-motion";

const milestones = [
  { milestone: "FIRST REFERRAL", bonus: "$25", desc: "Get a $25 bonus when your first referral subscribes to any paid plan." },
  { milestone: "10 REFERRALS", bonus: "$100", desc: "Reach 10 active referrals and earn a $100 milestone bonus." },
  { milestone: "25 REFERRALS", bonus: "$300", desc: "Quarter century! Earn $300 plus unlock Silver tier (22% commission)." },
  { milestone: "50 REFERRALS", bonus: "$750", desc: "Half century milestone. $750 bonus plus Gold tier (25% commission)." },
  { milestone: "100 REFERRALS", bonus: "$2,000", desc: "The big one. $2,000 bonus plus Platinum tier (30% commission forever)." },
  { milestone: "250 REFERRALS", bonus: "$5,000", desc: "Legend status. $5,000 bonus, custom landing page, and dedicated partner manager." },
];

export function MilestoneBonuses() {
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
            MILESTONE <span className="gradient-text">BONUSES</span>
          </h2>
          <p className="text-muted-foreground mt-4">Extra rewards on top of your recurring commissions</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => (
            <motion.div
              key={m.milestone}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
            >
              <p className="text-xs text-muted-foreground font-bold tracking-wider">{m.milestone}</p>
              <p className="heading-massive text-4xl gradient-text mt-2">{m.bonus}</p>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
