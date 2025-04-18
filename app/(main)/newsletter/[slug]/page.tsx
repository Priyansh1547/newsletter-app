"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { newsletterSlugAtom } from "@/store/newsletter";
import { NewsletterDetail } from "@/actions";
import { toast } from "sonner";
import { Newsletter } from "@/components/newsletter";

export default function NewsletterPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [newsletterName, setNewsletterSlug] = useAtom(newsletterSlugAtom);

  useEffect(() => {
    if (!slug) return;

    setNewsletterSlug(slug.toString());

    const fetchNewsletter = async () => {
      const res = await NewsletterDetail({ newsletterSlug: slug.toString() });

      if (res.isOwner === false || res.error) {
        toast.error("You do not have access to this newsletter");
        router.push("/dashboard");
      }
    };

    fetchNewsletter();
  }, [slug, setNewsletterSlug, router]);

  return (
    <div className="p-10">
      {newsletterName}
      <Newsletter />
    </div>
  );
}
