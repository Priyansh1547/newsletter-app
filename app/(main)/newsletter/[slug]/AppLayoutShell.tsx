"use client";

import { useRouter } from "next/navigation";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { newsletterDetail } from "@/actions";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export function AppLayoutShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { slug } = useParams();

  useQuery({
    queryKey: ["newsletter", slug],
    queryFn: async () => {
      const result = await newsletterDetail({
        newsletterSlug: slug?.toString() || "",
      });
      if (!result.isOwner) {
        toast.error("You do not have access to this newsletter");
        router.push("/dashboard");
      }
      return result;
    },
    enabled: !!slug,
    retry: 1,
  });

  return (
    <SidebarProvider>
      <AppSidebar type="newsletter" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
