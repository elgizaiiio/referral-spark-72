import { motion } from "framer-motion";

const platforms = [
  { name: "INSTAGRAM", desc: "Share Stories, Reels, and posts with your unique link. Our templates are optimized for maximum engagement." },
  { name: "YOUTUBE", desc: "Create review videos, tutorials, and comparisons. Pin your referral link in comments and descriptions." },
  { name: "TIKTOK", desc: "Short-form content converts fast. Use our proven scripts to create viral referral content." },
  { name: "TWITTER / X", desc: "Threads, tweets, and spaces. Share your affiliate journey and results to build trust." },
  { name: "LINKEDIN", desc: "Professional audience with high conversion rates. Share case studies and productivity tips." },
  { name: "WHATSAPP", desc: "Direct messaging and group sharing. Personal recommendations convert at 3x the average rate." },
  { name: "TELEGRAM", desc: "Build channels and groups around AI tools. Automated sharing with our bot integration." },
  { name: "FACEBOOK", desc: "Groups, pages, and ads. Tap into the largest social network with targeted content." },
  { name: "REDDIT", desc: "Authentic recommendations in relevant subreddits. Community-driven referrals that last." },
  { name: "DISCORD", desc: "Build a community around AI creativity. Engage users directly and share your link." },
  { name: "EMAIL", desc: "Newsletter integrations and cold outreach templates. Highest ROI channel for many partners." },
  { name: "BLOG / SEO", desc: "Write comparison articles and reviews. Evergreen content that generates referrals 24/7." },
];

export function SocialTools() {
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
            SHARE <span className="gradient-text">EVERYWHERE</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Your referral link works on every platform. We provide templates and strategies for each one.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-black text-foreground tracking-wider">{p.name}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
