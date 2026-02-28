import Image from "next/image";
import { getOneFakeApiProduct } from "@lib/api/products-fake-api.api";
import DetailsProduct from "@components/features/product-details/details.product-details";

/**
 * Renders the details page for a single product.
 *
 * Fetches the product by its ID from the URL params and displays all information, including images and details.
 *
 * @param {{ params: { id: string } }} props - The route parameters including product ID.
 * @returns {Promise<JSX.Element>} The rendered product details page.
 */
export default async function ProductDetails({ params }: { params: { id: string } }) {
    const { id } = await params;
    const product = await getOneFakeApiProduct(+id);

    return (
        <div className="flex min-h-screen flex-col gap-10 p-10 md:flex-row">
            {/* Show product image */}
            <div className="cover | relative h-[600px] w-full rounded-xl md:sticky md:top-0 md:left-0 md:w-1/2">
                <Image className="object-contain md:p-10" src={product.image} alt={product.title} fill />
            </div>

            {/* Show detailed product info */}
            <DetailsProduct product={product} />
        </div>
    );
}
