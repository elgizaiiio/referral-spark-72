import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { StatsBar } from "@/components/landing/StatsBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { HowItWorksDetailed } from "@/components/landing/HowItWorksDetailed";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { PricingSection } from "@/components/landing/PricingSection";
import { EarningsCalculator } from "@/components/landing/EarningsCalculator";
import { EarningExamples } from "@/components/landing/EarningExamples";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { BenefitsGrid } from "@/components/landing/BenefitsGrid";
import { ToolsPreview } from "@/components/landing/ToolsPreview";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { SocialTools } from "@/components/landing/SocialTools";
import { MarketingStrategies } from "@/components/landing/MarketingStrategies";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { WhyMegsy } from "@/components/landing/WhyMegsy";
import { TrustSection } from "@/components/landing/TrustSection";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { GlobalReach } from "@/components/landing/GlobalReach";
import { PartnerSupport } from "@/components/landing/PartnerSupport";
import { CommissionInfo } from "@/components/landing/CommissionInfo";
import { LegalSection } from "@/components/landing/LegalSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTAFooter } from "@/components/landing/CTAFooter";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        <article itemScope itemType="https://schema.org/WebPage">
          <HeroSection />
          <StatsBar />
          <ProductShowcase />
          <section aria-label="How it works">
            <HowItWorks />
            <HowItWorksDetailed />
          </section>
          <section aria-label="Pricing and earnings">
            <PricingSection />
            <EarningsCalculator />
            <EarningExamples />
          </section>
          <section aria-label="Features and benefits">
            <FeaturesGrid />
            <BenefitsGrid />
            <WhyMegsy />
          </section>
          <section aria-label="Tools and dashboard">
            <ToolsPreview />
            <DashboardPreview />
            <SocialTools />
            <MarketingStrategies />
          </section>
          <section aria-label="Trust and social proof">
            <ComparisonSection />
            <TrustSection />
            <SuccessStories />
            <GlobalReach />
          </section>
          <section aria-label="Support and commission details">
            <PartnerSupport />
            <CommissionInfo />
          </section>
          <section aria-label="Legal and FAQ">
            <LegalSection />
            <FAQSection />
          </section>
          <CTAFooter />
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}
