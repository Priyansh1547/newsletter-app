import { z } from "zod";

export const builderSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must contain 10 characters" })
    .optional()
    .or(z.literal("")),
  cta: z.string().min(5, { message: "CTA must be at least 5 characters" }),
  themeColor: z.enum(["orange", "amber", "white", "blue", "indigo", "pink"], {
    message: "select at least one theme color",
  }),
  slug: z.string().min(3, { message: "Slug must be 3 character" }),
});

export type BuilderData = z.infer<typeof builderSchema>;
