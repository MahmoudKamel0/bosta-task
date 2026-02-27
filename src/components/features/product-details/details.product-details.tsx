import { Banknote, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { IDetailsProductProps } from "@lib/types/ui/product";
import { Badge } from "@components/ui/badge.ui";
import { Button } from "@components/ui/button.ui";
import ShippingInformationProductDetails from "./shipping-information.product-details";

/**
 * Displays detailed information about a single product.
 *
 * @param {IDetailsProductProps} props - The props object containing the product details.
 * @returns {JSX.Element} The rendered product details section.
 */
export default function DetailsProduct({ product }: IDetailsProductProps) {
    return (
        <section id="details-product" className="flex w-1/2 flex-col gap-6 text-sm text-zinc-600">
            <Button variant="outline" asChild>
                <Link href="/products" className="flex w-fit items-center gap-2 text-xs">
                    <ChevronLeft size="15" /> Back to Products
                </Link>
            </Button>

            {/* Display product category as a badge */}
            <Badge>{product.category}</Badge>

            {/* Show product title and price */}
            <div>
                <h2 className="text-3xl font-bold text-zinc-700" aria-label="name product">
                    {product.title}
                </h2>
                <span className="text-md flex items-center gap-2 font-semibold" aria-label="price product">
                    <Banknote size="20" /> {product.price} EGP
                </span>
            </div>

            {/* Product description section */}
            <div className="rounded-xl border border-zinc-300 p-3 text-sm">
                <strong className="">Description</strong>
                <p>{product.description}</p>
            </div>

            {/* Add to Cart button */}
            <Button size="lg">Add To Cart</Button>

            <hr />

            {/* Show shipping information */}
            <ShippingInformationProductDetails />
        </section>
    );
}
