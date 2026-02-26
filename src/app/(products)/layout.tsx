import { IBaseLayoutProps } from "@lib/types/layouts";
import FooterLayout from "@components/layouts/footer/index.footer";

export default function ProductsLayout({ children }: Readonly<IBaseLayoutProps>) {
    return (
        <>
            {children}
            <FooterLayout />
        </>
    );
}
