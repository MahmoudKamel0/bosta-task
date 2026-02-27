"use client"; // Error boundaries must be Client Components
import { useEffect } from "react";

/**
 * Error boundary component for the products page.
 *
 * @param {Object} props - The component props.
 * @param {Error & { digest?: string }} props.error - The error object caught by the error boundary.
 * @param {() => void} props.reset - Function to reset the error boundary and retry rendering.
 * @returns {JSX.Element} The rendered error page UI.
 */
export default function ErrorProductsPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
    }, [error]);

    return (
        <section className="flex h-screen flex-col items-center justify-center">
            <h1 className="relative text-xl font-bold text-zinc-700">Something went wrong!</h1>
            <button onClick={() => reset()}>Try again</button>
        </section>
    );
}
