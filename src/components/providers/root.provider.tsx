import { IBaseProviderProps } from "@lib/types/providers";

/**
 * RootProvider component
 * Provides a root context for the application's children components.
 *
 * @param {Readonly<IBaseProviderProps>} props - The props for the RootProvider, containing React children.
 * @returns {JSX.Element} Rendered children wrapped in a div.
 */
export default function RootProvider({ children }: Readonly<IBaseProviderProps>) {
    return <div>{children}</div>;
}
