import { useAuth } from "@/hooks/useAuth";
import { useEarnings } from "@/hooks/useEarnings";
import { PayoutSummary } from "@/components/payouts/PayoutSummary";
import { WithdrawForm } from "@/components/payouts/WithdrawForm";
import { PayoutHistory } from "@/components/payouts/PayoutHistory";
import { Skeleton } from "@/components/ui/skeleton";
import { useQueryClient } from "@tanstack/react-query";

export default function Payouts() {
  const { user } = useAuth();
  const { availableBalance, totalEarned, totalWithdrawn, withdrawals, isLoading } = useEarnings(user?.id);
  const queryClient = useQueryClient();

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  return (
    <div className="space-y-6">
      <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">PAYOUTS</h1>
      <p className="text-sm text-muted-foreground">Manage your earnings and withdrawal requests</p>

      <PayoutSummary
        availableBalance={availableBalance}
        totalEarned={totalEarned}
        totalWithdrawn={totalWithdrawn}
      />

      {user && (
        <WithdrawForm
          userId={user.id}
          availableBalance={availableBalance}
          onSuccess={() => queryClient.invalidateQueries({ queryKey: ["withdrawals"] })}
        />
      )}

      <PayoutHistory withdrawals={withdrawals} />
    </div>
  );
}
