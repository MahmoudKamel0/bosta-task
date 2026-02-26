import { Suspense } from "react";
import { IListProductsProps } from "@lib/types/ui/product";
import CardProductSkeleton from "@components/skeleton/card-product.skeleton";
import CardProduct from "./card.product";
import PaginationButtonsProduct from "./pagination-buttons.product";

export default async function ListProducts({ products, countPage }: IListProductsProps) {

    return (
        <>
            <div className="grid min-h-screen grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-4">
                {products.map((item) => (
                    <Suspense key={item.id} fallback={<CardProductSkeleton />}>
                        <CardProduct key={item.id} product={item} />
                    </Suspense>
                ))}
            </div>

            <PaginationButtonsProduct countPage={countPage} />
        </>
    );
}
