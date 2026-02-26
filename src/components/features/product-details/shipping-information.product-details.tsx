import { SHIPPING_INFO_PRODUCT_DETAILS } from "@lib/constants/ui/product-details.constant";

/**
 * Renders the Shipping Information section for the Product Details page.
 *
 * This component displays a list of shipping-related details such as discount, package type,
 * delivery time, and estimation using information from the SHIPPING_INFO_PRODUCT_DETAILS constant.
 *
 * @returns {JSX.Element} The shipping information section with icons and descriptions.
 */
export default function ShippingInformationProductDetails() {
    return (
        <section id="shipping">
            {/* Section Heading: Shipping Information */}
            <h2 className="mb-5 font-bold">Shipping</h2>

            {/* Shipping details displayed in a two-column grid */}
            <div className="grid grid-cols-2 gap-8">
                {SHIPPING_INFO_PRODUCT_DETAILS.map((item) => (
                    <div key={item.label} className="item | flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200">
                            <item.icon />
                        </div>

                        <div>
                            <span className="block text-xs">{item.label}</span>
                            <strong className="block">{item.name}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
