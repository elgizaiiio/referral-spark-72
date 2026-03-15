import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

export function EarningsCalculator() {
  const [referrals, setReferrals] = useState([10]);
  const pricePerSub = 20;
  const commission = 0.2;
  const monthly = referrals[0] * pricePerSub * commission;
  const yearly = monthly * 12;

  return (
    <section id="calculator" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">EARNINGS CALCULATOR</p>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            See Your <span className="gradient-text">Potential</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-8 lg:p-12"
        >
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Number of referrals per month</p>
            <p className="mt-2 text-5xl font-black gradient-text">{referrals[0]}</p>
          </div>

          <div className="mt-8 px-4">
            <Slider
              value={referrals}
              onValueChange={setReferrals}
              min={1}
              max={100}
              step={1}
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-background p-6 text-center">
              <p className="text-sm text-muted-foreground">Monthly Earnings</p>
              <p className="mt-2 text-3xl font-black text-success">${monthly.toFixed(0)}</p>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center glow-primary">
              <p className="text-sm text-muted-foreground">Yearly Earnings</p>
              <p className="mt-2 text-3xl font-black gradient-text">${yearly.toLocaleString()}</p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Based on ${pricePerSub}/mo average subscription × 20% commission
          </p>
        </motion.div>
      </div>
    </section>
  );
}
