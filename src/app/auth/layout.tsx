import Image from "next/image";
import { IBaseLayoutProps } from "@lib/types/layouts";

export default function AuthLayout({ children }: Readonly<IBaseLayoutProps>) {
    return (
        <div className="item-center flex h-screen">
            <div className="scrollbar-hidden h-full w-full place-content-center overflow-y-auto px-30 py-20 lg:w-1/2">{children}</div>
            <div className="bg-muted relative hidden w-1/2 lg:block">
                <Image
                    src="/images/auth/auth-bg-cover.webp"
                    alt="auth bg cover"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    fill
                />
            </div>
        </div>
    );
}
