// components/dashboard/AppLayoutShell.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { newsletterSlugAtom } from "@/store/newsletter";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { NewsletterDetail } from "@/actions";
import { toast } from "sonner";
import { useParams } from "next/navigation";

export function AppLayoutShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [, setNewsletterSlug] = useAtom(newsletterSlugAtom);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;

    setNewsletterSlug(slug.toString());

    const fetchNewsletter = async () => {
      const res = await NewsletterDetail({ newsletterSlug: slug.toString() });

      if (res.isOwner === false || res.error) {
        toast.error("You do not have access to this newsletter");
        router.push("/dashboard");
      }
    };

    fetchNewsletter();
  }, [slug, setNewsletterSlug, router]);

  return (
    <SidebarProvider>
      <AppSidebar type="newsletter" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
