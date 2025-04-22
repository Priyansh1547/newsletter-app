"use server";
import prisma from "@/db";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

interface Data {
  name: string;
  slug: string;
}

export async function createNewsletter(data: Data) {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

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
