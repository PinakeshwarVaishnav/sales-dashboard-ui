"use client";

import { useState } from "react";
import { ArrowDown, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Sidebar from "@/components/sidebar";
import TodaySales from "@/components/today-sales";
import VisitorInsights from "@/components/visitor-insights";
import TotalRevenue from "@/components/total-revenue";
import CustomerSatisfaction from "@/components/customer-satisfaction";
import TargetVsReality from "@/components/target-vs-reality";
import TopProducts from "@/components/top-products";
import SalesMapping from "@/components/sales-mapping";
import VolumeVsService from "@/components/volume-vs-service";
import DabangPro from "@/components/dabang-pro";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-2xl font-bold text-gray-800 ml-2">
                Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-4 w-4" />
                <Input
                  className="w-64 pl-10 rounded-lg bg-gray-50 border-gray-200"
                  placeholder="Search here..."
                />
              </div>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full">
                    <span className="flex items-center gap-1">
                      <span className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                        🇺🇸
                      </span>
                      <span className="hidden sm:inline">Eng (US)</span>
                      <ArrowDown />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English (US)</DropdownMenuItem>
                  <DropdownMenuItem>Spanish</DropdownMenuItem>
                  <DropdownMenuItem>French</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="relative bg-orange-50 hover:bg-orange-100"
              >
                <Bell className="h-5 w-5 text-orange-300" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-400 rounded-full"></span>
              </Button>

              {/* User Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center overflow-hidden">
                        <img
                          src="/placeholder.svg?height=32&width=32"
                          alt="User avatar"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="hidden md:block text-left">
                        <p className="text-sm font-medium">Musifq</p>
                        <p className="text-xs text-gray-500">Admin</p>
                      </div>
                      <ArrowDown />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 gap-6">
            {/* Today's Sales Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TodaySales />
              </div>

              {/* Visitor Insights */}
              <div>
                <VisitorInsights />
              </div>
            </div>

            {/* Second Row: Revenue, Customer Satisfaction, Target vs Reality */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Total Revenue */}
              <div>
                <TotalRevenue />
              </div>

              {/* Customer Satisfaction */}
              <div>
                <CustomerSatisfaction />
              </div>

              {/* Target vs Reality */}
              <div>
                <TargetVsReality />
              </div>
            </div>

            {/* Third Row: Top Products, Sales Mapping, Volume vs Service */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Top Products */}
              <div>
                <TopProducts />
              </div>

              {/* Sales Mapping by Country */}
              <div>
                <SalesMapping />
              </div>

              {/* Volume vs Service Level */}
              <div>
                <VolumeVsService />
              </div>
            </div>
          </div>

          {/* Dabang Pro Card - Mobile Only */}
          <div className="lg:hidden mt-6">
            <DabangPro />
          </div>
        </main>
      </div>
    </div>
  );
}
