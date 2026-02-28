"use client";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ComponentProps } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button.ui";
import { Input } from "@/components/ui/input.ui";
import { cn } from "@/lib/utils/helper/cn.util";
import { loginFormSchema } from "@lib/schema/auth/login.schema";
import { handleLogin } from "@lib/utils/handler/auth.handler";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@components/ui/field.ui";
import { Spinner } from "@components/ui/spinner.ui";

export default function LoginFormAuth({ className, ...props }: ComponentProps<"form">) {
    const {
        register,
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(loginFormSchema),
    });

    return (
        <form onSubmit={handleSubmit(handleLogin)} className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                {/* Render the login form title and (optionally) a logo above the form fields */}
                <header className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Login to your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">Enter your email below to login to your account</p>
                    <p className="text-muted-foreground text-sm text-balance">for quick start email: johnd, pass: m38rmF$</p>
                </header>

                {/* This section is reserved for rendering email validation errors. */}
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="username" placeholder="m@example.com" {...register("username")} />
                </Field>

                {/* password field with "forgot password" link */}
                <Field>
                    <div className="flex items-center">
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Link href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                            Forgot your password?
                        </Link>
                    </div>
                    <Input id="password" type="password" {...register("password")} />
                </Field>

                {/* Submit button for logging in */}
                <Field>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <Spinner /> : "Login"}
                    </Button>
                </Field>

                {/* Show a link to the registration page for users who don't have an account */}
                <Field>
                    <FieldDescription className="text-center">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/signup" className="underline underline-offset-4">
                            Sign up
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>

            <DevTool control={control} />
        </form>
    );
}
