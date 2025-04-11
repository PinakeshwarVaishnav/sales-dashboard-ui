"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart2,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Package,
  Settings,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DabangPro from "./dabang-pro";

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Sidebar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "leaderboard", label: "Leaderboard", icon: BarChart2 },
    { id: "order", label: "Order", icon: ShoppingCart },
    { id: "products", label: "Products", icon: Package },
    { id: "sales-report", label: "Sales Report", icon: TrendingUp },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "sign-out", label: "Sign Out", icon: LogOut },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white"
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform",
              isMobileMenuOpen && "rotate-180",
            )}
          />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "flex flex-col fixed inset-y-0 left-0 z-10 w-64 bg-white text-grey transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="p-4 flex items-center gap-2">
          <div className="h-10 w-10 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">D</span>
          </div>
          <span className="text-xl font-bold">Dabang</span>
        </div>

        {/* Menu Items */}
        <nav className="mt-8 px-4 flex-grow overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href="#"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    activeItem === item.id
                      ? "bg-indigo-600 text-white"
                      : "text-grey",
                  )}
                  onClick={() => setActiveItem(item.id)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
            <div className="hidden lg:block">
              <DabangPro />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}
