import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const resources = [
  {
    category: "SOCIAL MEDIA TEMPLATES",
    items: [
      { title: "Instagram Story Template", desc: "Eye-catching story promoting Megsy AI with your referral link" },
      { title: "Twitter/X Thread Template", desc: "Ready-to-post thread explaining why Megsy AI is the best AI creative tool" },
      { title: "LinkedIn Post Template", desc: "Professional post for your LinkedIn audience about AI content creation" },
      { title: "TikTok Script Template", desc: "Short-form video script showcasing Megsy AI features" },
    ],
  },
  {
    category: "EMAIL TEMPLATES",
    items: [
      { title: "Newsletter Feature Email", desc: "Drop this into your newsletter to promote Megsy AI to your subscribers" },
      { title: "Cold Outreach Email", desc: "Professional email to introduce Megsy AI to potential users" },
      { title: "Follow-up Email", desc: "Re-engage leads who clicked but didn't sign up" },
    ],
  },
  {
    category: "CONTENT IDEAS",
    items: [
      { title: "Blog Post Outline", desc: "SEO-optimized blog post comparing AI creative tools (featuring Megsy)" },
      { title: "YouTube Video Script", desc: "Tutorial-style video showing how to use Megsy AI for content creation" },
      { title: "Comparison Article", desc: "Side-by-side comparison template: Megsy AI vs competitors" },
    ],
  },
  {
    category: "STRATEGIES",
    items: [
      { title: "Beginner's Earning Guide", desc: "Step-by-step guide to making your first $100 with referrals" },
      { title: "Advanced Growth Playbook", desc: "Scaling strategies used by our top-earning partners" },
      { title: "Niche Targeting Guide", desc: "How to identify and reach the best audience for AI tools" },
      { title: "Conversion Optimization", desc: "Tips to increase your click-to-signup conversion rate" },
    ],
  },
];

export default function Resources() {
  return (
    <div className="space-y-8">
      <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">RESOURCES</h1>
      <p className="text-sm text-muted-foreground">Everything you need to maximize your earnings</p>

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
                  <Button variant="outline" size="sm" className="mt-3 text-xs font-bold uppercase">
                    COMING SOON
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
