import z from "zod";
import { loginFormSchema } from "@lib/schema/auth/login.schema";
import { signupFormSchema } from "@lib/schema/auth/signup.schema";

export = AuthTypes;
export as namespace AuthTypes;

namespace AuthTypes {
    type TUserDataLogin = z.infer<typeof loginFormSchema>;

    type TUserBodyDataSignup = z.infer<typeof signupFormSchema>;
}
