"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DeleteAccount } from "./delete-account";
import { useAtomValue } from "jotai";
import { userAtom } from "@/store/user";
import { UsageCard } from "./usageCard";

export function SettingsComponent() {
  const user = useAtomValue(userAtom);

  return (
    <>
      <Card className="shadow-none bg-sidebar/50 gap-4">
        <CardHeader className="flex items-center justify-between">
          <p className="text-xl/[1.375rem] font-semibold -tracking-4 md:text-2xl/[1.875rem] tracking-tighter">
            Basic Information
          </p>
          <Avatar className="h-10 w-10 rounded-md">
            <AvatarImage
              src={user.image}
              alt={user.name}
              className="rounded-full"
            />
            <AvatarFallback className="rounded-full">P</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm/[1.5rem] font-semibold md:text-base/[1.125rem]">
              Name
            </p>
            <p className="text-base/[1.5rem] text-brand-gray-400">
              {user.name}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm/[1.5rem] font-semibold -tracking-4 md:text-base/[1.125rem]">
              Email
            </p>
            <p className="text-base/[1.5rem] text-brand-gray-400">
              {user.email}
            </p>
          </div>
        </CardContent>
      </Card>
      <UsageCard />
      <Card className="shadow-none bg-sidebar/50 gap-4">
        <CardHeader>
          <p className="text-xl/[1.375rem] font-semibold -tracking-4 md:text-2xl/[1.875rem] tracking-tighter">
            Account
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm/[1.5rem] font-semibold md:text-base/[1.125rem]">
              Delete
            </p>
            <DeleteAccount />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
