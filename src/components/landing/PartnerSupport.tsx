import { motion } from "framer-motion";

const features = [
  { title: "PARTNER SUPPORT", desc: "Get help with strategy, tracking questions, or technical issues from our dedicated team." },
  { title: "MARKETING TEMPLATES", desc: "Access ready-made social media posts, email templates, and content ideas to promote effectively." },
  { title: "PERFORMANCE DASHBOARD", desc: "Full analytics dashboard with real-time tracking of clicks, conversions, and earnings." },
  { title: "KNOWLEDGE BASE", desc: "Comprehensive guides and tutorials to help you maximize your referral earnings." },
];

export function PartnerSupport() {
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
            WE SUPPORT <span className="gradient-text">YOU</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">Tools and resources to help you succeed</p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xs sm:text-sm font-black text-foreground tracking-wider">{f.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
