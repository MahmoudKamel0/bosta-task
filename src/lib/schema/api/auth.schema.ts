import z from "zod";

export const loginSchema = z.object({
    username: z.string().min(3, "Username required"),
    password: z.string().min(4, "Password required"),
});

export const signupResponseSchema = z.object({
    id: z.number(),
});

export const signupRequestSchema = z.object({
    id: z.number(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
});
