import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { title: "OVERVIEW", url: "/" },
  { title: "REFERRALS", url: "/referrals" },
  { title: "ANALYTICS", url: "/analytics" },
  { title: "PAYOUTS", url: "/payouts" },
  { title: "LEADERBOARD", url: "/leaderboard" },
  { title: "SETTINGS", url: "/settings" },
];

export function AppSidebar() {
  const { state, isMobile, setOpenMobile } = useSidebar();
  const collapsed = state === "collapsed";
  const { signOut } = useAuth();

  const handleNavClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          {!collapsed && (
            <div className="flex items-center gap-2.5 px-3 py-4">
              <img src={logo} alt="Megsy" className="h-8 w-8 rounded-lg" />
              <span className="text-sm font-black text-foreground uppercase tracking-wider">MEGSY PARTNERS</span>
            </div>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center rounded-lg px-3 py-2.5 text-xs font-bold text-muted-foreground transition-all duration-150 hover:bg-accent hover:text-foreground uppercase tracking-wider"
                      activeClassName="bg-primary/10 text-primary"
                      onClick={handleNavClick}
                    >
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3">
        <Button
          variant="ghost"
          className="w-full justify-start text-xs font-bold text-muted-foreground hover:text-destructive uppercase tracking-wider"
          onClick={signOut}
        >
          {!collapsed && <span>SIGN OUT</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
