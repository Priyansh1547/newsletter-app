"use client";

import { ChevronDown, LogOut, Moon, Settings } from "lucide-react";
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
import { signOut, useSession } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/store/user";
import { useEffect } from "react";
import Link from "next/link";

function NavUserSkeleton() {
  return (
    <div className="flex items-center space-x-3 p-2 w-full max-w-xs">
      <Skeleton className="h-8 w-8 rounded-md" />

      <div className="flex-1 space-y-1">
        <Skeleton className="h-4 w-28 rounded" />
        <Skeleton className="h-3 w-40 rounded" />
      </div>
      <ChevronDown className="ml-auto size-4" />
    </div>
  );
}

export function NavUser() {
  const { data: session, isPending } = useSession();
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      setUser({
        name: session.user.name,
        image: session.user.image || "",
        email: session.user.email,
      });
    }
  }, [session, setUser]);

  if (isPending) return <NavUserSkeleton />;
  if (!session) return null;

  const handleLogout = async () => {
    const logout = signOut();

    toast.promise(logout, {
      loading: "Logging out...",
      success: "logged out",
      error: "Something went wrong",
    });

    await logout;

    router.push("/login");
  };

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
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {user.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 rounded-xl text-popover-foreground"
            side="bottom"
            align="start"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-4 pb-2 font-normal">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-12 w-12 rounded-lg mb-2">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {user.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-muted-foreground">
                  {user.email}
                </div>
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
              <Link href={"/settings"}>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
