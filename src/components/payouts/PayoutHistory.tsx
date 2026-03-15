import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface PayoutHistoryProps {
  withdrawals: Array<{
    id: string;
    amount: number;
    method: string;
    status: string;
    created_at: string;
    payment_details: string;
  }>;
}

export function PayoutHistory({ withdrawals }: PayoutHistoryProps) {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">PAYMENT HISTORY</h3>
        {withdrawals.length === 0 ? (
          <p className="py-8 text-center text-xs sm:text-sm text-muted-foreground">No withdrawal requests yet</p>
        ) : (
          <div className="space-y-3">
            {withdrawals.map((w) => (
              <div key={w.id} className="flex items-center justify-between p-3 sm:p-4 bg-background rounded-xl border border-border">
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-black text-success">${Number(w.amount).toFixed(2)}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
                    {format(new Date(w.created_at), "MMM dd, yyyy")}
                  </p>
                </div>
                <Badge variant={w.status === "paid" ? "default" : "outline"} className="capitalize text-[10px] sm:text-xs shrink-0">
                  {w.status}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
