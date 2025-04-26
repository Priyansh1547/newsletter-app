"use server";

import prisma from "@/db";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { BuilderData } from "@/schema/builderSchema";

interface BuilderReturn {
  message: string;
  error: boolean;
  description: string;
}

export async function builder(data: BuilderData): Promise<BuilderReturn> {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session || !session.user?.email) {
    return {
      error: true,
      message: "Uh oh!",
      description: "you need to sign in",
    };
  }

  try {
    const newsletter = await prisma.newsletter.findFirst({
      where: { slug: data.slug },
      include: {
        newsletterPage: true,
      },
    });

    if (!newsletter) {
      return {
        error: true,
        message: "Uh oh!",
        description: "Newsletter not found",
      };
    }

    if (newsletter.newsletterPage.length === 1) {
      return {
        error: true,
        message: "Uh oh!",
        description: "You already have a website for this newsletter",
      };
    }

    const newsletterPage = await prisma.newsletterPage.create({
      data: {
        title: data.title,
        description: data.description,
        ctaText: data.cta,
        themeColor: data.themeColor,
        slug: data.slug,
        footer: data.footer,
        newsletterId: newsletter.id,
      },
    });

    return {
      error: false,
      message: "Newsletter page created",
      description: newsletterPage.title,
    };
  } catch (e) {
    return {
      error: true,
      message: "Uh Oh!",
      description: "Failed to create Newsletter Page",
    };
  }
}
