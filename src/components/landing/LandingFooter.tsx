import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-card/50 pt-12 sm:pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img alt="Megsy" className="h-8 w-8 rounded-lg" src="/lovable-uploads/1fc24459-a31a-4ba6-826a-bd6f5c47cdb4.png" />
              <span className="text-foreground font-bold">Megsy AI</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The AI-powered creative platform. Generate images, videos, and more with cutting-edge models.
            </p>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">Partner</h4>
            <div className="flex flex-col gap-2">
              <Link to="/login" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <a href="#how-it-works" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#calculator" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Calculator</a>
              <a href="#faq" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">Platform</h4>
            <div className="flex flex-col gap-2">
              <a href="https://megsyai.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Megsy AI</a>
              <a href="https://megsyai.com/pricing" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <a href="https://megsyai.com/terms" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="https://megsyai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="heading-massive text-[5rem] sm:text-[8rem] lg:text-[16rem] text-primary/5 select-none leading-none">MEGSY</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-[10px] sm:text-xs text-muted-foreground">© 2026 Megsy AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://megsyai.com/terms" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="https://megsyai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>);

}