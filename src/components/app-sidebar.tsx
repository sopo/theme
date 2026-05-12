import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
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
            <Link to="forms">Forms</Link>
          </SidebarMenuItem>

        </SidebarGroup>

           <SidebarGroup>
            <SidebarGroupLabel>
              PAGES
            </SidebarGroupLabel>
            <SidebarMenuItem>
            <Link to="/auth/login">Log in</Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/auth/register">Register </Link>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <Link to="/auth/reset-password">Reset password </Link>
          </SidebarMenuItem>

         
          
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
