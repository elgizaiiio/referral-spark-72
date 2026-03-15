import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useReferralStats(userId: string | undefined) {
  const referralCodesQuery = useQuery({
    queryKey: ["referral-codes", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("referral_codes")
        .select("*")
        .eq("user_id", userId!);
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  const referralsQuery = useQuery({
    queryKey: ["referrals", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("referrals")
        .select("*")
        .eq("referrer_id", userId!);
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  const clicksQuery = useQuery({
    queryKey: ["rp-clicks", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("rp_referral_clicks")
        .select("*");
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  const codes = referralCodesQuery.data ?? [];
  const referrals = referralsQuery.data ?? [];
  const clicks = clicksQuery.data ?? [];
  const totalClicks = clicks.length;
  const totalSignups = referrals.length;
  const conversionRate = totalClicks > 0 ? ((totalSignups / totalClicks) * 100).toFixed(1) : "0";

  return {
    codes,
    referrals,
    clicks,
    totalClicks,
    totalSignups,
    conversionRate,
    isLoading: referralCodesQuery.isLoading || referralsQuery.isLoading || clicksQuery.isLoading,
  };
}
