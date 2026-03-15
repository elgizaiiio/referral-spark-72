import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format, subDays, startOfDay } from "date-fns";

interface EarningsChartProps {
  earnings: Array<{ amount: number; created_at: string }>;
}

export function EarningsChart({ earnings }: EarningsChartProps) {
  const chartData = Array.from({ length: 30 }, (_, i) => {
    const date = startOfDay(subDays(new Date(), 29 - i));
    const dateStr = format(date, "yyyy-MM-dd");
    const dayEarnings = earnings
      .filter((e) => format(new Date(e.created_at), "yyyy-MM-dd") === dateStr)
      .reduce((sum, e) => sum + Number(e.amount), 0);
    return { date: format(date, "MMM dd"), earnings: dayEarnings };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Earnings (Last 30 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 14%)" />
              <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} tick={{ fill: "hsl(0, 0%, 53%)" }} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} tick={{ fill: "hsl(0, 0%, 53%)" }} />
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 7%)",
                  border: "1px solid hsl(0, 0%, 14%)",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "hsl(0, 0%, 100%)",
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, "Earnings"]}
              />
              <Area type="monotone" dataKey="earnings" stroke="hsl(160, 84%, 39%)" strokeWidth={2} fill="url(#earningsGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
