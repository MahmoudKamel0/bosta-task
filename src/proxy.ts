import { NextRequest, NextResponse } from "next/server";
import { getTokenFromCookies } from "@security/get-token-from-cookies";
import { validateProtectedPage } from "@security/is-authenticated.security";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = await getTokenFromCookies();

    if (validateProtectedPage(pathname) && !token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
};
