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
import { SocialTools } from "@/components/landing/SocialTools";
import { MarketingStrategies } from "@/components/landing/MarketingStrategies";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { WhyMegsy } from "@/components/landing/WhyMegsy";
import { TrustSection } from "@/components/landing/TrustSection";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { GlobalReach } from "@/components/landing/GlobalReach";
import { PaymentMethods } from "@/components/landing/PaymentMethods";
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
      <HeroSection />
      <StatsBar />
      <ProductShowcase />
      <HowItWorks />
      <HowItWorksDetailed />
      <PricingSection />
      <EarningsCalculator />
      <EarningExamples />
      <FeaturesGrid />
      <BenefitsGrid />
      <WhyMegsy />
      <ToolsPreview />
      <DashboardPreview />
      <SocialTools />
      <MarketingStrategies />
      <ComparisonSection />
      <TrustSection />
      <SuccessStories />
      <GlobalReach />
      <PaymentMethods />
      <PartnerSupport />
      <CommissionInfo />
      <LegalSection />
      <FAQSection />
      <CTAFooter />
      <LandingFooter />
    </div>
  );
}
