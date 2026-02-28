import { IContainerLayoutProps } from "@lib/types/layouts";
import { cn } from "@lib/utils/helper/cn.util";

/**
 * ContainerLayout
 *
 * Wraps its children in a responsive container with customizable className.
 *
 * @param {Readonly<IContainerLayoutProps>} props - Props containing children and an optional className.
 * @returns {JSX.Element} The rendered container with children.
 */
export default function ContainerLayout({ children, className }: Readonly<IContainerLayoutProps>) {
    return <div className={cn("container mx-auto px-10", className)}>{children}</div>;
}
