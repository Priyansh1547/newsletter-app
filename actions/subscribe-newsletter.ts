import { getServerSession } from "next-auth";
import prisma from "@/db";
import { authOptions } from "@/lib/auth";

interface SubscribeNewsletterData {
  email: string;
  slug: string;
}

export async function subscribeNewsletter(data: SubscribeNewsletterData) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return { error: "Unauthorized", status: 401 };
  }

  const newsletter = await prisma.newsletter.findFirst({
    where: {
      slug: data.slug,
    },
  });

  if (!newsletter) {
    return { error: "Newsletter not found", status: 404 };
  }

  const existingSubscriber = await prisma.subscriber.findFirst({
    where: {
      email: data.email,
      newsletterId: newsletter.id,
    },
  });

  if (existingSubscriber) {
    return { message: "Already subscribed", status: 200 };
  }

  await prisma.subscriber.create({
    data: {
      email: data.email,
      newsletterId: newsletter.id,
    },
  });

  return {
    message: `Subscribed to newsletter ${newsletter.name}`,
    status: 200,
  };
}
