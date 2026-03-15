import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useEarnings(userId: string | undefined) {
  const earningsQuery = useQuery({
    queryKey: ["referral-earnings", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("referral_earnings")
        .select("*")
        .eq("referrer_id", userId!);
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  const withdrawalsQuery = useQuery({
    queryKey: ["withdrawals", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("withdrawal_requests")
        .select("*")
        .eq("user_id", userId!);
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  const earnings = earningsQuery.data ?? [];
  const withdrawals = withdrawalsQuery.data ?? [];
  const totalEarned = earnings.reduce((sum, e) => sum + Number(e.amount), 0);
  const totalWithdrawn = withdrawals
    .filter((w) => w.status === "paid")
    .reduce((sum, w) => sum + Number(w.amount), 0);
  const pendingWithdrawals = withdrawals.filter((w) => w.status === "pending");
  const availableBalance = totalEarned - totalWithdrawn;

  return {
    earnings,
    withdrawals,
    totalEarned,
    totalWithdrawn,
    availableBalance,
    pendingWithdrawals,
    isLoading: earningsQuery.isLoading || withdrawalsQuery.isLoading,
  };
}
