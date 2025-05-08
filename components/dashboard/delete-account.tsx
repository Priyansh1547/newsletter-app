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

export function DeleteAccount() {
  const [inputValue, setInputValue] = useState("");

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
              className="h-10 shadow-none rounded-sm transition-colors duration-150 hover:border-gray-500 focus:border-gray-500 focus-visible:ring-0 focus-visible:border-gray-500"
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
              className="bg-black rounded-sm hover:bg-black/80"
              disabled={inputValue !== "Delete"}
            >
              DELETE
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
