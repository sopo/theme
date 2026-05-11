import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuItem>
            <Link to="/">Home</Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link to="components">Components</Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="login-form">Log In Form</Link>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
