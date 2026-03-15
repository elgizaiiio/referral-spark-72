import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const MEGSY_OAUTH_CLIENT_ID = "megsy_MFqvdqHtvJd1BZ17ZOZo5JyX";

export default function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Signing in...");

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const errorParam = searchParams.get("error");

    if (errorParam) {
      setError("Request was denied by the user");
      return;
    }

    if (!code) {
      setError("Authorization code not found");
      return;
    }

    // Verify state matches
    const savedState = sessionStorage.getItem("oauth_state");
    if (savedState && state !== savedState) {
      setError("Security verification failed (state mismatch)");
      return;
    }
    sessionStorage.removeItem("oauth_state");

    exchangeCode(code);
  }, [searchParams]);

  const exchangeCode = async (code: string) => {
    try {
      setStatus("جاري التحقق من الحساب...");

      const redirectUri = `${window.location.origin}/callback`;

      const { data, error: fnError } = await supabase.functions.invoke(
        "oauth-exchange",
        {
          body: { code, redirect_uri: redirectUri },
        }
      );

      if (fnError || !data?.token_hash) {
        setError(data?.error || fnError?.message || "فشل في تسجيل الدخول");
        return;
      }

      setStatus("جاري إنشاء الجلسة...");

      // Use the magic link token to establish session
      const { error: verifyError } = await supabase.auth.verifyOtp({
        token_hash: data.token_hash,
        type: "magiclink",
      });

      if (verifyError) {
        setError("فشل في إنشاء الجلسة: " + verifyError.message);
        return;
      }

      setStatus("تم تسجيل الدخول بنجاح!");
      navigate("/", { replace: true });
    } catch (err: any) {
      setError(err.message || "حدث خطأ غير متوقع");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[400px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative text-center space-y-6">
        <img
          src={logo}
          alt="Megsy"
          className="h-14 w-14 rounded-2xl mx-auto animate-pulse"
        />

        {error ? (
          <div className="space-y-4">
            <p className="text-destructive text-sm font-bold">{error}</p>
            <button
              onClick={() => navigate("/login", { replace: true })}
              className="text-sm text-primary font-bold hover:underline"
            >
              العودة لتسجيل الدخول
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
            <p className="text-sm text-muted-foreground font-medium">
              {status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
