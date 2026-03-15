import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How much can I earn?", a: "You earn 20% recurring commission on every subscription made through your referral link. Top partners earn over $7,000/month. As you grow, your rate increases to 22%, 25%, and up to 30%. There's no cap on your earnings." },
  { q: "When do I get paid?", a: "You can request a withdrawal anytime. We support PayPal, bank transfer, crypto (USDT), and Wise. Most payouts are processed within 24-48 hours. There's no minimum withdrawal amount." },
  { q: "Do I need technical skills?", a: "Not at all. We provide ready-made marketing materials, social media templates, email copy, video scripts, and more. Just share your link and earn." },
  { q: "Is there a minimum payout?", a: "No. You can withdraw any amount at any time. We believe in making your earnings accessible immediately." },
  { q: "How does tracking work?", a: "Your unique referral link tracks all clicks and signups automatically with a 90-day cookie window. Our real-time dashboard shows you every conversion as it happens." },
  { q: "Can I promote on any platform?", a: "Yes! Share on social media, blogs, YouTube, email newsletters, WhatsApp groups, Discord, Reddit, or anywhere you have an audience. We provide templates for each platform." },
  { q: "What is the commission structure?", a: "You start at 20% and can unlock higher tiers: 22% at 11+ referrals, 25% at 51+ referrals, and 30% at 100+ referrals. This is recurring — as long as your referral stays subscribed, you keep earning." },
  { q: "How do I get started?", a: "Sign up for free, grab your unique referral link from the dashboard, and start sharing. You can start earning within minutes." },
  { q: "What payment methods do you support?", a: "We support PayPal (1-2 hours), bank transfer (2-3 days), crypto USDT via TRC-20/ERC-20 (instant), and Wise (1-2 days)." },
  { q: "What is Megsy AI?", a: "Megsy AI is an all-in-one AI creative platform for image generation, video creation, chat assistance, and content templates. It starts at just $9/month making it easy to convert referrals." },
  { q: "Do you offer milestone bonuses?", a: "Yes! You earn bonuses at key milestones: $25 for your first referral, $100 at 10 referrals, $300 at 25, $750 at 50, $2,000 at 100, and $5,000 at 250 referrals." },
  { q: "Can I use paid ads?", a: "Yes, you can run paid ads on Facebook, Google, Instagram, and more. However, you may not bid on Megsy AI branded keywords. We provide ad templates and targeting guides." },
  { q: "Is there a partner community?", a: "Yes! Join our exclusive community of 500+ partners. Share strategies, learn from top earners, and get support from the team." },
  { q: "What's the cookie duration?", a: "90 days. If someone clicks your link and signs up within 90 days, you get the commission. Multiple clicks reset the timer." },
  { q: "Can I refer businesses and teams?", a: "Absolutely! Business and team subscriptions often mean higher plan values, which means larger commissions for you." },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-massive text-4xl sm:text-5xl lg:text-7xl text-foreground">
            FA<span className="gradient-text">QS</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left text-foreground font-bold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
