import { TGetAllProducts, TGetProduct } from "@lib/types/api/products";

export = ProductsTypes;
export as namespace ProductsTypes;

namespace ProductsTypes {
    interface ICardProductProps {
        product: TGetProduct;
    }

    interface IListProductsProps {
        products: TGetAllProducts;
        countPage: number;
    }

    interface PaginationButtonsProductProps {
        countPage: number;
    } 
}