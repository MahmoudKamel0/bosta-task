"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { Suspense } from "react";
import { getAllCategories } from "@lib/api/categories.api";
import { useProductsFilters } from "@lib/hooks/products.hook";
import FilterDropdownProductSkeleton from "@components/skeleton/filter-dropdown-product.skeleton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu.ui";

/**
 * FilterDropdownProduct component provides dropdown menus
 * for filtering product listings by price and category.
 *
 * The component retrieves available categories from the store
 * and renders two dropdown menus:
 *   1. Filter by Price: Allows sorting by high or low price.
 *   2. Filter by Category: Allows filtering products by available categories.
 *
 * @component
 * @returns {JSX.Element} The rendered dropdown filter controls for products.
 */
export default function FilterDropdownProduct() {
    const { data } = useSuspenseQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
    });

    const { priceFilter, categoryFilter } = useProductsFilters();

    return (
        <Suspense fallback={<FilterDropdownProductSkeleton />}>
            <div className="flex items-center gap-5">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs">
                        By Price <ChevronDown size="15" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => priceFilter("asc")}>price high</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => priceFilter("desc")}>price low</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs">
                        By category <ChevronDown size="15" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {data.categories.map((item) => (
                            <DropdownMenuItem key={item} onClick={() => categoryFilter(item)}>
                                {item}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </Suspense>
    );
}
