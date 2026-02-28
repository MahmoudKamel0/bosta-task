import { NextResponse } from "next/server";
import { createFakeApiProduct, getAllFakeApiProducts } from "@lib/api/products-fake-api.api";
import { sortProductsByPriceAndCategory } from "@lib/utils/features/product.util";

export async function GET(request: Request) {
    const PAGE_SIZE = 8; //=> count products display in every page
    const { searchParams } = new URL(request.url);
    const allProducts = await getAllFakeApiProducts();

    const page = Number(searchParams.get("page"));
    const categoryBy = searchParams.get("categoryBy") ?? "";
    const priceBy: "" | "asc" | "desc" = (searchParams.get("priceBy") as "" | "asc" | "desc") ?? "";

    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const sortProducts = sortProductsByPriceAndCategory(allProducts, categoryBy, priceBy);
    const products = sortProducts.slice(start, end);

    const pageCount = Math.ceil(3);

    return NextResponse.json({
        metadata: {
            success: products.length !== 0,
            pageCount,
            // lengthData: filtered.length,
            categoryBy,
            priceBy,
        },
        products: products,
    });
}

export async function POST(request: Request) {
    const body = await request.json();
    const product = await createFakeApiProduct(body);

    return NextResponse.json({
        metadata: {
            success: !!product,
            message: "successfully create product",
        },
        product,
    });
}
