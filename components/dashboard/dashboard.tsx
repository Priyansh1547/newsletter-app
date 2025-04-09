import CreateNewsLetterCommponent from "./create-newsletter";
import NewsletterCard from "./newsletterCard";

export function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16 pt-16">
      <div className="space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="space-y-1">
            <h1 className="truncate text-4xl font-medium tracking-tight">
              Newsletters
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You currently have 1 active courses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-4">
          <CreateNewsLetterCommponent />
          <NewsletterCard />
          <NewsletterCard />
          <NewsletterCard />
          <NewsletterCard />
        </div>
      </div>
    </div>
  );
}
