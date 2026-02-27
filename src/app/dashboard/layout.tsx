import { IBaseLayoutProps } from "@lib/types/layouts";
import HeaderDashboard from "@components/features/dashboard/header.dashboard";
import { SidebarDashboard } from "@components/features/dashboard/sidebar.dashboard";
import { SidebarProvider } from "@components/ui/sidebar.ui";

/**
 * DashboardLayout is the main layout component for the dashboard pages.
 *
 * It provides the SidebarProvider context, renders the dashboard sidebar,
 * header, and a main section to display child components.
 *
 * @param {Readonly<IBaseLayoutProps>} props - The layout props containing children.
 * @returns {JSX.Element} The dashboard page layout.
 */
export default function DashboardLayout({ children }: Readonly<IBaseLayoutProps>) {
    return (
        <SidebarProvider>
            <SidebarDashboard />
            <main className="w-full">
                <HeaderDashboard />
                <section className="px-4">{children}</section>
            </main>
        </SidebarProvider>
    );
}
