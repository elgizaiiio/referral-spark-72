import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface WithdrawFormProps {
  userId: string;
  availableBalance: number;
  onSuccess: () => void;
}

export function WithdrawForm({ userId, availableBalance, onSuccess }: WithdrawFormProps) {
  const [amount, setAmount] = useState("");
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
      user_id: userId, amount: numAmount, payment_details: details,
    });
    if (error) toast.error(error.message);
    else { toast.success("Withdrawal request submitted!"); setAmount(""); setDetails(""); onSuccess(); }
    setSubmitting(false);
  };

  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">REQUEST WITHDRAWAL</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Amount ($)</label>
              <Input type="number" step="0.01" min="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" className="bg-background border-border" />
              <p className="text-[10px] sm:text-xs text-muted-foreground">Available: ${availableBalance.toFixed(2)}</p>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Payment Details</label>
              <Input value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Your payment details" className="bg-background border-border" />
            </div>
          </div>
          <Button type="submit" className="gradient-cta border-0 text-foreground hover:opacity-90 font-bold rounded-full px-6 sm:px-8 text-xs sm:text-sm w-full sm:w-auto" disabled={submitting || availableBalance <= 0}>
            {submitting ? "SUBMITTING..." : "REQUEST WITHDRAWAL"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
