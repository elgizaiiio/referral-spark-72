import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const MEGSY_TOKEN_URL =
  "https://ltgampdtawuefwwayncx.supabase.co/functions/v1/oauth-token";
const MEGSY_USERINFO_URL =
  "https://ltgampdtawuefwwayncx.supabase.co/functions/v1/oauth-userinfo";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { code, redirect_uri } = await req.json();

    if (!code || !redirect_uri) {
      return new Response(
        JSON.stringify({ error: "Missing code or redirect_uri" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const CLIENT_ID = "megsy_MFqvdqHtvJd1BZ17ZOZo5JyX";
    const CLIENT_SECRET = Deno.env.get("MEGSY_OAUTH_CLIENT_SECRET");
    if (!CLIENT_SECRET) {
      throw new Error("MEGSY_OAUTH_CLIENT_SECRET not configured");
    }

    // Step 1: Exchange code for access token
    const tokenRes = await fetch(MEGSY_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "authorization_code",
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri,
      }),
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      return new Response(
        JSON.stringify({ error: "Token exchange failed", details: tokenData }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Step 2: Get user info
    const userRes = await fetch(MEGSY_USERINFO_URL, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const userData = await userRes.json();
    if (!userRes.ok || !userData.email) {
      return new Response(
        JSON.stringify({ error: "Failed to get user info", details: userData }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Step 3: Create or find user in Supabase using admin API
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // Try to find existing user by email
    const { data: existingUsers } = await supabase.auth.admin.listUsers();
    const existingUser = existingUsers?.users?.find(
      (u) => u.email === userData.email
    );

    let userId: string;

    if (existingUser) {
      userId = existingUser.id;
      // Update profile with latest Megsy data
      await supabase
        .from("profiles")
        .update({
          display_name: userData.name || existingUser.user_metadata?.full_name,
          avatar_url: userData.avatar_url || existingUser.user_metadata?.avatar_url,
        })
        .eq("id", userId);
    } else {
      // Create new user
      const randomPassword = crypto.randomUUID() + crypto.randomUUID();
      const { data: newUser, error: createError } =
        await supabase.auth.admin.createUser({
          email: userData.email,
          password: randomPassword,
          email_confirm: true,
          user_metadata: {
            full_name: userData.name,
            avatar_url: userData.avatar_url,
            megsy_id: userData.id,
            plan: userData.plan,
          },
        });

      if (createError || !newUser.user) {
        return new Response(
          JSON.stringify({ error: "Failed to create user", details: createError?.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      userId = newUser.user.id;
    }

    // Step 4: Generate magic link for session
    const { data: linkData, error: linkError } =
      await supabase.auth.admin.generateLink({
        type: "magiclink",
        email: userData.email,
      });

    if (linkError || !linkData) {
      return new Response(
        JSON.stringify({ error: "Failed to generate session link", details: linkError?.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Extract hashed token from the link properties
    const tokenHash = linkData.properties?.hashed_token;

    return new Response(
      JSON.stringify({
        token_hash: tokenHash,
        email: userData.email,
        user: {
          id: userId,
          name: userData.name,
          avatar_url: userData.avatar_url,
          plan: userData.plan,
        },
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("OAuth exchange error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
