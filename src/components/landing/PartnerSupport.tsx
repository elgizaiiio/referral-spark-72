import { motion } from "framer-motion";

const features = [
  { title: "DEDICATED PARTNER MANAGER", desc: "Get a personal point of contact for strategy calls, custom campaigns, and priority support." },
  { title: "24/7 LIVE CHAT", desc: "Our support team is always available to help with technical issues, tracking questions, or strategy advice." },
  { title: "WEEKLY STRATEGY CALLS", desc: "Join our weekly calls with top-performing partners. Share tactics, learn what's working, and get inspired." },
  { title: "PRIVATE PARTNER COMMUNITY", desc: "Access our exclusive community of 500+ partners. Network, collaborate, and grow together." },
  { title: "CUSTOM LANDING PAGES", desc: "Top partners get custom co-branded landing pages optimized for their specific audience and niche." },
  { title: "PRIORITY PAYOUTS", desc: "Elite partners get same-day payouts and priority processing for all withdrawal requests." },
];

export function PartnerSupport() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            PARTNER <span className="gradient-text">SUPPORT</span>
          </h2>
          <p className="text-muted-foreground mt-4">We invest in your success. Here's how we support you.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-black text-foreground tracking-wider">{f.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
