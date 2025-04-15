"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendData {
  slug: string;
  subject: string;
  content: string;
}

export async function sendEmail(data: SendData) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return { error: "Unauthorized", status: 401 };
  }

  const newsletter = await prisma.newsletter.findFirst({
    where: {
      slug: data.slug,
      userId: session.user.id,
    },
    include: {
      subscribers: true,
    },
  });

  if (!newsletter) {
    return { error: "Newsletter not found", status: 404 };
  }

  const batchPayload = newsletter.subscribers.map((sub) => ({
    from: "onboarding@resend.dev", // use verfied domain this won't work
    to: [sub.email],
    subject: data.subject,
    html: data.content,
  }));

  if (batchPayload.length === 0) {
    return { error: "No subscribers to send to", status: 400 };
  }

  try {
    await resend.batch.send(batchPayload);

    await prisma.email.create({
      data: {
        subject: data.subject,
        content: data.content,
        newsletterId: newsletter.id,
      },
    });

    return {
      message: `Batch email sent to ${batchPayload.length} subscribers.`,
      status: 200,
    };
  } catch (error) {
    console.error("Batch send failed", error);
    return { error: "Batch send failed", status: 500 };
  }
}
