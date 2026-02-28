import { categoriesSchema } from "@lib/schema/api/categories.schema";

export async function getAllCategories() {
    try {
        const response = await fetch("/api/categories", {
            next: { revalidate: 6000 },
        });
        const categories = await response.json();

        return categoriesSchema.parse(categories);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Sorry, we couldn't retrieve the categories. Please try again later.");
    }
}
