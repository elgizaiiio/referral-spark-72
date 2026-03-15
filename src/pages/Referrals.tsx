import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { ReferralsTable } from "@/components/referrals/ReferralsTable";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Referrals() {
  const { user } = useAuth();
  const { referrals, totalClicks, totalSignups, conversionRate, isLoading } = useReferralStats(user?.id);

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  const activeReferrals = referrals.filter((r) => r.status === "active").length;
  const convertedReferrals = referrals.filter((r) => r.status === "converted").length;
  const pendingReferrals = referrals.filter((r) => r.status === "pending").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">REFERRALS</h1>
        <p className="text-sm text-muted-foreground mt-1">Track every referral, from click to conversion</p>
      </div>

      {/* Referral Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">TOTAL REFERRALS</p>
            <p className="text-2xl font-black text-foreground mt-1">{totalSignups}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">ACTIVE</p>
            <p className="text-2xl font-black text-success mt-1">{activeReferrals}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">CONVERTED</p>
            <p className="text-2xl font-black gradient-text mt-1">{convertedReferrals}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">PENDING</p>
            <p className="text-2xl font-black text-warning mt-1">{pendingReferrals}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">CONVERSION</p>
            <p className="text-2xl font-black text-foreground mt-1">{conversionRate}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Tips Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-5">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">BOOST YOUR CONVERSIONS</h3>
          <div className="grid gap-3 sm:grid-cols-3 mt-3">
            <div>
              <p className="text-xs font-bold text-foreground">Share on Social Media</p>
              <p className="text-xs text-muted-foreground">Post about Megsy AI on Twitter, Instagram, and TikTok with your referral link.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Create Content</p>
              <p className="text-xs text-muted-foreground">Write reviews, tutorials, or comparison posts featuring Megsy AI.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Email Your List</p>
              <p className="text-xs text-muted-foreground">Send your subscribers a personal recommendation about Megsy AI.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <ReferralsTable referrals={referrals} />
    </div>
  );
}
