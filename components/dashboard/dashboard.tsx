import { CreateNewsletterCard } from "./create-newsletter";
import { NewsletterCard } from "./newsletterCard";
import { useState, useEffect } from "react";
import { getNewsletters } from "@/actions";
import { NewsletterResponse } from "@/types/NewsletterResponse";

export function Dashboard() {
  const [newsletters, setNewsletters] = useState<NewsletterResponse[]>([]);

  useEffect(() => {
    const fetchNewsletters = async () => {
      const response = await getNewsletters();
      if (response.newsletters) {
        setNewsletters(response.newsletters);
      } else {
        console.error(
          "No newsletters found or an error occurred:",
          response.error
        );
      }
    };

    fetchNewsletters();
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 p-16 pt-16">
      <div className="space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="space-y-1">
            <h1 className="truncate text-4xl font-medium tracking-tight">
              Newsletters
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You currently have {newsletters.length} active newsletters.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-4">
          <CreateNewsletterCard />
          {newsletters.map((newsletter) => (
            <NewsletterCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      </div>
    </div>
  );
}
