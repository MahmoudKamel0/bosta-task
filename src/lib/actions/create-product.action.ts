import { createProduct } from "@lib/api/products.api";
import { TGetProduct } from "@lib/types/api/products";

export async function createProductAction(product: TGetProduct) {
    return await createProduct(product);
}
