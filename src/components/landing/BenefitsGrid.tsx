import { motion } from "framer-motion";

const benefits = [
  { title: "ZERO COST TO JOIN", desc: "100% free to become a partner. No signup fees, no monthly charges, no hidden costs." },
  { title: "NO EXPERIENCE NEEDED", desc: "We provide all the tools and templates. Start earning even if you've never done affiliate marketing." },
  { title: "90-DAY COOKIE", desc: "If someone clicks your link and signs up within 90 days, you get the credit." },
  { title: "RECURRING REVENUE", desc: "Earn commission every month for the lifetime of each referral's subscription." },
  { title: "INSTANT TRACKING", desc: "See clicks, signups, and earnings in real-time. No waiting for reports." },
  { title: "NO EARNINGS CAP", desc: "There's no limit on how much you can earn. Unlimited potential." },
];

export function BenefitsGrid() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            PARTNER <span className="gradient-text">BENEFITS</span>
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-[10px] sm:text-sm font-black text-foreground tracking-wider">{b.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
