"use server";

import prisma from "@/db";

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
      description: "You have already subscribed to this newsletter",
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
