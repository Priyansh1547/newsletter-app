import { EmailDataTable } from "./email-table";

export function Newsletter() {
  return (
    <>
      <div className="flex items-center py-4">
        <h2 className="text-2xl tracking-tight">Welcome</h2>
      </div>
      <EmailDataTable />
    </>
  );
}
