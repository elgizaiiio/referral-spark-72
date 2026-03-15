import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { SettingsForm } from "@/components/settings/SettingsForm";
import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsPage() {
  const { user } = useAuth();
  const { codes, isLoading } = useReferralStats(user?.id);

  if (isLoading || !user) {
    return <Skeleton className="h-96 w-full" />;
  }

  const referralCode = codes?.[0]?.code ?? "—";

  return (
    <div className="space-y-6">
      <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">SETTINGS</h1>
      <p className="text-sm text-muted-foreground">Manage your account and payment preferences</p>
      <SettingsForm
        userId={user.id}
        referralCode={referralCode}
        userEmail={user.email ?? ""}
      />
    </div>
  );
}
