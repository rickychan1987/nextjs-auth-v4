import { columns } from "./column";
import { DataTable } from "./data-table";
import { ssl_info } from "@/data/365-chat";

export default async function Page() {
  return (
    <section>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={ssl_info} />
      </div>
    </section>
  );
}
