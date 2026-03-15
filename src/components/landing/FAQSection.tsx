import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much can I earn?",
    a: "You earn 20% recurring commission on every subscription made through your referral link. Top partners earn over $5,000/month. There's no cap on your earnings.",
  },
  {
    q: "When do I get paid?",
    a: "You can request a withdrawal anytime. We support PayPal, bank transfer, and crypto payments. Most payouts are processed within 24-48 hours.",
  },
  {
    q: "Do I need technical skills?",
    a: "Not at all. We provide you with ready-made marketing materials, social media templates, and email copy. Just share your link and earn.",
  },
  {
    q: "Is there a minimum payout?",
    a: "No. You can withdraw any amount at any time. We believe in making your earnings accessible immediately.",
  },
  {
    q: "How does tracking work?",
    a: "Your unique referral link tracks all clicks and signups automatically. Our real-time dashboard shows you every conversion as it happens.",
  },
  {
    q: "Can I promote on any platform?",
    a: "Yes! Share on social media, blogs, YouTube, email newsletters, WhatsApp groups, or anywhere you have an audience. We provide templates for each platform.",
  },
  {
    q: "What is the commission structure?",
    a: "You earn 20% of every subscription payment. This is recurring — as long as your referral stays subscribed, you keep earning. Top performers can unlock up to 30%.",
  },
  {
    q: "How do I get started?",
    a: "Sign up for free, grab your unique referral link from the dashboard, and start sharing. You can start earning within minutes.",
  },
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
