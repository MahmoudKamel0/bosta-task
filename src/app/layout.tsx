import type { Metadata } from "next";
import "@styles/globals.style.css";
import { ReactNode } from "react";
import { montserrat } from "@fonts/index.font";
import { MAIN_METADATA_APP } from "@lib/seo/main.seo";
import { cn } from "@lib/utils/helper/cn.util";

export const metadata: Metadata = MAIN_METADATA_APP;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={cn(montserrat.className, "antialiased")}>{children}</body>
        </html>
    );
}
