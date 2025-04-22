"use client";
import { Plus, MailIcon, Loader2 } from "lucide-react";
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
import { Label } from "../ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import slugify from "@sindresorhus/slugify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createNewsletter } from "@/actions";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
});

type Newsletter = z.infer<typeof formSchema>;

export function CreateNewsletterCard() {
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<Newsletter>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: Newsletter) => {
    setIsChecking(true);
    setError(null);

    const slugifySlug = slugify(values.slug);
    const toastId = toast.loading("Creating newsletter...");

    try {
      const result = await createNewsletter({
        name: values.name,
        slug: slugifySlug,
      });

      if (result?.error) {
        setError(result.error);
        toast.error(result.error, {
          id: toastId,
        });
        return;
      }

      toast.success("Newsletter created successfully!", {
        id: toastId,
      });

      router.push(`/newsletter/${values.name}`);
    } catch (e) {
      console.error("Unexpected error:", e);
      toast.error("Something went wrong. Please try again.", {
        id: toastId,
      });
      setError("Unexpected error. Please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    form.setValue("name", name);
    form.setValue("slug", slugify(name));
    setError(null);
  };

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
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full border">
            <MailIcon />
          </div>
          <DialogHeader>
            <DialogTitle className="text-center">
              Create a newsletter
            </DialogTitle>
            <DialogDescription className="text-center">
              Create a new newsletter with stack mail
            </DialogDescription>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-2 space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label>Newsletter Name</Label>
                    <FormControl>
                      <Input
                        placeholder="Acme, Inc."
                        {...field}
                        onChange={handleNameChange}
                        className="rounded-md border-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <Label>Slug</Label>
                    <FormControl>
                      <Input
                        placeholder="acme"
                        {...field}
                        onChange={(e) => {
                          setError(null);
                          field.onChange(e);
                        }}
                        className="rounded-md border-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <Button className="w-full" type="submit" disabled={isChecking}>
              {isChecking ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </div>
              ) : (
                "Create newsletter"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
