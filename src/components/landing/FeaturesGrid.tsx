import { motion } from "framer-motion";

const features = [
  {
    title: "REAL-TIME TRACKING",
    description: "Watch your clicks, signups, and earnings update in real-time. Every conversion tracked instantly.",
  },
  {
    title: "INSTANT PAYOUTS",
    description: "Withdraw your earnings anytime via PayPal, bank transfer, or crypto. No delays, no minimums.",
  },
  {
    title: "MARKETING TOOLS",
    description: "Pre-built social media posts, email templates, and banner images to maximize your conversions.",
  },
  {
    title: "QR CODE SHARING",
    description: "Generate QR codes for your referral link. Perfect for events, business cards, and offline sharing.",
  },
  {
    title: "PERFORMANCE TIERS",
    description: "Unlock higher commission rates as you grow. Top partners earn up to 30% per referral.",
  },
  {
    title: "DEDICATED SUPPORT",
    description: "Get priority support from our partner success team. We help you maximize your earnings.",
  },
  {
    title: "SOCIAL SHARING",
    description: "One-click sharing to WhatsApp, Twitter, Telegram, Facebook, and more platforms.",
  },
  {
    title: "DETAILED ANALYTICS",
    description: "Deep insights into your referral performance. Know what works and optimize your strategy.",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            BUILT FOR{" "}
            <span className="gradient-text">EARNERS</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build a sustainable income
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{feature.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
