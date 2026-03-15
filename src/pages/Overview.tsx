import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { useEarnings } from "@/hooks/useEarnings";
import { ReferralLinkCard } from "@/components/dashboard/ReferralLinkCard";
import { StatCards } from "@/components/dashboard/StatCards";
import { EarningsChart } from "@/components/dashboard/EarningsChart";
import { RecentReferrals } from "@/components/dashboard/RecentReferrals";
import { Skeleton } from "@/components/ui/skeleton";

export default function Overview() {
  const { user } = useAuth();
  const { codes, referrals, totalClicks, totalSignups, conversionRate, isLoading: statsLoading } = useReferralStats(user?.id);
  const { earnings, totalEarned, isLoading: earningsLoading } = useEarnings(user?.id);

  const referralCode = codes?.[0]?.code ?? "—";
  const isLoading = statsLoading || earningsLoading;

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-40 w-full" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-24" />)}
        </div>
        <Skeleton className="h-80" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Overview</h1>
        <p className="text-sm text-muted-foreground">Track your referrals and earnings at a glance</p>
      </div>

      <ReferralLinkCard referralCode={referralCode} />

      <StatCards
        totalClicks={totalClicks}
        totalSignups={totalSignups}
        conversionRate={conversionRate}
        totalEarned={totalEarned}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <EarningsChart earnings={earnings} />
        <RecentReferrals referrals={referrals} />
      </div>
    </div>
  );
}
