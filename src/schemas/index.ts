import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string().email(),
});
