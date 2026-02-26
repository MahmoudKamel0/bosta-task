import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ICardProductProps } from "@lib/types/ui/product";
import { Button } from "@components/ui/button.ui";
import { Card, CardContent, CardFooter } from "@components/ui/card.ui";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip.ui";

/**
 * Product card component displaying product image, title, category, price, and actions.
 *
 * @component
 * @example
 * <CardProduct />
 *
 * @returns {JSX.Element} The rendered product card.
 */
export default function CardProduct({ product }: ICardProductProps) {
    return (
        <Card>
            {/* Product image with link to details page */}
            <CardContent>
                <Link href="/" className="relative inset-0 block h-64 overflow-hidden rounded-lg">
                    <Image src={product.image} alt={product.title} className="object-contain p-5" fill />
                </Link>
            </CardContent>

            <CardFooter className="flex-col justify-start gap-2 *:w-full">
                <span className="text-xs text-zinc-500" aria-label="category name">
                    {product.category}
                </span>
                <Link href="/">
                    <h3
                        className="text-md overflow-hidden font-semibold text-nowrap text-ellipsis text-zinc-700"
                        title={product.title}
                        aria-label="name the product"
                    >
                        {product.title}
                    </h3>
                </Link>
                <span className="text-sm" aria-label="price product">
                    {product.price} EGP
                </span>
                <div className="flex gap-2">
                    <Button className="flex-auto rounded-full">Add To Cart</Button>
                    <Button variant="secondary" className="w-9 rounded-full bg-zinc-300" asChild>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href="/">
                                        <Eye />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>Quick View</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
