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
    <div className="space-y-6">
      <div>
        <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">PAYOUTS</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your earnings and withdrawal requests</p>
      </div>

      <PayoutSummary
        availableBalance={availableBalance}
        totalEarned={totalEarned}
        totalWithdrawn={totalWithdrawn}
      />

      {/* Extra Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">PENDING WITHDRAWALS</p>
            <p className="text-2xl font-black text-warning mt-1">{pendingWithdrawals.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">COMPLETED PAYOUTS</p>
            <p className="text-2xl font-black text-success mt-1">{paidCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">COMMISSION RATE</p>
            <p className="text-2xl font-black gradient-text mt-1">20%</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods Info */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-5">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">SUPPORTED PAYMENT METHODS</h3>
          <div className="grid gap-3 sm:grid-cols-4">
            <div>
              <p className="text-xs font-bold text-foreground">PayPal</p>
              <p className="text-xs text-muted-foreground">Processed in 1-2 hours</p>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Bank Transfer</p>
              <p className="text-xs text-muted-foreground">Processed in 2-3 days</p>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Crypto (USDT)</p>
              <p className="text-xs text-muted-foreground">TRC-20/ERC-20, instant</p>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Wise</p>
              <p className="text-xs text-muted-foreground">Processed in 1-2 days</p>
            </div>
          </div>
        </CardContent>
      </Card>

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
