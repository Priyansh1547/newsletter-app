"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAtomValue } from "jotai";
import { newsletterSlugAtom } from "@/store/newsletter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BuilderData, builderSchema } from "@/schema/builderSchema";

export function BuilderCommponent() {
  const [step, setStep] = useState(1);
  const newsletterSlug = useAtomValue(newsletterSlugAtom);

  // TODO: Use form for submitting data

  // const form = useForm<BuilderData>({
  //   resolver: zodResolver(builderSchema),
  //   defaultValues: {
  //     title: "",
  //     description: "",
  //     cta: "",
  //     themeColor: "",
  //     slug: "",
  //   },
  // });

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
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Slug</Label>
                <div className="flex rounded-md shadow-xs">
                  <span className="border-input inline-flex items-center rounded-s-sm border px-2 text-sm text-gray-600/90">
                    stackmail.vercel.app/
                  </span>
                  <Input
                    className="-ms-px rounded-s-none shadow-none bg-white"
                    defaultValue={newsletterSlug}
                    readOnly
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="Title">Title</Label>
                <Input placeholder="Acme" className="bg-white rounded-sm" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="decription">
                  Decription <span className="text-gray-500">(optional) </span>
                </Label>
                <Textarea
                  placeholder="short decription of your newsletter"
                  className="bg-white rounded-sm"
                />
              </div>
              <Button
                className="w-full transition-color duration-200 bg-black hover:bg-gray-900 rounded-sm"
                onClick={() => setStep((c) => c + 1)}
              >
                Next Step <ArrowRight />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="Title">
                  CTA <span className="text-gray-500">(Call to Action)</span>
                </Label>
                <Input
                  placeholder="Subcribe to newsletter"
                  className="bg-white rounded-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="decription">Footer</Label>
                <Input
                  defaultValue={`${newsletterSlug} © ${new Date().getFullYear()}`}
                  className="bg-white rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <fieldset className="space-y-4">
                  <Label>Theme color</Label>
                  <RadioGroup className="flex gap-1.5" defaultValue="orange">
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
                      aria-label="Blue"
                      className="size-6 border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
                    />
                    <RadioGroupItem
                      value="indigo"
                      aria-label="Indigo"
                      className="size-6 border-indigo-500 bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
                    />
                    <RadioGroupItem
                      value="pink"
                      aria-label="Pink"
                      className="size-6 border-pink-500 bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
                    />
                  </RadioGroup>
                </fieldset>
              </div>
              <Button
                className="w-full transition-color duration-200 bg-black hover:bg-gray-900 rounded-sm"
                type="submit"
              >
                Build
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
