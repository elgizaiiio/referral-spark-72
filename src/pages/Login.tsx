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
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[400px] w-[400px] sm:w-[600px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="absolute left-4 top-4">
        <Link
          to="/landing"
          className="text-xs sm:text-sm text-muted-foreground hover:text-foreground font-bold uppercase transition-colors"
        >
          ← BACK
        </Link>
      </div>

      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="Megsy"
            className="h-14 w-14 rounded-2xl mx-auto mb-5"
          />
          <h1 className="text-xl sm:text-2xl font-black text-foreground uppercase">
            PARTNER LOGIN
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            Sign in with your Megsy account
          </p>
        </div>

        <Button
          onClick={handleLogin}
          className="w-full h-12 sm:h-14 gradient-cta border-0 text-foreground hover:opacity-90 rounded-full font-bold text-sm sm:text-base gap-3"
        >
          <img src={logo} alt="" className="h-6 w-6 rounded-lg" />
          Login with Megsy
        </Button>

        <p className="mt-6 text-center text-[10px] sm:text-xs text-muted-foreground">
          ليس لديك حساب؟{" "}
          <a
            href="https://smart-hub-egy.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:underline"
          >
            أنشئ حساب مجاني على Megsy
          </a>
        </p>
      </div>
    </div>
  );
}
