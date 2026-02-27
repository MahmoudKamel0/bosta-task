import { getAllProductsFakeApiSchema, productSchema } from "@lib/schema/api/products.schema";
import { TCreateProduct } from "@lib/types/api/products";

/**
 * Fetches all products and returns a paginated list for the specified page.
 *
 * @param {number} page - The current page number to fetch products for (1-based).
 * @returns {Promise<{ products: TGetAllProducts, countPage: number }>}
 * An object containing the products for the specified page and the total page count.
 */
export async function getAllFakeApiProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            next: { revalidate: 6000 },
        });
        const products = await response.json();

        return getAllProductsFakeApiSchema.parse(products);

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
export async function getOneFakeApiProduct(id: number) {
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

export async function createFakeApiProduct(product: TCreateProduct) {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        const payload = await response.json();
        return payload;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("failed create product. Please try again later.");
    }
}
