"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { newsletterSlugAtom } from "@/store/newsletter";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { slug } = useParams();
  const [, setNewsletterSlug] = useAtom(newsletterSlugAtom);

  useEffect(() => {
    if (slug) {
      setNewsletterSlug(slug.toString());
    }
  }, [slug, setNewsletterSlug]);

  return (
    <SidebarProvider>
      <AppSidebar type="newsletter" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
