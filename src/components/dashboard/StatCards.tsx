import { Card, CardContent } from "@/components/ui/card";
import { MousePointerClick, UserPlus, TrendingUp, DollarSign } from "lucide-react";

interface StatCardsProps {
  totalClicks: number;
  totalSignups: number;
  conversionRate: string;
  totalEarned: number;
}

const stats = (props: StatCardsProps) => [
  {
    label: "Total Clicks",
    value: props.totalClicks.toLocaleString(),
    icon: MousePointerClick,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Successful Signups",
    value: props.totalSignups.toLocaleString(),
    icon: UserPlus,
    color: "text-chart-4",
    bg: "bg-chart-4/10",
  },
  {
    label: "Conversion Rate",
    value: `${props.conversionRate}%`,
    icon: TrendingUp,
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    label: "Total Earned",
    value: `$${props.totalEarned.toFixed(2)}`,
    icon: DollarSign,
    color: "text-success",
    bg: "bg-success/10",
  },
];

export function StatCards(props: StatCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats(props).map((stat) => (
        <Card key={stat.label}>
          <CardContent className="flex items-center gap-4 p-5">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
