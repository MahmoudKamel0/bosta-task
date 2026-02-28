"use server";
import { createProductSchema } from "@lib/schema/api/products.schema";
import { TGetProduct } from "@lib/types/api/products";

export async function createProduct(product: TGetProduct) {
    try {
        const response = await fetch(`${process.env.BASE_DOMAIN_API_URL ?? "http://localhost:3000"}/api/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        const payload = await response.json();
        return createProductSchema.parse(payload);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("failed new product. Please try again later.");
    }
}
