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
      <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">REFERRALS</h1>
      <p className="text-sm text-muted-foreground">All your referral history with filtering and sorting</p>
      <ReferralsTable referrals={referrals} />
    </div>
  );
}
