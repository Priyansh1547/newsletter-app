"use server";

import prisma from "@/db";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

interface SubscribeNewsletterData {
  email: string;
  slug: string;
}

interface SubscribeNewsletterReturn {
  message: string;
  error: boolean;
  description: string;
}

export async function subscribeNewsletter(
  data: SubscribeNewsletterData
): Promise<SubscribeNewsletterReturn> {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session || !session.user?.email) {
    return {
      error: true,
      message: "Uh oh!",
      description: "you need to sign in",
    };
  }

  const newsletter = await prisma.newsletter.findFirst({
    where: {
      slug: data.slug,
    },
  });

  if (!newsletter) {
    return {
      error: true,
      message: "Uh oh!",
      description: "Newsletter not found",
    };
  }

  const existingSubscriber = await prisma.subscriber.findFirst({
    where: {
      email: data.email,
      newsletterId: newsletter.id,
    },
  });

  if (existingSubscriber) {
    return {
      error: true,
      message: "Error!",
      description: "You have already a subscriber to this newsletter",
    };
  }

  await prisma.subscriber.create({
    data: {
      email: data.email,
      newsletterId: newsletter.id,
    },
  });

  return {
    error: false,
    message: `Success!`,
    description: `Subscribed to the newsletter ${newsletter.name}`,
  };
}
