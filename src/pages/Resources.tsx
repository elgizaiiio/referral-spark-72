import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";

const resources = [
  {
    category: "SOCIAL MEDIA TEMPLATES",
    items: [
      {
        title: "Instagram Story Template",
        desc: "Eye-catching story promoting Megsy AI with your referral link",
        copyText: "🎨 I just discovered Megsy AI — the ultimate AI creative platform! Generate images, videos, and content in seconds. Plans start at just $9/mo. Try it with my link: [YOUR LINK] #MegsyAI #AICreative",
      },
      {
        title: "Twitter/X Thread Template",
        desc: "Ready-to-post thread explaining why Megsy AI is the best AI creative tool",
        copyText: "🧵 Thread: Why I switched to Megsy AI for all my creative work\n\n1/ I used to spend hours on design. Now Megsy AI does it in seconds.\n\n2/ Image generation, video creation, AI chat — all in one platform.\n\n3/ Plans start at $9/mo. Seriously.\n\n4/ Try it yourself: [YOUR LINK]",
      },
      {
        title: "LinkedIn Post Template",
        desc: "Professional post for your LinkedIn audience about AI content creation",
        copyText: "I've been exploring AI creative tools and Megsy AI stands out. Here's why:\n\n✅ All-in-one platform (images, videos, chat)\n✅ Plans from $9/mo — accessible for everyone\n✅ Saves hours of creative work daily\n\nIf you're looking to boost your content game, check it out: [YOUR LINK]",
      },
      {
        title: "TikTok Script Template",
        desc: "Short-form video script showcasing Megsy AI features",
        copyText: "[HOOK] POV: You found an AI tool that does EVERYTHING\n\n[SHOW SCREEN] Watch me generate an image in 3 seconds...\n\n[RESULT] This is Megsy AI. Images, videos, chat — starting at $9/month.\n\n[CTA] Link in bio!",
      },
    ],
  },
  {
    category: "EMAIL TEMPLATES",
    items: [
      {
        title: "Newsletter Feature Email",
        desc: "Drop this into your newsletter to promote Megsy AI to your subscribers",
        copyText: "Subject: The AI creative tool I can't stop using\n\nHey [NAME],\n\nI wanted to share something I've been loving lately — Megsy AI.\n\nIt's an all-in-one AI creative platform where you can generate images, create videos, and get AI assistance for just $9/month.\n\nI've been using it for [YOUR USE CASE] and it's saved me hours every week.\n\nCheck it out here: [YOUR LINK]\n\nBest,\n[YOUR NAME]",
      },
      {
        title: "Cold Outreach Email",
        desc: "Professional email to introduce Megsy AI to potential users",
        copyText: "Subject: Quick question about your creative workflow\n\nHi [NAME],\n\nI noticed you create [TYPE OF CONTENT]. Have you tried using AI tools to speed things up?\n\nMegsy AI is an all-in-one platform for image generation, video creation, and AI chat. Plans start at $9/mo.\n\nHappy to share more details: [YOUR LINK]\n\nBest,\n[YOUR NAME]",
      },
      {
        title: "Follow-up Email",
        desc: "Re-engage leads who clicked but didn't sign up",
        copyText: "Subject: Did you get a chance to try Megsy AI?\n\nHey [NAME],\n\nI noticed you checked out Megsy AI recently. Did you have any questions?\n\nHere's what makes it special:\n- Generate stunning images with AI\n- Create videos in minutes\n- AI chat assistant for any task\n- All starting at just $9/month\n\nHere's the link again: [YOUR LINK]\n\nLet me know if you need help!",
      },
    ],
  },
  {
    category: "CONTENT IDEAS",
    items: [
      {
        title: "Blog Post Outline",
        desc: "SEO-optimized blog post comparing AI creative tools (featuring Megsy)",
        copyText: "Title: Best AI Creative Tools in 2025: A Complete Comparison\n\nH2: What Are AI Creative Tools?\nH2: Top 5 AI Creative Platforms Compared\n  - Megsy AI (Highlight: all-in-one, $9/mo starting)\n  - [Competitor 2]\n  - [Competitor 3]\nH2: Why Megsy AI Stands Out\n  - Price comparison table\n  - Feature comparison\nH2: Getting Started with Megsy AI\n  - Step-by-step guide\n  - Link: [YOUR LINK]\nH2: Conclusion",
      },
      {
        title: "YouTube Video Script",
        desc: "Tutorial-style video showing how to use Megsy AI for content creation",
        copyText: "[INTRO - 0:00] Hey everyone! Today I'm showing you my favorite AI creative tool — Megsy AI.\n\n[DEMO - 0:30] Let me show you how to generate an image...\n\n[FEATURES - 2:00] What I love about Megsy AI:\n- Image generation\n- Video creation\n- AI chat\n- Plans from $9/mo\n\n[CTA - 4:00] Link in the description to try it yourself! [YOUR LINK]",
      },
      {
        title: "Comparison Article Template",
        desc: "Side-by-side comparison template: Megsy AI vs competitors",
        copyText: "| Feature | Megsy AI | Competitor A | Competitor B |\n|---------|----------|-------------|-------------|\n| Image Gen | ✅ | ✅ | ❌ |\n| Video Gen | ✅ | ❌ | ✅ |\n| AI Chat | ✅ | ✅ | ✅ |\n| Starting Price | $9/mo | $20/mo | $15/mo |\n| All-in-one | ✅ | ❌ | ❌ |\n\nVerdict: Megsy AI offers the most value. Try it: [YOUR LINK]",
      },
    ],
  },
  {
    category: "GROWTH STRATEGIES",
    items: [
      {
        title: "Beginner's Earning Guide",
        desc: "Step-by-step guide to making your first $100 with referrals",
        copyText: "Step 1: Sign up and grab your referral link\nStep 2: Share on 3 social media platforms\nStep 3: Write one blog post or review\nStep 4: Send to your email list\nStep 5: Engage with replies and questions\n\nWith just 12 referrals on the Entry plan ($9/mo), you'll earn $21.60/month recurring. That's $259/year from minimal effort!",
      },
      {
        title: "Advanced Growth Playbook",
        desc: "Scaling strategies used by our top-earning partners",
        copyText: "Advanced Strategies:\n1. Build a niche review site targeting 'AI tools' keywords\n2. Create YouTube tutorials with affiliate links\n3. Run Facebook ads to a landing page (ROI positive at $5 CPA)\n4. Partner with micro-influencers for content swaps\n5. Build an email funnel with a free AI guide as lead magnet",
      },
      {
        title: "Niche Targeting Guide",
        desc: "How to identify and reach the best audience for AI tools",
        copyText: "Best niches for Megsy AI referrals:\n1. Content creators & social media managers\n2. Small business owners\n3. Freelance designers\n4. Marketing agencies\n5. Students & educators\n6. E-commerce sellers (product images)\n7. Real estate agents (property visuals)",
      },
      {
        title: "Conversion Optimization Tips",
        desc: "Tips to increase your click-to-signup conversion rate",
        copyText: "Conversion Tips:\n1. Always mention the $9 starting price — it removes friction\n2. Show before/after examples of AI-generated content\n3. Use video demos instead of static images\n4. Add urgency: 'I've been using this for X months'\n5. Personal stories convert 3x better than feature lists",
      },
    ],
  },
];

export default function Resources() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (text: string, title: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedItem(title);
    toast.success(`${title} copied to clipboard!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">RESOURCES</h1>
        <p className="text-sm text-muted-foreground mt-1">Copy-ready templates and strategies to maximize your earnings</p>
      </div>

      {/* Quick Stats */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-5">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">HOW TO USE THESE RESOURCES</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Click "COPY" on any template, replace [YOUR LINK] with your referral link from the Overview page, and post it on the relevant platform.
            All templates are pre-written and optimized for conversions. Customize them with your personal touch for best results.
          </p>
        </CardContent>
      </Card>

      {resources.map((section, si) => (
        <motion.div
          key={section.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: si * 0.1 }}
        >
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">{section.category}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <Card key={item.title} className="hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                  <div className="mt-3 p-3 bg-background rounded-lg border border-border">
                    <p className="text-xs text-muted-foreground font-mono whitespace-pre-wrap line-clamp-3">{item.copyText}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 text-xs font-bold uppercase w-full"
                    onClick={() => handleCopy(item.copyText, item.title)}
                  >
                    {copiedItem === item.title ? "COPIED!" : "COPY TEMPLATE"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
