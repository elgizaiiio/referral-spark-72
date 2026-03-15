import { motion } from "framer-motion";

export function DashboardPreview() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            REAL-TIME <span className="gradient-text">DASHBOARD</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Track every click, signup, and commission in real-time. Full transparency, zero guesswork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 glow-primary"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              { label: "TOTAL CLICKS", value: "12,847" },
              { label: "SIGNUPS", value: "1,243" },
              { label: "ACTIVE SUBS", value: "892" },
              { label: "EARNINGS", value: "$4,280" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-background rounded-xl border border-border">
                <p className="text-xs text-muted-foreground font-bold tracking-wider">{stat.label}</p>
                <p className="heading-massive text-2xl gradient-text mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-background rounded-xl border border-border p-6">
              <p className="text-xs text-muted-foreground font-bold tracking-wider mb-4">EARNINGS TREND</p>
              <div className="flex items-end gap-2 h-32">
                {[30, 45, 55, 40, 65, 80, 70, 90, 85, 95, 88, 100].map((h, i) => (
                  <div key={i} className="flex-1 gradient-cta rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <p className="text-xs text-muted-foreground font-bold tracking-wider mb-4">RECENT ACTIVITY</p>
              <div className="space-y-3">
                {[
                  { action: "New signup via Instagram", time: "2 min ago" },
                  { action: "Commission earned — $5.80", time: "15 min ago" },
                  { action: "New signup via YouTube", time: "1 hour ago" },
                  { action: "Payout processed — $120", time: "3 hours ago" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span className="text-foreground">{item.action}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
