import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

export function EarningsCalculator() {
  const [referrals, setReferrals] = useState([25]);
  const avgSubscription = 29;
  const commissionRate = 0.2;
  const monthly = referrals[0] * avgSubscription * commissionRate;
  const yearly = monthly * 12;

  return (
    <section id="calculator" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            YOUR <span className="gradient-text">POTENTIAL</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-lg">
            See how much you could earn with Megsy AI referrals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-6 sm:p-8 lg:p-12"
        >
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider font-semibold mb-2">Referrals per month</p>
            <p className="text-5xl sm:text-6xl font-black text-foreground">{referrals[0]}</p>
          </div>

          <Slider
            value={referrals}
            onValueChange={setReferrals}
            max={200}
            min={1}
            step={1}
            className="mb-8 sm:mb-12"
          />

          <div className="grid gap-4 sm:gap-6 grid-cols-2">
            <div className="bg-accent/50 rounded-xl p-4 sm:p-6 text-center">
              <p className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Monthly Income</p>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black gradient-text">${monthly.toLocaleString()}</p>
            </div>
            <div className="bg-accent/50 rounded-xl p-4 sm:p-6 text-center">
              <p className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Yearly Income</p>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-success">${yearly.toLocaleString()}</p>
            </div>
          </div>

          <p className="mt-4 sm:mt-6 text-center text-[10px] sm:text-xs text-muted-foreground">
            Based on average subscription of ${avgSubscription}/mo at {commissionRate * 100}% commission
          </p>
        </motion.div>
      </div>
    </section>
  );
}
