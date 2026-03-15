import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-card/50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://x.com/megsyai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold">X</a>
          <a href="https://instagram.com/megsyai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold">INSTAGRAM</a>
          <a href="https://youtube.com/@megsyai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold">YOUTUBE</a>
          <a href="https://linkedin.com/company/megsyai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold">LINKEDIN</a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Megsy" className="h-8 w-8 rounded-lg" />
              <span className="text-foreground font-bold">Megsy AI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The AI-powered creative platform. Generate images, videos, and more with cutting-edge models.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Partner</h4>
            <div className="flex flex-col gap-2">
              <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Calculator</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Platform</h4>
            <div className="flex flex-col gap-2">
              <a href="https://megsyai.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Megsy AI</a>
              <a href="https://megsyai.com/pricing" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="https://megsyai.com/gallery" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <a href="https://megsyai.com/terms" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="https://megsyai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="https://megsyai.com/cookies" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="heading-massive text-[8rem] sm:text-[12rem] lg:text-[16rem] text-primary/5 select-none leading-none">MEGSY</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">© 2026 Megsy AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://megsyai.com/terms" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="https://megsyai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="https://megsyai.com/cookies" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
