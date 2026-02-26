import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { notFound, redirect } from "next/navigation";
import { getAllProducts } from "@lib/api/products.api";
import { PRODUCT_PAGE_METADATA } from "@lib/seo/product.seo";
import ListProducts from "@components/features/products/list.product";

export const metadata = PRODUCT_PAGE_METADATA;

/**
 * Product Listing Page
 * Handles fetching products with pagination, input validation, and error states.
 *
 * @param {ProductPageProps} props - The component props containing searchParams.
 * @returns {Promise<JSX.Element>} The rendered product list or a redirect/404.
 */
export default async function ProductPage({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page } = await searchParams;
    const pageNumber = Number.parseInt(page); // for don't write floating number or if user write words return NaN

    // If pageNumber is invalid or less than 1, redirect to the first page
    if (!pageNumber || pageNumber < 1) {
        redirect("/products?page=1");
    }

    const { countPage } = await getAllProducts(pageNumber);

    // Show 404 page if pageNumber is greater than highest page or is not a valid number
    if (pageNumber > countPage || Number.isNaN(pageNumber)) {
        notFound();
    }

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["products", pageNumber],
        queryFn: () => getAllProducts(pageNumber),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ListProducts countPage={countPage} pageNumber={pageNumber} />
        </HydrationBoundary>
    );
}
