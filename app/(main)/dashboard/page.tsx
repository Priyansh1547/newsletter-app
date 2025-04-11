"use client";

import { Dashboard } from "@/components/dashboard/dashboard";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar type="dasboard" />
        <SidebarInset>
          <Dashboard />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
