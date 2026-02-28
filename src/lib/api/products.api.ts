// import { createProductSchema, productAllSchema } from "@lib/schema/api/products.schema";
import { TGetProduct } from "@lib/types/api/products";

export async function getAllProducts(pageNumber?: number, category?: string, price?: "asc" | "desc") {
    try {
        const response = await fetch(
            `${process.env.BASE_DOMAIN_API_URL ?? "http://localhost:3000"}/api/products?page=${pageNumber}&categoryBy=${category ?? ""}&priceBy=${price ?? ""}`,
            {
                next: { revalidate: 6000 },
            },
        );

        if (!response.ok) {
            throw new Error("Failed Fetch");
        }

        const product = await response.json();
        // return productAllSchema.parse(product);
        return product;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Sorry, we couldn't retrieve the product. Please try again later.");
    }
}

export async function createProduct(product: TGetProduct) {
    try {
        const response = await fetch(`${process.env.BASE_DOMAIN_API_URL ?? "http://localhost:3000"}/api/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        const payload = await response.json();
        // return createProductSchema.parse(payload);
        return payload;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("failed new product. Please try again later.");
    }
}
