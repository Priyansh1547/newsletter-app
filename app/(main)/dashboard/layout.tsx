import { Metadata } from "next";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Stack Mail",
  description: "Dashboard for stack mail",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar type="dasboard" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
