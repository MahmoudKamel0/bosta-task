"use client";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { getAllProducts } from "@lib/api/products.api";
import { IListProductsProps } from "@lib/types/ui/product";
import CardProductSkeleton from "@components/skeleton/card-product.skeleton";
import CardProduct from "./card.product";
import PaginationButtonsProduct from "./pagination-buttons.product";

/**
 * Displays a paginated grid of products.
 *
 * Fetches products for the specified page and renders each product card in a responsive grid.
 * Includes pagination controls to navigate between pages.
 *
 * @param {IListProductsProps} props - The props object containing pagination info.
 * @param {number} props.countPage - Total number of product pages available.
 * @param {number} props.pageNumber - The current page number being viewed.
 * @returns {JSX.Element} The rendered grid of products with pagination controls.
 */
export default function ListProducts({ countPage, pageNumber }: IListProductsProps) {
    const { data } = useQuery({
        queryKey: ["products", pageNumber],
        queryFn: async () => await getAllProducts(pageNumber),
    });

    return (
        <>
            {/* // Render products grid with suspense fallback for each card */}
            <div className="grid min-h-screen grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-4">
                {data?.products.map((item) => (
                    <Suspense key={item.id} fallback={<CardProductSkeleton />}>
                        <CardProduct key={item.id} product={item} />
                    </Suspense>
                ))}
            </div>

            {/* Renders pagination controls for products list */}
            <PaginationButtonsProduct countPage={countPage} />
        </>
    );
}
