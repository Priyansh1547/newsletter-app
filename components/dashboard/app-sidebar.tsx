"use client";

import * as React from "react";
import {
  Frame,
  Map,
  PieChart,
  Mail,
  Bot,
  User,
  Settings,
  Sparkles,
} from "lucide-react";

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
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  newsletter: [
    {
      name: "Newsletters",
      url: "",
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
      url: "email",
      icon: Bot,
    },
    {
      name: "Setting",
      url: "email",
      icon: Settings,
    },
  ],
};

export function AppSidebar({
  type,
  ...props
}: {
  type: "dasboard" | "newsletter";
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
        {type === "dasboard" ? (
          <NavProjects projects={data.projects} />
        ) : (
          <NavNewsletter newsletter={data.newsletter} />
        )}
      </SidebarContent>
    </Sidebar>
  );
}
