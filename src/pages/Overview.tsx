import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { useEarnings } from "@/hooks/useEarnings";
import { ReferralLinkCard } from "@/components/dashboard/ReferralLinkCard";
import { StatCards } from "@/components/dashboard/StatCards";
import { EarningsChart } from "@/components/dashboard/EarningsChart";
import { RecentReferrals } from "@/components/dashboard/RecentReferrals";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Overview() {
  const { user } = useAuth();
  const { codes, referrals, totalClicks, totalSignups, conversionRate, isLoading: statsLoading } = useReferralStats(user?.id);
  const { earnings, totalEarned, availableBalance, pendingWithdrawals, isLoading: earningsLoading } = useEarnings(user?.id);

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">OVERVIEW</h1>
          <p className="text-sm text-muted-foreground mt-1">Welcome back! Here's your partner dashboard.</p>
        </div>
        <Link to="/resources">
          <Button variant="outline" className="font-bold text-xs uppercase">VIEW RESOURCES</Button>
        </Link>
      </div>

      <ReferralLinkCard referralCode={referralCode} />

      <StatCards
        totalClicks={totalClicks}
        totalSignups={totalSignups}
        conversionRate={conversionRate}
        totalEarned={totalEarned}
      />

      {/* Quick Action Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="hover:border-primary/30 transition-colors">
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">AVAILABLE BALANCE</p>
            <p className="text-2xl font-black text-success mt-1">${availableBalance.toFixed(2)}</p>
            <Link to="/payouts">
              <Button variant="outline" size="sm" className="mt-3 font-bold text-xs uppercase w-full">WITHDRAW</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/30 transition-colors">
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">PENDING PAYOUTS</p>
            <p className="text-2xl font-black text-warning mt-1">{pendingWithdrawals.length}</p>
            <Link to="/payouts">
              <Button variant="outline" size="sm" className="mt-3 font-bold text-xs uppercase w-full">VIEW PAYOUTS</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/30 transition-colors">
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">COMMISSION RATE</p>
            <p className="text-2xl font-black gradient-text mt-1">20%</p>
            <p className="text-xs text-muted-foreground mt-3">Flat rate on all plans, recurring forever</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <EarningsChart earnings={earnings} />
        <RecentReferrals referrals={referrals} />
      </div>
    </div>
  );
}
