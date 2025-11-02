"use client";
import { BarChart3, HomeIcon, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserButton } from "@stackframe/stack";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Add Product", href: "/add-product", icon: Plus },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function sidebar() {
  const { state, setOpenMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="relative">
          <SidebarGroupLabel className="gap-3 text-sm mb-5">
            <BarChart3 className="w-9 h-9" /> Inventory App
          </SidebarGroupLabel>{" "}
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const isActive = item.href === pathname;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.name}
                      isActive={isActive}
                      onClick={() => setOpenMobile(false)}
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <p>{item.name}</p>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton
          asChild
          tooltip={"Home"}
          onClick={() => setOpenMobile(false)}
        >
          <Link href={"/"}>
            <HomeIcon />
            <p>Home</p>
          </Link>
        </SidebarMenuButton>

        {state === "expanded" ? <UserButton showUserInfo /> : <UserButton />}
      </SidebarFooter>
    </Sidebar>
  );
}

export default sidebar;
