import z from "zod";

export const loginResponseSchema = z.object({
    token: z.string(),
});

export const loginRequestSchema = z.object({
    username: z.string(),
    password: z.string(),
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
