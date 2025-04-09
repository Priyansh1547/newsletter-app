"use client";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Dashboard } from "@/components/dashboard/dashboard";

export default function DashboardPage() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar className="border-none" />
        <SidebarInset>
          <Dashboard />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
