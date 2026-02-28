import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { signupAction } from "@lib/actions/auth.action";
import { TUserSignupRequest } from "@lib/types/api/auth";
import { TUserBodyDataSignup, TUserDataLogin } from "@lib/types/auth";

export async function handleLogin(data: TUserDataLogin) {
    const result = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
    });

    if (!result?.ok) {
        toast.error("Invalid username or password");
        throw new Error("Invalid username or password");
    }

    toast.success("successfully login");
    redirect("/");

    return result;
}

export const handlerSignupSubmit = async (data: TUserBodyDataSignup) => {
    try {
        const user = handlerDataSignup(data);
        await signupAction(user);

        toast.success("successfully create account");

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        toast.success("failed create account");
    }
};

export const handlerDataSignup = (data: TUserBodyDataSignup) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...reset } = data;
    return {
        ...reset,
        id: Math.ceil(Math.random() * 1000),
    } as TUserSignupRequest;
};
