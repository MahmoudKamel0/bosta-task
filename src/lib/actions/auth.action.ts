"use server";
import { postSignupUser } from "@lib/api/auth.api";
import { TUserBodyDataSignup } from "@lib/types/auth";
import { handlerDataSignup } from "@lib/utils/handler/auth.handler";

export async function signupAction(data: TUserBodyDataSignup) {
    const user = handlerDataSignup(data);
    await postSignupUser(user);
}
