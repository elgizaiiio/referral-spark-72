import { motion } from "framer-motion";

const tools = [
  { title: "REFERRAL LINK GENERATOR", desc: "Generate unique, trackable referral links. QR codes included." },
  { title: "ANALYTICS DASHBOARD", desc: "Real-time tracking of clicks, conversions, and earnings." },
  { title: "SOCIAL SHARING", desc: "One-click sharing to all major social media platforms." },
  { title: "QR CODE GENERATOR", desc: "Create QR codes for your referral link for offline use." },
  { title: "LEADERBOARD", desc: "See your progress and unlock achievements as you grow." },
  { title: "PAYOUT TRACKER", desc: "Full history of all your payouts and pending commissions." },
];

export function ToolsPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            POWERFUL <span className="gradient-text">TOOLS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to promote, track, and optimize your referrals
          </p>
        </motion.div>

        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-[10px] sm:text-sm font-black text-foreground tracking-wider">{tool.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
