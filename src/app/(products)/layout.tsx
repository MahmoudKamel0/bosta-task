import { IBaseLayoutProps } from "@lib/types/layouts";
import FooterLayout from "@components/layouts/footer/index.footer";
import HeaderLayout from "@components/layouts/header/index.header";

export default function ProductsLayout({ children }: Readonly<IBaseLayoutProps>) {
    return (
        <>
            <HeaderLayout />
            {children}
            <FooterLayout />
        </>
    );
}
