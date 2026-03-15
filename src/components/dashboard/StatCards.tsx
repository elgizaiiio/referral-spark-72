import { Card, CardContent } from "@/components/ui/card";

interface StatCardsProps {
  totalClicks: number;
  totalSignups: number;
  conversionRate: string;
  totalEarned: number;
}

export function StatCards(props: StatCardsProps) {
  const stats = [
    { label: "TOTAL CLICKS", value: props.totalClicks.toLocaleString(), valueClass: "text-foreground" },
    { label: "SIGNUPS", value: props.totalSignups.toLocaleString(), valueClass: "gradient-text" },
    { label: "CONVERSION", value: `${props.conversionRate}%`, valueClass: "text-warning" },
    { label: "EARNED", value: `$${props.totalEarned.toFixed(2)}`, valueClass: "text-success" },
  ];

  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-4 sm:p-6">
            <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            <p className={`text-xl sm:text-3xl font-black mt-1 sm:mt-2 ${stat.valueClass}`}>{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
