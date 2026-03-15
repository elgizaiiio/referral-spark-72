
-- Create rp_referral_clicks table for tracking referral link clicks
CREATE TABLE public.rp_referral_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  referral_code text NOT NULL,
  ip_hash text,
  user_agent text,
  referrer_url text,
  country text,
  clicked_at timestamptz NOT NULL DEFAULT now()
);

-- Create rp_portal_settings table for portal-specific user preferences
CREATE TABLE public.rp_portal_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  payment_method text DEFAULT 'paypal',
  payment_details text DEFAULT '',
  notify_on_signup boolean DEFAULT true,
  notify_on_earning boolean DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- RLS for rp_referral_clicks
ALTER TABLE public.rp_referral_clicks ENABLE ROW LEVEL SECURITY;

-- Anyone can insert clicks (public tracking)
CREATE POLICY "Anon can insert clicks" ON public.rp_referral_clicks
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Authenticated users can view clicks for their own referral codes
CREATE POLICY "Users can view own referral clicks" ON public.rp_referral_clicks
  FOR SELECT TO authenticated
  USING (
    referral_code IN (
      SELECT code FROM public.referral_codes WHERE user_id = auth.uid()
    )
  );

-- RLS for rp_portal_settings
ALTER TABLE public.rp_portal_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own portal settings" ON public.rp_portal_settings
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own portal settings" ON public.rp_portal_settings
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own portal settings" ON public.rp_portal_settings
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);
