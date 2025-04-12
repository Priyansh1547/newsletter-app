"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/db";

interface Data {
  name: string;
  slug: string;
}

export async function deleteNewsletter(data: Data) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return { error: "Unauthorized" };
  }

  try {
    const newsletter = await prisma.newsletter.delete({
      where: {
        name: data.name,
        slug: data.slug,
      },
    });
    return { newsletter, status: 200 };
  } catch (e) {
    return { error: "Failed to delete newsletter", status: 500 };
  }
}
