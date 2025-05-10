"use client";

import * as React from "react";
import { Mail, Bot, User, Settings, Sparkles } from "lucide-react";

import { NavNewsletter } from "./nav-newsletter";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  core: [
    {
      name: "Newsletters",
      url: "/dashboard",
      icon: Sparkles,
    },
    {
      name: "settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
  newsletter: [
    {
      name: "Newsletters",
      icon: Sparkles,
    },
    {
      name: "Send Mail",
      url: "create",
      icon: Mail,
    },
    {
      name: "Users",
      url: "user",
      icon: User,
    },
    {
      name: "Newsletter page",
      url: "builder",
      icon: Bot,
    },
    {
      name: "Setting",
      url: "setting",
      icon: Settings,
    },
  ],
};

export function AppSidebar({
  type,
  ...props
}: {
  type: "dashboard" | "newsletter";
}) {
  return (
    <Sidebar variant="floating" {...props} className="border-none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavUser />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {type === "dashboard" ? (
          <NavProjects projects={data.core} />
        ) : (
          <NavNewsletter newsletter={data.newsletter} />
        )}
      </SidebarContent>
    </Sidebar>
  );
}
