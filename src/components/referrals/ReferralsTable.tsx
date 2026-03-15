import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";

interface Referral {
  id: string;
  referred_id: string;
  status: string;
  created_at: string;
  referral_code: string;
  referrer_id: string;
}

const statusVariant = (status: string) => {
  switch (status) {
    case "active": return "default" as const;
    case "converted": return "secondary" as const;
    default: return "outline" as const;
  }
};

interface ReferralsTableProps { referrals: Referral[]; }

export function ReferralsTable({ referrals }: ReferralsTableProps) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(0);
  const pageSize = 10;

  const filteredData = useMemo(() => {
    let data = referrals;
    if (statusFilter !== "all") data = data.filter((r) => r.status === statusFilter);
    if (globalFilter) data = data.filter((r) => r.referred_id.includes(globalFilter) || r.referral_code.includes(globalFilter));
    return data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [referrals, statusFilter, globalFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const pageData = filteredData.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
          <Input
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => { setGlobalFilter(e.target.value); setPage(0); }}
            className="sm:w-48 bg-background border-border text-xs sm:text-sm"
          />
          <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(0); }}>
            <SelectTrigger className="w-full sm:w-36 bg-background border-border text-xs sm:text-sm"><SelectValue placeholder="Filter status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {pageData.length === 0 ? (
          <p className="py-8 text-center text-xs sm:text-sm text-muted-foreground">No referrals found</p>
        ) : (
          <div className="space-y-2">
            {pageData.map((r) => (
              <div key={r.id} className="flex items-center justify-between p-3 sm:p-4 bg-background rounded-xl border border-border">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-mono font-bold text-foreground truncate">{r.referred_id.slice(0, 12)}...</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{format(new Date(r.created_at), "MMM dd, yyyy")}</p>
                </div>
                <Badge variant={statusVariant(r.status)} className="capitalize text-[10px] sm:text-xs shrink-0 ml-2">
                  {r.status}
                </Badge>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4">
            <p className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase">
              Page {page + 1} of {totalPages}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setPage(p => p - 1)} disabled={page === 0} className="font-bold text-[10px] sm:text-xs">PREV</Button>
              <Button variant="outline" size="sm" onClick={() => setPage(p => p + 1)} disabled={page >= totalPages - 1} className="font-bold text-[10px] sm:text-xs">NEXT</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
