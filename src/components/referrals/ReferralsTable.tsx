import { useState, useMemo } from "react";
import {
  useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel,
  getPaginationRowModel, flexRender, createColumnHelper, type SortingState,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

const columnHelper = createColumnHelper<Referral>();

const statusVariant = (status: string) => {
  switch (status) {
    case "active": return "default" as const;
    case "converted": return "secondary" as const;
    default: return "outline" as const;
  }
};

const columns = [
  columnHelper.accessor("referred_id", {
    header: "Referred User",
    cell: (info) => <span className="font-mono text-xs">{info.getValue().slice(0, 12)}...</span>,
  }),
  columnHelper.accessor("referral_code", {
    header: "Referral Code",
    cell: (info) => <span className="font-mono text-xs text-muted-foreground">{info.getValue()}</span>,
  }),
  columnHelper.accessor("created_at", {
    header: "Date",
    cell: (info) => format(new Date(info.getValue()), "MMM dd, yyyy"),
    sortingFn: "datetime",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <Badge variant={statusVariant(info.getValue())} className="capitalize text-xs">{info.getValue()}</Badge>
    ),
  }),
];

interface ReferralsTableProps { referrals: Referral[]; }

export function ReferralsTable({ referrals }: ReferralsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([{ id: "created_at", desc: true }]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredData = useMemo(() => {
    if (statusFilter === "all") return referrals;
    return referrals.filter((r) => r.status === statusFilter);
  }, [referrals, statusFilter]);

  const table = useReactTable({
    data: filteredData, columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting, onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(), getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(), getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Input
          placeholder="Search referrals..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-64 bg-background border-border"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40 bg-background border-border"><SelectValue placeholder="Filter status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="converted">Converted</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="cursor-pointer select-none text-xs uppercase tracking-wider" onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{ asc: " ↑", desc: " ↓" }[header.column.getIsSorted() as string] ?? ""}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length === 0 ? (
              <TableRow><TableCell colSpan={columns.length} className="py-8 text-center text-muted-foreground">No referrals found</TableCell></TableRow>
            ) : (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground font-bold uppercase">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount() || 1}
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="font-bold text-xs">PREV</Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="font-bold text-xs">NEXT</Button>
        </div>
      </div>
    </div>
  );
}
