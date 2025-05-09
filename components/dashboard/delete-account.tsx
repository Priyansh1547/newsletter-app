"use client";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { deleteAccount } from "@/actions";
import { toast } from "sonner";
import { signOut } from "@/lib/auth-client";

export function DeleteAccount() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handelDelete = async () => {
    setLoading(true);
    const toastId = toast.loading("Deleting...");

    try {
      const res = await deleteAccount();

      if (res.error) {
        toast.error(`${res.description}`, {
          id: toastId,
        });
        return;
      }

      toast.success(`${res.description}`, {
        id: toastId,
      });

      await signOut();

      setInputValue("");
    } catch (e) {
      console.error("Account deletion failed:", e);
      toast.error("Something went wrong. Please try again.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete Account</Button>
      </DialogTrigger>
      <DialogContent className="w-[400px] p-5">
        <div className="flex flex-col items-center gap-2">
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your account? This action is
              irreversible
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Type 'Delete' to confirm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="h-10"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" className="rounded-sm" variant="outline">
                CANCEL
              </Button>
            </DialogClose>
            <Button
              type="button"
              className="rounded-sm"
              variant="dark"
              disabled={inputValue !== "Delete" || loading}
              onClick={handelDelete}
            >
              DELETE
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
