import { Skeleton } from "@components/ui/skeleton.ui";

export default function FilterDropdownProductSkeleton() {
    return (
        <div className="flex items-center gap-5">
            <Skeleton className="h-8 w-32 rounded-full" />
            <Skeleton className="h-8 w-32 rounded-full" />
        </div>
    );
}
