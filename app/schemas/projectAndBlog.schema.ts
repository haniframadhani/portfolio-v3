import * as z from "zod";
import { formatBytes } from "~/composables/formatBytes";

const MAX_TITLE_LENGTH = 255;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const baseSchema = {
  title: z
    .string({ message: "Title is required" })
    .min(1, { message: "Title is required" })
    .max(MAX_TITLE_LENGTH, { message: `Title is longer than ${MAX_TITLE_LENGTH} character` }),
  excerpt: z.string({ message: "Excerpt is required" }).min(1, { message: "excerpt is required" }),
  content: z.string({ message: "Content is required" }).min(1, { message: "content is required" }),
};

const imageSchema = z
  .instanceof(File, {
    message: "Please select an image file.",
  })
  .refine((file) => file.size <= MAX_FILE_SIZE, {
    message: `The image is too large. Please choose an image smaller than ${formatBytes(MAX_FILE_SIZE)}.`,
  })
  .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
    message: "Please upload a valid image file (JPEG, PNG, or WebP).",
  });

export const createProjectAndBlogSchema = z.object({
  thumbnail: imageSchema,
  ...baseSchema,
});

export const updateProjectAndBlogSchema = z.object({
  thumbnail: imageSchema.optional(),
  ...baseSchema,
});

export type CreateProjectAndBlogForm = z.output<typeof createProjectAndBlogSchema>;
export type UpdateProjectAndBlogForm = z.output<typeof updateProjectAndBlogSchema>;
