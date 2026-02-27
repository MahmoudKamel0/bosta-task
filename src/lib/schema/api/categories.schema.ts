import z from "zod";

export const categoriesSchema = z.object({
    success: z.boolean(),
    categories: z.array(z.string()),
});
