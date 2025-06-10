"use client";

import { ArrowLeft, type LucideIcon } from "lucide-react";
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
  const pathname = usePathname();
  const slug = pathname.split("/")[2];

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
                  ? pathname === `/newsletter/${slug}/${item.url}`
                  : pathname === `/newsletter/${slug}`
              }
            >
              <Link
                href={
                  item.url
                    ? `/newsletter/${slug}/${item.url}`
                    : `/newsletter/${slug}`
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
