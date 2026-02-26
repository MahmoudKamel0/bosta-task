import type { Metadata } from "next";
import "@styles/globals.style.css";
import { montserrat } from "@fonts/index.font";
import { MAIN_METADATA_APP } from "@lib/seo/main.seo";
import { IBaseLayoutProps } from "@lib/types/layouts";
import { cn } from "@lib/utils/helper/cn.util";
import RootProvider from "@components/providers/root.provider";

export const metadata: Metadata = MAIN_METADATA_APP;

export default function RootLayout({ children }: Readonly<IBaseLayoutProps>) {
    return (
        <html lang="en">
            <body className={cn(montserrat.className, "antialiased")}>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
