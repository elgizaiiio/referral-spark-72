import { Share2, UserPlus, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Share Your Link",
    desc: "Get your unique referral link and share it with friends, followers, and communities.",
    icon: Share2,
    color: "from-primary to-primary-glow",
  },
  {
    num: "02",
    title: "Friends Sign Up",
    desc: "When someone signs up through your link, they're tracked as your referral automatically.",
    icon: UserPlus,
    color: "from-primary-glow to-chart-5",
  },
  {
    num: "03",
    title: "Earn Commission",
    desc: "Earn 20% of every subscription payment your referrals make. Withdraw anytime.",
    icon: DollarSign,
    color: "from-success to-chart-2",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">GET STARTED</p>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            How It <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:glow-primary"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color}`}>
                <step.icon className="h-6 w-6 text-foreground" />
              </div>
              <span className="absolute right-6 top-6 text-5xl font-black text-foreground/5">{step.num}</span>
              <h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
