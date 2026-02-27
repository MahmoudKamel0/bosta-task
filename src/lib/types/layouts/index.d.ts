import type { ReactNode } from "react";

export = LayoutsTypes;
export as namespace LayoutsTypes;

namespace LayoutsTypes {
    interface IBaseLayoutProps {
        children: ReactNode;
    }

    interface IContainerLayoutProps extends IBaseLayoutProps {
        className?: string;
    }
}
