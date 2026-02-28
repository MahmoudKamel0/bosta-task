import { loginResponseSchema, signupResponseSchema } from "@lib/schema/api/auth.schema";
import { TUserLoginRequest, TUserSignupRequest } from "@lib/types/api/auth";

export async function postLoginUser(data: TUserLoginRequest) {
    try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.status === 400) {
            throw new Error("Invalid username or password");
        }

        const payload = await response.json();

        return loginResponseSchema.parse(payload);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Something went wrong during signup. Please try again later.");
    }
}

export async function postSignupUser(user: TUserSignupRequest) {
    const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    // Handle the case when the server returns a 400 status indicating invalid input data during account creation
    if (response.status === 400) {
        throw new Error("felid create account");
    }

    const payload = await response.json();
    return signupResponseSchema.parse(payload);
}
