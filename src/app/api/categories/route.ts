import { NextResponse } from "next/server";
import { getAllFakeApiProducts } from "@lib/api/products-fake-api.api";

export async function GET() {
    const products = await getAllFakeApiProducts();
    const categories = products ? [...new Set(products.map((item) => item.category))] : [];

    return NextResponse.json({
        success: !!categories,
        categories,
    });
}
