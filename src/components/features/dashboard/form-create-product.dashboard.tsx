"use client";
import type { TCreateProduct } from "@lib/types/api/products";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { createProductAction } from "@lib/actions/create-product.action";
import { getAllCategories } from "@lib/api/categories.api";
import { createProductSchema } from "@lib/schema/api/products.schema";
import { Button } from "@components/ui/button.ui";
import { Input } from "@components/ui/input.ui";
import { Label } from "@components/ui/label.ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select.ui";
import { Spinner } from "@components/ui/spinner.ui";
import { Textarea } from "@components/ui/textarea.ui";

export default function FormCreateProductDashboard() {
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation({
        mutationFn: createProductAction,
        onSuccess: () => {
            toast.success("Product created successfully!");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: () => {
            toast.error("Failed to create product");
        },
    });

    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid, isSubmitting },
    } = useForm<TCreateProduct>({
        defaultValues: {
            id: 0,
            title: "",
            price: 1,
            description: "",
            category: "",
            image: "",
        },
        resolver: zodResolver(createProductSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                await mutateAsync({
                    ...data,
                    // eslint-disable-next-line react-hooks/purity
                    id: Math.floor(Math.random() * 1000),
                    rating: {
                        rate: 0,
                        count: 0,
                    },
                });
            })}
            className="grid w-full grid-cols-2 gap-10 rounded-lg border border-zinc-100 p-10"
        >
            <div className="flex flex-col gap-3">
                <Label className="capitalize">Title</Label>
                <Input {...register("title")} placeholder="enter title product" />
                {errors && <p className="text-xs text-red-400">{errors.title?.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
                <Label className="capitalize">Price</Label>
                <Input {...register("price", { valueAsNumber: true })} placeholder="enter price product" />
                {errors && <p className="text-xs text-red-400">{errors.price?.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
                <Label className="capitalize">Category</Label>
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>

                            <SelectContent>
                                {data?.categories.map((item: string) => (
                                    <SelectItem key={item} value={item} className="text-sm">
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors && <p className="text-xs text-red-400">{errors.category?.message}</p>}
            </div>

            <div className="flex flex-col gap-3">
                <Label className="capitalize">Image</Label>
                <Input type="url" {...register("image")} placeholder="enter image url product" />
                {errors && <p className="text-xs text-red-400">{errors.image?.message}</p>}
            </div>

            <div className="col-span-2 flex flex-col gap-3">
                <Label className="capitalize">Description</Label>
                <Textarea {...register("description")} placeholder="enter description product" />
                {errors && <p className="text-xs text-red-400">{errors.description?.message}</p>}
            </div>

            <Button className="w-fit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? <Spinner /> : "Add Product"}
            </Button>

            <DevTool control={control} />
        </form>
    );
}
