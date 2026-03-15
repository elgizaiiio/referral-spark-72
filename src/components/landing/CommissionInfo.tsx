import { Check } from "lucide-react";
import { motion } from "framer-motion";

const perks = [
  "20% recurring commission on all subscription payments",
  "Commission on every plan — Starter, Pro, and Business",
  "No cap on how much you can earn",
  "Real-time tracking of all referrals and earnings",
  "Multiple payout methods: PayPal, Bank, Crypto",
  "Dedicated dashboard to manage everything",
];

export function CommissionInfo() {
  return (
    <section id="commission" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">COMMISSION STRUCTURE</p>
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              Simple, <span className="gradient-text">Generous</span> Rewards
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe in rewarding our community. That's why we offer one of the most generous referral programs in the AI industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/20">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <p className="text-sm text-foreground">{perk}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
