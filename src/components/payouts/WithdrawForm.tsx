import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface WithdrawFormProps {
  userId: string;
  availableBalance: number;
  onSuccess: () => void;
}

export function WithdrawForm({ userId, availableBalance, onSuccess }: WithdrawFormProps) {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("paypal");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) { toast.error("Enter a valid amount"); return; }
    if (numAmount > availableBalance) { toast.error("Insufficient balance"); return; }
    if (!details.trim()) { toast.error("Please enter your payment details"); return; }

    setSubmitting(true);
    const { error } = await supabase.from("withdrawal_requests").insert({
      user_id: userId, amount: numAmount, method, payment_details: details,
    });
    if (error) toast.error(error.message);
    else { toast.success("Withdrawal request submitted!"); setAmount(""); setDetails(""); onSuccess(); }
    setSubmitting(false);
  };

  const placeholderMap: Record<string, string> = {
    paypal: "PayPal email address",
    bank_transfer: "Bank name, IBAN, SWIFT code",
    crypto: "USDT wallet address (TRC-20 or ERC-20)",
    wise: "Wise email or account number",
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">REQUEST WITHDRAWAL</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Amount ($)</label>
              <Input type="number" step="0.01" min="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" className="bg-background border-border" />
              <p className="text-xs text-muted-foreground">Available: ${availableBalance.toFixed(2)}</p>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Method</label>
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger className="bg-background border-border"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="paypal">PayPal (1-2 hours)</SelectItem>
                  <SelectItem value="bank_transfer">Bank Transfer (2-3 days)</SelectItem>
                  <SelectItem value="crypto">Crypto USDT (Instant)</SelectItem>
                  <SelectItem value="wise">Wise (1-2 days)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Payment Details</label>
              <Input value={details} onChange={(e) => setDetails(e.target.value)} placeholder={placeholderMap[method] || "Payment details"} className="bg-background border-border" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type="submit" className="gradient-cta border-0 text-foreground hover:opacity-90 font-bold rounded-full px-8" disabled={submitting || availableBalance <= 0}>
              {submitting ? "SUBMITTING..." : "REQUEST WITHDRAWAL"}
            </Button>
            {availableBalance <= 0 && (
              <p className="text-xs text-muted-foreground">No balance available to withdraw</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
