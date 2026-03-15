import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error("Enter a valid amount");
      return;
    }
    if (numAmount > availableBalance) {
      toast.error("Insufficient balance");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("withdrawal_requests").insert({
      user_id: userId,
      amount: numAmount,
      method,
      payment_details: details,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Withdrawal request submitted!");
      setAmount("");
      setDetails("");
      onSuccess();
    }
    setSubmitting(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Request Withdrawal</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Amount ($)</label>
              <Input
                type="number"
                step="0.01"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Method</label>
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                  <SelectItem value="crypto">Crypto</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Payment Details</label>
              <Input
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="PayPal email or wallet"
              />
            </div>
          </div>
          <Button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Request Withdrawal"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
