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
import {  NavLink } from "react-router";

export function AppSidebar() {
const activeClass = "bg-sidebar-accent"
const defaultClass= ""
  return (
    <Sidebar className="border-none">
      <SidebarHeader />
      <SidebarContent>


          <SidebarGroup>
            <SidebarGroupLabel>STYLE</SidebarGroupLabel>
            <SidebarMenuItem >
              <NavLink to="colors" >
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : defaultClass}>
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
                  <SidebarMenuButton className={isActive ? activeClass : defaultClass}>
                    Components
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <NavLink to="forms">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : defaultClass}>
                    Forms
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <NavLink to="preview">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : defaultClass}>
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
                  <SidebarMenuButton className={isActive ? activeClass : defaultClass}>
                   Log In
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <NavLink to="/auth/register">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : defaultClass}>
                    Register
                  </SidebarMenuButton>
                )}
              </NavLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <NavLink to="/auth/reset-password">
                {({ isActive }) => (
                  <SidebarMenuButton className={isActive ? activeClass : defaultClass}>
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
