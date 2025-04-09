import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { MailIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function CreateNewsletterCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex h-52 w-80 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-dashed border-gray-300 bg-gray-50 text-gray-500 transition hover:bg-gray-100">
          <Plus className="size-4" />
          <span className="text-sm font-medium">Create newsletter</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <MailIcon />
          </div>
          <DialogHeader>
            <DialogTitle className="text-center">
              Create a newsletter
            </DialogTitle>
            <DialogDescription className="text-center">
              Subscribe to receive news and special offers.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-4">
          <div className="mt-2">
            <div className="relative space-y-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  placeholder="Morning brew"
                  type="text"
                  aria-label="Name"
                />
              </div>
              <div className="space-y-2">
                <Label>
                  Description{" "}
                  <span className="text-neutral-600">(optional)</span>
                </Label>
                <Textarea placeholder="Description of your newsletter" />
              </div>
            </div>
          </div>
          <Button type="button" className="w-full">
            Create a newsletter
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
