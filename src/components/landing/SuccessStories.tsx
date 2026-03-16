import { motion } from "framer-motion";

const stories = [
  { quote: "I started sharing Megsy AI on my social media and within a few months, the forever commissions became a meaningful income stream.", role: "Content Creator" },
  { quote: "My tutorial videos about Megsy AI consistently bring in new signups. The forever commission means my income grows every month.", role: "YouTuber" },
  { quote: "I mention Megsy AI in my weekly newsletter. The conversion rate is great because my audience trusts my recommendations.", role: "Newsletter Writer" },
];

export function SuccessStories() {
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
            PARTNER <span className="gradient-text">STORIES</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">Hear from real partners in the program</p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors"
            >
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">"{story.quote}"</p>
              <p className="text-xs text-muted-foreground mt-4 font-bold uppercase">— {story.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
