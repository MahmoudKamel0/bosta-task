import { getAllProductsSchema } from "@lib/schema/api/products.schema";

/**
 * Fetches all products and returns a paginated list for the specified page.
 *
 * @param {number} page - The current page number to fetch products for (1-based).
 * @returns {Promise<{ products: TGetAllProducts, countPage: number }>} 
 * An object containing the products for the specified page and the total page count.
 */
export async function getAllProducts(page: number) {
    const PAGE_SIZE = 8; //=> count products display in every page
    const response = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 6000 },
    });

    const products = await response.json();

    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return {
        products: getAllProductsSchema.parse(products.slice(start, end)),
        countPage: Math.ceil(products.length / PAGE_SIZE), //=> return count pages all products / count display item 
    };
}
