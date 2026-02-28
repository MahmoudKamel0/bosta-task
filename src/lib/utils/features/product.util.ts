import { TGetAllFakeApiProducts } from "@lib/types/api/products";

/**
 * Filters and sorts a list of products by category and price.
 *
 * @param {TGetAllProducts} data - The product data object containing the array of products.
 * @param {string} category - The selected category to filter by. If empty, all categories are included.
 * @param {"asc" | "desc"} price - The sort order for price, "asc" for ascending, "desc" for descending.
 * @returns {Array} The filtered and sorted array of products.
 */
export const sortProductsByPriceAndCategory = (products: TGetAllFakeApiProducts, category: string, price: "" | "asc" | "desc") => {
    return products
        .filter((product) => !category || product.category === category)
        .sort((a, b) => {
            // Sort ascending by price if filterBy is "priceAsc"
            if (price === "asc") return a.price - b.price;
            // Sort descending by price if filterBy is "priceDesc"
            if (price === "desc") return b.price - a.price;
            // Otherwise, preserve original order
            return 0;
        });
};
