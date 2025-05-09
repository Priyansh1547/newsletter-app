"use client";

import { getNewsletters } from "@/actions";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

export function UsageCard() {
  const [length, setLength] = useState<number | null>(null);
  const maxNewsletters = 5;

  useEffect(() => {
    async function fetchNewsletterLength() {
      const newsletter = await getNewsletters();
      setLength(newsletter.newsletters?.length || 0);
    }

    fetchNewsletterLength();
  }, []);

  const percentageUsed = length !== null ? (length / maxNewsletters) * 100 : 0;

  return (
    <Card className="gap-2">
      <CardHeader className="flex items-center justify-between">
        <p className="text-xl/[1.375rem] font-semibold -tracking-4 md:text-2xl/[1.875rem] tracking-tighter">
          Usage
        </p>
      </CardHeader>

      <CardContent className="px-4 pt-2">
        <div className="space-y-6">
          <div className="bg-white rounded-md p-4 border border-[#b1b7b9] shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-gray-800">Newsletters</p>

              {length === null ? (
                <Skeleton className="h-6 w-16 rounded-full" />
              ) : (
                <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {length} of {maxNewsletters}
                </span>
              )}
            </div>

            <div className="space-y-2">
              {length === null ? (
                <Skeleton className="h-2 w-full bg-gray-200" />
              ) : (
                <>
                  <Progress
                    value={percentageUsed}
                    className="h-2 bg-gray-100"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{percentageUsed.toFixed(0)}% used</span>
                    <span>{maxNewsletters - length} remaining</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
