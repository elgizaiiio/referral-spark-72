import { motion } from "framer-motion";

const strategies = [
  { title: "CONTENT MARKETING", desc: "Create SEO-optimized blog posts and guides that drive organic referrals." },
  { title: "VIDEO MARKETING", desc: "YouTube tutorials, TikTok shorts, and Instagram Reels for higher conversions." },
  { title: "EMAIL MARKETING", desc: "Build an email list and nurture leads with proven sequences." },
  { title: "SOCIAL MEDIA GROWTH", desc: "Grow your following while earning through authentic recommendations." },
  { title: "COMMUNITY BUILDING", desc: "Build communities around AI creativity on Discord, Telegram, or Facebook." },
  { title: "PAID ADVERTISING", desc: "Run targeted ads with provided copy and targeting guides." },
  { title: "SEO STRATEGY", desc: "Long-tail keyword targeting and comparison articles for organic traffic." },
  { title: "TUTORIAL CREATION", desc: "Step-by-step tutorials that educate and convert at high rates." },
  { title: "COMPARISON CONTENT", desc: "Honest side-by-side comparisons that build trust with researchers." },
  { title: "CROSS-PROMOTION", desc: "Partner with complementary tool creators for mutual growth." },
];

export function MarketingStrategies() {
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
            PROVEN <span className="gradient-text">STRATEGIES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            The complete playbook to succeed as a partner
          </p>
        </motion.div>

        <div className="grid gap-3 grid-cols-2 lg:grid-cols-5">
          {strategies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-colors"
            >
              <span className="text-[10px] sm:text-xs text-muted-foreground font-bold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[10px] sm:text-sm font-black text-foreground tracking-wider mt-1 sm:mt-2">{s.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
