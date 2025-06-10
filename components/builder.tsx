"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BuilderData, builderSchema } from "@/schema/builderSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { builder } from "@/actions";
import { usePathname } from "next/navigation";

export function BuilderCommponent() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();
  const slug = pathname.split("/")[2];

  const form = useForm<BuilderData>({
    resolver: zodResolver(builderSchema),
    defaultValues: {
      title: "",
      description: "",
      cta: "",
      themeColor: "orange",
      slug: slug,
    },
  });

  const onSubmit = async (value: BuilderData) => {
    setLoading(true);
    setError(null);

    const toastId = toast.loading("Building your website...");

    try {
      const result = await builder({
        title: value.title,
        description: value.description,
        cta: value.cta,
        themeColor: value.themeColor,
        slug: value.slug,
      });

      if (result?.error) {
        setError(result.description);
        toast.error(result.description, {
          id: toastId,
        });
        return;
      }

      toast.success("Website build successfully!", {
        id: toastId,
      });
    } catch (e) {
      toast.error("Something went wrong. Please try again.", {
        id: toastId,
      });
      setError("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-auto px-4 max-w-[460px] space-y-2">
        <h1 className="text-[31px] font-medium tracking-tighter text-balance">
          Welcome to Newsletter builder
        </h1>
        <p className="text-sm text-gray-600">
          We need some info about how your newsletter page should look. You’ll
          be able to edit this later.
        </p>

        <div className="flex justify-center space-x-2 mt-8">
          <button
            className={`h-1 w-36 rounded ${step >= 1 ? "bg-orange-400" : "bg-gray-300"} hover:cursor-pointer`}
            onClick={() => setStep(1)}
          ></button>
          <button
            className={`h-1 w-36 rounded ${step >= 2 ? "bg-orange-400" : "bg-gray-300"} `}
          ></button>
        </div>
      </div>

      <Card className="w-full max-w-[550px] rounded-md border-subtle bg-sidebar mt-10 border">
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {step === 1 && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Slug</Label>
                        <FormControl>
                          <div className="flex rounded-md shadow-xs">
                            <span className="border-[#b1b7b9] inline-flex items-center rounded-s-sm border px-2 text-sm text-gray-600/90">
                              stackmail.vercel.app/
                            </span>
                            <Input
                              className="rounded-s-none bg-white"
                              readOnly
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Title</Label>
                        <FormControl>
                          <Input
                            className="bg-white"
                            type="text"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                            }}
                            placeholder="Title"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <Label>
                          Description{" "}
                          <span className="text-gray-500">(optional) </span>
                        </Label>
                        <FormControl>
                          <Textarea
                            placeholder="short decription of your newsletter"
                            className="bg-white rounded-sm"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="w-full transition-color duration-200 bg-black hover:bg-gray-900 rounded-sm"
                    type="button"
                    onClick={async () => {
                      const isValid = await form.trigger([
                        "title",
                        "description",
                        "slug",
                      ]);
                      if (isValid) {
                        setStep((c) => c + 1);
                      }
                    }}
                  >
                    Next Step <ArrowRight />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="cta"
                    render={({ field }) => (
                      <FormItem>
                        <Label>
                          CTA{" "}
                          <span className="text-gray-500">
                            (Call to Action){" "}
                          </span>
                        </Label>
                        <FormControl>
                          <Input
                            placeholder="Subcribe to newsletter"
                            className="bg-white rounded-sm"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="themeColor"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Theme color</Label>
                        <FormControl>
                          <RadioGroup
                            className="flex gap-1.5"
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <RadioGroupItem
                              value="orange"
                              aria-label="orange"
                              className="size-6 border-orange-500 bg-orange-500 shadow-none data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
                            />
                            <RadioGroupItem
                              value="amber"
                              aria-label="amber"
                              className="size-6 border-amber-500 bg-amber-500 shadow-none data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500"
                            />
                            <RadioGroupItem
                              value="white"
                              aria-label="white"
                              className="size-6 border-white bg-white shadow-none data-[state=checked]:border-white data-[state=checked]:bg-white"
                            />
                            <RadioGroupItem
                              value="blue"
                              aria-label="blue"
                              className="size-6 border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
                            />
                            <RadioGroupItem
                              value="indigo"
                              aria-label="indigo"
                              className="size-6 border-indigo-500 bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
                            />
                            <RadioGroupItem
                              value="pink"
                              aria-label="pink"
                              className="size-6 border-pink-500 bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
                            />
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  <Button
                    className="w-full transition-color duration-200 bg-black hover:bg-gray-900 rounded-sm"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Building...
                      </div>
                    ) : (
                      "Build website"
                    )}
                  </Button>
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
