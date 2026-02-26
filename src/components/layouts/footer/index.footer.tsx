import Link from "next/link";
import { FOOTER_BUTTONS_ITEMS, FOOTER_LIST_MENU_ITEMS } from "@lib/constants/ui/footer.constant";

export default function FooterLayout() {
    return (
        <footer className="px-12 py-32 text-sm">
            <section className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                {/* Brand logo and tagline */}
                <div className="col-span-2 mb-8 lg:mb-0">
                    <h2 className="font-bold" aria-label="logo store">
                        Ecommerce
                    </h2>
                    <p className="mt-4" aria-label="info">
                        Discover the latest trends in fashion with our curated collection of premium products. At Ecommerce, we are
                        dedicated to providing quality, style, and exceptional customer service to help you elevate your wardrobe
                        effortlessly.
                    </p>
                </div>

                {/* Render footer navigation menu sections */}
                {FOOTER_LIST_MENU_ITEMS.map((section, sectionIdx) => (
                    <div key={sectionIdx}>
                        <h3 className="mb-4 font-bold">{section.title}</h3>
                        <ul className="text-muted-foreground space-y-4">
                            {section.links.map((link, linkIdx) => (
                                <li key={linkIdx} className="hover:text-primary font-medium">
                                    <Link href={link.url}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Footer bottom section with copyright and policy links */}
            <section className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
                <p>© 2024 store.com. All rights reserved.</p>
                <ul className="flex gap-4">
                    {FOOTER_BUTTONS_ITEMS.map((link, index) => (
                        <li key={index} className="hover:text-primary underline">
                            <Link href={link.url}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    );
}
