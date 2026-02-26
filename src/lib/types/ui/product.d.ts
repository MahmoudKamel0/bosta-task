import { TGetProduct } from "@lib/types/api/products";

export = ProductsTypes;
export as namespace ProductsTypes;

namespace ProductsTypes {
    /** Props for CardProduct component. */
    interface ICardProductProps {
        product: TGetProduct;
    }

    /** Props for ListProducts, including page count and current page. */
    interface IListProductsProps {
        countPage: number;
        pageNumber: number;
    }

    /** Props for pagination buttons in product lists. */
    interface PaginationButtonsProductProps {
        countPage: number;
    }

    /** Props for DetailsProduct, containing the product to display. */
    interface IDetailsProductProps {
        product: TGetProduct;
    }
}
