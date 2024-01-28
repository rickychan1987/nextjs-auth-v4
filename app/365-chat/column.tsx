"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Chat365 = {
  id: string;
  domains: string;
  download_cert: string;
  valid_date: string;
  expire_date: string;
  remain_day: number;
  issuer: string;
  ip: string;
  last_check: string;
};

export const columns: ColumnDef<Chat365>[] = [
  {
    accessorKey: "domains",
    header: "Domain",
  },
  {
    accessorKey: "download_cert",
    header: "Download Cert",
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
    accessorKey: "remain_day",
    header: "Remain Day",
  },
  {
    accessorKey: "issuer",
    header: "Issuer",
  },
  {
    accessorKey: "ip",
    header: "IP Address",
  },
  {
    accessorKey: "last_check",
    header: "Last Check",
  },
];
