import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, NavLink } from "react-router";

export function AppSidebar() {
  const activeClass="bg-neutral-200"
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>


          <SidebarGroup>
            <SidebarGroupLabel>STYLE</SidebarGroupLabel>
            <SidebarMenuItem>
              <NavLink to="colors">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : ""}>
                    Colors
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>COMPONENTS</SidebarGroupLabel>
          <SidebarMenuItem>
            <NavLink to="components">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : ""}>
                    Components
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <NavLink to="forms">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : ""}>
                    Forms
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <NavLink to="preview">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : ""}>
                    Preview
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>PAGES</SidebarGroupLabel>
          <SidebarMenuItem>
            <NavLink to="/auth/login">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : ""}>
                   Log In
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <NavLink to="/auth/register">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : ""}>
                    Register
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <NavLink to="/auth/reset-password">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : ""}>
                    Reset Password
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
