import BackButtonToLastPage from "@components/shared/back-button-to last-page.shared";

/**
 * Not Found page for individual product routes.
 *
 * Displays a user-friendly message when the requested product page cannot be found.
 *
 * @returns {JSX.Element} The rendered not found page.
 */
export default function NotfoundProductPage() {
    return (
        <section id="notfound-product" className="flex h-screen flex-col items-center justify-center">
            <h1 className="relative text-xl font-bold text-zinc-700">The page you&apos;re looking for could not be found</h1>
            <p className="text-sm text-zinc-500">Please make sure the web address is correct, or try the home page.</p>
            <BackButtonToLastPage />
        </section>
    );
}
