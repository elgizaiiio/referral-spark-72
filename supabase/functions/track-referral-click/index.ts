import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const DESTINATION_URL = "https://smart-hub-egy.lovable.app";

Deno.serve(async (req) => {
  // This function handles GET requests — it records a click and redirects
  const url = new URL(req.url);
  const ref = url.searchParams.get("ref");

  if (!ref) {
    return new Response(null, {
      status: 302,
      headers: { Location: DESTINATION_URL },
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // Verify referral code exists
    const { data: codeExists } = await supabase
      .from("referral_codes")
      .select("id")
      .eq("code", ref)
      .maybeSingle();

    if (codeExists) {
      // Extract metadata from request
      const userAgent = req.headers.get("user-agent") || null;
      const forwardedFor = req.headers.get("x-forwarded-for");
      const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
      const referrerUrl = req.headers.get("referer") || null;

      // Hash IP for privacy
      const encoder = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(ip + ref));
      const ipHash = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      // Try to detect country from Cloudflare header
      const country = req.headers.get("cf-ipcountry") || null;

      await supabase.from("rp_referral_clicks").insert({
        referral_code: ref,
        user_agent: userAgent,
        ip_hash: ipHash,
        referrer_url: referrerUrl,
        country: country,
      });
    }
  } catch (err) {
    console.error("Click tracking error:", err);
  }

  // Always redirect regardless of tracking success
  const destination = `${DESTINATION_URL}?ref=${encodeURIComponent(ref)}`;
  return new Response(null, {
    status: 302,
    headers: { Location: destination },
  });
});
