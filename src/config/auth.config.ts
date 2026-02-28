import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/lib/api/auth.api";

export const authOptions: NextAuthOptions = {
    pages: {
        newUser: "/auth/signup",
        signIn: "/auth/login",
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",

            credentials: {
                username: {},
                password: {},
            },

            async authorize(credentials): Promise<User | null> {
                if (!credentials) return null;

                try {
                    const data = await loginUser({
                        username: credentials.username,
                        password: credentials.password,
                    });

                    if (!data?.token) return null;

                    return {
                        username: credentials.username,
                        accessToken: data.token,
                    } as User;
                } catch {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                username: token.username,
            };
            return session;
        },
    },
};
