import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

interface PayoutHistoryProps {
  withdrawals: Array<{
    id: string;
    amount: number;
    method: string;
    status: string;
    created_at: string;
    payment_details: string;
  }>;
}

export function PayoutHistory({ withdrawals }: PayoutHistoryProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">PAYMENT HISTORY</h3>
        {withdrawals.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">No withdrawal requests yet</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs uppercase tracking-wider">Amount</TableHead>
                <TableHead className="text-xs uppercase tracking-wider">Method</TableHead>
                <TableHead className="text-xs uppercase tracking-wider">Details</TableHead>
                <TableHead className="text-xs uppercase tracking-wider">Date</TableHead>
                <TableHead className="text-xs uppercase tracking-wider">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {withdrawals.map((w) => (
                <TableRow key={w.id}>
                  <TableCell className="font-black text-success">${Number(w.amount).toFixed(2)}</TableCell>
                  <TableCell className="capitalize text-sm">{w.method.replace("_", " ")}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{w.payment_details || "—"}</TableCell>
                  <TableCell className="text-sm">{format(new Date(w.created_at), "MMM dd, yyyy")}</TableCell>
                  <TableCell>
                    <Badge variant={w.status === "paid" ? "default" : "outline"} className="capitalize text-xs">
                      {w.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
