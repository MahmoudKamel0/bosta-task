import z from "zod";
import { getAllProductsSchema, productSchema } from "@lib/schema/api/products.schema";

export = ProductsApiTypes;
export as namespace ProductsApiTypes;

namespace ProductsApiTypes {
    type TGetAllProducts = z.infer<typeof getAllProductsSchema>;

    type TGetProduct = z.infer<typeof productSchema>
}
