import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "./ui/card";
import { ExternalLink, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type EmailCardProps = {
  subject: string;
  sentAt: Date;
  newsletterTitle: string;
  send: boolean;
};

export function EmailCard({ subject, newsletterTitle, send }: EmailCardProps) {
  return (
    <Card className="w-full mx-auto flex gap-2 rounded-xl shadow-sm border bg-white dark:bg-zinc-900">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="/github-icon.svg" alt="icon" />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <CardTitle className="text-sm font-medium">{subject}</CardTitle>
        </div>
        <button className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border">
          {send ? "Done" : "Fail"}
        </button>
      </CardHeader>

      <CardContent className="flex flex-row items-center gap-2 text-sm text-muted-foreground px-4 py-0">
        <ExternalLink size={14} />
        <p className="truncate">
          {newsletterTitle ?? "newsletter.example.com/email/preview"}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-4 py-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div className="text-muted-foreground">⋮</div>
      </CardFooter>
    </Card>
  );
}
