import { motion } from "framer-motion";

const features = [
  { title: "AI IMAGE GENERATION", desc: "Create stunning, photorealistic images from text prompts. Multiple styles and resolutions." },
  { title: "AI VIDEO CREATION", desc: "Generate short-form videos, animations, and visual stories for social media." },
  { title: "AI CHAT ASSISTANT", desc: "Intelligent conversational AI for brainstorming, writing, coding, and creative tasks." },
  { title: "TEMPLATE LIBRARY", desc: "Pre-built templates for social media, presentations, marketing, and more." },
  { title: "BRAND KIT", desc: "Custom brand colors, fonts, and logos applied automatically to all content." },
  { title: "TEAM COLLABORATION", desc: "Share projects and collaborate in real-time as a team." },
];

export function ProductShowcase() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            WHAT IS <span className="gradient-text">MEGSY AI</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            The all-in-one AI creative platform that your referrals will love.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-4 sm:p-8 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-[10px] sm:text-sm font-black text-foreground tracking-wider">{f.title}</h3>
              <p className="text-[10px] sm:text-sm text-muted-foreground mt-2 sm:mt-3 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
