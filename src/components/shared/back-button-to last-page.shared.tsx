"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@components/ui/button.ui";

export default function BackButtonToLastPage() {
    "use client";
    const router = useRouter();

    return (
        <Button size="lg" variant="outline" className="mt-4" onClick={() => router.back()}>
            <ChevronLeft />
            Go Back
        </Button>
    );
}
