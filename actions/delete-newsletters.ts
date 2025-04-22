"use server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/db";

interface Data {
  name: string;
  slug: string;
}

export async function deleteNewsletter(data: Data) {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

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
