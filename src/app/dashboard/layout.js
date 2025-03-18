"use client";

import { AppSidebar } from "@/components/main-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto bg-gray-100">{children}</div>
      </div>
    </SidebarProvider>
  );
}
