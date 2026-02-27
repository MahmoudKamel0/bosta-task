import BackButtonToLastPage from "@components/shared/back-button-to last-page.shared";

/**
 * Not Found page for the products listing route.
 *
 * Shows a message when the requested products page cannot be found.
 *
 * @returns {JSX.Element} The rendered not found page for the products listing.
 */
export default function NotfoundProductsPage() {
    return (
        <section id="notfound-products" className="flex h-screen flex-col items-center justify-center">
            <h1 className="relative text-xl font-bold text-zinc-700">The page you&apos;re looking for could not be found</h1>
            <p className="text-sm text-zinc-500">Please make sure the web address is correct, or try the home page.</p>
            <BackButtonToLastPage />
        </section>
    );
}
