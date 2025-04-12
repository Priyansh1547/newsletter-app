"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/db";

export async function checkNewsletter({
  newsletterSlug,
}: {
  newsletterSlug: string;
}) {
  const session = await getServerSession(authOptions);

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
    status: 200,
  };
}
