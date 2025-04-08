"use client";
import { Button } from "../ui/button";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            Subjects
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You currently have 1 active courses.
          </p>
        </div>
        <Button>Create a Create a subjects</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2"></div>
    </div>
  );
}
