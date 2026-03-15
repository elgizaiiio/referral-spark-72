import { Card, CardContent } from "@/components/ui/card";

interface PayoutSummaryProps {
  availableBalance: number;
  totalEarned: number;
  totalWithdrawn: number;
}

export function PayoutSummary({ availableBalance, totalEarned, totalWithdrawn }: PayoutSummaryProps) {
  const cards = [
    { label: "AVAILABLE BALANCE", value: `$${availableBalance.toFixed(2)}`, valueClass: "text-success" },
    { label: "TOTAL EARNED", value: `$${totalEarned.toFixed(2)}`, valueClass: "gradient-text" },
    { label: "TOTAL WITHDRAWN", value: `$${totalWithdrawn.toFixed(2)}`, valueClass: "text-warning" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardContent className="p-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{card.label}</p>
            <p className={`text-3xl font-black mt-2 ${card.valueClass}`}>{card.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
