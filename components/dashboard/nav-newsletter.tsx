"use client";

import { ArrowLeft, type LucideIcon } from "lucide-react";
import { useAtomValue } from "jotai";
import { newsletterSlugAtom } from "@/store/newsletter";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavNewsletter({
  newsletter,
}: {
  newsletter: { name: string; icon: LucideIcon; url?: string }[];
}) {
  const newsletterSlug = useAtomValue(newsletterSlugAtom);
  const pathname = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden py-0 px-2.5">
      <SidebarMenu className="">
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={`/dashboard`}>
              <ArrowLeft />
              <span>Back</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {newsletter.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              isActive={
                item.url
                  ? pathname === `/newsletter/${newsletterSlug}/${item.url}`
                  : pathname === `/newsletter/${newsletterSlug}`
              }
            >
              <Link
                href={
                  item.url
                    ? `/newsletter/${newsletterSlug}/${item.url}`
                    : `/newsletter/${newsletterSlug}`
                }
              >
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
