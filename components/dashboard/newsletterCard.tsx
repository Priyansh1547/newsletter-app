"use client";

import { NewsletterResponse } from "@/types";
import { AlertTriangle, MoreVertical } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteNewsletter } from "@/actions";
import { toast } from "sonner";

export function NewsletterCard({
  newsletter,
  onDelete,
}: {
  newsletter: NewsletterResponse;
  onDelete?: (id: string) => void;
}) {
  const handleDelete = async () => {
    const res = await deleteNewsletter({
      name: newsletter.name,
      slug: newsletter.slug,
    });

    if (res.error) {
      toast.error("Fail to delete newsletter try again later");
    } else {
      toast.success("deleted newsletter");
      onDelete?.(newsletter.id);
    }
  };

  return (
    <div className="relative w-80 h-52 rounded-xl border border-neutral-200 bg-white hover:bg-gray-50 transition-all duration-200 flex flex-col justify-between p-4 space-y-4">
      <div className="absolute top-3 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-md hover:bg-gray-100">
              <MoreVertical className="w-4 h-4 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem variant="destructive" onClick={handleDelete}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Link
        href={`/newsletter/${newsletter.slug}`}
        className="flex flex-col justify-between h-full"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-gray-500" />
          </div>
          <p className="text-sm text-gray-500">{newsletter.slug}</p>
        </div>

        <div className="space-y-1 mt-auto">
          <p className="text-xs text-gray-400 font-medium">Free Plan</p>
          <h3 className="text-base font-semibold tracking-tight text-gray-800">
            {newsletter.name}
          </h3>
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-50 border border-neutral-200 px-3 py-1 rounded-md">
            <div className="w-2 h-2 pt-2 rounded-full bg-black"></div>
            Active
          </span>
        </div>
      </Link>
    </div>
  );
}
