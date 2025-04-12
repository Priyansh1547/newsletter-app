"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/db";

interface Data {
  name: string;
  slug: string;
}

export async function createNewsletter(data: Data) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return { error: "Unauthorized" };
  }

  const existingNewsletterSlug = await prisma.newsletter.findFirst({
    where: { slug: data.slug },
  });

  if (existingNewsletterSlug) {
    return { error: "Newsletter slug already exists", status: 409 };
  }

  const newsletter = await prisma.newsletter.create({
    data: {
      name: data.name,
      slug: data.slug,
      userId: session.user.id,
    },
  });

  return { newsletters: newsletter, status: 201 };
}
