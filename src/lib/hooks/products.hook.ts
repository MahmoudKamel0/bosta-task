"use client";
import { useRouter, useSearchParams } from "next/navigation";

export function useProductsFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateParams = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set(key, value);
        params.set("page", "1");

        router.push(`/products?${params.toString()}`);
    };

    const priceFilter = (price: "asc" | "desc") => {
        updateParams("priceBy", price);
    };

    const categoryFilter = (category: string) => {
        updateParams("categoryBy", category);
    };

    return {
        priceFilter,
        categoryFilter,
    };
}
