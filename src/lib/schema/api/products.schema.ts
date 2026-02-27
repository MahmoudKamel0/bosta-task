import z from "zod";

/**
 * Schema for a single product returned by Fake Store API.
 *
 * @typedef {Object} Product
 * @property {number} id - Unique product identifier.
 * @property {string} title - Name/title of the product.
 * @property {number} price - Price of the product.
 * @property {string} description - Product description.
 * @property {string} category - Product category.
 * @property {string} image - URL of the product image.
 * @property {Object} rating
 * @property {number} rating.rate - Average product rating.
 * @property {number} rating.count - Number of reviews for this product.
 */
export const productSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    rating: z.object({
        rate: z.number(),
        count: z.number(),
    }),
});

/**
 * Schema for an array of products from the Fake Store API.
 *
 * @typedef {ProductFakeApi[]} GetAllProductsFakeApi
 */
export const getAllProductsFakeApiSchema = z.array(productSchema);

/**
 * Schema for the response object containing product data and metadata.
 *
 * @typedef {Object} ProductApiResponse
 * @property {Object} metadata - Metadata information about the product query.
 * @property {boolean} metadata.success - Whether the query was successful.
 * @property {number} metadata.pageCount - Total number of pages available.
 * @property {string} metadata.categoryBy - Filter applied by category.
 * @property {string} metadata.priceBy - Filter applied by price sorting.
 * @property {ProductFakeApi[]} products - Array of product objects.
 */
export const productAllSchema = z.object({
    metadata: z.object({
        success: z.boolean(),
        pageCount: z.number(),
        // lengthData: z.number(),
        categoryBy: z.string().optional(),
        priceBy: z.string(),
    }),
    products: z.array(productSchema),
});

/**
 * Schema for input validation when creating a new product.
 *
 * @typedef {Object} CreateProductInput
 * @property {number} id - Unique identifier for the product (must be valid number).
 * @property {string} title - Title of the product (required and must not be empty).
 * @property {number} price - Price of the product (must be valid and > 0).
 * @property {string} description - Product description (required and must not be empty).
 * @property {string} category - Product category (required and must not be empty).
 * @property {string} image - URL for the product image (must be a valid URL).
 */
export const createProductSchema = z.object({
    id: z.number({ error: "Product ID must be a valid number" }),
    title: z.string({ error: "Product title is required" }).min(1, "Title cannot be empty"),
    price: z.number({ error: "Price must be a valid number" }).positive("Price must be greater than 0").min(0),
    description: z.string({ error: "Description is required" }).min(1, "Description cannot be empty"),
    category: z.string({ error: "Category is required" }).min(1, "Category cannot be empty"),
    image: z.url("Image must be a valid URL"),
});
