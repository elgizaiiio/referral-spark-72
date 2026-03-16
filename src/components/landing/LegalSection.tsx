import { motion } from "framer-motion";

export function LegalSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            PROGRAM <span className="gradient-text">TERMS</span>
          </h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-black text-foreground tracking-wider mb-2">COMMISSION STRUCTURE</h3>
            <p className="text-xs sm:text-sm">Partners earn a flat 20% forever commission on all subscription payments made by their referrals. Commissions are calculated on the net subscription amount after any applicable discounts or refunds.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-black text-foreground tracking-wider mb-2">COOKIE DURATION</h3>
            <p className="text-xs sm:text-sm">Referral tracking cookies last for 90 days from the initial click. If a user signs up within this window, the referral is attributed to your account.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-black text-foreground tracking-wider mb-2">PAYMENT TERMS</h3>
            <p className="text-xs sm:text-sm">Commissions are available for withdrawal immediately after being earned. There is no minimum withdrawal amount. Payouts are processed within 24-48 hours.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-black text-foreground tracking-wider mb-2">PROHIBITED ACTIVITIES</h3>
            <p className="text-xs sm:text-sm">Partners may not use spam, misleading advertising, trademark bidding on search engines, or any deceptive practices to generate referrals. Violation may result in account termination.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
