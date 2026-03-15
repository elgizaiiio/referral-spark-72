import { motion } from "framer-motion";

const tools = [
  { title: "REFERRAL LINK GENERATOR", desc: "Generate unique, trackable referral links for any campaign. UTM parameters, short URLs, and QR codes included." },
  { title: "MARKETING ASSET LIBRARY", desc: "Access 100+ ready-made banners, social media posts, email templates, and video scripts." },
  { title: "ANALYTICS DASHBOARD", desc: "Real-time tracking of clicks, conversions, and earnings. Filter by date, platform, and campaign." },
  { title: "A/B TESTING TOOLS", desc: "Test different landing pages and messaging to optimize your conversion rate." },
  { title: "AUTOMATED REPORTS", desc: "Weekly and monthly performance reports sent straight to your inbox." },
  { title: "API ACCESS", desc: "Advanced partners can integrate our tracking into their own tools and workflows." },
  { title: "LEADERBOARD", desc: "See where you rank among all partners. Top performers get bonuses and exclusive perks." },
  { title: "PAYOUT TRACKER", desc: "Full history of all your payouts, pending commissions, and upcoming payments." },
];

export function ToolsPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            POWERFUL <span className="gradient-text">TOOLS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Everything you need to promote, track, and optimize your referral campaigns.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-black text-foreground tracking-wider">{tool.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
