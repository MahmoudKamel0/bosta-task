import { BadgePercent, Calendar, Package, MapPinHouse } from "lucide-react";

export const SHIPPING_INFO_PRODUCT_DETAILS = [
    {
        icon: BadgePercent,
        label: "Discount",
        name: "Disc 50%",
    },
    {
        icon: Package,
        label: "Package",
        name: "Regular Package",
    },
    {
        icon: Calendar,
        label: "Delivery Time",
        name: "3-4 Working Days",
    },
    {
        icon: MapPinHouse,
        label: "Estimation",
        name: "10 - 12 October2024",
    },
];

export const getDataDropdownProduct = (categories: string[]) => [
    {
        label: "By Price",
        list: ["price hight", "price low"],
    },
    {
        label: "By category",
        list: categories,
    },
];
