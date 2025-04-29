import { EmailInput } from "@/components/email-input";
import prisma from "@/db";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ newsletter: string }>;
};

export default async function Page({ params }: Props) {
  const { newsletter } = await params;

  const newsletterDetail = await prisma.newsletter.findFirst({
    where: { slug: newsletter },
    include: {
      newsletterPage: true,
      subscribers: true,
      user: true,
    },
  });
  if (!newsletterDetail) return notFound();

  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <div className="flex flex-col justify-center items-center p-2 gap-3 max-w-[18rem] flex-grow">
        <h1>
          {newsletterDetail.newsletterPage[0]?.title.charAt(0).toUpperCase() +
            newsletterDetail.newsletterPage[0]?.title.slice(1)}
        </h1>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-semibold tracking-tight text-gray-600/70 text-center">
            {newsletterDetail.newsletterPage[0]?.description}
          </p>
          <p className="text-sm font-semibold tracking-tight text-gray-600/80 text-center">
            {`By ${newsletterDetail.user.name} · Over ${newsletterDetail.subscribers.length} subscribers`}
          </p>
        </div>

        <div className="p-6">
          <EmailInput slug={newsletter} cta="Subscribe" />
        </div>
      </div>

      <footer className="py-2 w-full text-center">
        <p className="text-sm">
          {newsletterDetail.name} &copy; {new Date().getFullYear()} .
        </p>
      </footer>
    </div>
  );
}
