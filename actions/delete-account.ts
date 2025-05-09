"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/db";

interface DeleteAccountReturn {
  message: string;
  error: boolean;
  description: string;
}

export async function deleteAccount(): Promise<DeleteAccountReturn> {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session || !session.user?.email) {
    return {
      error: true,
      message: "Uh oh!",
      description: "you need to sign in",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return {
      error: true,
      message: "Uh oh!",
      description: "User not found",
    };
  }

  await prisma.user.delete({
    where: { email: session.user.email },
  });

  return {
    error: false,
    message: `Success!`,
    description: `Deleted the Account`,
  };
}
