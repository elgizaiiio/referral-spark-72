import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const monthly = [
  { name: "ENTRY", price: 9, commission: 1.8 },
  { name: "STARTER", price: 29, commission: 5.8, popular: true },
  { name: "PRO", price: 49, commission: 9.8 },
  { name: "ELITE", price: 149, commission: 29.8 },
];

const yearly = [
  { name: "ENTRY", price: 89, commission: 17.8 },
  { name: "STARTER", price: 249, commission: 49.8, popular: true },
  { name: "PRO", price: 499, commission: 99.8 },
  { name: "ELITE", price: 1299, commission: 259.8 },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? yearly : monthly;

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            YOUR <span className="gradient-text">EARNINGS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Earn 20% recurring commission on every plan. Here's what you make per referral.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-bold uppercase ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>MONTHLY</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? "bg-primary" : "bg-muted"}`}
            >
              <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-foreground transition-transform ${isYearly ? "translate-x-7" : "translate-x-0.5"}`} />
            </button>
            <span className={`text-sm font-bold uppercase ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>YEARLY</span>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card border rounded-2xl p-8 text-center ${plan.popular ? "border-primary glow-primary" : "border-border"}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-cta text-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="heading-massive text-xl text-foreground">{plan.name}</h3>
              <p className="text-4xl font-black text-foreground mt-4">${plan.price}</p>
              <p className="text-xs text-muted-foreground">/{isYearly ? "year" : "month"}</p>
              <div className="mt-6 py-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase font-bold">YOUR COMMISSION</p>
                <p className="heading-massive text-3xl gradient-text mt-1">${plan.commission}</p>
                <p className="text-xs text-muted-foreground">per referral / {isYearly ? "year" : "month"}</p>
              </div>
              <Button className="w-full mt-6 gradient-cta border-0 text-foreground hover:opacity-90 rounded-full font-bold" asChild>
                <Link to="/login">START EARNING</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          No cap on referrals. Earn on every active subscription, every {isYearly ? "year" : "month"}, forever.
        </p>
      </div>
    </section>
  );
}
