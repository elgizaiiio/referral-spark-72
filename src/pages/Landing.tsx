import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { EarningsCalculator } from "@/components/landing/EarningsCalculator";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { TrustSection } from "@/components/landing/TrustSection";
import { CommissionInfo } from "@/components/landing/CommissionInfo";
import { CTAFooter } from "@/components/landing/CTAFooter";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <HeroSection />
      <HowItWorks />
      <EarningsCalculator />
      <FeaturesGrid />
      <TrustSection />
      <CommissionInfo />
      <CTAFooter />
      <LandingFooter />
    </div>
  );
}
