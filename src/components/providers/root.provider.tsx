import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IBaseProviderProps } from "@lib/types/providers";
import { Toaster } from "@components/ui/sonner.ui";
import NextauthProvider from "./models/next-auth.provider";
import ReactQueryProviders from "./models/react-query.provider";

/**
 * RootProvider component
 * Provides a root context for the application's children components.
 *
 * @param {Readonly<IBaseProviderProps>} props - The props for the RootProvider, containing React children.
 * @returns {JSX.Element} Rendered children wrapped in a div.
 */
export default function RootProvider({ children }: Readonly<IBaseProviderProps>) {
    return (
        <NextauthProvider>
            <ReactQueryProviders>
                {children}
                <Toaster />
                <ReactQueryDevtools initialIsOpen={false} />
            </ReactQueryProviders>
        </NextauthProvider>
    );
}
