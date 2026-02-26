import CardProductSkeleton from "./card-product.skeleton";

export default function ListProductsSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
                <CardProductSkeleton key={index} />
            ))}
        </div>
    );
}
