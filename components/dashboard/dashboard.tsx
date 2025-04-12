"use client";

import { useEffect, useState } from "react";
import { getNewsletters } from "@/actions";
import { CreateNewsletterCard } from "./create-newsletter";
import { NewsletterCard } from "./newsletterCard";
import { NewsletterResponse } from "@/types/NewsletterResponse";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="w-80 h-52 rounded-xl border border-neutral-200 bg-white p-4 space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4" />
      </div>
      <Skeleton className="h-6 w-32 mt-4" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-8 w-full mt-4 rounded-md" />
    </div>
  );
}

export function Dashboard() {
  const [newsletters, setNewsletters] = useState<NewsletterResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await getNewsletters();
        if (response.newsletters) {
          setNewsletters(response.newsletters);
        } else {
          toast.error("No newsletters found or an error occurred");
        }
      } catch (error) {
        toast.error(`Failed to fetch newsletters ${error}`);
      } finally {
        setIsLoading(false);
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
              {isLoading
                ? "Loading newsletters..."
                : `You currently have ${newsletters.length} active newsletters.`}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-4">
          <CreateNewsletterCard />
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              {newsletters.map((n) => (
                <NewsletterCard
                  key={n.id}
                  newsletter={n}
                  onDelete={(id: string) =>
                    setNewsletters((prev) =>
                      prev.filter((item) => item.id !== id)
                    )
                  }
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
