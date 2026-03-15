import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { useEarnings } from "@/hooks/useEarnings";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { format, subDays, startOfDay } from "date-fns";
import { useMemo } from "react";

export default function Analytics() {
  const { user } = useAuth();
  const { clicks, referrals, totalClicks, totalSignups, conversionRate, isLoading: statsLoading } = useReferralStats(user?.id);
  const { earnings, totalEarned, isLoading: earningsLoading } = useEarnings(user?.id);

  const isLoading = statsLoading || earningsLoading;

  // Clicks per day (last 30 days)
  const clicksPerDay = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = startOfDay(subDays(new Date(), 29 - i));
      const dateStr = format(date, "yyyy-MM-dd");
      const dayClicks = clicks.filter(
        (c) => format(new Date(c.clicked_at), "yyyy-MM-dd") === dateStr
      ).length;
      return { date: format(date, "MMM dd"), clicks: dayClicks };
    });
  }, [clicks]);

  // Earnings per day (last 30 days)
  const earningsPerDay = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = startOfDay(subDays(new Date(), 29 - i));
      const dateStr = format(date, "yyyy-MM-dd");
      const dayEarnings = earnings
        .filter((e) => format(new Date(e.created_at), "yyyy-MM-dd") === dateStr)
        .reduce((sum, e) => sum + Number(e.amount), 0);
      return { date: format(date, "MMM dd"), earnings: dayEarnings };
    });
  }, [earnings]);

  // Referrals by status
  const statusData = useMemo(() => {
    const active = referrals.filter((r) => r.status === "active").length;
    const converted = referrals.filter((r) => r.status === "converted").length;
    const pending = referrals.filter((r) => r.status === "pending").length;
    return [
      { name: "Active", value: active },
      { name: "Converted", value: converted },
      { name: "Pending", value: pending },
    ].filter((d) => d.value > 0);
  }, [referrals]);

  // Country breakdown from clicks
  const countryData = useMemo(() => {
    const map: Record<string, number> = {};
    clicks.forEach((c) => {
      const country = c.country || "Unknown";
      map[country] = (map[country] || 0) + 1;
    });
    return Object.entries(map)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
  }, [clicks]);

  // Referrer URL breakdown
  const sourceData = useMemo(() => {
    const map: Record<string, number> = {};
    clicks.forEach((c) => {
      let source = "Direct";
      if (c.referrer_url) {
        try {
          source = new URL(c.referrer_url).hostname;
        } catch {
          source = c.referrer_url.slice(0, 30);
        }
      }
      map[source] = (map[source] || 0) + 1;
    });
    return Object.entries(map)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  }, [clicks]);

  // Weekly comparison
  const thisWeekClicks = useMemo(() => {
    const weekAgo = subDays(new Date(), 7);
    return clicks.filter((c) => new Date(c.clicked_at) >= weekAgo).length;
  }, [clicks]);

  const lastWeekClicks = useMemo(() => {
    const twoWeeksAgo = subDays(new Date(), 14);
    const weekAgo = subDays(new Date(), 7);
    return clicks.filter((c) => {
      const d = new Date(c.clicked_at);
      return d >= twoWeeksAgo && d < weekAgo;
    }).length;
  }, [clicks]);

  const clicksChange = lastWeekClicks > 0
    ? (((thisWeekClicks - lastWeekClicks) / lastWeekClicks) * 100).toFixed(0)
    : thisWeekClicks > 0 ? "+100" : "0";

  const COLORS = ["hsl(160, 84%, 39%)", "hsl(271, 91%, 65%)", "hsl(38, 92%, 50%)", "hsl(330, 81%, 60%)"];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <div className="grid gap-4 sm:grid-cols-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-24" />)}
        </div>
        <Skeleton className="h-80" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">ANALYTICS</h1>
        <p className="text-sm text-muted-foreground mt-1">Deep dive into your referral performance and traffic sources</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">TOTAL CLICKS</p>
            <p className="text-2xl font-black text-foreground mt-1">{totalClicks.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">THIS WEEK</p>
            <p className="text-2xl font-black gradient-text mt-1">{thisWeekClicks}</p>
            <p className={`text-xs mt-1 ${Number(clicksChange) >= 0 ? "text-success" : "text-destructive"}`}>
              {Number(clicksChange) >= 0 ? "+" : ""}{clicksChange}% vs last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">CONVERSION RATE</p>
            <p className="text-2xl font-black text-warning mt-1">{conversionRate}%</p>
            <p className="text-xs text-muted-foreground mt-1">{totalSignups} of {totalClicks} clicks</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">TOTAL EARNED</p>
            <p className="text-2xl font-black text-success mt-1">${totalEarned.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">20% commission</p>
          </CardContent>
        </Card>
      </div>

      {/* Clicks Over Time */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">CLICKS OVER TIME (30 DAYS)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clicksPerDay}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 12%)" />
                <XAxis dataKey="date" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: "hsl(0, 0%, 45%)" }} interval={4} />
                <YAxis fontSize={11} tickLine={false} axisLine={false} tick={{ fill: "hsl(0, 0%, 45%)" }} />
                <Tooltip
                  contentStyle={{ background: "hsl(0, 0%, 6%)", border: "1px solid hsl(0, 0%, 12%)", borderRadius: "8px", fontSize: "12px", color: "hsl(0, 0%, 100%)" }}
                />
                <Bar dataKey="clicks" fill="hsl(271, 91%, 65%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Earnings Over Time */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">EARNINGS OVER TIME (30 DAYS)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={earningsPerDay}>
                <defs>
                  <linearGradient id="analyticsEarningsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 12%)" />
                <XAxis dataKey="date" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: "hsl(0, 0%, 45%)" }} interval={4} />
                <YAxis fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} tick={{ fill: "hsl(0, 0%, 45%)" }} />
                <Tooltip
                  contentStyle={{ background: "hsl(0, 0%, 6%)", border: "1px solid hsl(0, 0%, 12%)", borderRadius: "8px", fontSize: "12px", color: "hsl(0, 0%, 100%)" }}
                  formatter={(value: number) => [`$${value.toFixed(2)}`, "Earnings"]}
                />
                <Area type="monotone" dataKey="earnings" stroke="hsl(160, 84%, 39%)" strokeWidth={2} fill="url(#analyticsEarningsGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Referral Status Breakdown */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">REFERRAL STATUS</h3>
            {statusData.length === 0 ? (
              <p className="text-sm text-muted-foreground py-8 text-center">No referrals yet</p>
            ) : (
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={statusData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {statusData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: "hsl(0, 0%, 6%)", border: "1px solid hsl(0, 0%, 12%)", borderRadius: "8px", fontSize: "12px", color: "hsl(0, 0%, 100%)" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Top Countries */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">TOP COUNTRIES</h3>
            {countryData.length === 0 ? (
              <p className="text-sm text-muted-foreground py-8 text-center">No click data yet</p>
            ) : (
              <div className="space-y-3">
                {countryData.map((c, i) => (
                  <div key={c.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted-foreground w-5">{i + 1}</span>
                      <span className="text-sm font-bold text-foreground">{c.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 rounded-full bg-accent overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${(c.value / (countryData[0]?.value || 1)) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground w-10 text-right">{c.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">TRAFFIC SOURCES</h3>
          {sourceData.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center">No traffic source data yet</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {sourceData.map((s) => (
                <div key={s.name} className="bg-background rounded-xl border border-border p-4">
                  <p className="text-xs text-muted-foreground font-bold uppercase truncate">{s.name}</p>
                  <p className="text-xl font-black text-foreground mt-1">{s.value}</p>
                  <p className="text-xs text-muted-foreground">clicks</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Performance Tips */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-5">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">PERFORMANCE INSIGHTS</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold text-foreground">Optimize Your CTR</p>
              <p className="text-xs text-muted-foreground">Use compelling calls-to-action and showcase specific features like image generation or video creation.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Best Posting Times</p>
              <p className="text-xs text-muted-foreground">Analyze your click patterns to identify when your audience is most active and schedule posts accordingly.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Diversify Traffic</p>
              <p className="text-xs text-muted-foreground">Don't rely on one platform. Spread across social media, email, blogs, and communities for stable traffic.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
