"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getAllProducts } from "@lib/api/products.api";
import { TGetAllProducts } from "@lib/types/api/products";
import { IListProductsProps } from "@lib/types/ui/product";
import ContainerLayout from "@components/layouts/container/index.container";
import ListProductsSkeleton from "@components/skeleton/list-products.skeleton";
import CardProduct from "./card.product";
import FilterDropdownProduct from "./filter-dropdown.product";
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
export default function ListProducts({ pageNumber, categoryBy, priceBy }: IListProductsProps) {
    // Fetch product data for a given page using React Query.
    const { data } = useSuspenseQuery<TGetAllProducts>({
        queryKey: ["products", pageNumber, categoryBy, priceBy],
        queryFn: async () => await getAllProducts(pageNumber, categoryBy, priceBy),
    });

    if (pageNumber > data.metadata.pageCount) {
        notFound();
    }

    return (
        <ContainerLayout>
            <div className="my-10 flex items-center justify-between py-4">
                <h2>All products</h2>
                <FilterDropdownProduct />
            </div>

            <Suspense fallback={<ListProductsSkeleton />}>
                <div className="grid min-h-screen grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-4">
                    {data.products.length === 0 ? (
                        <p>Not found product</p>
                    ) : (
                        data.products.map((item) => <CardProduct key={item.id} product={item} />)
                    )}
                </div>
            </Suspense>

            <PaginationButtonsProduct countPage={data.metadata.pageCount} />
        </ContainerLayout>
    );
}
