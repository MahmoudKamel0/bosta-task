import z from "zod";
import { getAllProductsFakeApiSchema, productSchema, createProductSchema, productAllSchema } from "@lib/schema/api/products.schema";

export = ProductsApiTypes;
export as namespace ProductsApiTypes;

namespace ProductsApiTypes {
    type TGetAllFakeApiProducts = z.infer<typeof getAllProductsFakeApiSchema>;

    type TGetAllProducts = z.infer<typeof productAllSchema>;

    type TGetProduct = z.infer<typeof productSchema>;

    type TCreateProduct = z.infer<typeof createProductSchema>;
}
