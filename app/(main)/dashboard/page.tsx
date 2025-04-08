"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Dashboard() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar className="border-none" />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            dashboard
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
