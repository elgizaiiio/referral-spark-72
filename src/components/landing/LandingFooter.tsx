import { Link } from "react-router-dom";

export function LandingFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-cta font-bold text-foreground text-xs">
              M
            </div>
            <span className="text-sm font-bold text-foreground">Megsy AI</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="https://megsyai.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Main Site</a>
            <a href="https://megsyai.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms</a>
            <a href="https://megsyai.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy</a>
            <Link to="/login" className="hover:text-foreground transition-colors">Sign In</Link>
          </div>

          <div className="flex items-center gap-4">
            {[
              { label: "X", url: "https://x.com/megsyai" },
              { label: "IG", url: "https://instagram.com/megsyai" },
              { label: "YT", url: "https://youtube.com/@megsyai" },
              { label: "LI", url: "https://linkedin.com/company/megsyai" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-xs font-bold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Megsy AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
