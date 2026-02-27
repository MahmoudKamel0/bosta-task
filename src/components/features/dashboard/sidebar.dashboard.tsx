"use client";
import { SIDEBAR_DATA } from "@lib/constants/ui/dashboard.constant";
import { NavMain } from "@components/features/dashboard/nav-main.dashboard";
import { TeamSwitcher } from "@components/features/dashboard/team-switcher.dashboard";
import { NavUser } from "@components/features/dashboard/user-drop-down.dashboard";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@components/ui/sidebar.ui";

/**
 * SidebarDashboard is the main sidebar component for the dashboard layout.
 * It renders the TeamSwitcher, navigation, user dropdown, and sidebar rail.
 *
 * @param {React.ComponentProps<typeof Sidebar>} props - Props passed down to the Sidebar component.
 * @returns {JSX.Element} The dashboard sidebar UI.
 */
export function SidebarDashboard({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={SIDEBAR_DATA.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={SIDEBAR_DATA.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={SIDEBAR_DATA.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
