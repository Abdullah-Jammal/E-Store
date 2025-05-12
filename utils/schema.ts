import { z } from "zod";

export const productSchema = z.object({
  name: z.coerce
    .string()
    .min(4, { message: "must have more than 4 charectors!" }),
  description: z.string().refine(
    (des) => {
      const wordCount = des.split(" ").length;
      return wordCount >= 10 && wordCount <= 200;
    },
    {
      message: "must be between 10 and 200 word!",
    }
  ),
  price: z.coerce.number().int().min(0, { message: "must be more than 0" }),
  featured: z.coerce.boolean(),
});
