"use server";
import { cookies } from "next/headers";

export const getTokenFromCookies = async () => {
    return (await cookies()).get("next-auth.session-token")?.value ?? (await cookies()).get("__Secure-next-auth.session-token")?.value;
};
