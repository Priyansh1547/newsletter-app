"use server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/db";

export async function newsletterDetail({
  newsletterSlug,
}: {
  newsletterSlug: string;
}) {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session || !session.user?.email) {
    return { error: "Unauthorized", status: 401 };
  }

  const userEmail = session.user.email;

  const newsletter = await prisma.newsletter.findFirst({
    where: {
      slug: newsletterSlug,
    },
    include: {
      user: true,
    },
  });

  if (!newsletter) {
    return { error: "Newsletter not found", status: 404 };
  }

  const isOwner = newsletter.user?.email === userEmail;

  return {
    isOwner: isOwner,
    newsletter: newsletter,
    status: 200,
  };
}
