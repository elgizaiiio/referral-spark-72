import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How much can I earn?", a: "You earn 20% commission forever on every subscription made through your referral link. With plans ranging from $9 to $149/month, your potential is unlimited. There's no cap on earnings." },
  { q: "When do I get paid?", a: "You can request a withdrawal anytime. Most payouts are processed within 24-48 hours. There's no minimum withdrawal amount." },
  { q: "Do I need technical skills?", a: "Not at all. We provide marketing materials, social media templates, email copy, and more. Just share your link and earn." },
  { q: "Is there a minimum payout?", a: "No. You can withdraw any amount at any time." },
  { q: "How does tracking work?", a: "Your unique referral link tracks all clicks and signups automatically with a 90-day cookie window. Our real-time dashboard shows you every conversion as it happens." },
  { q: "Can I promote on any platform?", a: "Yes! Share on social media, blogs, YouTube, email newsletters, WhatsApp groups, Discord, Reddit, or anywhere you have an audience." },
  { q: "What is the commission rate?", a: "A flat 20% forever commission on all plans. As long as your referral stays subscribed, you keep earning every month — forever." },
  { q: "How do I get started?", a: "Sign up for free, grab your unique referral link from the dashboard, and start sharing. You can start earning within minutes." },
  { q: "What is Megsy AI?", a: "Megsy AI is an all-in-one AI creative platform for image generation, video creation, chat assistance, and content templates. Plans start at just $9/month." },
  { q: "Can I use paid ads?", a: "Yes, you can run paid ads on Facebook, Google, Instagram, and more. However, you may not bid on Megsy AI branded keywords." },
  { q: "What's the cookie duration?", a: "90 days. If someone clicks your link and signs up within 90 days, you get the commission." },
  { q: "What plans are available?", a: "Megsy AI offers 4 plans: Entry ($9/mo), Starter ($29/mo), Pro ($49/mo), and Elite ($149/mo). Annual plans are also available. You earn 20% on all plans." },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            FA<span className="gradient-text">QS</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-4 sm:px-6 bg-card">
              <AccordionTrigger className="text-left text-xs sm:text-base text-foreground font-bold hover:no-underline py-4 sm:py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-base text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
