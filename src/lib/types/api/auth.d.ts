import z from "zod";
import { signupRequestSchema, loginRequestSchema } from "@lib/schema/api/auth.schema";

export = AuthApiTypes;
export as namespace AuthApiTypes;

namespace AuthApiTypes {
    type TUserLoginRequest = z.infer<typeof loginRequestSchema>;

    type TUserSignupRequest = z.infer<typeof signupRequestSchema>;
}
