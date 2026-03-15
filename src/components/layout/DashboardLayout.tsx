import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { AuthGuard } from "./AuthGuard";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <header className="h-14 flex items-center border-b border-border bg-card/50 backdrop-blur-xl px-4">
              <SidebarTrigger className="mr-4" />
              <h2 className="text-sm font-medium text-muted-foreground">Megsy AI Referral Portal</h2>
            </header>
            <main className="flex-1 overflow-auto p-4 lg:p-6">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  );
}
