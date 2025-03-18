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

import { useEffect, useState } from "react";
import Link from "next/link";
import images from "@/utils/images";

export function AppSidebar() {
  const [isDashboardSelected, setIsDashboardSelected] = useState(0);
  const [userData, setUserData] = useState(null);

  const menuItems = [
    { title: "Dashboard", icon: images.dashboard, url: "" },
    { title: "Menu2", icon: images.dashboard, url: "" },
    { title: "Menu3", icon: images.dashboard, url: "" },
    { title: "Menu4", icon: images.dashboard, url: "" },
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
        <Image src={images.dashboard} alt="Logo" />
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
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
                        <Image src={item.icon} alt="something" />
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
                <Image src={images.dashboard} alt="settings icon" />
                <span className="text-base font-medium">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* <SidebarMenuItem> */}
          {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
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
            </DropdownMenu> */}
          {/* </SidebarMenuItem> */}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
