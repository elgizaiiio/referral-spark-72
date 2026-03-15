import { QrCode, Share2, BarChart3, Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { title: "QR Code Sharing", desc: "Generate QR codes for your referral link. Perfect for in-person sharing.", icon: QrCode },
  { title: "Social Media Sharing", desc: "One-click sharing to WhatsApp, Twitter, Telegram, and Facebook.", icon: Share2 },
  { title: "Real-time Tracking", desc: "Track clicks, signups, and earnings in real-time from your dashboard.", icon: BarChart3 },
  { title: "Instant Payouts", desc: "Request withdrawals anytime via PayPal, bank transfer, or crypto.", icon: Zap },
  { title: "Secure & Reliable", desc: "Your data and earnings are protected with enterprise-grade security.", icon: Shield },
  { title: "Global Reach", desc: "Refer anyone, anywhere in the world. No geographic restrictions.", icon: Globe },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FEATURES</p>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Everything You <span className="gradient-text">Need</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
