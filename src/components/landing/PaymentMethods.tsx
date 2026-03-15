import { motion } from "framer-motion";

const methods = [
  { name: "PAYPAL", desc: "Instant transfers to your PayPal account. Available worldwide. No minimum withdrawal amount.", speed: "1-2 HOURS" },
  { name: "BANK TRANSFER", desc: "Direct deposit to your bank account. Supports 50+ countries and all major currencies.", speed: "2-3 DAYS" },
  { name: "CRYPTO (USDT)", desc: "Receive payments in USDT via TRC-20 or ERC-20. Fast, borderless, and fee-efficient.", speed: "INSTANT" },
  { name: "WISE", desc: "Low-fee international transfers. Perfect for partners outside the US. Competitive exchange rates.", speed: "1-2 DAYS" },
];

export function PaymentMethods() {
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
            GET <span className="gradient-text">PAID</span>
          </h2>
          <p className="text-muted-foreground mt-4">Multiple payment methods. No minimum withdrawal. Fast processing.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method, i) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-black text-foreground tracking-wider">{method.name}</h3>
              <p className="heading-massive text-lg gradient-text mt-3">{method.speed}</p>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
