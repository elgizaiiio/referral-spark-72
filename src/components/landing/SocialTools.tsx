import { motion } from "framer-motion";

const platforms = [
  { name: "INSTAGRAM", desc: "Share Stories, Reels, and posts with your unique link." },
  { name: "YOUTUBE", desc: "Create review videos and tutorials. Pin your referral link." },
  { name: "TIKTOK", desc: "Short-form content converts fast. Use proven scripts." },
  { name: "TWITTER / X", desc: "Threads, tweets, and spaces to build trust." },
  { name: "LINKEDIN", desc: "Professional audience with high conversion rates." },
  { name: "WHATSAPP", desc: "Direct messaging and group sharing." },
  { name: "TELEGRAM", desc: "Build channels and groups around AI tools." },
  { name: "FACEBOOK", desc: "Groups, pages, and targeted content." },
  { name: "REDDIT", desc: "Authentic recommendations in relevant communities." },
  { name: "DISCORD", desc: "Build a community around AI creativity." },
  { name: "EMAIL", desc: "Newsletter integrations and outreach templates." },
  { name: "BLOG / SEO", desc: "Evergreen content that generates referrals 24/7." },
];

export function SocialTools() {
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
            SHARE <span className="gradient-text">EVERYWHERE</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Your referral link works on every platform
          </p>
        </motion.div>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-[10px] sm:text-sm font-black text-foreground tracking-wider">{p.name}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
