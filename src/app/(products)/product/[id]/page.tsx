import Image from "next/image";
import { getOneProduct } from "@lib/api/products.api";
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
    const product = await getOneProduct(+id);

    return (
        <div className="relative flex min-h-screen flex-col gap-10 p-10 md:flex-row">
            {/* Show product image */}
            <div className="cover | h-full w-1/2 rounded-xl md:sticky md:top-0 md:left-0 md:h-[600px]">
                <Image className="object-contain p-10" src={product.image} alt={product.title} fill />
            </div>

            {/* Show detailed product info */}
            <DetailsProduct product={product} />
        </div>
    );
}
