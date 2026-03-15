import { motion } from "framer-motion";

const stories = [
  { name: "SARAH M.", role: "Content Creator", earning: "$3,200/mo", quote: "I started sharing Megsy AI on my Instagram and within 3 months I was earning more from referrals than my day job. The dashboard makes it so easy to track everything." },
  { name: "ALEX K.", role: "YouTuber", earning: "$5,800/mo", quote: "My tutorial videos about Megsy AI consistently bring in new signups. The recurring commission means my income grows every single month without extra work." },
  { name: "MARIA L.", role: "Newsletter Writer", earning: "$2,100/mo", quote: "I just mention Megsy AI in my weekly newsletter. That's it. The conversion rate is incredible because my audience trusts my recommendations." },
  { name: "JAMES T.", role: "Tech Blogger", earning: "$4,500/mo", quote: "SEO + Megsy AI referrals = passive income. My comparison articles rank on Google and bring in referrals 24/7 while I sleep." },
  { name: "PRIYA S.", role: "Social Media Manager", earning: "$1,900/mo", quote: "I manage social media for clients and recommend Megsy AI to all of them. Each one that subscribes adds to my monthly commission." },
  { name: "DAVID R.", role: "Discord Community", earning: "$7,200/mo", quote: "Built a 10K member Discord around AI tools. Megsy AI is our top recommendation. The community loves it and I love the commissions." },
];

export function SuccessStories() {
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
            SUCCESS <span className="gradient-text">STORIES</span>
          </h2>
          <p className="text-muted-foreground mt-4">Real partners, real earnings, real results</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <p className="heading-massive text-2xl gradient-text">{story.earning}</p>
              <p className="text-xs text-muted-foreground mt-1">{story.name} — {story.role}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed italic">"{story.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
