"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Certificate } from "@/data/365-chat";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export type Chat365 = {
  id: string;
  domain_name: string;
  valid_date: string;
  expire_date: string;
  remain_days: number;
  issuer: string;
  ip_server: string;
  last_check: string;
};

export const columns: ColumnDef<Certificate>[] = [
  {
    accessorKey: "domain_name",
    header: "Domain",
  },
  {
    accessorKey: "valid_date",
    header: "Valid Date",
  },
  {
    accessorKey: "expire_date",
    header: "Expire Date",
  },
  {
    accessorKey: "remain_days",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Remain day
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "issuer",
    header: "Issuer",
  },
  {
    accessorKey: "ip_server",
    header: "IP Address",
  },
  {
    accessorKey: "last_check",
    header: "Last Check",
  },
];
