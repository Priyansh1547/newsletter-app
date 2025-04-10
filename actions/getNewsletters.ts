"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/db";

export async function getNewsletters() {
  const session = await getServerSession(authOptions);

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
