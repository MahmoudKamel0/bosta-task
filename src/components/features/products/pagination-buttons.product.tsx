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

export default function PaginationButtonsProduct({ countPage }: PaginationButtonsProductProps) {
    const pageParams = Number(useSearchParams().get("page") ?? 1);
    const previousPage = pageParams > 1 ? pageParams - 1 : 1;
    const nextPage = pageParams < countPage ? pageParams + 1 : countPage;

    return (
        <Pagination className="mt-12">
            <PaginationContent>
                <PaginationItem>
                    {pageParams > 1 && <PaginationPrevious href={`/products?page=${previousPage}`} size="sm" />}
                </PaginationItem>
                {Array.from({ length: countPage }, (_, index) => index + 1).map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink href={`/products?page=${page}`}>{page}</PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    {pageParams < countPage && <PaginationNext href={`/products?page=${nextPage}`} size="sm" />}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
