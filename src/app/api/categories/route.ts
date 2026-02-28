import { NextResponse } from "next/server";
import { getAllFakeApiProducts } from "@lib/api/products-fake-api.api";

export async function GET() {
    const products = await getAllFakeApiProducts();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const categories = products ? [...new Set(products.map((item: { category: any; }) => item.category))] : [];

    return NextResponse.json({
        success: !!categories,
        categories,
    });
}
