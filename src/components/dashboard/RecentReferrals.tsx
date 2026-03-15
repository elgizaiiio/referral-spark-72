import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

interface RecentReferralsProps {
  referrals: Array<{
    id: string;
    referred_id: string;
    status: string;
    created_at: string;
    referral_code: string;
  }>;
}

const statusVariant = (status: string) => {
  switch (status) {
    case "active": return "default";
    case "converted": return "secondary";
    default: return "outline";
  }
};

export function RecentReferrals({ referrals }: RecentReferralsProps) {
  const recent = referrals.slice(0, 5);

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">RECENT REFERRALS</h3>
        {recent.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No referrals yet. Share your link to get started!
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs uppercase tracking-wider">User</TableHead>
                <TableHead className="text-xs uppercase tracking-wider">Date</TableHead>
                <TableHead className="text-xs uppercase tracking-wider">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recent.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-mono text-xs">{r.referred_id.slice(0, 8)}...</TableCell>
                  <TableCell className="text-sm">{format(new Date(r.created_at), "MMM dd, yyyy")}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(r.status)} className="capitalize text-xs">
                      {r.status}
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
