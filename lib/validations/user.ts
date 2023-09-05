import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(2, { message: "Minimum of two characters" })
    .max(30, { message: "Maximum of thirty characters" }),
  username: z.string().min(2).max(30),
  bio: z
    .string()
    .min(2, { message: "minimum of 1 character" })
    .max(1000, { message: "maximum of 1000 characters" }),
});
