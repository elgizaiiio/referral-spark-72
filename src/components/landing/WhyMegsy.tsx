import { motion } from "framer-motion";

const reasons = [
  { title: "AI-POWERED CONTENT CREATION", desc: "Megsy AI generates stunning images, videos, and content in seconds. Your referrals will love the product — and stay subscribed." },
  { title: "COMPETITIVE PRICING", desc: "Starting at just $9/month, Megsy AI is accessible to everyone. Lower price = easier to convert = more commissions." },
  { title: "PRODUCT SELLS ITSELF", desc: "Once people try Megsy AI, they're hooked. The product quality speaks for itself, making your job easier." },
  { title: "TRANSPARENT TRACKING", desc: "Real-time dashboard with click tracking, conversion analytics, and earnings reports. You always know exactly where you stand." },
  { title: "RECURRING REVENUE", desc: "Every referral earns you 20% every month they stay subscribed. Build a growing passive income stream." },
  { title: "FAST PAYOUTS", desc: "Request withdrawals anytime. No minimum threshold. Most payouts processed within 24-48 hours." },
];

export function WhyMegsy() {
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
            WHY <span className="gradient-text">MEGSY</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">Why partners choose Megsy AI</p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 sm:p-8 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xs sm:text-sm font-black text-foreground tracking-wider">{r.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
