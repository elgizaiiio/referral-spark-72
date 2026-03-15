import { useAuth } from "@/hooks/useAuth";
import { Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const MEGSY_OAUTH_CLIENT_ID = "megsy_MFqvdqHtvJd1BZ17ZOZo5JyX";
const MEGSY_AUTHORIZE_URL = "https://smart-hub-egy.lovable.app/oauth/authorize";

export default function Login() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (user) return <Navigate to="/" replace />;

  const handleLogin = () => {
    const state = crypto.randomUUID();
    sessionStorage.setItem("oauth_state", state);
    const redirectUri = `${window.location.origin}/callback`;
    const authUrl = `${MEGSY_AUTHORIZE_URL}?client_id=${MEGSY_OAUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read&state=${state}`;
    window.location.href = authUrl;
  };

  return (
    <div className="relative flex min-h-screen bg-background overflow-hidden">
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[hsl(330,81%,60%)]/5 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Left decorative panel - hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12">
        <div className="relative z-10 max-w-md space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">Partner Program</p>
            <h2 className="text-5xl xl:text-6xl font-black text-foreground uppercase leading-[0.9] tracking-tight">
              EARN
              <br />
              <span className="gradient-text">20%</span>
              <br />
              FOREVER
            </h2>
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-primary/50 to-transparent" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Join the Megsy Partner Program and earn recurring commissions on every referral. No limits, no caps.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div>
              <p className="text-2xl font-black text-foreground">20%</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Commission</p>
            </div>
            <div>
              <p className="text-2xl font-black text-foreground">∞</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Recurring</p>
            </div>
            <div>
              <p className="text-2xl font-black text-foreground">24h</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Payouts</p>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 h-12 w-px bg-gradient-to-b from-primary/30 to-transparent" />
        <div className="absolute top-8 left-8 h-px w-12 bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute bottom-8 right-8 h-12 w-px bg-gradient-to-t from-primary/30 to-transparent" />
        <div className="absolute bottom-8 right-8 h-px w-12 bg-gradient-to-l from-primary/30 to-transparent" />
      </div>

      {/* Right panel / Main login */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 sm:p-8 relative z-10">
        <div className="w-full max-w-sm space-y-10">

          {/* Logo & heading */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Megsy" className="h-10 w-10 rounded-xl" />
              <div className="h-6 w-px bg-border" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Partners</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black text-foreground uppercase tracking-tight leading-none">
                WELCOME
                <br />
                <span className="gradient-text">BACK</span>
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Sign in to access your partner dashboard
              </p>
            </div>
          </div>

          {/* Login button */}
          <div className="space-y-4">
            <Button
              onClick={handleLogin}
              className="w-full h-14 gradient-cta border-0 text-foreground hover:opacity-90 rounded-2xl font-bold text-sm gap-3 shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <img src={logo} alt="" className="h-6 w-6 rounded-lg" />
              Login with Megsy
            </Button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Secure</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <p className="text-center text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
              You'll be redirected to Megsy to authenticate.
              <br />
              Your credentials are never shared.
            </p>
          </div>

          {/* Bottom link */}
          <div className="pt-4 border-t border-border">
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Don't have an account?{" "}
              <a
                href="https://smart-hub-egy.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline"
              >
                Create a free Megsy account
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
