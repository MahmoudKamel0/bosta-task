import z from "zod";
import { signupRequestSchema } from "@lib/schema/api/auth.schema";

export = AuthApiTypes;
export as namespace AuthApiTypes;

namespace AuthApiTypes {
    type TUserSignupRequest = z.infer<typeof signupRequestSchema>;
}
