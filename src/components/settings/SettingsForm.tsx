import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface SettingsFormProps {
  userId: string;
  referralCode: string;
  userEmail: string;
}

export function SettingsForm({ userId, referralCode, userEmail }: SettingsFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [notifySignup, setNotifySignup] = useState(true);
  const [notifyEarning, setNotifyEarning] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("rp_portal_settings")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();
      if (data) {
        setPaymentMethod(data.payment_method || "paypal");
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
        payment_method: paymentMethod,
        payment_details: paymentDetails,
        notify_on_signup: notifySignup,
        notify_on_earning: notifyEarning,
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id" });
    if (error) toast.error(error.message);
    else toast.success("Settings saved!");
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">ACCOUNT INFORMATION</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email</label>
              <Input value={userEmail} disabled className="bg-muted border-border" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Referral Code</label>
              <Input value={referralCode} disabled className="bg-muted border-border font-mono" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">PAYMENT PREFERENCES</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Payment Method</label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger className="bg-background border-border"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                  <SelectItem value="crypto">Crypto</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Payment Details</label>
              <Input value={paymentDetails} onChange={(e) => setPaymentDetails(e.target.value)} placeholder="PayPal email, bank IBAN, or wallet" className="bg-background border-border" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">NOTIFICATIONS</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-foreground">New Signup Notifications</p>
              <p className="text-xs text-muted-foreground">Get notified when someone signs up with your link</p>
            </div>
            <Switch checked={notifySignup} onCheckedChange={setNotifySignup} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-foreground">Earning Notifications</p>
              <p className="text-xs text-muted-foreground">Get notified when you earn commission</p>
            </div>
            <Switch checked={notifyEarning} onCheckedChange={setNotifyEarning} />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={saving} className="gradient-cta border-0 text-foreground hover:opacity-90 font-bold rounded-full px-8">
        {saving ? "SAVING..." : "SAVE SETTINGS"}
      </Button>
    </div>
  );
}
