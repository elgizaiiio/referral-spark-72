import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { SettingsForm } from "@/components/settings/SettingsForm";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  const { user } = useAuth();
  const { codes, isLoading } = useReferralStats(user?.id);

  if (isLoading || !user) {
    return <Skeleton className="h-96 w-full" />;
  }

  const referralCode = codes?.[0]?.code ?? "—";
  const memberSince = user.created_at ? new Date(user.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "—";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">SETTINGS</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account and payment preferences</p>
      </div>

      {/* Account Summary */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">ACCOUNT EMAIL</p>
              <p className="text-sm font-bold text-foreground mt-1">{user.email}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">REFERRAL CODE</p>
              <p className="text-sm font-bold text-foreground font-mono mt-1">{referralCode}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">MEMBER SINCE</p>
              <p className="text-sm font-bold text-foreground mt-1">{memberSince}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <SettingsForm
        userId={user.id}
        referralCode={referralCode}
        userEmail={user.email ?? ""}
      />
    </div>
  );
}
