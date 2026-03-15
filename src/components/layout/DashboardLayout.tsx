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
          <div className="flex-1 flex flex-col min-w-0">
            <header className="h-12 sm:h-14 flex items-center border-b border-border bg-card/30 backdrop-blur-xl px-3 sm:px-4">
              <SidebarTrigger className="mr-3 sm:mr-4" />
              <span className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">MEGSY AI PARTNER PORTAL</span>
            </header>
            <main className="flex-1 overflow-auto p-3 sm:p-4 lg:p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  );
}
