import { Chat365, columns } from "./column";
import { DataTable } from "./data-table";
import { ssl_info } from "@/data/365-chat";

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={ssl_info} />
    </div>
  );
}
