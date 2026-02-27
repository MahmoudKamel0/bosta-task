import z from "zod";
import { categoriesSchema } from "@lib/schema/api/categories.schema";

export = CategoriesApiTypes;
export as namespace CategoriesApiTypes;

namespace CategoriesApiTypes {
    type TGetAllCategories = z.infer<typeof categoriesSchema>;
}
