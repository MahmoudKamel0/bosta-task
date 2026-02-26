import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { getAllProducts } from "@lib/api/products.api";
import ListProducts from "@components/features/products/list.product";
import ListProductsSkeleton from "@components/skeleton/list-products.skeleton";

interface ProductPageProps {
    searchParams?: {
        page?: string;
        [key: string]: unknown;
    };
}

export default async function ProductPage({ searchParams }: {searchParams: ProductPageProps}) {
    const { page } = await searchParams;
    const { products, countPage } = await getAllProducts(page);

    // If page is not set or is invalid (NaN or less than 1), redirect to first page
    if (!page || isNaN(page) || page < 1) {
        redirect("/products?page=1");
    }

    if (page > 3) notFound();

    return (
        <Suspense fallback={<ListProductsSkeleton />}>
            <ListProducts products={products} countPage={countPage}  />
        </Suspense>
    );
}
