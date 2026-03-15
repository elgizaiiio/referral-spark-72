import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const helpTopics = [
  {
    category: "GETTING STARTED",
    questions: [
      { q: "How do I get my referral link?", a: "Go to the Overview page and you'll find your unique referral link at the top. You can copy it, generate a QR code, or share it directly to social media platforms." },
      { q: "How does the referral system work?", a: "When someone clicks your unique referral link and signs up for a paid Megsy AI plan, you earn 20% of their subscription as recurring commission — every month, for as long as they stay subscribed." },
      { q: "When do I start earning?", a: "You start earning immediately when your referral subscribes to any paid plan. Commissions appear in your dashboard in real-time." },
      { q: "What's the cookie duration?", a: "Our tracking cookie lasts 90 days. If someone clicks your link and signs up within 90 days, the referral is attributed to you." },
    ],
  },
  {
    category: "PAYMENTS & WITHDRAWALS",
    questions: [
      { q: "How do I withdraw my earnings?", a: "Go to the Payouts page, enter the amount you'd like to withdraw, choose your payment method (PayPal, Bank Transfer, Crypto, or Wise), and submit. Most withdrawals are processed within 24-48 hours." },
      { q: "Is there a minimum withdrawal amount?", a: "No! You can withdraw any amount at any time. We believe your earnings should be accessible whenever you need them." },
      { q: "What payment methods are supported?", a: "We support PayPal (1-2 hours), Bank Transfer (2-3 business days), Crypto USDT via TRC-20 or ERC-20 (instant), and Wise (1-2 business days)." },
      { q: "Why is my withdrawal still pending?", a: "Withdrawals are reviewed and processed within 24-48 hours. If it's been longer than 48 hours, please contact support via the form below." },
    ],
  },
  {
    category: "TRACKING & ANALYTICS",
    questions: [
      { q: "How do I track my referrals?", a: "Your dashboard shows real-time data including clicks, signups, conversions, and earnings. The Analytics page provides detailed breakdowns by country, traffic source, and time period." },
      { q: "Why aren't my clicks showing?", a: "Clicks are tracked via your unique referral link (megsyai.com?ref=YOURCODE). Make sure you're sharing the correct link. Ad blockers on the visitor's browser may occasionally interfere with tracking." },
      { q: "What does each referral status mean?", a: "Pending: User signed up but hasn't subscribed. Active: User has an active paid subscription. Converted: User upgraded to a higher plan." },
    ],
  },
  {
    category: "MARKETING & PROMOTION",
    questions: [
      { q: "Where can I promote my link?", a: "Anywhere! Social media (Instagram, Twitter, TikTok, LinkedIn), blogs, YouTube, email newsletters, WhatsApp groups, Discord servers, Reddit, and more. Check the Resources page for platform-specific templates." },
      { q: "Can I run paid ads?", a: "Yes, you can run paid ads on Facebook, Google, Instagram, TikTok, etc. However, you cannot bid on 'Megsy AI' branded keywords. We provide ad templates and targeting guides in the Resources section." },
      { q: "Do you provide marketing materials?", a: "Yes! The Resources page has copy-ready templates for social media posts, email campaigns, blog outlines, video scripts, and more. Just copy, customize with your link, and post." },
    ],
  },
];

const quickLinks = [
  { title: "Partner Documentation", desc: "Complete guide to the partner program", url: "#" },
  { title: "API Documentation", desc: "Integration docs for advanced partners", url: "#" },
  { title: "Community Forum", desc: "Connect with 500+ partners", url: "#" },
  { title: "Video Tutorials", desc: "Step-by-step video guides", url: "#" },
];

export default function Support() {
  const { user } = useAuth();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: user?.email ?? "Partner",
      email: user?.email ?? "",
      subject,
      message,
      form_type: "partner_support",
    });
    if (error) {
      toast.error("Failed to submit. Please try again.");
    } else {
      toast.success("Support request submitted! We'll respond within 24 hours.");
      setSubject("");
      setMessage("");
    }
    setSubmitting(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">SUPPORT</h1>
        <p className="text-sm text-muted-foreground mt-1">Find answers or contact our partner support team</p>
      </div>

      {/* Quick Links */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link, i) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="hover:border-primary/30 transition-colors cursor-pointer h-full">
              <CardContent className="p-5">
                <p className="text-sm font-bold text-foreground">{link.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{link.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Help Topics */}
      {helpTopics.map((topic, ti) => (
        <motion.div
          key={topic.category}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ti * 0.1 }}
        >
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">{topic.category}</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {topic.questions.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`${topic.category}-${i}`}
                className="border border-border rounded-xl px-5 bg-card"
              >
                <AccordionTrigger className="text-left text-sm text-foreground font-bold hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      ))}

      {/* Contact Form */}
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">CONTACT PARTNER SUPPORT</h3>
          <p className="text-xs text-muted-foreground mb-4">Can't find your answer above? Send us a message and we'll respond within 24 hours.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Subject</label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What do you need help with?"
                className="bg-background border-border"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Message</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue or question in detail..."
                className="bg-background border-border min-h-[120px]"
                required
              />
            </div>
            <Button
              type="submit"
              className="gradient-cta border-0 text-foreground hover:opacity-90 font-bold rounded-full px-8"
              disabled={submitting}
            >
              {submitting ? "SENDING..." : "SEND MESSAGE"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">EMAIL SUPPORT</p>
            <p className="text-sm font-bold text-foreground mt-2">partners@megsyai.com</p>
            <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">PARTNER COMMUNITY</p>
            <p className="text-sm font-bold text-foreground mt-2">Discord Server</p>
            <p className="text-xs text-muted-foreground mt-1">500+ active partners</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">BUSINESS HOURS</p>
            <p className="text-sm font-bold text-foreground mt-2">24/7 Support</p>
            <p className="text-xs text-muted-foreground mt-1">We're always here to help</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
