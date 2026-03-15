import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "CREATE YOUR ACCOUNT",
    description: "Sign up for free and get your unique partner dashboard with all the tools you need.",
    borderColor: "border-t-[hsl(175,70%,40%)]",
    numColor: "text-[hsl(175,70%,40%)]",
  },
  {
    number: "02",
    title: "GET YOUR LINK",
    description: "Copy your unique referral link that tracks all clicks, signups, and conversions automatically.",
    borderColor: "border-t-[hsl(0,60%,45%)]",
    numColor: "text-[hsl(0,60%,45%)]",
  },
  {
    number: "03",
    title: "SHARE EVERYWHERE",
    description: "Post on social media, blogs, YouTube, or send directly to friends. We give you templates.",
    borderColor: "border-t-[hsl(271,60%,50%)]",
    numColor: "text-[hsl(271,60%,50%)]",
  },
  {
    number: "04",
    title: "PEOPLE SIGN UP",
    description: "When someone uses your link and subscribes to Megsy AI, you earn commission.",
    borderColor: "border-t-[hsl(140,50%,35%)]",
    numColor: "text-[hsl(140,50%,35%)]",
  },
  {
    number: "05",
    title: "GET PAID",
    description: "Withdraw your earnings anytime. No minimum threshold. Fast processing.",
    borderColor: "border-t-[hsl(38,70%,50%)]",
    numColor: "text-[hsl(38,70%,50%)]",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            GET STARTED{" "}
            <span className="gradient-text">WITH MEGSY</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            Five simple steps to start earning
          </p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card rounded-xl border border-border ${step.borderColor} border-t-2 p-4 sm:p-6 flex flex-col`}
            >
              <span className={`text-3xl sm:text-4xl font-black ${step.numColor}`}>{step.number}</span>
              <h3 className="mt-3 sm:mt-4 text-xs sm:text-base font-bold text-foreground uppercase tracking-wide">{step.title}</h3>
              <p className="mt-2 text-[10px] sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
