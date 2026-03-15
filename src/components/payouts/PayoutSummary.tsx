import { Card, CardContent } from "@/components/ui/card";
import { Wallet, TrendingUp, ArrowDownToLine } from "lucide-react";

interface PayoutSummaryProps {
  availableBalance: number;
  totalEarned: number;
  totalWithdrawn: number;
}

export function PayoutSummary({ availableBalance, totalEarned, totalWithdrawn }: PayoutSummaryProps) {
  const cards = [
    {
      label: "Available Balance",
      value: `$${availableBalance.toFixed(2)}`,
      icon: Wallet,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      label: "Total Earned",
      value: `$${totalEarned.toFixed(2)}`,
      icon: TrendingUp,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      label: "Total Withdrawn",
      value: `$${totalWithdrawn.toFixed(2)}`,
      icon: ArrowDownToLine,
      color: "text-warning",
      bg: "bg-warning/10",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardContent className="flex items-center gap-4 p-5">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.bg}`}>
              <card.icon className={`h-6 w-6 ${card.color}`} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{card.label}</p>
              <p className="text-2xl font-bold text-foreground">{card.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
