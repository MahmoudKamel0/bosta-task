import { getAllProductsSchema, productSchema } from "@lib/schema/api/products.schema";

/**
 * Fetches all products and returns a paginated list for the specified page.
 *
 * @param {number} page - The current page number to fetch products for (1-based).
 * @returns {Promise<{ products: TGetAllProducts, countPage: number }>}
 * An object containing the products for the specified page and the total page count.
 */
export async function getAllProducts(page: number) {
    try {
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

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Sorry, we couldn't retrieve the product. Please try again later.");
    }
}

/**
 * Fetches a single product by its ID.
 *
 * @param {number} id - The unique identifier of the product to retrieve.
 * @returns {Promise<TGetProduct>} A promise that resolves to the detailed product object.
 */
export async function getOneProduct(id: number) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            next: { revalidate: 6000 },
        });
        const product = await response.json();

        return productSchema.parse(product);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Sorry, we couldn't retrieve the product. Please try again later.");
    }
}
