"use client";

import * as React from "react";
import {
  Command,
  Frame,
  Map,
  PieChart,
  Mail,
  Bot,
  User,
  Settings,
} from "lucide-react";

import { NavNewsletter } from "./nav-newsletter";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
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
      name: "Email",
      url: "email",
      icon: Mail,
    },
    {
      name: "User",
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
    <Sidebar variant="sidebar" {...props} className="border-none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {type === "dasboard" && <NavUser user={data.user} />}
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
