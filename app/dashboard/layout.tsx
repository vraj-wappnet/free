"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Start with sidebar collapsed by default
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} pathname={pathname} />
        <main 
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out min-h-[calc(100vh-4rem)]",
            "pt-4 px-4 md:px-6 lg:px-8 pb-8",
            sidebarOpen ? "lg:ml-72" : "lg:ml-16"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}