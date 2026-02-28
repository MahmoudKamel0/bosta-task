"use client";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback } from "@components/ui/avatar.ui";
import { Button } from "@components/ui/button.ui";

export default function UserAvatarHeader({ username }: { username: string }) {
    return (
        <div className="flex items-center gap-3">
            <span>{username}</span>

            <Avatar>
                <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <Button variant="destructive" onClick={() => signOut()}>
                logout
            </Button>
        </div>
    );
}
