import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { useEarnings } from "@/hooks/useEarnings";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { format, subDays, startOfDay } from "date-fns";
import { useMemo } from "react";

function parseDevice(ua: string | null): { device: string; os: string; browser: string } {
  if (!ua) return { device: "Unknown", os: "Unknown", browser: "Unknown" };
  
  let device = "Desktop";
  if (/Mobile|Android.*Mobile|iPhone|iPod/i.test(ua)) device = "Mobile";
  else if (/iPad|Android(?!.*Mobile)|Tablet/i.test(ua)) device = "Tablet";
  
  let os = "Other";
  if (/Windows/i.test(ua)) os = "Windows";
  else if (/Mac OS X|macOS/i.test(ua)) os = "macOS";
  else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/Linux/i.test(ua)) os = "Linux";
  else if (/CrOS/i.test(ua)) os = "ChromeOS";
  
  let browser = "Other";
  if (/Edg\//i.test(ua)) browser = "Edge";
  else if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) browser = "Chrome";
  else if (/Firefox/i.test(ua)) browser = "Firefox";
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = "Safari";
  else if (/Opera|OPR/i.test(ua)) browser = "Opera";
  
  return { device, os, browser };
}

export default function Analytics() {
  const { user } = useAuth();
  const { clicks, referrals, totalClicks, totalSignups, conversionRate, isLoading: statsLoading } = useReferralStats(user?.id);
  const { earnings, totalEarned, isLoading: earningsLoading } = useEarnings(user?.id);

  const isLoading = statsLoading || earningsLoading;

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

  const deviceData = useMemo(() => {
    const map: Record<string, number> = {};
    clicks.forEach((c) => {
      const { device } = parseDevice(c.user_agent);
      map[device] = (map[device] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [clicks]);

  const osData = useMemo(() => {
    const map: Record<string, number> = {};
    clicks.forEach((c) => {
      const { os } = parseDevice(c.user_agent);
      map[os] = (map[os] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [clicks]);

  const browserData = useMemo(() => {
    const map: Record<string, number> = {};
    clicks.forEach((c) => {
      const { browser } = parseDevice(c.user_agent);
      map[browser] = (map[browser] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [clicks]);

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

  const COLORS = ["hsl(160, 84%, 39%)", "hsl(271, 91%, 65%)", "hsl(38, 92%, 50%)", "hsl(330, 81%, 60%)", "hsl(200, 70%, 50%)", "hsl(0, 60%, 50%)"];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-24" />)}
        </div>
        <Skeleton className="h-80" />
      </div>
    );
  }

  const renderBarList = (data: { name: string; value: number }[], title: string) => (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">{title}</h3>
        {data.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center">No data yet</p>
        ) : (
          <div className="space-y-3">
            {data.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: COLORS[i % COLORS.length] }} />
                  <span className="text-xs sm:text-sm font-bold text-foreground truncate">{item.name}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="w-16 sm:w-24 h-2 rounded-full bg-accent overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${(item.value / (data[0]?.value || 1)) * 100}%`, background: COLORS[i % COLORS.length] }} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-muted-foreground w-8 sm:w-10 text-right">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="heading-massive text-2xl sm:text-3xl lg:text-4xl text-foreground">ANALYTICS</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Deep dive into your referral performance</p>
      </div>

      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">TOTAL CLICKS</p>
            <p className="text-xl sm:text-2xl font-black text-foreground mt-1">{totalClicks.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">THIS WEEK</p>
            <p className="text-xl sm:text-2xl font-black gradient-text mt-1">{thisWeekClicks}</p>
            <p className={`text-[10px] sm:text-xs mt-1 ${Number(clicksChange) >= 0 ? "text-success" : "text-destructive"}`}>
              {Number(clicksChange) >= 0 ? "+" : ""}{clicksChange}% vs last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">CONVERSION</p>
            <p className="text-xl sm:text-2xl font-black text-warning mt-1">{conversionRate}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">TOTAL EARNED</p>
            <p className="text-xl sm:text-2xl font-black text-success mt-1">${totalEarned.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">CLICKS (30 DAYS)</h3>
          <div className="h-[200px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clicksPerDay}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 12%)" />
                <XAxis dataKey="date" fontSize={9} tickLine={false} axisLine={false} tick={{ fill: "hsl(0, 0%, 45%)" }} interval={6} />
                <YAxis fontSize={10} tickLine={false} axisLine={false} tick={{ fill: "hsl(0, 0%, 45%)" }} width={30} />
                <Tooltip contentStyle={{ background: "hsl(0, 0%, 6%)", border: "1px solid hsl(0, 0%, 12%)", borderRadius: "8px", fontSize: "11px", color: "hsl(0, 0%, 100%)" }} />
                <Bar dataKey="clicks" fill="hsl(271, 91%, 65%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">EARNINGS (30 DAYS)</h3>
          <div className="h-[200px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={earningsPerDay}>
                <defs>
                  <linearGradient id="analyticsEarningsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 12%)" />
                <XAxis dataKey="date" fontSize={9} tickLine={false} axisLine={false} tick={{ fill: "hsl(0, 0%, 45%)" }} interval={6} />
                <YAxis fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} tick={{ fill: "hsl(0, 0%, 45%)" }} width={40} />
                <Tooltip contentStyle={{ background: "hsl(0, 0%, 6%)", border: "1px solid hsl(0, 0%, 12%)", borderRadius: "8px", fontSize: "11px", color: "hsl(0, 0%, 100%)" }} formatter={(value: number) => [`$${value.toFixed(2)}`, "Earnings"]} />
                <Area type="monotone" dataKey="earnings" stroke="hsl(160, 84%, 39%)" strokeWidth={2} fill="url(#analyticsEarningsGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Device, OS, Browser Analytics */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {renderBarList(deviceData, "DEVICES")}
        {renderBarList(osData, "OPERATING SYSTEMS")}
        {renderBarList(browserData, "BROWSERS")}
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">REFERRAL STATUS</h3>
            {statusData.length === 0 ? (
              <p className="text-sm text-muted-foreground py-8 text-center">No referrals yet</p>
            ) : (
              <div className="h-[200px] sm:h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={statusData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} fontSize={11}>
                      {statusData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: "hsl(0, 0%, 6%)", border: "1px solid hsl(0, 0%, 12%)", borderRadius: "8px", fontSize: "11px", color: "hsl(0, 0%, 100%)" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        {renderBarList(countryData, "TOP COUNTRIES")}
      </div>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">TRAFFIC SOURCES</h3>
          {sourceData.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center">No traffic source data yet</p>
          ) : (
            <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
              {sourceData.map((s) => (
                <div key={s.name} className="bg-background rounded-xl border border-border p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase truncate">{s.name}</p>
                  <p className="text-lg sm:text-xl font-black text-foreground mt-1">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">clicks</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
