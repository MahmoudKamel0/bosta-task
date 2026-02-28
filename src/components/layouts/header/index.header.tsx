import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@config/auth.config";
import { NAVBAR_LINKS_PAGES } from "@lib/constants/ui/header.constant";
import ContainerLayout from "../container/index.container";
import ButtonsAuthHeader from "./components/buttons-auth.header";
import UserAvatarHeader from "./components/user-avatar.header";

export default async function HeaderLayout() {
    const session = (await getServerSession(authOptions)) as { user: { username: string } };

    return (
        <header>
            <ContainerLayout>
                <nav className="flex items-center justify-between py-6 text-sm">
                    <span>store.</span>
                    <ul className="flex items-center gap-10">
                        {NAVBAR_LINKS_PAGES.map((item) => (
                            <li key={item.label}>
                                <Link href={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>

                    {session ? <UserAvatarHeader username={session.user.username as string} /> : <ButtonsAuthHeader />}
                </nav>
            </ContainerLayout>
        </header>
    );
}
