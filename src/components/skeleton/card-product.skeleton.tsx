import { Button } from "@components/ui/button.ui";
import { Card, CardContent, CardFooter } from "@components/ui/card.ui";
import { Skeleton } from "@components/ui/skeleton.ui";

export default function CardProductSkeleton() {
    return (
        <Card>
            {/* Product image with link to details page */}
            <CardContent>
                <Skeleton className="h-64" />
            </CardContent>

            <CardFooter className="flex-col justify-start gap-2 *:w-full">
                <Skeleton className="size-sm" />
                <Skeleton className="size-lg" />
                <Skeleton className="size-sm" />
                <div className="flex gap-2">
                    <Button className="flex-auto" asChild>
                        <Skeleton />
                    </Button>
                    <Button variant="secondary" className="overflow w-9" asChild>
                        <Skeleton />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
