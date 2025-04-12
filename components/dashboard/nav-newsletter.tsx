"use client";

import { type LucideIcon } from "lucide-react";
import { useAtomValue } from "jotai";
import { newsletterSlugAtom } from "@/store/newsletter";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavNewsletter({
  newsletter,
}: {
  newsletter: { name: string; icon: LucideIcon; url: string }[];
}) {
  const newsletterSlug = useAtomValue(newsletterSlugAtom);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Newsletter</SidebarGroupLabel>
      <SidebarMenu>
        {newsletter.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={`${newsletterSlug}/${item.url}`}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
