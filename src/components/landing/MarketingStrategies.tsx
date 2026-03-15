import { motion } from "framer-motion";

const strategies = [
  { title: "CONTENT MARKETING", desc: "Create SEO-optimized blog posts, articles, and guides that rank on Google and drive organic referrals 24/7. We provide outlines, keywords, and templates." },
  { title: "VIDEO MARKETING", desc: "YouTube tutorials, TikTok shorts, and Instagram Reels. Video content converts 3x better than text. Use our scripts and storyboards." },
  { title: "EMAIL MARKETING", desc: "Build an email list and nurture leads with our proven email sequences. Welcome series, product updates, and re-engagement campaigns included." },
  { title: "SOCIAL MEDIA GROWTH", desc: "Grow your following while earning. Share AI-generated content, behind-the-scenes, and results to build authority and trust." },
  { title: "INFLUENCER PARTNERSHIPS", desc: "Collaborate with other creators. Cross-promote and tap into new audiences. We help you find the right partners." },
  { title: "COMMUNITY BUILDING", desc: "Build Discord servers, Facebook groups, or Telegram channels around AI creativity. Engaged communities convert at 5x the average rate." },
  { title: "PAID ADVERTISING", desc: "Run targeted ads on Facebook, Google, or Instagram. We provide ad copy, creatives, and audience targeting guides for maximum ROI." },
  { title: "SEO STRATEGY", desc: "Long-tail keyword targeting, comparison articles, and review posts. Organic traffic is free and compounds over time." },
  { title: "PODCAST & WEBINAR", desc: "Host or guest on podcasts about AI tools. Run webinars demonstrating Megsy AI. High-trust channels with premium conversion rates." },
  { title: "AFFILIATE NETWORKS", desc: "List your referral program on affiliate networks and marketplaces. Reach thousands of potential promoters instantly." },
  { title: "QR CODE SHARING", desc: "Generate QR codes for your referral link. Perfect for events, business cards, flyers, and physical marketing materials." },
  { title: "NEWSLETTER SPONSORSHIP", desc: "Sponsor or feature in other creators' newsletters. Reach engaged audiences who trust the recommendation." },
  { title: "COMPARISON CONTENT", desc: "Create detailed comparisons between Megsy AI and competitors. Honest comparisons build trust and convert researchers." },
  { title: "TUTORIAL CREATION", desc: "Step-by-step tutorials showing what Megsy AI can do. Educational content has the highest conversion rate of any content type." },
  { title: "CASE STUDY PUBLISHING", desc: "Document real results from using Megsy AI. Case studies provide social proof and demonstrate tangible value." },
  { title: "FORUM PARTICIPATION", desc: "Engage authentically on Reddit, Quora, and niche forums. Answer questions and recommend Megsy AI where relevant." },
  { title: "CROSS-PROMOTION", desc: "Partner with complementary tool creators. Bundle recommendations and share audiences for mutual growth." },
  { title: "RESOURCE CURATION", desc: "Create 'best AI tools' lists and resource guides. Include Megsy AI prominently with your referral link." },
  { title: "EVENT MARKETING", desc: "Attend or sponsor AI and tech events. Network in person and share your referral link with high-intent prospects." },
  { title: "MICRO-INFLUENCER OUTREACH", desc: "Connect with small but engaged creators. Micro-influencers often have higher trust and conversion rates than large accounts." },
];

export function MarketingStrategies() {
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
            20 PROVEN <span className="gradient-text">STRATEGIES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We don't just give you a link. We give you the complete playbook to succeed.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strategies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <span className="text-xs text-muted-foreground font-bold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-sm font-black text-foreground tracking-wider mt-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
