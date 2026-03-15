import { motion } from "framer-motion";

export function DashboardPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            REAL-TIME <span className="gradient-text">DASHBOARD</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Track every click, signup, and commission in real-time. Full transparency, zero guesswork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-4 sm:p-8 glow-primary"
        >
          <div className="grid gap-3 sm:gap-6 grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8">
            {[
              { label: "TOTAL CLICKS", value: "—" },
              { label: "SIGNUPS", value: "—" },
              { label: "ACTIVE SUBS", value: "—" },
              { label: "EARNINGS", value: "—" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 sm:p-4 bg-background rounded-xl border border-border">
                <p className="text-[10px] sm:text-xs text-muted-foreground font-bold tracking-wider">{stat.label}</p>
                <p className="heading-massive text-lg sm:text-2xl gradient-text mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div className="bg-background rounded-xl border border-border p-4 sm:p-6">
              <p className="text-[10px] sm:text-xs text-muted-foreground font-bold tracking-wider mb-4">EARNINGS TREND</p>
              <div className="flex items-end gap-1 sm:gap-2 h-24 sm:h-32">
                {[30, 45, 55, 40, 65, 80, 70, 90, 85, 95, 88, 100].map((h, i) => (
                  <div key={i} className="flex-1 gradient-cta rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl border border-border p-4 sm:p-6">
              <p className="text-[10px] sm:text-xs text-muted-foreground font-bold tracking-wider mb-4">FEATURES</p>
              <div className="space-y-3">
                {[
                  "Real-time click tracking",
                  "Conversion analytics",
                  "Earnings breakdown",
                  "Payout history",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
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
