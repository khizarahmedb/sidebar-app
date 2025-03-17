"use client";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";

import images from "@/utilities/images";
import { useEffect, useState } from "react";
import Link from "next/link";

export function AppSidebar() {
  const [isDashboardSelected, setIsDashboardSelected] = useState(0);
  const [userData, setUserData] = useState(null);

  const menuItems = [
    { title: "Reports", icon: images.reports, url: "/admin/reports" },
    { title: "Deals", icon: images.deals, url: "/admin/deals" },
    { title: "Agents", icon: images.agents, url: "/admin/agents" },
    { title: "Managers", icon: images.managers, url: "/admin/managers" },
    {
      title: "Leads Panel",
      icon: images.leadspanel,
      url: "/admin/leads-panel",
    },
    {
      title: "Agent Portal",
      icon: images.userSquare,
      url: "/admin/agent-portal",
    },
  ];

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <Sidebar>
      <SidebarHeader className="px-4 pt-[32px]">
        <Image src={images.logo} alt="Logo" />
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`${
                    isDashboardSelected === 0 ? "bg-gray-200" : ""
                  }`}
                >
                  <Link
                    href="/admin/dashboard"
                    onClick={() => setIsDashboardSelected(0)}
                  >
                    <div className="flex gap-2 items-center">
                      <Image src={images.dashboard} alt="" />
                      <span className="text-base font-medium">Dashboard</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${
                      isDashboardSelected === index + 1 ? "bg-gray-200" : ""
                    }`}
                  >
                    <Link
                      href={item.url}
                      onClick={() => setIsDashboardSelected(index + 1)}
                    >
                      <div className="flex gap-2 items-center">
                        <Image src={item.icon} alt="" />
                        <span className="text-base font-medium">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/admin/settings" className="flex gap-2 items-center">
                <Image src={images.settings} alt="settings icon" />
                <span className="text-base font-medium">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar>
                    <Image src={images.userSquare} width={40} alt="" />
                  </Avatar>
                  <div className="flex flex-col mx-0 gap-0">
                    <span className="font-medium text-base">
                      {userData?.managerName || ""}
                    </span>
                    <span>{userData?.email || ""}</span>
                  </div>
                  <Link
                    href="/"
                    className="ml-auto hover:bg-gray-200 rounded-lg p-3"
                  >
                    <Image src={images.logout} alt="logout" />
                  </Link>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
