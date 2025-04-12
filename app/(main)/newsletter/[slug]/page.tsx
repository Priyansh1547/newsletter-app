"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { newsletterSlugAtom } from "@/store/newsletter";
import { checkNewsletter } from "@/actions";
import { toast } from "sonner";

export default function NewsletterPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [newsletterName, setNewsletterSlug] = useAtom(newsletterSlugAtom);

  useEffect(() => {
    if (!slug) return;

    setNewsletterSlug(slug.toString());

    const fetchNewsletter = async () => {
      const res = await checkNewsletter({ newsletterSlug: slug.toString() });

      if (res.isOwner === false || res.error) {
        toast.error("You do not have access to this newsletter");

        router.push("/dashboard");
      }
    };

    fetchNewsletter();
  }, [slug, setNewsletterSlug, router]);

  return (
    <div>
      {newsletterName ? <div>{newsletterName}</div> : <div>Loading...</div>}
    </div>
  );
}
