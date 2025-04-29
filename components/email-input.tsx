"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/actions";

interface EmailInputProps {
  slug: string;
  cta: string;
}

export function EmailInput(data: EmailInputProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const toastId = toast.loading("Subscribing...");

    try {
      const res = await subscribeNewsletter({
        slug: data.slug,
        email,
      });

      if (res.error) {
        toast.error(`${res.description}`, {
          id: toastId,
        });
        return;
      }

      toast.success(`${res.description}`, {
        id: toastId,
      });

      setEmail("");
    } catch (e) {
      toast.error("Something went wrong. Please try again.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="flex rounded-md shadow-xs min-w-sm"
      >
        <Input
          className="rounded-r-none bg-white h-[40px] shadow-none focus-visible:ring-0 border-primary"
          placeholder="Type your Email..."
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="rounded-s-none w-30 h-[40px] focus-visible:ring-0"
          disabled={loading}
        >
          {data.cta}
        </Button>
      </form>
    </>
  );
}
