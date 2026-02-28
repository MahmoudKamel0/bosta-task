import Link from "next/link";
import { Button } from "@components/ui/button.ui";

export default function ButtonsAuthHeader() {
    return (
        <div className="flex items-center gap-4">
            <Button asChild>
                <Link href="/auth/login">login</Link>
            </Button>

            <Button variant="outline" asChild>
                <Link href="/auth/signup">signup</Link>
            </Button>
        </div>
    );
}
