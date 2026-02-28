"use client";
import { SessionProvider } from "next-auth/react";
import { IBaseProviderProps } from "@lib/types/providers";

export default function NextauthProvider({ children }: Readonly<IBaseProviderProps>) {
    return <SessionProvider>{children}</SessionProvider>;
}
