import type { ReactNode } from "react";

export = ProviderTypes;
export as namespace ProviderTypes;

namespace ProviderTypes {
    interface IBaseProviderProps {
        children: ReactNode
    }
}