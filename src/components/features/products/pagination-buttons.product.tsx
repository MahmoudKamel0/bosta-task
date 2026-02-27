"use client";
import { useSearchParams } from "next/navigation";
import { PaginationButtonsProductProps } from "@lib/types/ui/product";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@components/ui/pagination.ui";

/**
 * PaginationButtonsProduct renders pagination controls for product listing pages.
 *
 * It generates numbered page links as well as "previous" and "next" buttons
 * based on the total page count and the current page from URL search parameters.
 *
 * @param {PaginationButtonsProductProps} props - The props object.
 * @param {number} props.countPage - Total number of product pages available.
 * @returns {JSX.Element} The rendered pagination component.
 */
export default function PaginationButtonsProduct({ countPage }: PaginationButtonsProductProps) {
    const pageParams = Number(useSearchParams().get("page") ?? 1);
    const previousPage = pageParams > 1 ? pageParams - 1 : 1;
    const nextPage = pageParams < countPage ? pageParams + 1 : countPage;

    return (
        <Pagination className="mt-12">
            <PaginationContent>
                {/* Button Back step Page */}
                <PaginationItem>
                    {pageParams > 1 && <PaginationPrevious href={`/products?page=${previousPage}`} size="sm" />}
                </PaginationItem>

                {/* render button length pages */}
                {Array.from({ length: countPage }, (_, index) => index + 1).map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink href={`/products?page=${page}`}>{page}</PaginationLink>
                    </PaginationItem>
                ))}

                {/* Button Next step Page */}
                <PaginationItem>
                    {pageParams < countPage && <PaginationNext href={`/products?page=${nextPage}`} size="sm" />}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
