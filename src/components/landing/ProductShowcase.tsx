import { motion } from "framer-motion";

const features = [
  { title: "AI IMAGE GENERATION", desc: "Create stunning, photorealistic images from text prompts. Multiple styles, resolutions, and aspect ratios." },
  { title: "AI VIDEO CREATION", desc: "Generate short-form videos, animations, and visual stories. Perfect for social media content." },
  { title: "AI CHAT ASSISTANT", desc: "Intelligent conversational AI for brainstorming, writing, coding, and creative tasks." },
  { title: "TEMPLATE LIBRARY", desc: "Thousands of pre-built templates for social media, presentations, marketing, and more." },
  { title: "BRAND KIT", desc: "Custom brand colors, fonts, and logos applied automatically to all generated content." },
  { title: "TEAM COLLABORATION", desc: "Share projects, collaborate in real-time, and manage creative workflows as a team." },
];

export function ProductShowcase() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            WHAT IS <span className="gradient-text">MEGSY AI</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The all-in-one AI creative platform that your referrals will love. High retention = steady commissions.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-black text-foreground tracking-wider">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
