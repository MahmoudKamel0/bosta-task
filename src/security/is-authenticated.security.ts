export const validateProtectedPage = (pathname: string) => {
    const PROTECTED_ROUTES = ["/dashboard", "/cart"];

    return PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
};
