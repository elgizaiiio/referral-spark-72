import { useAuth } from "@/hooks/useAuth";
import { useEarnings } from "@/hooks/useEarnings";
import { PayoutSummary } from "@/components/payouts/PayoutSummary";
import { WithdrawForm } from "@/components/payouts/WithdrawForm";
import { PayoutHistory } from "@/components/payouts/PayoutHistory";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { useQueryClient } from "@tanstack/react-query";

export default function Payouts() {
  const { user } = useAuth();
  const { availableBalance, totalEarned, totalWithdrawn, withdrawals, pendingWithdrawals, isLoading } = useEarnings(user?.id);
  const queryClient = useQueryClient();

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  const paidCount = withdrawals.filter((w) => w.status === "paid").length;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="heading-massive text-2xl sm:text-3xl lg:text-4xl text-foreground">PAYOUTS</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Manage your earnings and withdrawal requests</p>
      </div>

      <PayoutSummary
        availableBalance={availableBalance}
        totalEarned={totalEarned}
        totalWithdrawn={totalWithdrawn}
      />

      <div className="grid gap-3 sm:gap-4 grid-cols-3">
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">PENDING</p>
            <p className="text-xl sm:text-2xl font-black text-warning mt-1">{pendingWithdrawals.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">COMPLETED</p>
            <p className="text-xl sm:text-2xl font-black text-success mt-1">{paidCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">RATE</p>
            <p className="text-xl sm:text-2xl font-black gradient-text mt-1">20%</p>
          </CardContent>
        </Card>
      </div>

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
