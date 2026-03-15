import { motion } from "framer-motion";

export function LegalSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            PROGRAM <span className="gradient-text">TERMS</span>
          </h2>
        </motion.div>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-black text-foreground tracking-wider mb-2">COMMISSION STRUCTURE</h3>
            <p>Partners earn 20% recurring commission on all subscription payments made by their referrals. Commission rates can increase to 22%, 25%, or 30% based on performance tiers. Commissions are calculated on the net subscription amount after any applicable discounts or refunds.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-black text-foreground tracking-wider mb-2">COOKIE DURATION</h3>
            <p>Referral tracking cookies last for 90 days from the initial click. If a user signs up within this window, the referral is attributed to your account. Multiple clicks from the same user reset the cookie timer.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-black text-foreground tracking-wider mb-2">PAYMENT TERMS</h3>
            <p>Commissions are available for withdrawal immediately after being earned. There is no minimum withdrawal amount. Payouts are processed within 24-48 hours for PayPal and crypto, and 2-5 business days for bank transfers.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-black text-foreground tracking-wider mb-2">PROHIBITED ACTIVITIES</h3>
            <p>Partners may not use spam, misleading advertising, trademark bidding on search engines, or any deceptive practices to generate referrals. Violation of these terms may result in account termination and forfeiture of unpaid commissions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
