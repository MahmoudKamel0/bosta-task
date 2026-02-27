import { AudioWaveform, Command, GalleryVerticalEnd, Settings2, SquareTerminal } from "lucide-react";

export const SIDEBAR_DATA = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Products",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "create product",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
};

export const INPUTS = [
    {
        label: "title",
        type: "text",
    },
    {
        label: "price",
        type: "number",
    },
    {
        label: "category",
        type: "text",
    },
    {
        label: "image",
        type: "url",
    },
    {
        label: "description",
        type: "textarea",
    },
];
