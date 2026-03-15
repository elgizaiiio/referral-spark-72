import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { ReferralsTable } from "@/components/referrals/ReferralsTable";
import { Skeleton } from "@/components/ui/skeleton";

export default function Referrals() {
  const { user } = useAuth();
  const { referrals, isLoading } = useReferralStats(user?.id);

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Referrals</h1>
        <p className="text-sm text-muted-foreground">View all your referral history with filtering and sorting</p>
      </div>
      <ReferralsTable referrals={referrals} />
    </div>
  );
}
