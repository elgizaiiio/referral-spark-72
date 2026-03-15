import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

export default function Login() {
  const { user, loading, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const { error } = await signIn(email, password);
    if (error) setError(error.message);
    setSubmitting(false);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="absolute left-4 top-4">
        <Link to="/landing" className="text-sm text-muted-foreground hover:text-foreground font-bold uppercase transition-colors">
          ← BACK
        </Link>
      </div>

      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <img src={logo} alt="Megsy" className="h-14 w-14 rounded-2xl mx-auto mb-4" />
          <h1 className="text-2xl font-black text-foreground uppercase">PARTNER LOGIN</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in with your Megsy AI account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground uppercase tracking-wider">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="bg-background border-border h-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground uppercase tracking-wider">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-background border-border h-12"
            />
          </div>
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          <Button type="submit" className="w-full gradient-cta border-0 text-foreground hover:opacity-90 h-12 font-bold text-base rounded-full" disabled={submitting}>
            {submitting ? "SIGNING IN..." : "SIGN IN"}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a
            href="https://megsyai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:underline"
          >
            Sign up on Megsy AI
          </a>
        </p>
      </div>
    </div>
  );
}
