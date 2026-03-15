import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

interface SettingsFormProps {
  userId: string;
  referralCode: string;
  userEmail: string;
}

export function SettingsForm({ userId, referralCode, userEmail }: SettingsFormProps) {
  const { signOut } = useAuth();
  const [paymentDetails, setPaymentDetails] = useState("");
  const [notifySignup, setNotifySignup] = useState(true);
  const [notifyEarning, setNotifyEarning] = useState(true);
  const [saving, setSaving] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("rp_portal_settings")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();
      if (data) {
        setPaymentDetails(data.payment_details || "");
        setNotifySignup(data.notify_on_signup ?? true);
        setNotifyEarning(data.notify_on_earning ?? true);
      }
    };
    load();
  }, [userId]);

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("rp_portal_settings")
      .upsert({
        user_id: userId,
        payment_details: paymentDetails,
        notify_on_signup: notifySignup,
        notify_on_earning: notifyEarning,
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id" });
    if (error) toast.error(error.message);
    else toast.success("Settings saved!");
    setSaving(false);
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setChangingPassword(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) toast.error(error.message);
    else {
      toast.success("Password updated successfully!");
      setNewPassword("");
    }
    setChangingPassword(false);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">ACCOUNT INFORMATION</h3>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Email</label>
              <Input value={userEmail} disabled className="bg-muted border-border text-xs sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Referral Code</label>
              <Input value={referralCode} disabled className="bg-muted border-border font-mono text-xs sm:text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Referral Link</label>
            <Input value={`https://megsyai.com?ref=${referralCode}`} disabled className="bg-muted border-border font-mono text-xs sm:text-sm" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">PAYMENT DETAILS</h3>
          <div className="space-y-2">
            <label className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Payment Information</label>
            <Input
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
              placeholder="Your payment details for withdrawals"
              className="bg-background border-border text-xs sm:text-sm"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">NOTIFICATIONS</h3>
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold text-foreground">New Signup Notifications</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Get notified when someone signs up with your link</p>
            </div>
            <Switch checked={notifySignup} onCheckedChange={setNotifySignup} />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold text-foreground">Earning Notifications</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Get notified when you earn commission</p>
            </div>
            <Switch checked={notifyEarning} onCheckedChange={setNotifyEarning} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">CHANGE PASSWORD</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password (min 6 characters)"
              className="bg-background border-border sm:max-w-sm text-xs sm:text-sm"
            />
            <Button
              variant="outline"
              onClick={handleChangePassword}
              disabled={changingPassword || !newPassword}
              className="font-bold text-[10px] sm:text-xs uppercase"
            >
              {changingPassword ? "UPDATING..." : "UPDATE"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <Button onClick={handleSave} disabled={saving} className="gradient-cta border-0 text-foreground hover:opacity-90 font-bold rounded-full px-8 text-xs sm:text-sm">
          {saving ? "SAVING..." : "SAVE SETTINGS"}
        </Button>
        <Button variant="outline" onClick={signOut} className="font-bold text-[10px] sm:text-xs uppercase text-destructive hover:text-destructive rounded-full px-8">
          SIGN OUT
        </Button>
      </div>
    </div>
  );
}
