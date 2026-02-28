import { signupResponseSchema } from "@lib/schema/api/auth.schema";
import { TUserSignupRequest } from "@lib/types/api/auth";
import { TUserDataLogin } from "@lib/types/auth";

export async function loginUser(data: TUserDataLogin) {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Invalid credentials");

    return response.json();
}

export async function postSignupUser(user: TUserSignupRequest) {
    try {
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Something went wrong during signup. Please try again later.");
    }
}
