"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSession } from "@/lib/auth-client";

export function SettingsComponent() {
  const { data: session, isPending } = useSession();

  if (isPending)
    return (
      <div className="flex justify-center items-center h-[65vh]">
        Loading...
      </div>
    );
  if (!session) return null;

  const { name, email, image } = session.user;

  return (
    <Card className="shadow-none bg-sidebar/50 gap-4">
      <CardHeader className="flex items-center justify-between">
        <p className="text-xl/[1.375rem] font-semibold -tracking-4 md:text-2xl/[1.875rem] tracking-tighter">
          Basic Information
        </p>
        <Avatar className="h-10 w-10 rounded-md">
          <AvatarImage src={image!} alt={name} className="rounded-full" />
          <AvatarFallback className="rounded-full">P</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm/[1.5rem] font-semibold md:text-base/[1.125rem]">
            Name
          </p>
          <p className="text-base/[1.5rem] text-brand-gray-400">{name}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm/[1.5rem] font-semibold -tracking-4 md:text-base/[1.125rem]">
            Email
          </p>
          <p className="text-base/[1.5rem] text-brand-gray-400">{email}</p>
        </div>
      </CardContent>
    </Card>
  );
}
