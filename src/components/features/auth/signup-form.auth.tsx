"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button.ui";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field.ui";
import { Input } from "@/components/ui/input.ui";
import { cn } from "@/lib/utils/helper/cn.util";
import { signupFormSchema } from "@lib/schema/auth/signup.schema";
import { handlerSignupSubmit } from "@lib/utils/handler/auth.handler";

export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(signupFormSchema),
    });

    return (
        <form onSubmit={handleSubmit(handlerSignupSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Create your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">Fill in the form below to create your account</p>
                </div>

                {/* username */}
                <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input id="username" placeholder="user" {...register("username")} />
                    {errors && <p className="text-bg-red-300 text-xs">{errors.username?.message}</p>}
                </Field>

                {/* email */}
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" placeholder="m@example.com" {...register("email")} />
                    {errors && <p className="text-bg-red-300 text-xs">{errors.email?.message}</p>}
                </Field>

                {/* password */}
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" {...register("password")} />
                    {errors && <p className="text-bg-red-300 text-xs">{errors.password?.message}</p>}
                </Field>

                {/* confirmPassword */}
                <Field>
                    <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                    <Input id="confirm-password" type="password" {...register("confirmPassword")} />
                    {errors && <p className="text-bg-red-300 text-xs">{errors.confirmPassword?.message}</p>}
                </Field>

                {/* submit */}
                <Field>
                    <Button type="submit" disabled={!isValid || isSubmitting}>
                        Create Account
                    </Button>
                </Field>
                <Field>
                    <FieldDescription className="px-6 text-center">
                        Already have an account? <Link href="/auth/login">Sign in</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    );
}
