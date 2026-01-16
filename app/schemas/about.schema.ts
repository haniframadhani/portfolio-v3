import * as z from "zod";

export const aboutSchema = z.object({
  content: z.string({ message: "Content is required" }).min(1, { message: "content is required" }),
});

export type AboutForm = z.output<typeof aboutSchema>;
