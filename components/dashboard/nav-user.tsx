"use client";

import { ChevronDown, LogOut, Moon, Users, Github } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

function NavUserSkeleton() {
  return (
    <div className="flex items-center space-x-3 p-2 w-full max-w-xs">
      <Skeleton className="h-8 w-8 rounded-md" />

      <div className="flex-1 space-y-1">
        <Skeleton className="h-4 w-28 rounded" />
        <Skeleton className="h-3 w-40 rounded" />
      </div>
      <ChevronDown className="ml-auto size-4 text-muted-foreground" />
    </div>
  );
}

export function NavUser() {
  const { data: session, status } = useSession();

  if (status === "loading") return <NavUserSkeleton />;
  if (!session) return null;

  const { name, email, image } = session.user;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-md">
                <AvatarImage src={image || ""} alt={name || "User"} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{name}</span>
                <span className="truncate text-xs">{email}</span>
              </div>
              <ChevronDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 rounded-xl border-none text-popover-foreground"
            side="bottom"
            align="start"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-4 pb-2 font-normal">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-12 w-12 rounded-lg mb-2">
                  <AvatarImage src={image!} alt={name || "User"} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="text-sm font-medium">{name}</div>
                <div className="text-xs text-muted-foreground">{email}</div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Accounts
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Moon className="mr-2 h-4 w-4" />
                App Theme
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                Community
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuLabel className="text-xs text-muted-foreground">
              additional
            </DropdownMenuLabel>
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              Github
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
