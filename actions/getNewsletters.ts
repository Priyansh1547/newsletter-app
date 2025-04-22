"use server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/db";

export async function getNewsletters() {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session || !session.user?.email) {
    return { error: "Unauthorized" };
  }

  const newsletter = await prisma.newsletter.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return { newsletters: newsletter, status: 200 };
}
