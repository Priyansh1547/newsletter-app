import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ newsletter: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { newsletter } = await params;

  return {
    title: newsletter.charAt(0).toUpperCase() + newsletter.slice(1),
    description: `Subscribe to the ${newsletter} newsletter for updates.`,
  };
}

export default function Layout({ children }: Props) {
  return <div>{children}</div>;
}
