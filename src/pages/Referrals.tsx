import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { ReferralsTable } from "@/components/referrals/ReferralsTable";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Referrals() {
  const { user } = useAuth();
  const { referrals, totalClicks, totalSignups, conversionRate, isLoading } = useReferralStats(user?.id);

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  const activeReferrals = referrals.filter((r) => r.status === "active").length;
  const convertedReferrals = referrals.filter((r) => r.status === "converted").length;
  const pendingReferrals = referrals.filter((r) => r.status === "pending").length;

  const stats = [
    { label: "TOTAL", value: totalSignups },
    { label: "ACTIVE", value: activeReferrals, cls: "text-success" },
    { label: "CONVERTED", value: convertedReferrals, cls: "gradient-text" },
    { label: "PENDING", value: pendingReferrals, cls: "text-warning" },
    { label: "CONVERSION", value: `${conversionRate}%` },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="heading-massive text-2xl sm:text-3xl lg:text-4xl text-foreground">REFERRALS</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Track every referral, from click to conversion</p>
      </div>

      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent className="p-4 sm:p-5">
              <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">{s.label}</p>
              <p className={`text-xl sm:text-2xl font-black mt-1 ${s.cls || "text-foreground"}`}>{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <ReferralsTable referrals={referrals} />
    </div>
  );
}
