import type { ReactNode } from "react";

export = LayoutsTypes;
export as namespace LayoutsTypes;

namespace LayoutsTypes {
    interface IBaseLayoutProps {
        children: ReactNode;
    }
}
