import * as z from "zod";

export const PostValidation = z.object({
  post: z
    .string()
    .nonempty()
    .min(1, { message: "Minimum of 1 character(s)" })
    .max(1000, { message: "Maximum of 1000 characters" }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  post: z
    .string()
    .nonempty()
    .min(1, { message: "Minimum of 1 character(s)" })
    .max(1000, { message: "Maximum of 1000 characters" }),
});
