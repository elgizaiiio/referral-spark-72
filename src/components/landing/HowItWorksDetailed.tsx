import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "SIGN UP FREE", desc: "Create your free partner account in 30 seconds. No fees, no commitments, no credit card required.", color: "hsl(var(--step-teal))" },
  { num: "02", title: "GET YOUR LINK", desc: "Receive your unique referral link instantly. Every click, every signup, every dollar tracked automatically.", color: "hsl(var(--step-red))" },
  { num: "03", title: "SHARE WITH YOUR AUDIENCE", desc: "Share on social media, blogs, emails, YouTube, or anywhere you have an audience.", color: "hsl(var(--step-purple))" },
  { num: "04", title: "WATCH SIGNUPS COME IN", desc: "Track every conversion in real-time on your dashboard. See who signed up, which plan they chose, and your commission.", color: "hsl(var(--step-green))" },
  { num: "05", title: "GET PAID EVERY MONTH", desc: "Earn 20% recurring commission. Withdraw anytime. No minimum.", color: "hsl(var(--step-amber))" },
];

export function HowItWorksDetailed() {
  return (
    <section id="how-it-works-detailed" className="py-16 sm:py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            THE <span className="gradient-text">PROCESS</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">From zero to earning in under 5 minutes</p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
              style={{ borderTopColor: step.color, borderTopWidth: 3 }}
            >
              <span className="heading-massive text-3xl sm:text-5xl" style={{ color: step.color }}>{step.num}</span>
              <div>
                <h3 className="text-sm sm:text-lg font-black text-foreground tracking-wider">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
